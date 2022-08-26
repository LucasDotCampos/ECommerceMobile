import { Modal, View, Text, TouchableOpacity } from "react-native";

export default function Settings() {
  return (
    <Modal>
      <View>
        <TouchableOpacity>Profile</TouchableOpacity>
        <TouchableOpacity>Sign out</TouchableOpacity>
      </View>
    </Modal>
  );
}
