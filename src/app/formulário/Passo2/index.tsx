import { View, Text, TextInput } from "react-native"
import { styles } from "./styles"
import { useForm } from "react-hook-form"
import { useRef } from "react"
import { useNavigation } from "@react-navigation/native";

import { Input } from "../../../components/Input"
import { Enviar } from "../../../components/Button/Enviar"

export default function Passo2() {
    const { navigate} = useNavigation();
    const {control, handleSubmit} = useForm();

    function handleNextStep(data: any) {
        navigate("passo3");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                    Descrição
            </Text>

            <View style={styles.form}>

                <Input 
                    // icon="chevron-down"
                    label="Descrição"
                    formProps={{
                        control,
                        name: "descricaoo",
                    }}
                    inputProps={{
                        placeholder: "Descrição",
                    }}
                />
            </View>
            

            <Enviar title="Próximo" onPress={handleSubmit(handleNextStep)} />
        </View>
    );
}