import { Text, View, TouchableOpacity, Alert } from "react-native";
import { Schedule } from "../../interfaces/schedule";

import { styles } from "./styles";
import { formatDate, formatHour } from "../../utils/format";

interface CardScheduleProps {
  schedule: Schedule;
  handleDone?: (id: string) => void;
  handleCancel?: (id: string) => void;
}

export function CardSchedule({
  schedule,
  handleDone,
  handleCancel,
}: CardScheduleProps) {
  const showConfirmCancel = (id: string) =>
    Alert.alert("Atenção", "Deseja mesmo cancelar o agendamento?", [
      {
        text: "Não",
        onPress: () => {},
        style: "cancel",
      },
      { text: "Sim", onPress: () => handleCancel(id) },
    ]);

  const showConfirmDone = (id: string) =>
    Alert.alert("Atenção", "Deseja mesmo concluir o agendamento?", [
      {
        text: "Não",
        onPress: () => {},
        style: "cancel",
      },
      { text: "Sim", onPress: () => handleDone(id) },
    ]);

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.line}>
          <Text style={styles.label}>
            Nome: <Text style={styles.info}>{schedule.name}</Text>
          </Text>

          <Text style={styles.label}>
            Lavagem:
            <Text style={styles.info}>{schedule.type.toUpperCase()}</Text>
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>
            Marca: <Text style={styles.info}>{schedule.brand}</Text>
          </Text>
          <Text style={styles.label}>
            Modelo: <Text style={styles.info}>{schedule.model}</Text>
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>
            Data:
            <Text style={styles.info}>{formatDate(schedule.dateIni)}</Text>
          </Text>
          <Text style={styles.label}>
            Hora:
            <Text style={styles.info}>{formatHour(schedule.dateIni)}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => showConfirmCancel(schedule.id)}
        >
          <Text style={styles.label}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => showConfirmDone(schedule.id)}
        >
          <Text style={styles.label}>Concluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
