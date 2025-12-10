import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Passo1 } from "../app/Formulario/Passo1";
import { Passo2 } from "../app/Formulario/Passo2";
import { Passo3 } from "../app/Formulario/Passo3";
import { Passo4 } from "../app/Formulario/Passo4";

const { Navigator, Screen } = createNativeStackNavigator();

export default function FormularioRoutes() {
    return (
        <Navigator initialRouteName="passo1" screenOptions={{ headerShown: false }}>
            <Screen name="passo1" component={Passo1} />
            <Screen name="passo2" component={Passo2} />
            <Screen name="passo3" component={Passo3} />
            <Screen name="passo4" component={Passo4} />
        </Navigator>
    );
}