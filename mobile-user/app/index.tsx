"use client"

import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function Welcome() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>📍</Text>
        </View>

        <Text style={styles.title}>App Urbana Reporta</Text>
        <Text style={styles.subtitle}>Reporta problemas urbanos y ayuda a mejorar tu ciudad</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push("/login")}>
            <Text style={styles.buttonPrimaryText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push("/register")}>
            <Text style={styles.buttonSecondaryText}>Registrarse</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.credentialsText}>
          Credenciales de prueba:{"\n"}
          Email: usuario@urbana.com{"\n"}
          Password: usuario123
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16a34a",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  icon: {
    fontSize: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    opacity: 0.9,
    marginBottom: 48,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
  },
  buttonPrimary: {
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonPrimaryText: {
    color: "#16a34a",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  buttonSecondaryText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  credentialsText: {
    marginTop: 32,
    fontSize: 12,
    color: "#ffffff",
    textAlign: "center",
    opacity: 0.8,
  },
})
