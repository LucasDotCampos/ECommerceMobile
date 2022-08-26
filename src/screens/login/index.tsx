import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { api } from "../../services";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }: any) {
  const [hideInput, setHideInput] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const failedAlert = (msg: string) => {
    Alert.alert("Falha", msg),
      [
        {
          text: "OK",
          style: "default",
        },
      ];
  };

  const onHandleForm = () => {
    try {
      const payload = {
        name,
        password,
      };
      api.post("/user/login", payload).then((response) => {
        AsyncStorage.setItem(
          "@ecommerce:userToken",
          JSON.stringify(response.data.token)
        );
        AsyncStorage.setItem(
          "@ecommerce:userId",
          JSON.stringify(response.data.user.id)
        );
      });
      navigation.navigate("Home");
    } catch (err: any) {
      return failedAlert("Falha ao tentar fazer login");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        secureTextEntry={hideInput}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={() => {
          hideInput ? setHideInput(false) : setHideInput(true);
        }}
      >
        <Ionicons name="eye" color="#fff" size={25} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onHandleForm}>
        <Text style={styles.text}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}
