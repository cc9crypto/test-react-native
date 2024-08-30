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

const StylePoached1 = () => {
  return (
    <View style={styles.stylePoached}>
      <View
        style={[styles.hardBoiledBackground1Parent, styles.groupChildPosition]}
      >
        <Image
          style={[
            styles.hardBoiledBackground1Parent,
            styles.groupChildPosition,
          ]}
          contentFit="cover"
          source={require("../assets/hardboiledbackground-1.png")}
        />
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Text style={[styles.poachedEggs, styles.mFlexBox]}>Poached Eggs</Text>
      <View style={[styles.logo, styles.timerPosition]}>
        <Text style={[styles.eggTimer, styles.timerLayout]}>Egg Timer</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector.png")}
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
          style={[styles.vectorIcon5, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <Image
        style={[styles.btnBackArrowIcon, styles.btnPosition]}
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
            <Text style={[styles.howDoYou, styles.softClr]}>
              How do you like your eggs?
            </Text>
          </View>
        </View>
        <View style={[styles.btnOption1, styles.btnLayout]}>
          <Text style={[styles.soft, styles.mTypo]}>Soft</Text>
          <Text style={[styles.soft, styles.mTypo]}>2:00</Text>
        </View>
        <View style={[styles.btnOption2, styles.btnLayout]}>
          <View style={styles.checkCircleParent}>
            <Image
              style={styles.checkCircleIcon}
              contentFit="cover"
              source={require("../assets/checkcircle.png")}
            />
            <Text style={[styles.soft, styles.mTypo]}>Medium</Text>
          </View>
          <Text style={[styles.soft, styles.mTypo]}>3:00</Text>
        </View>
        <View style={[styles.btnOption1, styles.btnLayout]}>
          <Text style={[styles.soft, styles.mTypo]}>Hard</Text>
          <Text style={[styles.soft, styles.mTypo]}>4:00</Text>
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
          <View style={[styles.sizeParent, styles.sizeParentLayout]}>
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
          <View style={styles.component1Inner}>
            <View style={[styles.frameParent, styles.component11FlexBox]}>
              <View style={[styles.mWrapper, styles.wrapperLayout]}>
                <Text style={[styles.m, styles.mTypo]}>M</Text>
              </View>
              <View style={[styles.lWrapper, styles.wrapperLayout]}>
                <Text style={[styles.m, styles.mTypo]}>L</Text>
              </View>
              <View style={[styles.mWrapper, styles.wrapperLayout]}>
                <Text style={[styles.m, styles.mTypo]}>XL</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.navigation, styles.groupChildPosition]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 390,
    marginLeft: -195,
    left: "50%",
    position: "absolute",
  },
  mFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  timerPosition: {
    left: "50%",
    position: "absolute",
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
  btnPosition: {
    left: 16,
    position: "absolute",
  },
  timerParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  softClr: {
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
    alignItems: "center",
    flexDirection: "row",
  },
  component11FlexBox: {
    gap: Gap.gap_xs,
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
  wrapperLayout: {
    width: 55,
    justifyContent: "center",
    height: 55,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
  },
  hardBoiledBackground1Parent: {
    top: "50%",
    marginTop: -422,
    width: 390,
    marginLeft: -195,
    height: 844,
  },
  groupChild: {
    opacity: 0.3,
    backgroundColor: Color.colorWhite,
    top: "50%",
    marginTop: -422,
    width: 390,
    marginLeft: -195,
    height: 844,
  },
  poachedEggs: {
    top: 137,
    fontSize: FontSize.size_13xl,
    width: 358,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
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
    height: 40,
  },
  logo: {
    marginLeft: -61,
    top: 50,
    width: 121,
    height: 40,
  },
  btnBackArrowIcon: {
    top: 49,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  howDoYou: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
  },
  howDoYouLikeYourEggsWrapper: {
    width: 358,
  },
  title: {
    flexDirection: "row",
    width: 358,
  },
  soft: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  btnOption1: {
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.colorWhite,
    height: 55,
    alignItems: "center",
  },
  checkCircleIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
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
    backgroundColor: Color.colorWhite,
    height: 55,
    alignItems: "center",
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
    zIndex: 0,
    backgroundColor: Color.colorGold_100,
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
    zIndex: 1,
    alignItems: "center",
    position: "absolute",
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
    flex: 1,
    justifyContent: "space-between",
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
    marginLeft: -195,
  },
  stylePoached: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: "100%",
    overflow: "hidden",
    height: 844,
    flex: 1,
  },
});

export default StylePoached1;
