import { FormProvider } from './src/app/context/ContextoFormulario';
import AppNavigator from './src/routes/AppNavigator';

export default function App() {
    return (
        <FormProvider>
            <AppNavigator />
        </FormProvider>
    )
}