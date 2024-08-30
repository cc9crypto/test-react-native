import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Cover1 = () => {
  return (
    <View style={styles.cover}>
      <Image
        style={styles.logoEggsEnIcon}
        contentFit="cover"
        source={require("../assets/logoeggsen.png")}
      />
      <Text style={[styles.eggTimerApp, styles.textTypo]}>
        Egg Timer App - Client
      </Text>
      <Text style={[styles.text, styles.textTypo]}>2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.apercu,
    fontWeight: "500",
    fontSize: FontSize.size_41xl,
    position: "absolute",
  },
  logoEggsEnIcon: {
    marginTop: -197,
    marginLeft: -415,
    top: "50%",
    left: "50%",
    width: 830,
    height: 393,
    position: "absolute",
  },
  eggTimerApp: {
    bottom: 80,
    left: 80,
    textAlign: "left",
  },
  text: {
    top: 805,
    right: 80,
    textAlign: "right",
  },
  cover: {
    backgroundColor: Color.colorAliceblue,
    width: 1600,
    height: 960,
    overflow: "hidden",
  },
});

export default Cover1;
