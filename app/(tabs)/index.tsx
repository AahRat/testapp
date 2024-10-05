import { Image, StyleSheet, Platform, Text, View, TextInput, Button, Alert, TextComponent } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function HomeScreen() {

  const [link, setLink] = useState()
  const [keyword, setkeyWord] = useState()
  async function searchImage() {
    let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=wZUBtz9mhQfJCn3d6VnZ3ftfr1f67ABxNTi61vMnSWc`)
    let data = await response.json()
    try{
      setLink(data.results[0].urls.regular)

    }
    catch{
      alert("No Image Found")
    }
    //Alert.alert("Response", data.total.toString())
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}> Image Search </Text>
      <TextInput onSubmitEditing={searchImage} onChange={function (e) { setkeyWord(e.target.value);
        console.log(keyword)
       }} value={keyword} style={{ color: "gray", borderWidth: 2, borderColor: "black", borderStyle: "solid", width: "80%", padding: 10, fontSize: 20, borderRadius: 15 }} placeholder='enter keyword' />
      <TouchableOpacity style={{ width: "80%", borderRadius: 15 }} onPress={searchImage}>
        <Text style={{ color: "#0077b6", backgroundColor: "#90e0ef", width: "100%", padding: 10, fontSize: 20, borderRadius: 15, textAlign: "center" }}> Search </Text></TouchableOpacity>
      <Image source={{ uri: link }} style={{ height: 400, width: "100%", borderRadius: 15 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container:{backgroundColor: "#caf0f8", flex: 1, alignItems: "center", justifyContent: "space-between" },

  heading:{fontSize: 30, fontWeight: "bold", textAlign: "center", padding: 20, color: "#03045e"}
});
