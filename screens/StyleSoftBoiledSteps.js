import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Color,
  FontSize,
  Padding,
  Border,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const StyleSoftBoiledSteps = () => {
  return (
    <View style={[styles.styleSoftBoiledSteps, styles.instructions1Bg]}>
      <Image
        style={[styles.hardBoiledBackground2Icon, styles.timerPosition]}
        contentFit="cover"
        source={require("../assets/hardboiledbackground-2.png")}
      />
      <View
        style={[styles.styleSoftBoiledStepsChild, styles.navigationPosition]}
      />
      <Text style={[styles.softBoiledEggs, styles.mFlexBox]}>
        Soft Boiled Eggs
      </Text>
      <View style={styles.logo}>
        <Text style={[styles.eggTimer, styles.timerLayout]}>Egg Timer</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={styles.vectorIcon2}
          contentFit="cover"
          source={require("../assets/vector2.png")}
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
      <View style={[styles.timerSelectors, styles.timerPosition]}>
        <View style={styles.title}>
          <View
            style={[
              styles.howDoYouLikeYourEggsWrapper,
              styles.timerParentFlexBox,
            ]}
          >
            <Text style={[styles.howDoYou, styles.howDoYouClr]}>
              How do you like your eggs?
            </Text>
          </View>
        </View>
        <View style={[styles.btnOption2, styles.btnLayout]}>
          <View style={styles.checkCircleParent}>
            <Image
              style={styles.checkCircleIcon}
              contentFit="cover"
              source={require("../assets/checkcircle.png")}
            />
            <Text style={[styles.minuteEggs, styles.mTypo]}>3-Minute Eggs</Text>
          </View>
          <Text style={[styles.minuteEggs, styles.mTypo]}>3:00</Text>
        </View>
        <View style={[styles.btnOption3, styles.btnLayout]}>
          <Text style={[styles.minuteEggs, styles.mTypo]}>Jammy Eggs</Text>
          <Text style={[styles.minuteEggs, styles.mTypo]}>6:00</Text>
        </View>
        <View style={[styles.btnStartTimer, styles.timerFlexBox]}>
          <Image
            style={styles.checkCircleIcon}
            contentFit="cover"
            source={require("../assets/basic--clock.png")}
          />
          <Text style={[styles.startTimer, styles.mTypo]}>Start Timer</Text>
        </View>
      </View>
      <View style={[styles.btnEggSize, styles.btnLayout]}>
        <View style={styles.component1}>
          <View style={[styles.instructionsWrapper, styles.sizeParentLayout]}>
            <Text style={[styles.instructions, styles.mTypo]}>
              Instructions
            </Text>
          </View>
        </View>
        <View style={[styles.component11, styles.component11FlexBox]}>
          <View style={[styles.sizeParent, styles.title1Position]}>
            <Text style={[styles.instructions, styles.mTypo]}>Size</Text>
            <View style={[styles.ellipseParent, styles.frameChildLayout]}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-10.png")}
              />
              <Text style={[styles.l, styles.lTypo]}>L</Text>
            </View>
          </View>
          <View style={[styles.component1Inner, styles.xCircleIconPosition]}>
            <View style={[styles.frameParent, styles.component11FlexBox]}>
              <View style={[styles.mWrapper, styles.wrapperLayout1]}>
                <Text style={[styles.m, styles.mTypo]}>M</Text>
              </View>
              <View style={[styles.lWrapper, styles.wrapperLayout1]}>
                <Text style={[styles.m, styles.mTypo]}>L</Text>
              </View>
              <View style={[styles.mWrapper, styles.wrapperLayout1]}>
                <Text style={[styles.m, styles.mTypo]}>XL</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.navigation, styles.navigationPosition]}>
        <View style={[styles.timerParent, styles.timerParentFlexBox]}>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-189.png")}
            />
            <Text style={[styles.eggTimer1, styles.lTypo]}>Egg timer</Text>
          </View>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-190.png")}
            />
            <Text style={[styles.eggTimer1, styles.lTypo]}>Recipes</Text>
          </View>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-191.png")}
            />
            <Text style={[styles.eggTimer1, styles.lTypo]}>How-Tos</Text>
          </View>
          <View style={[styles.timer, styles.timerFlexBox]}>
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
        style={[styles.styleSoftBoiledStepsItem, styles.vectorIconPosition]}
      />
      <View style={[styles.instructions1, styles.timerPosition]}>
        <View style={[styles.title1, styles.title1FlexBox]}>
          <View style={styles.stepsWrapper}>
            <Text style={[styles.steps, styles.mFlexBox]}>Steps</Text>
          </View>
          <View style={styles.title1FlexBox}>
            <View style={[styles.frameContainer, styles.timerParentFlexBox]}>
              <View style={[styles.wrapper, styles.wrapperLayout]}>
                <Text style={[styles.text2, styles.mFlexBox]}>1</Text>
              </View>
              <Text style={[styles.bodyCopy, styles.bodyFlexBox]}>
                In a saucepan, bring 4 inches of water to a boil and then reduce
                to a simmer.
              </Text>
            </View>
            <View style={[styles.frameContainer, styles.timerParentFlexBox]}>
              <View style={[styles.container, styles.wrapperLayout]}>
                <Text style={[styles.text2, styles.mFlexBox]}>2</Text>
              </View>
              <Text
                style={[styles.bodyCopy, styles.bodyFlexBox]}
              >{`Using a slotted spoon lower eggs into simmering water. `}</Text>
            </View>
            <View style={[styles.frameContainer, styles.timerParentFlexBox]}>
              <View style={[styles.container, styles.wrapperLayout]}>
                <Text style={[styles.text2, styles.mFlexBox]}>3</Text>
              </View>
              <Text style={styles.bodyFlexBox}>
                <Text style={styles.bodyCopyTxtContainer}>
                  <Text
                    style={styles.coverAndSimmer}
                  >{`Cover and simmer for `}</Text>
                  <Text style={styles.mTypo}>3 minutes</Text>
                  <Text
                    style={styles.coverAndSimmer}
                  >{` for a soft boil egg and `}</Text>
                  <Text style={styles.mTypo}>{`6 minutes `}</Text>
                  <Text
                    style={styles.coverAndSimmer}
                  >{`for a jammy egg. `}</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.frameContainer, styles.timerParentFlexBox]}>
              <View style={[styles.container, styles.wrapperLayout]}>
                <Text style={[styles.text2, styles.mFlexBox]}>4</Text>
              </View>
              <Text style={[styles.bodyCopy, styles.bodyFlexBox]}>
                Run eggs under cold water or place in an ice bath to stop
                cooking.
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.xCircleIcon, styles.xCircleIconPosition]}
          contentFit="cover"
          source={require("../assets/xcircle1.png")}
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
  timerPosition: {
    left: "50%",
    position: "absolute",
  },
  navigationPosition: {
    marginLeft: -195,
    width: 390,
    backgroundColor: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  mFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  timerLayout: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
  },
  vectorIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
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
    overflow: "hidden",
  },
  timerParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  howDoYouClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  btnLayout: {
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 358,
  },
  mTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  timerFlexBox: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    gap: Gap.gap_2xs,
    alignItems: "center",
    overflow: "hidden",
  },
  sizeParentLayout: {
    paddingVertical: Padding.p_4xs,
    height: 46,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  component11FlexBox: {
    gap: Gap.gap_xs,
    alignItems: "center",
  },
  title1Position: {
    zIndex: 0,
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
  xCircleIconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  wrapperLayout1: {
    width: 55,
    justifyContent: "center",
    height: 55,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
  },
  title1FlexBox: {
    gap: Gap.gap_md,
    alignSelf: "stretch",
  },
  wrapperLayout: {
    paddingVertical: Padding.p_8xs,
    height: 31,
    borderRadius: Border.br_base_5,
    backgroundColor: Color.colorGold_100,
    justifyContent: "center",
    alignItems: "center",
    width: 31,
  },
  bodyFlexBox: {
    width: 262,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  hardBoiledBackground2Icon: {
    marginTop: -612.4,
    marginLeft: -283,
    width: 566,
    height: 1225,
    top: "50%",
  },
  styleSoftBoiledStepsChild: {
    marginTop: -422,
    opacity: 0.3,
    width: 390,
    backgroundColor: Color.colorWhite,
    top: "50%",
    height: 844,
  },
  softBoiledEggs: {
    top: 137,
    width: 358,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    left: 16,
    position: "absolute",
  },
  eggTimer: {
    marginLeft: -22.5,
    top: 14,
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
    marginLeft: -61,
    top: 50,
    width: 121,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  btnBackArrowIcon: {
    top: 49,
    left: 16,
    position: "absolute",
  },
  howDoYou: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
  },
  howDoYouLikeYourEggsWrapper: {
    alignItems: "center",
    width: 358,
  },
  title: {
    flexDirection: "row",
    width: 358,
  },
  checkCircleIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  minuteEggs: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  checkCircleParent: {
    width: 180,
    gap: Gap.gap_2xs,
    alignItems: "center",
    flexDirection: "row",
  },
  btnOption2: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    height: 55,
  },
  btnOption3: {
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    height: 55,
  },
  startTimer: {
    color: Color.colorWhite,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_base,
  },
  btnStartTimer: {
    backgroundColor: Color.colorBlack,
    paddingHorizontal: Padding.p_base,
    height: 55,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    width: 358,
  },
  timerSelectors: {
    marginLeft: -179,
    bottom: 115,
    gap: Gap.gap_sm,
  },
  instructions: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  instructionsWrapper: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
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
    backgroundColor: Color.colorGold_100,
    paddingVertical: Padding.p_4xs,
    height: 46,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    gap: Gap.gap_2xs,
  },
  m: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.colorBlack,
  },
  mWrapper: {
    backgroundColor: Color.colorWhite,
  },
  lWrapper: {
    backgroundColor: Color.colorGold_100,
  },
  frameParent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  component1Inner: {
    top: 46,
    left: 87,
    opacity: 0,
    alignItems: "center",
  },
  component11: {
    borderRadius: Border.br_81xl,
  },
  btnEggSize: {
    top: 181,
    paddingHorizontal: 0,
    left: 16,
    position: "absolute",
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
  },
  timerParent: {
    height: 67,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: 0,
    alignItems: "center",
    flex: 1,
  },
  navigation: {
    bottom: 0,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  styleSoftBoiledStepsItem: {
    backgroundColor: Color.colorGray,
    width: 390,
    height: 844,
  },
  steps: {
    alignSelf: "stretch",
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    fontSize: FontSize.size_13xl,
    textAlign: "center",
  },
  stepsWrapper: {
    alignSelf: "stretch",
  },
  text2: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
  },
  wrapper: {
    paddingHorizontal: Padding.p_xs,
  },
  bodyCopy: {
    fontFamily: FontFamily.interRegular,
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  container: {
    paddingHorizontal: Padding.p_12xs,
  },
  coverAndSimmer: {
    fontFamily: FontFamily.interRegular,
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
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  instructions1: {
    marginTop: -226.5,
    marginLeft: -178,
    borderRadius: Border.br_xs,
    width: 356,
    paddingVertical: Padding.p_37xl,
    gap: Gap.gap_2xl,
    paddingHorizontal: Padding.p_base,
    top: "50%",
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  styleSoftBoiledSteps: {
    overflow: "hidden",
    height: 844,
    width: "100%",
    flex: 1,
  },
});

export default StyleSoftBoiledSteps;
