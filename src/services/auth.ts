// src/services/auth.ts
import { Platform } from "react-native";
import { API_URL } from "./api";

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    // adiciona mais campos se tiver no backend
  };
};

export async function loginRequest(email: string, password: string): Promise<LoginResponse> {
  const deviceId = "bombeiros-device-1"; // depois dá pra gerar algo mais único
  const platform = Platform.OS === "ios" ? "IOS" : "ANDROID";

  const response = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      deviceId,
      platform,
      // pushToken: "...", // se um dia integrarem push
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.log("Erro login:", text);
    throw new Error("Falha no login");
  }

  const data = (await response.json()) as LoginResponse;
  return data;
}
