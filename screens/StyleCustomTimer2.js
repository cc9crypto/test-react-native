import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const StyleCustomTimer2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.styleCustomTimer2, styles.iconLayout]}>
      <View
        style={[styles.hardBoiledBackground1Parent, styles.groupItemLayout]}
      >
        <Image
          style={[styles.hardBoiledBackground1Parent, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/hardboiledbackground-12.png")}
        />
        <View style={[styles.groupChild, styles.groupChildPosition]} />
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
        <Text style={styles.eggTimer}>Egg Timer</Text>
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
        <View style={[styles.btnOption3, styles.btnOption3FlexBox]}>
          <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
        </View>
        <View style={[styles.btnStartTimer, styles.timerFlexBox]}>
          <Text style={[styles.pauseTimer, styles.cancelTypo]}>
            Pause Timer
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.timer, styles.timerPosition]}
        onPress={() => navigation.navigate("StyleCustomTimer1")}
      >
        <Image
          style={[styles.timerChild, styles.timerPosition]}
          contentFit="cover"
          source={require("../assets/frame-177.png")}
        />
        <Text style={[styles.text, styles.timerTypo]}>0:45</Text>
        <Image
          style={styles.timerItem}
          contentFit="cover"
          source={require("../assets/group-1751.png")}
        />
      </Pressable>
      <View style={[styles.navigation, styles.btnOption3FlexBox]}>
        <View style={styles.navGroup}>
          <View style={[styles.timer1, styles.timerFlexBox]}>
            <Image
              style={styles.timerInner}
              contentFit="cover"
              source={require("../assets/frame-189.png")}
            />
            <Text style={[styles.eggTimer1, styles.timerTypo]}>Egg timer</Text>
          </View>
          <View style={[styles.timer1, styles.timerFlexBox]}>
            <Image
              style={styles.timerInner}
              contentFit="cover"
              source={require("../assets/frame-190.png")}
            />
            <Text style={[styles.eggTimer1, styles.timerTypo]}>Recipes</Text>
          </View>
          <View style={[styles.timer1, styles.timerFlexBox]}>
            <Image
              style={styles.timerInner}
              contentFit="cover"
              source={require("../assets/frame-1912.png")}
            />
            <Text style={[styles.eggTimer1, styles.timerTypo]}>How-Tos</Text>
          </View>
          <View style={[styles.timer1, styles.timerFlexBox]}>
            <Image
              style={styles.timerInner}
              contentFit="cover"
              source={require("../assets/frame-1911.png")}
            />
            <Text style={[styles.eggTimer1, styles.timerTypo]}>sign up</Text>
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
  groupChildPosition: {
    backgroundColor: Color.colorWhite,
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
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
  vectorIconLayout: {
    height: 5,
    width: 2,
    top: 17,
    position: "absolute",
  },
  btnOption3FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cancelTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "center",
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
  timerTypo: {
    textAlign: "center",
    fontWeight: "700",
    color: Color.colorBlack,
  },
  hardBoiledBackground1Parent: {
    left: "50%",
    top: "50%",
    marginLeft: -195,
    width: 390,
    marginTop: -422,
  },
  groupChild: {
    opacity: 0.3,
    top: "50%",
    marginTop: -422,
    backgroundColor: Color.colorWhite,
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
    fontWeight: "700",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
  },
  eggTimer: {
    marginLeft: -22.5,
    top: 14,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
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
  cancel: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  btnOption3: {
    flex: 0.8849,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    height: 55,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhitesmoke_200,
    justifyContent: "center",
  },
  pauseTimer: {
    color: Color.colorWhite,
  },
  btnStartTimer: {
    backgroundColor: Color.colorBlack,
    paddingHorizontal: Padding.p_base,
    height: 55,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    flex: 1,
    paddingVertical: Padding.p_5xs,
  },
  timerSelectors: {
    marginTop: 250,
    gap: Gap.gap_sm,
    flexDirection: "row",
    top: "50%",
  },
  timerChild: {
    marginTop: -185,
    top: "50%",
  },
  text: {
    marginTop: -40,
    marginLeft: -85,
    fontSize: FontSize.size_61xl,
    lineHeight: 80,
    fontFamily: FontFamily.kaleko205Round,
    textAlign: "center",
    fontWeight: "700",
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
    textAlign: "center",
    fontWeight: "700",
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
    backgroundColor: Color.colorWhite,
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  styleCustomTimer2: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default StyleCustomTimer2;
