import React, { Fragment, useContext, useEffect, useState } from "react";
// import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import { ToastContainer, toast } from "react-toastify";
// import charity information

const Charity = () => {
  const [selectedCharity, setSelectedCharity] = useState();

  useEffect(() => {}, []);

  return (
    <View style={styles.section}>
      <Text style={styles.titleText}>Donate to Charity ? $4</Text>

      <Picker
        style={styles.textInputView}
        selectedValue={selectedCharity}
        onValueChange={(itemValue, itemIndex) => setSelectedCharity(itemValue)}
      >
        <Picker.Item
          label="Elizabeth Glaser Pediatric AIDS Foundation"
          value="Elizabeth Glaser Pediatric AIDS Foundation"
        />
        <Picker.Item
          label="Children's Defense Fund"
          value="Children's Defense Fund"
        />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 10,
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
  },
  titleText: {
    fontSize: 17,
    color: "#a8dadc",
    letterSpacing: 1.5,
    fontWeight: "700",
    marginVertical: 3,
  },
  textInputView: {
    flexDirection: "row",
    padding: 5,
    borderWidth: 0.5,
    color: "gray",
    borderRadius: 5,
  },
  textInput: {
    fontSize: 20,
  },
});

export default Charity;
