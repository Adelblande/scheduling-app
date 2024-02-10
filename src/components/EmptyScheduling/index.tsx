import { Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyScheduling() {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Nenhum Agendamento pendente</Text>
    </View>
  );
}
