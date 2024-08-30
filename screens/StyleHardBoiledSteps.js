import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Color,
  Padding,
  Border,
  FontFamily,
  Gap,
  FontSize,
} from "../GlobalStyles";

const StyleHardBoiledSteps = () => {
  return (
    <View style={[styles.styleHardBoiledSteps, styles.instructions1Bg]}>
      <View style={[styles.background, styles.backgroundChildLayout]}>
        <Image
          style={[styles.background, styles.backgroundChildLayout]}
          contentFit="cover"
          source={require("../assets/hardboiledbackground-11.png")}
        />
        <View style={[styles.backgroundChild, styles.backgroundChildLayout]} />
      </View>
      <View style={[styles.timerSelectors, styles.topNavigationPosition]}>
        <View style={[styles.btnStartTimer, styles.timerSpaceBlock]}>
          <View style={styles.basicClockParent}>
            <Image
              style={styles.basicClock}
              contentFit="cover"
              source={require("../assets/basic--clock.png")}
            />
            <Text style={styles.startTimer}>Start Timer</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.startTimer}>12:00</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.title, styles.mFlexBox]}>Hard Boiled Eggs</Text>
      <View style={[styles.topNavigation, styles.topNavigationPosition]}>
        <View style={styles.logo}>
          <Text style={[styles.eggTimer, styles.mFlexBox]}>Egg Timer</Text>
          <Image
            style={[styles.vectorIcon, styles.iconChildPosition]}
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
            style={styles.vectorIcon5}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </View>
        <Image
          style={[styles.btnBackArrowIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/btnback-arrow.png")}
        />
      </View>
      <View style={[styles.btnEggSize, styles.titlePosition]}>
        <View style={styles.component1}>
          <View style={[styles.instructionsWrapper, styles.sizeParentLayout]}>
            <Text style={styles.instructions}>Instructions</Text>
          </View>
        </View>
        <View style={styles.component11}>
          <View style={[styles.sizeParent, styles.sizeParentLayout]}>
            <Text style={styles.instructions}>Size</Text>
            <View style={[styles.ellipseParent, styles.frameChildLayout]}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-10.png")}
              />
              <Text style={[styles.l, styles.lTypo]}>L</Text>
            </View>
          </View>
          <View style={[styles.component1Inner, styles.btnStartTimerLayout]}>
            <View style={styles.frameParent}>
              <View style={[styles.mWrapper, styles.wrapperLayout]}>
                <Text style={[styles.m, styles.mFlexBox]}>M</Text>
              </View>
              <View style={[styles.lWrapper, styles.wrapperLayout]}>
                <Text style={[styles.m, styles.mFlexBox]}>L</Text>
              </View>
              <View style={[styles.mWrapper, styles.wrapperLayout]}>
                <Text style={[styles.m, styles.mFlexBox]}>XL</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.navigation, styles.backgroundChildLayout]}>
        <View style={styles.timerParent}>
          <View style={[styles.timer, styles.timerSpaceBlock]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-189.png")}
            />
            <Text style={[styles.eggTimer1, styles.lTypo]}>Egg timer</Text>
          </View>
          <View style={[styles.timer, styles.timerSpaceBlock]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-190.png")}
            />
            <Text style={[styles.eggTimer1, styles.lTypo]}>Recipes</Text>
          </View>
          <View style={[styles.timer, styles.timerSpaceBlock]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-1912.png")}
            />
            <Text style={[styles.eggTimer1, styles.lTypo]}>How-Tos</Text>
          </View>
          <View style={[styles.timer, styles.timerSpaceBlock]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-1911.png")}
            />
            <Text style={[styles.eggTimer1, styles.lTypo]}>sign up</Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.styleHardBoiledStepsChild, styles.iconChildPosition]}
      />
      <View style={[styles.instructions1, styles.backgroundPosition]}>
        <View style={[styles.title1, styles.title1FlexBox]}>
          <View style={styles.stepsWrapper}>
            <Text style={[styles.steps, styles.mFlexBox]}>Steps</Text>
          </View>
          <View style={styles.title1FlexBox}>
            <View style={styles.frameContainer}>
              <View style={[styles.container, styles.frameLayout]}>
                <Text style={[styles.text1, styles.mFlexBox]}>1</Text>
              </View>
              <Text
                style={[styles.bodyCopy, styles.bodyFlexBox]}
              >{`In a saucepan, place eggs in a single layer and cover eggs with at least 1 inch of water. `}</Text>
            </View>
            <View style={styles.frameContainer}>
              <View style={[styles.frame, styles.frameLayout]}>
                <Text style={[styles.text1, styles.mFlexBox]}>2</Text>
              </View>
              <Text
                style={[styles.bodyCopy, styles.bodyFlexBox]}
              >{`Cover with a lid and bring to a boil over high heat. `}</Text>
            </View>
            <View style={styles.frameContainer}>
              <View style={[styles.frame, styles.frameLayout]}>
                <Text style={[styles.text1, styles.mFlexBox]}>3</Text>
              </View>
              <Text style={styles.bodyFlexBox}>
                <Text style={styles.bodyCopyTxtContainer}>
                  <Text
                    style={styles.removeFromHeat}
                  >{`Remove from heat and let stand for `}</Text>
                  <Text style={styles.mTypo}>12 minutes</Text>
                  <Text style={styles.removeFromHeat}>.</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.frameContainer}>
              <View style={[styles.frame, styles.frameLayout]}>
                <Text style={[styles.text1, styles.mFlexBox]}>4</Text>
              </View>
              <Text style={[styles.bodyCopy, styles.bodyFlexBox]}>
                Run eggs under cold water or place in an ice bath to stop
                cooking.
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.xCircleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/xcircle.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  instructions1Bg: {
    backgroundColor: Color.colorWhitesmoke_200,
    overflow: "hidden",
  },
  backgroundChildLayout: {
    width: 390,
    position: "absolute",
  },
  topNavigationPosition: {
    marginLeft: -179,
    left: "50%",
    position: "absolute",
  },
  timerSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    overflow: "hidden",
  },
  mFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  iconChildPosition: {
    left: 0,
    top: 0,
  },
  vectorIconLayout: {
    height: 5,
    width: 2,
    top: 17,
    position: "absolute",
  },
  iconLayout: {
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  titlePosition: {
    left: 16,
    width: 358,
    position: "absolute",
  },
  sizeParentLayout: {
    paddingVertical: Padding.p_4xs,
    height: 46,
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    alignItems: "center",
  },
  frameChildLayout: {
    height: 29,
    width: 29,
  },
  lTypo: {
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
  },
  btnStartTimerLayout: {
    height: 55,
    justifyContent: "space-between",
  },
  wrapperLayout: {
    width: 55,
    justifyContent: "center",
    flexDirection: "row",
    height: 55,
    borderRadius: Border.br_81xl,
    alignItems: "center",
  },
  backgroundPosition: {
    top: "50%",
    left: "50%",
  },
  title1FlexBox: {
    gap: Gap.gap_md,
    alignSelf: "stretch",
  },
  frameLayout: {
    paddingVertical: Padding.p_8xs,
    height: 31,
    borderRadius: Border.br_base_5,
    backgroundColor: Color.colorGold_100,
    width: 31,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyFlexBox: {
    width: 262,
    display: "flex",
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_base,
    alignItems: "center",
  },
  background: {
    left: "50%",
    top: "50%",
    marginLeft: -195,
    width: 390,
    marginTop: -422,
    height: 844,
  },
  backgroundChild: {
    opacity: 0.3,
    backgroundColor: Color.colorWhite,
    left: "50%",
    top: "50%",
    marginLeft: -195,
    width: 390,
    marginTop: -422,
    height: 844,
  },
  basicClock: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  startTimer: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_base,
  },
  basicClockParent: {
    gap: Gap.gap_2xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  btnStartTimer: {
    backgroundColor: Color.colorBlack,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "space-between",
    flexDirection: "row",
    height: 55,
    width: 358,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_81xl,
  },
  timerSelectors: {
    bottom: 117,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    top: 137,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_13xl,
    left: 16,
    width: 358,
    position: "absolute",
  },
  eggTimer: {
    marginLeft: -22.5,
    top: 14,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_base,
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
    height: 40,
    position: "absolute",
  },
  logo: {
    marginLeft: -1.5,
    top: 1,
    width: 121,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  btnBackArrowIcon: {
    left: 0,
    top: 0,
  },
  topNavigation: {
    top: 49,
    width: 239,
    height: 41,
  },
  instructions: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  instructionsWrapper: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.colorWhite,
  },
  component1: {
    borderRadius: Border.br_81xl,
    alignItems: "center",
  },
  frameChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  l: {
    top: 5,
    left: 10,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  ellipseParent: {
    overflow: "hidden",
  },
  sizeParent: {
    width: 102,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorGold_100,
    gap: Gap.gap_2xs,
  },
  m: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  mWrapper: {
    backgroundColor: Color.colorWhite,
  },
  lWrapper: {
    backgroundColor: Color.colorGold_100,
  },
  frameParent: {
    gap: Gap.gap_xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  component1Inner: {
    opacity: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
  component11: {
    alignItems: "flex-end",
    gap: Gap.gap_xs,
    borderRadius: Border.br_81xl,
  },
  btnEggSize: {
    top: 181,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
  },
  timerChild: {
    width: 27,
    height: 27,
  },
  eggTimer1: {
    fontSize: FontSize.size_3xs,
    textTransform: "uppercase",
  },
  timer: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    gap: Gap.gap_2xs,
    justifyContent: "center",
  },
  timerParent: {
    height: 67,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  navigation: {
    bottom: 0,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    left: "50%",
    marginLeft: -195,
    width: 390,
  },
  styleHardBoiledStepsChild: {
    backgroundColor: Color.colorGray,
    width: 390,
    position: "absolute",
    height: 844,
  },
  steps: {
    alignSelf: "stretch",
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_13xl,
  },
  stepsWrapper: {
    alignSelf: "stretch",
  },
  text1: {
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  container: {
    paddingHorizontal: Padding.p_xs,
  },
  bodyCopy: {
    fontFamily: FontFamily.interRegular,
  },
  frameContainer: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frame: {
    paddingHorizontal: Padding.p_12xs,
  },
  removeFromHeat: {
    fontFamily: FontFamily.interRegular,
  },
  mTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  bodyCopyTxtContainer: {
    width: "100%",
  },
  title1: {
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    zIndex: 0,
    alignItems: "center",
  },
  xCircleIcon: {
    top: 10,
    right: 10,
    zIndex: 1,
  },
  instructions1: {
    marginTop: -217,
    marginLeft: -178,
    borderRadius: Border.br_xs,
    width: 356,
    paddingVertical: Padding.p_37xl,
    gap: Gap.gap_2xl,
    paddingHorizontal: Padding.p_base,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  styleHardBoiledSteps: {
    overflow: "hidden",
    height: 844,
    width: "100%",
    flex: 1,
  },
});

export default StyleHardBoiledSteps;
