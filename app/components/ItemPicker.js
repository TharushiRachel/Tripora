import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ItemPicker({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
  label,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <Text style={styles.text}>{selectedItem?.label || placeholder}</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.gray}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="fade">
        <View>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              >
                <Text style={styles.pickertext}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: colors.gray,
    flexDirection: "row",
    width: "80%",
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    color: colors.dark,
    fontSize: 14,
  },
  pickertext: {
    padding: 20,
    color: colors.dark,
    fontSize: 18,
  },
});

export default ItemPicker;
