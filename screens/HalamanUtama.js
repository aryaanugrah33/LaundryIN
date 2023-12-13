import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HalamanUtama = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.halamanUtama}>
      <Text style={styles.welcomeToLaundryInContainer}>
        Welcome to      Laundry IN
      </Text>
      <Image
        
        resizeMode="center"
        source={require("../assets/logo Laundry IN.png")}
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
    left: 120,
    top: 650,
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
  welcomeToLaundryInContainer: {
    top: 84,
    left: 60,
    fontSize: FontSize.size_21xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  logoLaundryIn1: {
    top: 330,
    left: 90,
    width: 180,
    height: 210,
    position: "absolute",
  },
  halamanUtama: {
    borderRadius: 0,
    backgroundColor: Color.colorDarkblue,
    flex: 1,
    width: "100%",
    height:'100%',
    overflow: "hidden",
  },
});

export default HalamanUtama;
