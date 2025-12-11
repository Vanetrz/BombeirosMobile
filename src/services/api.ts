import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const getBaseURL = () => {
  if (__DEV__) {
    if (Platform.OS === 'android') return 'http://10.0.2.2:3000';
    if (Platform.OS === 'ios') return 'http://localhost:3000';
    return 'http://192.168.0.11:3000'; 
  }
  return 'https://localhost:5000';
};

export const API_URL = getBaseURL();

const TOKEN_KEY = '@Auth:accessToken';
const REFRESH_TOKEN_KEY = '@Auth:refreshToken';
const USER_KEY = '@Auth:user';

export const api = async (endpoint: string, options: RequestInit = {}) => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (response.status === 401 && token) {
    const newToken = await refreshToken();
    if (newToken) {
      headers['Authorization'] = `Bearer ${newToken}`;
      return fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
      });
    } else {
      await logout();
      throw new Error('Sessão expirada');
    }
  }

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Erro na requisição');
  }

  return response.json();
};

export const refreshToken = async (): Promise<string | null> => {
  try {
    const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
    if (!refreshToken) return null;

    const response = await fetch(`${API_URL}/api/v1/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error('Refresh token inválido');
    }

    const data = await response.json();
    await AsyncStorage.setItem(TOKEN_KEY, data.accessToken);
    return data.accessToken;
  } catch (error) {
    console.error('Erro ao refresh token:', error);
    return null;
  }
};

export const logout = async () => {
  await AsyncStorage.multiRemove([TOKEN_KEY, REFRESH_TOKEN_KEY, USER_KEY]);
};

export const isAuthenticated = async (): Promise<boolean> => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return !!token;
};

export const getCurrentUser = async () => {
  const userStr = await AsyncStorage.getItem(USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
};