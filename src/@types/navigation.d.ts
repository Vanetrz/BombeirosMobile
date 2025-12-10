import { NativeStackScreenProps } from "@react-navigation/native-stack";

// TIPOS DE PERFIL
export type UserProfile =
    | "Administrador"
    | "Chefe"
    | "Operador"
    | "Convidado";

// DRAWER (MENU)
export type DrawerParamList = {
    MainFlow: undefined;
};

// STACK PRINCIPAL 
export type RootStackParamList = {
    Login: undefined;
    Home: { profile: UserProfile } | undefined;
    ForgotPassword: undefined;
    Formulario: undefined;

    passo1?: undefined;
    passo2?: undefined;
    passo3?: undefined;
    passo4?: undefined;
};

// TIPAGEM GLOBAL — AQUI É ONDE TUDO SE JUNTA
declare global {
    namespace ReactNavigation {
        interface RootParamList
        extends RootStackParamList,
            DrawerParamList {}
    }
}

// PROPS DAS TELAS
export type LoginScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "Login"
>;

export type HomeScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "Home"
>;

export type ForgotPasswordScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "ForgotPassword"
>;

// export type MyOccurrencesScreenProps = NativeStackScreenProps<
//     RootStackParamList,
//     "MyOccurrences"
// >;
