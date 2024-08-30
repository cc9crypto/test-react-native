import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  Padding,
  Color,
  FontFamily,
  Border,
  Gap,
} from "../GlobalStyles";

const StyleCustomTimer1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.styleCustomTimer3, styles.iconLayout]}>
      <View
        style={[styles.hardBoiledBackground1Parent, styles.groupItemLayout]}
      >
        <Image
          style={[styles.hardBoiledBackground1Parent, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/hardboiledbackground-12.png")}
        />
        <View style={styles.groupChild} />
        <LinearGradient
          style={[styles.groupItem, styles.vectorIconPosition]}
          locations={[0, 1]}
          colors={["rgba(255, 255, 255, 0)", "#fff"]}
        />
      </View>
      <Text style={[styles.customTimer, styles.timerPosition1]}>
        Custom Timer
      </Text>
      <View style={[styles.logo, styles.logoLayout]}>
        <Text style={[styles.eggTimer, styles.timerTypo]}>Egg Timer</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={styles.vectorIcon2}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.logoLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <Pressable
        style={[styles.btnBackArrow, styles.logoLayout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/btnback-arrow.png")}
        />
      </Pressable>
      <View style={[styles.timerSelectors, styles.timerPosition1]}>
        <View style={[styles.btnStartTimer, styles.timerFlexBox]}>
          <Text style={[styles.stopTimer, styles.timerTypo]}>Stop Timer</Text>
        </View>
      </View>
      <View style={[styles.timer, styles.timerPosition]}>
        <Image
          style={[styles.timerChild, styles.timerPosition]}
          contentFit="cover"
          source={require("../assets/frame-1772.png")}
        />
        <Text style={[styles.done, styles.timerTypo1]}>Done!</Text>
        <Image
          style={styles.timerItem}
          contentFit="cover"
          source={require("../assets/group-1751.png")}
        />
      </View>
      <View style={styles.navigation}>
        <View style={styles.navGroup}>
          <View style={[styles.timer1, styles.timerFlexBox]}>
            <Image
              style={styles.timerInner}
              contentFit="cover"
              source={require("../assets/frame-189.png")}
            />
            <Text style={[styles.eggTimer1, styles.timerTypo1]}>Egg timer</Text>
          </View>
          <View style={[styles.timer1, styles.timerFlexBox]}>
            <Image
              style={styles.timerInner}
              contentFit="cover"
              source={require("../assets/frame-190.png")}
            />
            <Text style={[styles.eggTimer1, styles.timerTypo1]}>Recipes</Text>
          </View>
          <View style={[styles.timer1, styles.timerFlexBox]}>
            <Image
              style={styles.timerInner}
              contentFit="cover"
              source={require("../assets/frame-1912.png")}
            />
            <Text style={[styles.eggTimer1, styles.timerTypo1]}>How-Tos</Text>
          </View>
          <View style={[styles.timer1, styles.timerFlexBox]}>
            <Image
              style={styles.timerInner}
              contentFit="cover"
              source={require("../assets/frame-1911.png")}
            />
            <Text style={[styles.eggTimer1, styles.timerTypo1]}>sign up</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupItemLayout: {
    width: 390,
    position: "absolute",
    height: 844,
  },
  vectorIconPosition: {
    left: 0,
    top: 0,
  },
  timerPosition1: {
    width: 358,
    left: 16,
    position: "absolute",
  },
  logoLayout: {
    height: 40,
    position: "absolute",
  },
  timerTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  vectorIconLayout: {
    height: 5,
    width: 2,
    top: 17,
    position: "absolute",
  },
  timerFlexBox: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  timerPosition: {
    height: 370,
    width: 370,
    marginLeft: -185,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  timerTypo1: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
  },
  hardBoiledBackground1Parent: {
    left: "50%",
    top: "50%",
    marginLeft: -195,
    marginTop: -422,
    width: 390,
  },
  groupChild: {
    opacity: 0.3,
    backgroundColor: Color.colorWhite,
    width: 390,
    left: "50%",
    top: "50%",
    marginLeft: -195,
    marginTop: -422,
    position: "absolute",
    height: 844,
  },
  groupItem: {
    backgroundColor: "transparent",
    width: 390,
    position: "absolute",
    height: 844,
  },
  customTimer: {
    top: 137,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
    fontFamily: FontFamily.kaleko205Round,
  },
  eggTimer: {
    marginLeft: -22.5,
    top: 14,
    color: Color.colorBlack,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.kaleko205Round,
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    width: 30,
    height: 39,
    position: "absolute",
  },
  vectorIcon1: {
    top: 15,
    left: 7,
    width: 23,
    height: 23,
    position: "absolute",
  },
  vectorIcon2: {
    top: 23,
    left: 6,
    width: 20,
    height: 9,
    position: "absolute",
  },
  vectorIcon3: {
    left: 11,
  },
  vectorIcon4: {
    left: 17,
  },
  vectorIcon5: {
    width: 31,
    left: 0,
    top: 0,
  },
  logo: {
    marginLeft: -61,
    top: 50,
    width: 121,
    left: "50%",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  btnBackArrow: {
    top: 49,
    width: 40,
    left: 16,
    height: 40,
  },
  stopTimer: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
  btnStartTimer: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    height: 55,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    flex: 1,
    paddingVertical: Padding.p_5xs,
  },
  timerSelectors: {
    marginTop: 250,
    flexDirection: "row",
    top: "50%",
  },
  timerChild: {
    marginTop: -185,
    top: "50%",
  },
  done: {
    marginTop: -40,
    marginLeft: -123,
    fontSize: FontSize.size_61xl,
    lineHeight: 80,
    fontFamily: FontFamily.kaleko205Round,
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  timerItem: {
    top: 274,
    left: 164,
    width: 42,
    height: 42,
    position: "absolute",
  },
  timer: {
    top: 256,
  },
  timerInner: {
    width: 27,
    height: 27,
  },
  eggTimer1: {
    fontSize: FontSize.size_3xs,
    textTransform: "uppercase",
    fontFamily: FontFamily.interBold,
  },
  timer1: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    gap: Gap.gap_2xs,
  },
  navGroup: {
    height: 67,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  navigation: {
    bottom: 0,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  styleCustomTimer3: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default StyleCustomTimer1;
