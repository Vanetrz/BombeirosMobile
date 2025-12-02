import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { View, Text } from "react-native";
import { useLocalizacao } from "../../../hooks/useLocalizacao";
import { useFormOcorrencias } from "../../../hooks/useFormOcorrencias";
import { FormProps } from "../../context/ContextoFormulario";
import * as Location from "expo-location";

import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
// import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import type { RootParamList } from "../../../routes/formulario.routes";

import { Input } from "../../../components/Input";
import { Enviar } from "../../../components/Button/Enviar"

export function Passo2() {
    const { carregando, endereco, coordenadas } = useLocalizacao();
    const { control, handleSubmit, setValue, watch } = useForm<FormProps>();
    const [erroEndereco, setErroEndereco] = useState("");
    const [erroCoords, setErroCoords] = useState("");

    const { updateFormData } = useFormOcorrencias()
    const navigation = useNavigation();

    function handleNextStep(data: FormProps) {
        updateFormData(data)
        navigation.navigate("passo3");
    }

    const end = watch("endereco");
    const lat = watch("latitude");
    const lon = watch("longitude");

    // Preenche automaticamente apenas ao carregar
    useEffect(() => {
        if (endereco) setValue("endereco", endereco);
        if (coordenadas) {
            setValue("latitude", coordenadas.latitude.toString());
            setValue("longitude", coordenadas.longitude.toString());
        }
    }, [endereco, coordenadas]);

    async function confirmarEndereco() {
        if (!end) return;
        setErroEndereco("");

        try {
            const resultado = await Location.geocodeAsync(end);
            if (resultado.length === 0) throw new Error();

            setValue("latitude", resultado[0].latitude.toString());
            setValue("longitude", resultado[0].longitude.toString());
        } catch {
            setErroEndereco("Endereço inválido");
        }
    }

    async function confirmarCoordenadas() {
        if (!lat || !lon) return;

        setErroCoords("");

        const latNum = Number(lat);
        const lonNum = Number(lon);

        if (isNaN(latNum) || isNaN(lonNum)) {
            setErroCoords("Coordenadas inválidas");
            return;
        }

        try {
            const result = await Location.reverseGeocodeAsync({
                latitude: latNum,
                longitude: lonNum,
            });

            if (result.length === 0) throw new Error();

            const r = result[0];
            const texto =
                `${r.street || ""} ${r.name || ""}, ${r.subregion || ""} - ${r.city || ""}, ${r.region || ""}`;

            // Mantém endereço preenchido manualmente, mas só atualiza se vier algo válido
            setValue("endereco", texto.trim());
        } catch {
            setErroCoords("Não foi possível converter para endereço");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Localização</Text>

            <View style={styles.form}>
                
                {/* Endereço */}
                <Input
                    label="Endereço"
                    formProps={{ control, name: "endereco" }}
                    inputProps={{
                        editable: true,
                        placeholder: "Digite o endereço",
                        onSubmitEditing: confirmarEndereco,
                    }}
                />
                {erroEndereco ? <Text style={styles.erro}>{erroEndereco}</Text> : null}

                {/* Latitude */}
                <Input
                    label="Latitude"
                    formProps={{ control, name: "latitude" }}
                    inputProps={{
                        editable: true,
                        onSubmitEditing: confirmarCoordenadas,
                    }}
                />

                {/* Longitude */}
                <Input
                    label="Longitude"
                    formProps={{ control, name: "longitude" }}
                    inputProps={{
                        editable: true,
                        onSubmitEditing: confirmarCoordenadas,
                    }}
                />

                {erroCoords ? <Text style={styles.erro}>{erroCoords}</Text> : null}
            </View>

            <Enviar title="Próximo" onPress={handleSubmit(handleNextStep)} />
        </View>
    );
}
