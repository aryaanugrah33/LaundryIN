import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <Image
        style={styles.coverAtas1}
        contentFit="cover"
        source={require("../assets/cover-atas-1.png")}
      />
      <View style={[styles.layananWrapper, styles.vectorParentPosition]}>
        <Text style={styles.layanan}>Layanan</Text>
      </View>
      <Pressable
        style={[styles.laundryBaju, styles.bajuPosition]}
        onPress={() => navigation.navigate("Cuci")}
      >
        <Image
          style={styles.mencuciKarpet1Icon}
          contentFit="cover"
          source={require("../assets/mesincuci11jpg20230707113142-1.png")}
        />
        <Text
          style={[styles.laundryPakaian, styles.cuciCarpet1Typo]}
        >{`Laundry Pakaian
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.setrikaBaju, styles.bajuPosition]}
        onPress={() => navigation.navigate("Setrika")}
      >
        <Image
          style={styles.mencuciKarpet1Icon}
          contentFit="cover"
          source={require("../assets/setrika341080x675-1.png")}
        />
        <Text style={[styles.cuciCarpet1, styles.cuciCarpet1Typo]}>
          Setrika Baju
        </Text>
      </Pressable>
      <Pressable 
        style={[styles.cuciSepatu, styles.cuciFlexBox]}
        onPress={() => navigation.navigate("CuciSepatu")}
      >
      <Image
        style={styles.mencuciKarpet1Icon}
        contentFit="cover"
        source={require("../assets/cuci-sepatu-1.png")}
      />
      <Text style={[styles.cuciCarpet1, styles.cuciCarpet1Typo]}>
        Cuci Sepatu
      </Text>
    </Pressable>
      <Text style={[styles.cabang6Wonokromo, styles.haloAryaTypo]}>
        Cabang 6, Wonokromo, Surabaya
      </Text>
      <Text style={[styles.haloArya, styles.haloAryaTypo]}>Halo Arya!</Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/50299-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorParentPosition: {
    width: 411,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "9.73%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    height: "42.55%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "9.73%",
    position: "absolute",
    overflow: "hidden",
  },
  cuciFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  cuciCarpet1Typo: {
    height: 22,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  bajuPosition: {
    left: 28,
    alignItems: "center",
    position: "absolute",
  },
  haloAryaTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  coverAtas1: {
    top: 0,
    left: -15,
    width: 441,
    height: 189,
    position: "absolute",
  },
  layanan: {
    fontSize: 30,
    width: 173,
    height: 54,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  layananWrapper: {
    top: 185,
    backgroundColor: Color.colorWhite,
    height: 630,
    paddingTop: 41,
  },
  vectorIcon: {
    height: "47.87%",
    top: "25.53%",
    right: "84.43%",
    bottom: "26.6%",
    left: "5.84%",
  },
  vectorParent: {
    top: 721,
    height: 94,
    backgroundColor: Color.colorDarkblue,
    left: 0,
  },
  mencuciKarpet1Icon: {
    borderRadius: Border.br_11xl,
    width: 150,
    height: 110,
  },
  cuciCarpet1: {
    width: 108,
  },
  cuciCarpet: {
    left: 236,
    justifyContent: "center",
    top: 443,
  },
  laundryPakaian: {
    width: 149,
  },
  laundryBaju: {
    top: 284,
  },
  setrikaBaju: {
    top: 443,
  },
  cuciSepatu: {
    left: 232,
    top: 284,
  },
  cabang6Wonokromo: {
    top: 105,
    left: 11,
    fontSize: 14,
    width: 250,
    height: 26,
  },
  haloArya: {
    marginLeft: -194.5,
    top: 54,
    left: "50%",
    fontSize: 37,
    width: 285,
    height: 51,
  },
  icon: {
    top: 16,
    left: 261,
    width: 142,
    height: 139,
    position: "absolute",
  },
  homePage: {
    flex: 1,
    width: "100%",
    height: 868,
    overflow: "hidden",
    backgroundColor: Color.colorDarkblue,
  },
});

export default HomePage;
