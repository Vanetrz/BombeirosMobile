import { View, Text, TextInput } from "react-native"
import { styles } from "./styles"
import { useForm } from "react-hook-form"
import { useRef } from "react"

import { Input } from "../../../components/Input"
import { Enviar } from "../../../components/Button/Enviar"

export default function Passo3() {
    const {control, handleSubmit} = useForm();

    function handleNextStep(data: any) {
        console.log(data);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                    Anexos
            </Text>

            <View style={styles.form}>

                <Input 
                    // icon="chevron-down"
                    label="Exemplo"
                    formProps={{
                        control,
                        name: "exemplo",
                    }}
                    inputProps={{
                        placeholder: "Exemplo",
                    }}
                />
            </View>
            
                
            <Enviar title="Próximo" onPress={handleSubmit(handleNextStep)} />
        </View>
    );
}