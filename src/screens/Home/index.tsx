import { View, Text, TouchableOpacity } from "react-native";
import Product from "../product";
import { styles } from "./styles";

export default function Home({ navigation }) {
  const redirectToRoute = (route: string) => {
    navigation.navigate(route);
  };
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => redirectToRoute("ShoppingCart")}>
          <Text style={styles.text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => redirectToRoute("Login")}>
          <Text style={styles.text}>L</Text>
        </TouchableOpacity>
      </View>

      <Product />
    </View>
  );
}
