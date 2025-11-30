import { forwardRef } from "react"
import { View, Text, TextInput, TextInputProps } from "react-native"
import { Feather } from "@expo/vector-icons"
import { Controller, UseControllerProps } from "react-hook-form"

import { styles } from './styles';

type Props = {
    // icon: keyof typeof Feather.glyphMap;
    // error: string;
    label: string;
    formProps: UseControllerProps;
    inputProps: TextInputProps;
}

const Input = forwardRef<TextInput, Props>(({ label, formProps, inputProps }, ref) => {
    const isMultiline = inputProps.multiline || false;

    return (
        <Controller
            {...formProps}
            render={({ field: { onChange, value } }) => (
                <View style={styles.container}>
                    {label && (
                        <Text style={styles.label}>
                            {label}
                        </Text>
                    )}

                    <View style={[styles.group,
                        isMultiline && {
                                height: undefined,   // remove altura fixa
                                minHeight: 120,      // altura da caixa
                                alignItems: "flex-start",
                            }
                    ]}>
                        {/* Ícone (se quiser usar de novo) */}
                        {/* 
                        {icon && (
                            <View style={styles.icon}>
                                <Feather name={icon} size={22} color="black" />
                            </View>
                        )}
                        */}

                        <TextInput
                            ref={ref}
                            style={styles.input}
                            value={value}
                            onChangeText={onChange}
                            {...inputProps}
                        />
                    </View>

                    {/* { error.length > 0 &&
                        <Text style={styles.erro}>
                            {error}
                        </Text>
                    } */}
                </View>
            )}
        />
    );
});

export { Input };