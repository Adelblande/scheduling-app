import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "expo-router";
import Moment from "moment";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { z } from "zod";

import { CustomCalendar } from "../../components/CustomCalendar";
import { HeaderSchedules } from "../../components/HeaderSchedules";
import { Input } from "../../components/Input";
import { useSchedules } from "../../hooks/schedules";
import { Schedule } from "../../interfaces/schedule";
import { useSchedulingStore } from "../../store/scheduling";
import { getDateEnd } from "../../utils/getDateEnd";
import { verifyHasPlate } from "../../utils/verifyHasPlate";

const schema = z.object({
  name: z
    .string({ required_error: "Preencha o nome." })
    .trim()
    .min(2, { message: "Tamanho minimo de 2 caracteres." }),
  brand: z
    .string({ required_error: "Preencha a marca." })
    .trim()
    .min(1, { message: "Preencha a marca." }),
  model: z
    .string({ required_error: "Preencha o modelo." })
    .trim()
    .min(1, { message: "Preencha o modelo." }),
  plate: z
    .string({ required_error: "Preencha a placa." })
    .toUpperCase()
    .trim()
    .min(7, { message: "Placa invalida." })
    .max(7, { message: "Placa invalida." })
    .regex(/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/, {
      message: "Placa deve ser no formato mercosul.",
    })
    .toUpperCase(),
  date: z.string({
    required_error: "Selecione a data.",
    invalid_type_error: "Data inválida.",
  }),
  timeIni: z.string({
    required_error: "Selecione a hora.",
    invalid_type_error: "Hora inválida.",
  }),
  type: z.enum(["simples", "completa"], {
    required_error: "Preencha o tipo de lavagem como simples ou completa",
    description: "Tipo de lavagem deve ser simples ou completa",
  }),
});

export type NewScheduleProps = z.infer<typeof schema>;

export default function NewSchedule() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const { createScheduling } = useSchedules();
  const { addScheduling, schedules } = useSchedulingStore();

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<NewScheduleProps>({
    resolver: zodResolver(schema),
  });

  const showAlert = (msg: string) =>
    Alert.alert("Atenção", msg, [
      {
        text: "Ok",
        onPress: () => {},
        style: "cancel",
      },
    ]);

  async function handleSend(data: NewScheduleProps) {
    const dateIni = new Date(`${data.date}T${data.timeIni}`);
    const dateTemp = new Date(`${data.date}T${data.timeIni}`);
    const dateEnd = getDateEnd(data.type, dateTemp);

    const newData: Schedule = {
      name: data.name,
      brand: data.brand,
      model: data.model,
      plate: data.plate,
      type: data.type,
      status: "pending",
      dateIni,
      dateEnd,
    };

    const schedulingsOfDay = schedules.filter((schedule) => {
      return Moment(schedule.dateIni).format("YYYY-MM-DD") === data.date;
    });

    const schedulingsOfHour = schedulingsOfDay.filter((schedule) => {
      return (
        Moment(dateIni).isBetween(schedule.dateIni, schedule.dateEnd) ||
        Moment(dateEnd).isBetween(schedule.dateIni, schedule.dateEnd) ||
        (Moment(dateIni).isSameOrAfter(schedule.dateIni) &&
          Moment(dateIni).isBefore(schedule.dateEnd))
      );
    });

    if (schedulingsOfHour.length > 0) {
      return showAlert("Horario indisponivel.");
    }

    const hasSchedule = verifyHasPlate(newData.plate, schedules);
    if (hasSchedule) {
      return showAlert("Esse veiculo já esta agendado.");
    }

    const created = await createScheduling(newData);
    if (created.id) {
      addScheduling(created);
      reset();
      navigation.goBack();
    }
  }

  function showDatePicker() {
    setIsDatePickerOpen(true);
  }

  function showTimePicker() {
    setIsTimePickerOpen(true);
  }

  const datePickerHandler = (selectedDate: any) => {
    setIsDatePickerOpen(false);
    setSelected(selectedDate.dateString);
    const dateSelected = new Date(selectedDate.dateString);

    if (dateSelected.getDay() === 5 || dateSelected.getDay() === 6) {
      return setValue("date", null);
    }

    setValue("date", selectedDate.dateString);
  };

  const timePickerHandler = (event, selectedDate: Date) => {
    const hour = selectedDate.toLocaleTimeString("pt-BR");
    if (hour >= "12:00:00" && hour <= "13:00:00") {
      setValue("timeIni", null);
      setIsTimePickerOpen(false);
      return showAlert("O horário de almoço é das 12:00 ás 13:00.");
    }

    if (hour < "10:00:00" || hour > "18:00:00") {
      setValue("timeIni", null);
      setIsTimePickerOpen(false);
      return showAlert(
        "Horário para agendamento é das 10:00 às 12:00 e 13:00 às 18:00."
      );
    }

    setIsTimePickerOpen(false);
    setValue("timeIni", selectedDate.toLocaleTimeString("pt-BR"));
  };

  return (
    <ScrollView>
      <HeaderSchedules />
      <View style={styles.container}>
        <Text style={styles.title}>Agendamento</Text>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input placeholder="Nome" onChangeText={onChange} value={value} />
          )}
        />
        {errors.name?.message && (
          <Text style={styles.msgError}>{errors.name?.message}</Text>
        )}

        <Controller
          control={control}
          name="brand"
          render={({ field: { onChange, value } }) => (
            <Input placeholder="Marca" onChangeText={onChange} value={value} />
          )}
        />
        {errors.brand?.message && (
          <Text style={styles.msgError}>{errors.brand?.message}</Text>
        )}

        <Controller
          control={control}
          name="model"
          render={({ field: { onChange, value } }) => (
            <Input placeholder="Modelo" onChangeText={onChange} value={value} />
          )}
        />
        {errors.model?.message && (
          <Text style={styles.msgError}>{errors.model?.message}</Text>
        )}

        <Controller
          control={control}
          name="plate"
          render={({ field: { onChange, value } }) => (
            <Input placeholder="Placa" onChangeText={onChange} value={value} />
          )}
        />
        {errors.plate?.message && (
          <Text style={styles.msgError}>{errors.plate?.message}</Text>
        )}

        <Controller
          control={control}
          name="date"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Selecione a data"
              onTouchStart={showDatePicker}
              onChange={onChange}
              value={value}
            />
          )}
        />
        {errors.date?.message && (
          <Text style={styles.msgError}>{errors.date?.message}</Text>
        )}

        {isDatePickerOpen && (
          <CustomCalendar
            onDayPress={(day) => datePickerHandler(day)}
            selected={selected}
          />
        )}

        <Controller
          control={control}
          name="timeIni"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Selecione a hora"
              onTouchStart={showTimePicker}
              onChange={onChange}
              value={value}
            />
          )}
        />
        {errors.timeIni?.message && (
          <Text style={styles.msgError}>{errors.timeIni?.message}</Text>
        )}
        {isTimePickerOpen && (
          <DatePicker
            value={new Date()}
            mode="time"
            display="spinner"
            is24Hour
            minuteInterval={5}
            onChange={(event, value) => {
              timePickerHandler(event, value);
            }}
          />
        )}

        <Controller
          control={control}
          name="type"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Tipo da lavagem"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.type?.message && (
          <Text style={styles.msgError}>{errors.type?.message}</Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleSend)}
        >
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
    gap: 10,
  },
  title: {
    fontFamily: "Inter_900Black",
    fontSize: 18,
    marginBottom: 20,
  },
  textButton: {
    fontFamily: "Inter_900Black",
    fontSize: 18,
    color: "#fff",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 40,
    backgroundColor: "#6b299a",
    borderRadius: 4,
    marginBottom: 10,
  },
  msgError: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    textAlign: "left",
    color: "#ff0090",
    width: 300,
  },
});
