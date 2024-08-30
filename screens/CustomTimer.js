import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  Padding,
  FontFamily,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const CustomTimer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.customTimer, styles.iconLayout]}>
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
      <Text style={styles.customTimer1}>Custom Timer</Text>
      <View style={[styles.logo, styles.logoLayout]}>
        <Text style={[styles.eggTimer, styles.timerLayout]}>Egg Timer</Text>
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
      <View style={styles.timerSelectors}>
        <View style={styles.btnOption3}>
          <Text style={styles.cancel}>Cancel</Text>
        </View>
        <View style={[styles.btnStartTimer, styles.timerFlexBox]}>
          <Text style={[styles.startTimer, styles.minutesTypo]}>
            Start Timer
          </Text>
        </View>
      </View>
      <View style={styles.parent}>
        <Text style={styles.text}>:</Text>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <View style={[styles.rectangleView, styles.groupInnerLayout]} />
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition1]}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.maskGroupIcon2, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <Image
          style={[styles.maskGroupIcon3, styles.maskGroupPosition1]}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
        <Text style={[styles.text1, styles.textPosition]}>30</Text>
        <Text style={[styles.text2, styles.textPosition]}>
          <Text style={styles.text3}>0</Text>
          <Text style={styles.text4}>1</Text>
        </Text>
        <View style={[styles.chevronUp, styles.chevronLayout]} />
        <View style={[styles.chevronUp1, styles.chevronLayout]} />
        <View style={[styles.chevronUp2, styles.chevronPosition]} />
        <View style={[styles.chevronUp3, styles.chevronPosition]} />
      </View>
      <View style={[styles.btnOption4, styles.btnLayout1]}>
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
      </View>
      <View style={[styles.btnOption5, styles.btnLayout1]}>
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
      </View>
      <View style={[styles.minutesWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.minutes, styles.minutesTypo]}>Minutes</Text>
      </View>
      <View style={[styles.btnOption6, styles.btnLayout]}>
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
      </View>
      <View style={[styles.btnOption7, styles.btnLayout]}>
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
      </View>
      <View style={[styles.secondsWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.seconds, styles.minutesTypo]}>Seconds</Text>
      </View>
      <View style={[styles.navigation, styles.navGroupFlexBox]}>
        <View style={[styles.navGroup, styles.navGroupFlexBox]}>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-189.png")}
            />
            <Text style={styles.eggTimer1}>Egg timer</Text>
          </View>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-190.png")}
            />
            <Text style={styles.eggTimer1}>Recipes</Text>
          </View>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-1912.png")}
            />
            <Text style={styles.eggTimer1}>How-Tos</Text>
          </View>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-1911.png")}
            />
            <Text style={styles.eggTimer1}>sign up</Text>
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
    top: 0,
    left: 0,
  },
  logoLayout: {
    height: 40,
    position: "absolute",
  },
  timerLayout: {
    lineHeight: 20,
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
  minutesTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  groupInnerLayout: {
    height: 144,
    width: 132,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    top: 47,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  maskGroupPosition1: {
    height: 80,
    marginTop: 38,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  maskGroupPosition: {
    marginTop: -118,
    height: 80,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    marginTop: -40,
    lineHeight: 80,
    fontSize: FontSize.size_61xl,
    textAlign: "center",
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  chevronLayout: {
    height: 46,
    width: 46,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  chevronPosition: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    top: 238,
    height: 46,
    width: 46,
    position: "absolute",
    overflow: "hidden",
  },
  btnLayout1: {
    width: 55,
    backgroundColor: Color.colorGold_200,
    left: 76,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    position: "absolute",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_4xs,
    top: 200,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorBlack,
    alignItems: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    position: "absolute",
  },
  btnLayout: {
    left: 260,
    width: 55,
    backgroundColor: Color.colorGold_200,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    position: "absolute",
  },
  navGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
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
    left: 0,
    width: 390,
    position: "absolute",
    height: 844,
  },
  customTimer1: {
    top: 137,
    fontSize: FontSize.size_13xl,
    width: 358,
    fontFamily: FontFamily.kaleko205Round,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
    left: 16,
    position: "absolute",
  },
  eggTimer: {
    marginLeft: -22.5,
    top: 14,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    width: 30,
    height: 39,
    left: 0,
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
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
  },
  btnOption3: {
    flex: 0.8849,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    height: 55,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  startTimer: {
    lineHeight: 20,
    textAlign: "center",
  },
  btnStartTimer: {
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorBlack,
    paddingVertical: Padding.p_5xs,
    height: 55,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    flex: 1,
  },
  timerSelectors: {
    marginTop: 250,
    gap: Gap.gap_sm,
    flexDirection: "row",
    width: 358,
    left: 16,
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -47,
    marginLeft: -12,
    lineHeight: 80,
    fontSize: FontSize.size_61xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorBlack,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupInner: {
    left: 0,
  },
  rectangleView: {
    left: 184,
  },
  maskGroupIcon: {
    marginLeft: -142,
    width: 100,
  },
  maskGroupIcon1: {
    marginLeft: -144,
    width: 104,
  },
  maskGroupIcon2: {
    marginLeft: 42,
    width: 100,
  },
  maskGroupIcon3: {
    marginLeft: 45,
    width: 94,
  },
  text1: {
    marginLeft: 41,
    color: Color.colorBlack,
  },
  text3: {
    letterSpacing: 13,
    color: "#dadada",
  },
  text4: {
    color: Color.colorBlack,
  },
  text2: {
    marginLeft: -143,
  },
  chevronUp: {
    left: 44,
  },
  chevronUp1: {
    left: 227,
  },
  chevronUp2: {
    left: 90,
  },
  chevronUp3: {
    left: 273,
  },
  parent: {
    marginTop: -119,
    marginLeft: -158,
    width: 316,
    height: 238,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  icon1: {
    width: 26,
    height: 26,
  },
  btnOption4: {
    top: 275,
  },
  btnOption5: {
    top: 514,
  },
  minutes: {
    textAlign: "left",
  },
  minutesWrapper: {
    left: 56,
  },
  btnOption6: {
    top: 275,
  },
  btnOption7: {
    top: 514,
  },
  seconds: {
    textAlign: "center",
  },
  secondsWrapper: {
    left: 237,
    justifyContent: "center",
  },
  timerChild: {
    width: 27,
    height: 27,
  },
  eggTimer1: {
    fontSize: FontSize.size_3xs,
    textTransform: "uppercase",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
  },
  timer: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    gap: Gap.gap_2xs,
  },
  navGroup: {
    height: 67,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: 0,
    flex: 1,
    alignItems: "center",
  },
  navigation: {
    bottom: 0,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  customTimer: {
    height: 844,
    backgroundColor: Color.colorWhitesmoke_200,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default CustomTimer;
