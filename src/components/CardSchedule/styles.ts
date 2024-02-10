import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: 180,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "#ff0090",
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
  },
  containerInfo: {
    display: "flex",
  },
  line: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: "Inter_900Black",
    color: "#fff",
  },
  info: {
    fontFamily: "Inter_400Regular",
    fontSize: 18,
    fontStyle: "italic",
    color: "#fff",
  },
  button: {
    width: 120,
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6b299a",
    color: "#fff",
    borderRadius: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
