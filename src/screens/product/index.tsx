import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { api } from "../../services";
import { IProduct, IUserProduct } from "../../interfaces";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Product() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [user_id, setUser_id] = useState("");
  // const [token, setToken] = useState("");

  // const getUserInfo = async () => {
  //   const getUserId = await AsyncStorage.getItem("@ecommerce:userId");
  //   const getToken = await AsyncStorage.getItem("@ecommerce:userToken");
  //   const userIdParse = JSON.parse(String(getUserId));
  //   const tokenParse = JSON.parse(String(getToken));
  //   setUser_id(userIdParse);
  //   setToken(tokenParse);
  // };

  const productInfo = async () => {
    api
      .get("/product")
      .then((response) => {
        setProducts(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const shoppingCartRegister = async (product_id: string) => {
    const getUserId = await AsyncStorage.getItem("@ecommerce:userId");
    const user_id = JSON.parse(String(getUserId));
    const getToken = await AsyncStorage.getItem("@ecommerce:userToken");
    const token = JSON.parse(String(getToken));
    console.log(token);
    try {
      await api.post(
        `/shoppingcart/register`,
        {
          user_id,
          product_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    productInfo();
    // getUserInfo();
  }, []);

  return (
    <View>
      <Text>Products</Text>
      {products.map((item: IProduct) => {
        return (
          <View style={styles.container} key={item.id}>
            <View style={styles.card}>
              <Image style={styles.picture} source={{ uri: item.image }} />
              <Text style={styles.title}>{item.name}</Text>
              <View style={styles.fieldContainer}>
                <Text style={styles.content}>{item.description}</Text>
              </View>

              <View style={styles.fieldContainer}>
                <Text style={styles.content}>R${item.price}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  shoppingCartRegister(item.id);
                }}
              >
                <Text style={styles.title}>C</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
}
