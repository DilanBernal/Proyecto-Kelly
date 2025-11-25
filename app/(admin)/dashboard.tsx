import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { Link } from "expo-router"
import { Shield, AlertCircle, Users, CheckCircle, Clock, TrendingUp } from "lucide-react-native"

export default function AdminDashboardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.headerTop}>
            <Shield size={28} color="#16a34a" />
            <Text style={styles.headerTitle}>Panel Admin</Text>
          </View>
          <Text style={styles.headerSubtitle}>Gestión de Reportes Urbanos</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <AlertCircle size={28} color="#ef4444" />
            <Text style={styles.statNumber}>45</Text>
            <Text style={styles.statLabel}>Total Reportes</Text>
          </View>

          <View style={styles.statCard}>
            <Clock size={28} color="#f59e0b" />
            <Text style={styles.statNumber}>18</Text>
            <Text style={styles.statLabel}>Pendientes</Text>
          </View>

          <View style={styles.statCard}>
            <TrendingUp size={28} color="#3b82f6" />
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>En Progreso</Text>
          </View>

          <View style={styles.statCard}>
            <CheckCircle size={28} color="#16a34a" />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Resueltos</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acceso Rápido</Text>

          <Link href="/(admin)/reports" asChild>
            <TouchableOpacity style={styles.actionCard}>
              <AlertCircle size={24} color="#16a34a" />
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Gestionar Reportes</Text>
                <Text style={styles.actionSubtitle}>Ver y actualizar estado de reportes</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/(admin)/users" asChild>
            <TouchableOpacity style={styles.actionCard}>
              <Users size={24} color="#16a34a" />
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Gestionar Usuarios</Text>
                <Text style={styles.actionSubtitle}>Administrar usuarios registrados</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/(admin)/map" asChild>
            <TouchableOpacity style={styles.actionCard}>
              <TrendingUp size={24} color="#16a34a" />
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Mapa de Calor</Text>
                <Text style={styles.actionSubtitle}>Visualizar estadísticas por zona</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reportes Recientes</Text>

          <View style={styles.reportCard}>
            <View style={[styles.reportStatus, { backgroundColor: "#fef2f2" }]}>
              <Text style={[styles.reportStatusText, { color: "#dc2626" }]}>Nuevo</Text>
            </View>
            <Text style={styles.reportTitle}>Bache grande en vía principal</Text>
            <Text style={styles.reportMeta}>Vías • Calle 123 #45-67</Text>
            <Text style={styles.reportTime}>Hace 30 minutos</Text>
          </View>

          <View style={styles.reportCard}>
            <View style={[styles.reportStatus, { backgroundColor: "#fef9c3" }]}>
              <Text style={[styles.reportStatusText, { color: "#ca8a04" }]}>Pendiente</Text>
            </View>
            <Text style={styles.reportTitle}>Alumbrado público dañado</Text>
            <Text style={styles.reportMeta}>Alumbrado • Carrera 45 #12-34</Text>
            <Text style={styles.reportTime}>Hace 2 horas</Text>
          </View>

          <View style={styles.reportCard}>
            <View style={[styles.reportStatus, { backgroundColor: "#dbeafe" }]}>
              <Text style={[styles.reportStatusText, { color: "#2563eb" }]}>En Progreso</Text>
            </View>
            <Text style={styles.reportTitle}>Acumulación de basura</Text>
            <Text style={styles.reportMeta}>Basura • Avenida 78 #90-12</Text>
            <Text style={styles.reportTime}>Hace 5 horas</Text>
          </View>
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
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    minWidth: "45%",
    backgroundColor: "#f8fafc",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0f172a",
    marginTop: 8,
  },
  statLabel: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 4,
    textAlign: "center",
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 16,
  },
  actionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    gap: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
  },
  actionSubtitle: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 2,
  },
  reportCard: {
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  reportStatus: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  reportStatusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 4,
  },
  reportMeta: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 8,
  },
  reportTime: {
    fontSize: 12,
    color: "#94a3b8",
  },
})
