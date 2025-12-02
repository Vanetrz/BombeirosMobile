import { useContext } from 'react'

import { FormContext } from '../app/context/ContextoFormulario'

export function useFormOcorrencias() {
    const context = useContext(FormContext)
    
    return context;
}