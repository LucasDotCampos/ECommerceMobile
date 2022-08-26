import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { api } from "../../services";
import { styles } from "./styles";
import { useState, useEffect } from "react";
import { IUserProduct } from "../../interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ShoppingCart() {
  const [products, setProducts] = useState<IUserProduct[]>([]);
  const [user_id, setUser_id] = useState("");
  const [token, setToken] = useState("");

  const getUserInfo = async () => {
    const getUserId = await AsyncStorage.getItem("@ecommerce:userId");
    const getToken = await AsyncStorage.getItem("@ecommerce:userToken");
    const userId = JSON.parse(String(getUserId));
    const token = JSON.parse(String(getToken));
    setUser_id(userId);
    setToken(token);

    await api
      .get(`/shoppingcart/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((shoppingcart) => {
        setProducts(shoppingcart.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeProduct = async (user_id: string, product_id: string) => {
    await api
      .delete(`/shoppingcart/deleteone/${user_id}/${product_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getUserInfo())
      .catch((error) => {
        console.log(error);
      });
  };

  const removeAllProducts = async (user_id: string) => {
    await api
      .delete(`/shoppingcart/deleteall/${user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getUserInfo())
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  let sumTotal = 0;
  products.map((item) => {
    sumTotal += Number(item.price) * item.quantity;
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Product</Text>

        {products.map((item: IUserProduct) => {
          return (
            <View>
              <View style={styles.fieldContainer} key={item.id}>
                <Image
                  style={styles.picture}
                  source={{
                    uri: item.image,
                  }}
                />
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.price}</Text>
                <Text style={styles.text}>{item.quantity}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  removeProduct(user_id, item.id);
                  getUserInfo();
                }}
              >
                <Text style={styles.text}>Remover</Text>
              </TouchableOpacity>
            </View>
          );
        })}

        <TouchableOpacity onPress={() => removeAllProducts(user_id)}>
          <Text style={styles.title}>Delete all products</Text>
        </TouchableOpacity>

        <Text>Subtotal: {sumTotal}</Text>
        <Button title="Save cart" />
      </View>
    </View>
  );
}
