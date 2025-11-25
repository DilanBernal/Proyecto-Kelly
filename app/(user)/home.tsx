import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { Link } from "expo-router"
import { MapPin, Plus, List, Map, User, AlertCircle } from "lucide-react-native"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Urbana Reporta</Text>
          <Text style={styles.headerSubtitle}>Ciudadano</Text>
        </View>
        <Link href="/(user)/profile" asChild>
          <TouchableOpacity style={styles.profileButton}>
            <User size={24} color="#16a34a" />
          </TouchableOpacity>
        </Link>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.mapPreview}>
          <MapPin size={32} color="#16a34a" />
          <Text style={styles.mapText}>Mapa de Reportes</Text>
          <Text style={styles.mapSubtext}>Ver todos los reportes en tu zona</Text>
          <Link href="/(user)/map" asChild>
            <TouchableOpacity style={styles.viewMapButton}>
              <Text style={styles.viewMapButtonText}>Ver Mapa Completo</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.stats}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Mis Reportes</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>En Progreso</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Resueltos</Text>
          </View>
        </View>

        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Acciones Rápidas</Text>

          <Link href="/(user)/create-report" asChild>
            <TouchableOpacity style={styles.primaryAction}>
              <Plus size={28} color="#fff" />
              <View style={styles.actionText}>
                <Text style={styles.actionTitle}>Crear Nuevo Reporte</Text>
                <Text style={styles.actionSubtitle}>Reporta un problema urbano</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/(user)/reports" asChild>
            <TouchableOpacity style={styles.secondaryAction}>
              <List size={24} color="#16a34a" />
              <View style={styles.actionText}>
                <Text style={styles.secondaryActionTitle}>Mis Reportes</Text>
                <Text style={styles.secondaryActionSubtitle}>Ver historial completo</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/(user)/map" asChild>
            <TouchableOpacity style={styles.secondaryAction}>
              <Map size={24} color="#16a34a" />
              <View style={styles.actionText}>
                <Text style={styles.secondaryActionTitle}>Mapa de Reportes</Text>
                <Text style={styles.secondaryActionSubtitle}>Explorar zona</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.recentReports}>
          <Text style={styles.sectionTitle}>Reportes Recientes</Text>

          <TouchableOpacity style={styles.reportCard}>
            <View style={styles.reportIcon}>
              <AlertCircle size={24} color="#dc2626" />
            </View>
            <View style={styles.reportContent}>
              <Text style={styles.reportTitle}>Bache en la vía principal</Text>
              <Text style={styles.reportLocation}>Calle 123 #45-67</Text>
              <Text style={styles.reportStatus}>En Progreso</Text>
            </View>
            <Text style={styles.reportDate}>Hace 2 días</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.reportCard}>
            <View style={styles.reportIcon}>
              <AlertCircle size={24} color="#f59e0b" />
            </View>
            <View style={styles.reportContent}>
              <Text style={styles.reportTitle}>Alumbrado público dañado</Text>
              <Text style={styles.reportLocation}>Carrera 45 #12-34</Text>
              <Text style={styles.reportStatus}>Pendiente</Text>
            </View>
            <Text style={styles.reportDate}>Hace 5 días</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#64748b",
  },
  profileButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f1f5f9",
  },
  content: {
    flex: 1,
    padding: 24,
  },
  mapPreview: {
    backgroundColor: "#f0fdf4",
    padding: 32,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  mapText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0f172a",
    marginTop: 12,
  },
  mapSubtext: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },
  viewMapButton: {
    backgroundColor: "#16a34a",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  viewMapButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  stats: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#16a34a",
  },
  statLabel: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 4,
    textAlign: "center",
  },
  quickActions: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 16,
  },
  primaryAction: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#16a34a",
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    gap: 16,
  },
  actionText: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  actionSubtitle: {
    fontSize: 14,
    color: "#dcfce7",
    marginTop: 2,
  },
  secondaryAction: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    gap: 16,
  },
  secondaryActionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
  },
  secondaryActionSubtitle: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 2,
  },
  recentReports: {
    marginBottom: 32,
  },
  reportCard: {
    flexDirection: "row",
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  reportIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  reportContent: {
    flex: 1,
  },
  reportTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0f172a",
  },
  reportLocation: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 2,
  },
  reportStatus: {
    fontSize: 12,
    color: "#f59e0b",
    marginTop: 4,
    fontWeight: "500",
  },
  reportDate: {
    fontSize: 12,
    color: "#94a3b8",
  },
})
