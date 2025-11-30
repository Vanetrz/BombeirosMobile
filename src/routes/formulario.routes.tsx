import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Passo1 from "../app/formulário/Passo1";
import Passo2 from "../app/formulário/Passo2";
import Passo3 from "../app/formulário/Passo3";

export type RootParamList = {
    passo1: undefined;
    passo2: undefined;
    passo3: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootParamList>();

export function FormularioRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="passo1" component={Passo1} />
            <Screen name="passo2" component={Passo2} />
            <Screen name="passo3" component={Passo3} />
        </Navigator>
    );
}