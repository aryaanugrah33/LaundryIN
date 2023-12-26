import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProfilPage = () => {
  const navigation = useNavigation();

  const [nama, setNama] = useState("John Doe"); // Nama awal
  const [cabang, setCabang] = useState("Cabang 6, Wonokromo, Surabaya"); // Cabang awal
  const [fotoProfil, setFotoProfil] = useState(
    require("../assets/default-profile-picture.jpg") // Foto profil awal
  );

  const handleLogout = () => {
    // Implementasi logika logout di sini
    // Misalnya, hapus token, bersihkan state, dan navigasi ke halaman login
    console.log("Logout clicked");
    // navigation.navigate("Login"); // Gantilah dengan navigasi yang sesuai
  };

  const handleChangePhoto = () => {
    // Implementasi logika ganti foto di sini
    console.log("Change Photo clicked");
    // Anda bisa menggunakan Image Picker atau library sejenis untuk implementasi ini
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilContainer}>
        <Pressable onPress={handleChangePhoto}>
          <Image source={fotoProfil} style={styles.fotoProfil} />
        </Pressable>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.cabang}>{cabang}</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nama Pegawai</Text>
        <TextInput
          style={styles.input}
          value={nama}
          onChangeText={(text) => setNama(text)}
        />
        <Text style={styles.label}>Cabang Laundry</Text>
        <TextInput
          style={styles.input}
          value={cabang}
          onChangeText={(text) => setCabang(text)}
        />
      </View>
      <Pressable style={styles.logoutButton} onPress={() => navigation.navigate("HalamanLogin")}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 20,
  },
  profilContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  fotoProfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  nama: {
    marginTop: 10,
    fontSize: FontSize.size_regular,
    fontFamily: FontFamily.poppinsBold,
  },
  cabang: {
    marginTop: 5,
    fontSize: FontSize.size_small,
    color: Color.colorGrey,
  },
  formContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: FontSize.size_small,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: Color.colorGrey,
    borderWidth: 1,
    borderRadius: Border.br_5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: Color.colorDarkblue,
    paddingVertical: 10,
    borderRadius: Border.br_5,
    alignItems: "center",
  },
  logoutText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_regular,
    fontFamily: FontFamily.poppinsBold,
  },
});

export default ProfilPage;
