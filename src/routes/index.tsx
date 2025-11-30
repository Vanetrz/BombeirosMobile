import { NavigationContainer } from "@react-navigation/native"
import { FormularioRoutes } from "./formulario.routes"

export function IndexRoutes() {
    return (
        <NavigationContainer>
            <FormularioRoutes />
        </NavigationContainer>
    );
}