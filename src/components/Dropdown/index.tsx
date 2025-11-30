// src/components/Dropdown/index.tsx

import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Controller, UseControllerProps } from "react-hook-form";
import { styles } from "./styles";

type Option = {
    label: string;
    value: string;
};

type Props = {
    label: string;
    formProps: UseControllerProps;
    options: Option[];
};

export function Dropdown({ label, formProps, options }: Props) {
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

                    <View style={styles.group}>
                        <Picker
                            style={styles.picker}
                            selectedValue={value}
                            onValueChange={onChange}
                        >
                            {options.map(opt => (
                                <Picker.Item
                                    key={opt.value} 
                                    label={opt.label}
                                    value={opt.value}
                                />
                            ))}
                        </Picker>
                    </View>
                </View>
            )}
        />
    );
}
