import React, { Fragment, useContext, useEffect, useState } from "react";
// import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import { ToastContainer, toast } from "react-toastify";
// import charity information

const listings = [
  {
    id: 1,
    title: "Meditation",
    description: "Meditation",
    uri: "www.google.com",
  },
  {
    id: 2,
    title: "Yoga",
    description: "Yoga",
    uri: "www.google.com",
  },
  {
    id: 3,
    title: "Yoga",
    description: "Yoga",
    uri: "www.google.com",
  },
  {
    id: 4,
    title: "Guided Miditation",
    description: "Guided Miditation",
    uri: "www.google.com",
  },
];

const Charity = () => {
  const [selectedCharity, setSelectedCharity] = useState();

  useEffect(() => {
    // get charities
  }, []);

  return (
    <View style={styles.section}>
      <Text style={styles.titleText}>Donate to Charity ?</Text>

      <Picker
        style={styles.textInputView}
        selectedValue={selectedCharity}
        onValueChange={(itemValue, itemIndex) => setSelectedCharity(itemValue)}
      >
        {listings &&
          listings.map((item, index) => {
            return <Picker.Item label={item} value={index} key={index} />;
          })}
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
