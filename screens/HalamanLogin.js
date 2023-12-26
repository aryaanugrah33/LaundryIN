import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HalamanLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.halamanLogin}>
      <Pressable style={styles.password}  onPress={() => navigation.navigate("Home")}>
        <Text style={styles.logIn}>Log in</Text>
      </Pressable>
      <Input
        style={[styles.email, styles.emailFlexBox]}
        placeholder="E-mail"
        required={false}
        leftIcon={{ name: "account", type: "material-community" }}
        inputStyle={{ color: "#000" }}
        containerStyle={styles.emailTextInputInput}
      />
      <Input
        style={[styles.password1, styles.emailFlexBox]}
        placeholder="password"
        secureTextEntry
        leftIcon={{ name: "lock", type: "material-community" }}
        inputStyle={{ color: "#000" }}
        containerStyle={styles.passwordTextInputInput}
      />
      <Text style={[styles.helloAgain, styles.helloAgainTypo]}>
        Hello Again!
      </Text>
      <Text style={[styles.welcomeBack, styles.helloAgainTypo]}>
        WelcomeBack
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTextInputInput: {
    left: 32,
    width: 336,
    height: 54,
    top: 400,
    position: "absolute",
  },
  passwordTextInputInput: {
    left: 32,
    paddingTop: 7,
    paddingBottom: 12,
    width: 336,
    height: 54,
    top: 476,
    position: "absolute",
  },
  emailFlexBox: {
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
    overflow: "hidden",
  },
  helloAgainTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_21xl,
    position: "absolute",
  },
  logIn: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: "#388e3c",
    textAlign: "center",
    width: 65,
    height: 30,
  },
  password: {
    top: 671,
    left: 90,
    width: 231,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
    position: "absolute",
    overflow: "hidden",
  },
  email: {
    paddingHorizontal: 19,
    paddingVertical: 12,
  },
  password1: {
    paddingHorizontal: 15,
    alignItems: "center",
  },
  helloAgain: {
    marginLeft: -145.5,
    top: 79,
    left: "50%",
    width: 285,
    height: 51,
  },
  welcomeBack: {
    top: 140,
    left: 60,
    width: 321,
    height: 120,
  },
  halamanLogin: {
    backgroundColor: Color.colorDarkblue,
    flex: 1,
    width: "100%",
    height: 868,
    overflow: "hidden",
  },
});

export default HalamanLogin;
