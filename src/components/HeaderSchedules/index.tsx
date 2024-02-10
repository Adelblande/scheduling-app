import { Image, View } from "react-native";
import imgHeader from "../../../assets/img-header.jpg";

import { styles } from "./styles";

export function HeaderSchedules() {
  return (
    <View style={styles.container}>
      <Image source={imgHeader} />
    </View>
  );
}
