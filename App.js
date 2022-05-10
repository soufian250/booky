import {Button, Text,SafeAreaView,StyleSheet,Alert, Platform, StatusBar } from "react-native";

export default function App() {
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#afbbda",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
  });
  

  const HandleClick = ()=>{
    Alert.alert('Tilte','Message',[
      {text:"Yes", onPress:()=>alert(4)},
      {text:"No", onPress:()=>console.log('No')}
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click me" onPress={ HandleClick}/>
    </SafeAreaView>

  );
}
