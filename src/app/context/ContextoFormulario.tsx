import { createContext, ReactNode, useState } from 'react';

export type FormProps = {
    categoria?: string;
    data?: string;
    hora?: string;
    equipe?: string;
    viatura?: string;
    descricao?: string;
    endereco?: string;
    latitude?: string;
    longitude?: string;
    assinatura?: string;
    fotos?: string[];
}

type ContextoformDataProps = {
    formData: FormProps;
    updateFormData: (value: Partial<FormProps>) => void;
}

type FromProviderProps = {
    children: ReactNode;
}

const FormContext = createContext<ContextoformDataProps>({} as ContextoformDataProps)


function FormProvider({ children }: FromProviderProps) {
    const [formData, setFormData] = useState<FormProps>({})

    function updateFormData(data: FormProps) {
        setFormData((prevState) => ({ ...prevState, ...data }));
    }

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider };

