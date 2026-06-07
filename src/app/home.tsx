
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Home() {

  const mostrarInfo = () => {
    Alert.alert(
      "¡Vamos Ecuador!",
      "La Tri representa con orgullo al Ecuador en las competiciones internacionales."
    );
  };

  return (
    <ScrollView style={styles.container}>

      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>
          🇪🇨 Selección Ecuatoriana de Fútbol
        </Text>

        <Text style={styles.subtitle}>
          "La Tri"
        </Text>
      </View>

      {/* Logo */}
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      {/* Descripción */}
      <View style={styles.descriptionCard}>
        <Text style={styles.description}>
          La Selección Ecuatoriana de Fútbol representa al Ecuador
          en las competiciones internacionales organizadas por la FIFA
          y la CONMEBOL. Es uno de los equipos más importantes de
          Sudamérica y ha participado en varias Copas Mundiales.
        </Text>
      </View>

      {/* Datos del equipo */}
      <Text style={styles.sectionTitle}>
        Información General
      </Text>

      <View style={styles.infoCard}>
        <Text style={styles.info}>
          🏆 Confederación: CONMEBOL
        </Text>

        <Text style={styles.info}>
          👨‍🏫 Entrenador: Sebastián Beccacece
        </Text>

        <Text style={styles.info}>
          🏟️ Estadio: Rodrigo Paz Delgado (Quito)
        </Text>

        <Text style={styles.info}>
          ⭐ Apodo: La Tri
        </Text>

        <Text style={styles.info}>
          🌎 País: Ecuador
        </Text>
      </View>

      {/* Botón */}
      <TouchableOpacity
        style={styles.button}
        onPress={mostrarInfo}
      >
        <Text style={styles.buttonText}>
          Conocer más
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    backgroundColor: "#003DA5",
    padding: 25,
    alignItems: "center",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#FFCC00",
    fontSize: 18,
    marginTop: 5,
    fontWeight: "bold",
  },

  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 20,
    resizeMode: "contain",
  },

  descriptionCard: {
    margin: 20,
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 15,
    elevation: 4,
  },

  description: {
    textAlign: "justify",
    fontSize: 15,
    lineHeight: 22,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#003DA5",
    marginLeft: 20,
    marginBottom: 10,
  },

  infoCard: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    elevation: 4,
  },

  info: {
    fontSize: 17,
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#FFCC00",
    margin: 25,
    padding: 15,
    borderRadius: 12,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#003DA5",
  },
});

