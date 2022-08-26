import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Login from "../screens/login";
import Product from "../screens/product";
import ShoppingCart from "../screens/shoppingCart";

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Login" component={Login} />
        <Screen name="Product" component={Product} />
        <Screen name="ShoppingCart" component={ShoppingCart} />
      </Navigator>
    </NavigationContainer>
  );
}
