import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Link } from "expo-router"
import { MapPin, Shield } from "lucide-react-native"

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MapPin size={48} color="#16a34a" />
        <Text style={styles.title}>Urbana Reporta</Text>
        <Text style={styles.subtitle}>Tu voz para mejorar la ciudad</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          Reporta problemas urbanos y ayuda a construir ciudades más sostenibles alineadas con los Objetivos de
          Desarrollo Sostenible
        </Text>

        <View style={styles.features}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📍</Text>
            <Text style={styles.featureText}>Geolocalización precisa</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📸</Text>
            <Text style={styles.featureText}>Evidencia fotográfica</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🔔</Text>
            <Text style={styles.featureText}>Seguimiento en tiempo real</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <Link href="/(user)/home" asChild>
          <TouchableOpacity style={styles.userButton}>
            <MapPin size={24} color="#fff" />
            <Text style={styles.userButtonText}>Entrar como Usuario</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(admin)/dashboard" asChild>
          <TouchableOpacity style={styles.adminButton}>
            <Shield size={24} color="#16a34a" />
            <Text style={styles.adminButtonText}>Entrar como Admin</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <Text style={styles.footer}>Alineado con ODS 11: Ciudades y Comunidades Sostenibles</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    marginTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0f172a",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "#64748b",
    marginTop: 8,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 32,
  },
  description: {
    fontSize: 16,
    color: "#475569",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32,
  },
  features: {
    gap: 16,
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 12,
  },
  featureIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  featureText: {
    fontSize: 16,
    color: "#334155",
  },
  buttons: {
    gap: 12,
    marginBottom: 24,
  },
  userButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16a34a",
    padding: 18,
    borderRadius: 12,
    gap: 8,
  },
  userButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  adminButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#16a34a",
    padding: 18,
    borderRadius: 12,
    gap: 8,
  },
  adminButtonText: {
    color: "#16a34a",
    fontSize: 18,
    fontWeight: "600",
  },
  footer: {
    fontSize: 12,
    color: "#94a3b8",
    textAlign: "center",
  },
})
