import { View, Text, Image, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {

  useEffect(() => {
    setTimeout(() => {
      router.replace("/home");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>
        Selección Ecuatoriana
      </Text>

      <Text style={styles.subtitle}>
        La Tri 🇪🇨
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#FFD700"
  },
  logo:{
    width:200,
    height:200,
    resizeMode:"contain"
  },
  title:{
    fontSize:28,
    fontWeight:"bold",
    marginTop:20
  },
  subtitle:{
    fontSize:18
  }
});