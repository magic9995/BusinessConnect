import { Text, SearchBar } from "react-native-elements";
import { View } from "react-native";
import React from "react";
import { setStatusBarBackgroundColor } from "expo-status-bar";

export default function AddSeller(){

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      <SearchBar
      lightTheme = {true}
      containerStyle={{
        backgroundColor: "#ffffff",
      }}
      inputStyle={{
        color: "#000000",
      }}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery} /> 
    </View>)
}