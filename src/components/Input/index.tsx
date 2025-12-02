import { forwardRef } from "react"
import { View, Text, TextInput, TextInputProps } from "react-native"
import { Controller, UseControllerProps } from "react-hook-form"

import { styles } from './styles';

type Props = {
    label: string;
    formProps: UseControllerProps;
    inputProps?: TextInputProps;
}

const Input = forwardRef<TextInput, Props>(({ label, formProps, inputProps }, ref) => {
    const isMultiline = inputProps?.multiline || false;

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

                    <View style={[
                        styles.group,
                        isMultiline && {
                            height: undefined,
                            minHeight: 120,
                            alignItems: "flex-start",
                        },
                    ]}>
                        <TextInput
                            ref={ref}
                            style={styles.input}
                            value={value}
                            onChangeText={onChange}
                            {...(inputProps || {})}   // <-- evita erro
                        />
                    </View>
                </View>
            )}
        />
    );
});

export { Input };
