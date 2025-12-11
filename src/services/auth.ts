import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeviceInfo from "react-native-device-info";
import { api, API_URL } from "./api";

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: 'OPERADOR' | 'CHEFE' | 'ADMIN';
  };
};

export type UserProfile = 'Operador' | 'Chefe' | 'Administrador';

const roleToProfile = (role: string): UserProfile => {
  switch (role) {
    case 'ADMIN': return 'Administrador';
    case 'CHEFE': return 'Chefe';
    case 'OPERADOR': return 'Operador';
    default: return 'Operador';
  }
};

export async function loginRequest(email: string, password: string): Promise<LoginResponse> {
  try {
    const deviceId = await DeviceInfo.getUniqueId();
    const platform = Platform.OS === "ios" ? "IOS" : "ANDROID";

    const response = await fetch(`${API_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        deviceId,
        platform,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Falha no login");
    }

    const data: LoginResponse = await response.json();
    
    await AsyncStorage.setItem('@Auth:accessToken', data.accessToken);
    await AsyncStorage.setItem('@Auth:refreshToken', data.refreshToken);
    await AsyncStorage.setItem('@Auth:user', JSON.stringify(data.user));
    
    return data;
  } catch (error: any) {
    console.error("Erro no login:", error);
    throw new Error(error.message || "Erro de conexão com o servidor");
  }
}

export type OcorrenciaData = {
  tipo: string;
  dataHora: string;
  viatura?: string;
  equipe?: string;
  descricao?: string;
  clientGeneratedId?: string;
};

export async function criarOcorrencia(data: OcorrenciaData) {
  return api('/api/v1/ocorrencias', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function adicionarGeo(
  ocorrenciaId: string, 
  lat: number, 
  lon: number, 
  accuracy?: number
) {
  return api(`/api/v1/ocorrencias/${ocorrenciaId}/geo`, {
    method: 'POST',
    body: JSON.stringify({ lat, lon, accuracy }),
  });
}

export async function listarOcorrencias(params?: {
  status?: string;
  dateFrom?: string;
  dateTo?: string;
  cursor?: string;
  limit?: number;
}) {
  const query = new URLSearchParams();
  if (params?.status) query.append('status', params.status);
  if (params?.dateFrom) query.append('dateFrom', params.dateFrom);
  if (params?.dateTo) query.append('dateTo', params.dateTo);
  if (params?.cursor) query.append('cursor', params.cursor);
  if (params?.limit) query.append('limit', params.limit.toString());
  
  return api(`/api/v1/ocorrencias?${query.toString()}`);
}

export async function buscarOcorrencia(id: string) {
  return api(`/api/v1/ocorrencias/${id}`);
}