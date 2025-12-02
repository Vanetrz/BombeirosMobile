import { IndexRoutes } from './src/routes/formulario-routes';
import { FormProvider } from './src/app/context/ContextoFormulario';

export default function App() {
    return (
        <FormProvider>
            <IndexRoutes/>
        </FormProvider>
    )
}