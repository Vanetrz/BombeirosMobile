import { useEffect, useState } from "react";
import * as Location from "expo-location";

export function useLocalizacao() {
    const [carregando, setCarregando] = useState(true);
    const [coordenadas, setCoordenadas] = useState<{ latitude: number; longitude: number } | null>(null);
    const [endereco, setEndereco] = useState("");

    useEffect(() => {
        async function obterLocalizacao() {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    setEndereco("Permissão negada");
                    setCarregando(false);
                    return;
            }

            const local = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Highest,
        });

        const { latitude, longitude } = local.coords;
        setCoordenadas({ latitude, longitude });

        const resp = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await resp.json();

        setEndereco(data.display_name);
        } catch (e) {
        setEndereco("Erro ao obter localização");
        } finally {
        setCarregando(false);
        }
    }

    obterLocalizacao();
    }, []);

    return { carregando, coordenadas, endereco };
}
