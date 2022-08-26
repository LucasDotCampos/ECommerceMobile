import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,24,28,1)",
    borderColor: "black",
    paddingHorizontal: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    margin: 5,
    fontSize: 15,
    color: "#000",
  },
  inputStyle: {
    width: 200,
    height: 32,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  button: {
    width: 80,
    height: 30,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    alignContent: "center",
    justifyContent: "center",
  },
  eyeIcon: {
    alignSelf: "flex-end",
  },
});
