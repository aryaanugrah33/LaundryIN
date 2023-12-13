import * as React from "react";
import { Text, StyleSheet, ImageBackground, View } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HalamanUtama = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.halamanUtama}>
      <Text style={[styles.welcomeTo, styles.welcomeToTypo]}>Welcome to</Text>
      <ImageBackground
        style={styles.logoLaundryIn1}
        resizeMode="center"
        source={require("../assets/logo-laundry-in.png")}
      />
      <Button
        title="Login"
        radius={5}
        iconPosition="bottom"
        type="solid"
        color="#fff"
        titleStyle={styles.loginBtn}
        onPress={() => navigation.navigate("HalamanLogin")}
        containerStyle={styles.loginBtn1}
        buttonStyle={styles.loginBtn2}
      />
      <Text style={[styles.laundryIn, styles.welcomeToTypo]}>Laundry IN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    color: "#388e3c",
    fontSize: 30,
    fontWeight: "800",
    fontFamily: "Poppins-ExtraBold",
  },
  loginBtn1: {
    left: 116,
    top: 688,
    position: "absolute",
  },
  loginBtn2: {
    borderRadius: 30,
    width: 180,
    height: 55,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeToTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_21xl,
    left: 86,
    position: "absolute",
  },
  welcomeTo: {
    top: 83,
  },
  logoLaundryIn1: {
    top: 330,
    left: 116,
    width: 180,
    height: 210,
    position: "absolute",
  },
  laundryIn: {
    top: 143,
    width: 239,
    height: 68,
  },
  halamanUtama: {
    backgroundColor: Color.colorDarkblue,
    flex: 1,
    width: "100%",
    height: 868,
    overflow: "hidden",
  },
});

export default HalamanUtama;
