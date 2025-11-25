"use client"

import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image, Alert } from "react-native"
import { router } from "expo-router"
import * as ImagePicker from "expo-image-picker"
import * as Location from "expo-location"
import { ArrowLeft, MapPin, Camera, Send } from "lucide-react-native"

const CATEGORIES = [
  { id: "basura", label: "Basura", icon: "🗑️" },
  { id: "alumbrado", label: "Alumbrado", icon: "💡" },
  { id: "vias", label: "Vías", icon: "🛣️" },
  { id: "seguridad", label: "Seguridad", icon: "🚨" },
  { id: "zonas-verdes", label: "Zonas Verdes", icon: "🌳" },
  { id: "otro", label: "Otro", icon: "📝" },
]

export default function CreateReportScreen() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState<string>("")
  const [photos, setPhotos] = useState<string[]>([])

  const requestLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Necesitamos acceso a tu ubicación para crear el reporte")
      return
    }

    const currentLocation = await Location.getCurrentPositionAsync({})
    const address = await Location.reverseGeocodeAsync({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    })

    if (address[0]) {
      setLocation(`${address[0].street || ""} ${address[0].name || ""}, ${address[0].city || ""}`)
    }
  }

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Necesitamos acceso a tus fotos para adjuntar evidencia")
      return
    }

    const result = await ImagePicker.launchImagePickerAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.8,
    })

    if (!result.canceled && result.assets) {
      setPhotos([...photos, ...result.assets.map((asset) => asset.uri)])
    }
  }

  const handleSubmit = () => {
    if (!selectedCategory || !description || !location) {
      Alert.alert("Campos incompletos", "Por favor completa todos los campos requeridos")
      return
    }

    Alert.alert("Reporte Enviado", "Tu reporte ha sido enviado exitosamente. Te notificaremos sobre su progreso.", [
      { text: "OK", onPress: () => router.push("/(user)/reports") },
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#0f172a" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Crear Reporte</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.label}>Categoría *</Text>
          <View style={styles.categories}>
            {CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[styles.categoryButton, selectedCategory === category.id && styles.categoryButtonActive]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={[styles.categoryLabel, selectedCategory === category.id && styles.categoryLabelActive]}>
                  {category.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Ubicación *</Text>
          <TouchableOpacity style={styles.locationButton} onPress={requestLocation}>
            <MapPin size={20} color="#16a34a" />
            <Text style={styles.locationButtonText}>{location || "Obtener ubicación actual"}</Text>
          </TouchableOpacity>
          {location ? <Text style={styles.locationText}>{location}</Text> : null}
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Descripción *</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Describe el problema con el mayor detalle posible..."
            multiline
            numberOfLines={6}
            value={description}
            onChangeText={setDescription}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Fotos (Opcional)</Text>
          <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
            <Camera size={24} color="#16a34a" />
            <Text style={styles.photoButtonText}>Agregar fotos</Text>
          </TouchableOpacity>

          {photos.length > 0 && (
            <View style={styles.photoGrid}>
              {photos.map((photo, index) => (
                <Image key={index} source={{ uri: photo }} style={styles.photoThumbnail} />
              ))}
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Send size={20} color="#fff" />
          <Text style={styles.submitButtonText}>Enviar Reporte</Text>
        </TouchableOpacity>
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
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0f172a",
  },
  content: {
    flex: 1,
    padding: 24,
  },
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 12,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#f8fafc",
    borderWidth: 2,
    borderColor: "transparent",
  },
  categoryButtonActive: {
    backgroundColor: "#dcfce7",
    borderColor: "#16a34a",
  },
  categoryIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  categoryLabel: {
    fontSize: 14,
    color: "#475569",
    fontWeight: "500",
  },
  categoryLabelActive: {
    color: "#16a34a",
    fontWeight: "600",
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0fdf4",
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  locationButtonText: {
    fontSize: 15,
    color: "#16a34a",
    fontWeight: "500",
  },
  locationText: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 8,
    paddingHorizontal: 4,
  },
  textArea: {
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 12,
    fontSize: 15,
    color: "#0f172a",
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  photoButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0fdf4",
    padding: 16,
    borderRadius: 12,
    gap: 8,
    borderWidth: 2,
    borderColor: "#16a34a",
    borderStyle: "dashed",
  },
  photoButtonText: {
    fontSize: 15,
    color: "#16a34a",
    fontWeight: "500",
  },
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },
  photoThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16a34a",
    padding: 18,
    borderRadius: 12,
    gap: 8,
    marginBottom: 32,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
})
