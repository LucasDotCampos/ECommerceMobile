import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,24,28,1)",
    borderColor: "black",
    paddingHorizontal: 70,
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderWidth: 2,
    fontSize: 16,
    borderRadius: 6,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 27,
    marginBottom: 10,
  },
  title: {
    alignSelf: "center",
    margin: 5,
    fontSize: 20,
    color: "#fff",
  },
  picture: {
    alignSelf: "center",
    justifyContent: "center",
    height: 130,
    width: 100,
    borderRadius: 6,
  },
  name: {
    margin: 5,
    fontSize: 15,
    color: "#fff",
  },
  fieldContainer: {
    fontSize: 5,
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    margin: 5,
    fontSize: 15,
    color: "#fff",
    justifyContent: "space-between",
  },
  text: {
    alignSelf: "center",
    margin: 5,
    fontSize: 20,
    color: "#fff",
  },
});
