import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import Button from "../Button/Nsei";

type Props = {
  value: string[]; // lista de URIs selecionadas
  onChange: (list: string[]) => void;
};

export default function MediaPicker({ value, onChange }: Props) {
  const pick = async () => {
    // Pede permissão se necessário
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (perm.status !== "granted") return;

    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.7,
    });

    if (!res.canceled) {
      const uris = res.assets.map((a) => a.uri);
      onChange([...(value || []), ...uris]);
    }
  };

  return (
    <View>
      <Button title="Selecionar mídia" variant="ghost" onPress={pick} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 8 }}
      >
        {(value || []).map((uri, idx) => (
          <Image
            key={`${uri}-${idx}`}
            source={{ uri }}
            style={{ width: 80, height: 80, borderRadius: 8, marginRight: 8 }}
          />
        ))}
      </ScrollView>
    </View>
  );
}
