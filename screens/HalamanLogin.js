import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HalamanLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.halamanLogin}>
      <Pressable style={styles.password} onPress={() => navigation.goBack()}>
        <Text style={styles.logIn}>Log in</Text>
      </Pressable>
      <Input
        style={[styles.email, styles.emailFlexBox]}
        label="email"
        required={false}
        leftIcon={{ name: "account", type: "material-community" }}
        inputStyle={{ color: "#838383" }}
        containerStyle={styles.emailTextInputInput}
      />
      <Input
        style={[styles.password1, styles.emailFlexBox]}
        
        leftIcon={{ name: "lock", type: "material-community" }}
        inputStyle={{ color: "#838383" }}
        containerStyle={styles.passwordTextInputInput}
      />
      <Text style={styles.helloAgainWelcomeBack}>Hello Again!</Text>
      <Text style={styles.helloAgainWelcomeBack1}>WelcomeBack</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTextInputInput: {
    left: 31,
    width: 293,
    height: 54,
    top: 400,
    position: "absolute",
  },
  passwordTextInputInput: {
    left: 32,
    paddingTop: 7,
    paddingBottom: 12,
    width: 293,
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
    left: 64,
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
  helloAgainWelcomeBack: {
    marginLeft: -146,
    top: 79,
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  helloAgainWelcomeBack1: {
    marginLeft: -146,
    top: 120,
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  halamanLogin: {
    backgroundColor: Color.colorDarkblue,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default HalamanLogin;
