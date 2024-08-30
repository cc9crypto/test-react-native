import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

const EggTimerHome = () => {
  return (
    <View style={styles.eggTimerHome}>
      <View style={styles.content}>
        <View
          style={[styles.eggStyleSelection, styles.eggStyleSelectionLayout]}
        >
          <View style={styles.parentFlexBox}>
            <View style={styles.title}>
              <View style={styles.letsGetCrackingParent}>
                <Text style={[styles.letsGetCracking, styles.eggTimer1Typo]}>
                  Let’s get cracking!
                </Text>
                <Text style={styles.chooseYourEgg}>Choose your egg style</Text>
              </View>
            </View>
            <View style={styles.parentFlexBox}>
              <View style={[styles.frameParent, styles.navigationFlexBox]}>
                <View style={styles.btnHardBoiledParent}>
                  <Image
                    style={[styles.btnHardBoiled, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/btn--hard-boiled.png")}
                  />
                  <Text style={styles.eggTimerTypo}>Hard Boiled</Text>
                </View>
                <View style={styles.btnHardBoiledParent}>
                  <Image
                    style={[styles.btnHardBoiled, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/btn--hard-boiled1.png")}
                  />
                  <Text style={styles.eggTimerTypo}>Soft Boiled</Text>
                </View>
              </View>
              <View style={[styles.frameParent, styles.navigationFlexBox]}>
                <View style={styles.btnHardBoiledParent}>
                  <Image
                    style={[styles.btnHardBoiled, styles.btnLayout]}
                    contentFit="cover"
                    source={require("../assets/btn--hard-boiled2.png")}
                  />
                  <Text style={styles.eggTimerTypo}>Poached</Text>
                </View>
                <View style={styles.btnHardBoiledParent}>
                  <View style={[styles.btnHardBoiled3, styles.btnBg]}>
                    <View
                      style={[styles.basicClockWrapper, styles.logoPosition]}
                    >
                      <Image
                        style={styles.basicClock}
                        contentFit="cover"
                        source={require("../assets/basic--clock1.png")}
                      />
                    </View>
                  </View>
                  <Text style={styles.eggTimerTypo}>Custom Timer</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.eggceptionalVideos, styles.eggStyleSelectionLayout]}
        >
          <View style={styles.titleGroup}>
            <View style={styles.title1}>
              <View style={styles.eggceptionalVideosWrapper}>
                <Text style={[styles.letsGetCracking, styles.eggTimer1Typo]}>
                  Eggceptional Videos
                </Text>
              </View>
              <Text style={styles.chooseYourEgg}>
                Watch the video. See how it’s done!
              </Text>
            </View>
            <View style={styles.btnVideoHardBoil}>
              <View style={styles.btnHardBoiledParent1}>
                <Image
                  style={styles.btnHardBoiled4}
                  contentFit="cover"
                  source={require("../assets/btn--hard-boiled3.png")}
                />
                <View style={styles.btnHardBoiled5}>
                  <Image
                    style={styles.btnHardBoiledChild}
                    contentFit="cover"
                    source={require("../assets/frame-143.png")}
                  />
                  <Text style={[styles.howToHard, styles.howTypo]}>
                    How to Hard Boil Eggs
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.btnVideoHardBoil}>
              <View style={styles.btnHardBoiledParent1}>
                <Image
                  style={styles.btnHardBoiled4}
                  contentFit="cover"
                  source={require("../assets/btn--hard-boiled4.png")}
                />
                <View style={styles.btnHardBoiled5}>
                  <Image
                    style={styles.btnHardBoiledChild}
                    contentFit="cover"
                    source={require("../assets/frame-143.png")}
                  />
                  <Text style={[styles.howToHard, styles.howTypo]}>
                    How to Soft Boil Eggs
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.btnVideoHardBoil}>
              <View style={styles.btnHardBoiledParent1}>
                <Image
                  style={styles.btnHardBoiled4}
                  contentFit="cover"
                  source={require("../assets/btn--hard-boiled5.png")}
                />
                <View style={styles.btnHardBoiled5}>
                  <Image
                    style={styles.btnHardBoiledChild}
                    contentFit="cover"
                    source={require("../assets/frame-143.png")}
                  />
                  <Text style={[styles.howToHard, styles.howTypo]}>
                    How to Poach Eggs
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.btnStartTimer, styles.timerFlexBox]}>
              <Text style={styles.howTypo}>More How-To Videos</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.logo, styles.logoPosition]}>
        <Text style={[styles.eggTimer, styles.logoPosition]}>Egg Timer</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector10.png")}
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
          style={[styles.vectorIcon5, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <View style={[styles.navigation, styles.logoPosition]}>
        <View style={styles.navGroup}>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-1891.png")}
            />
            <Text style={[styles.eggTimer1, styles.eggTimer1Typo]}>
              Egg timer
            </Text>
          </View>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-1901.png")}
            />
            <Text style={[styles.eggTimer1, styles.eggTimer1Typo]}>
              Recipes
            </Text>
          </View>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-1913.png")}
            />
            <Text style={[styles.eggTimer1, styles.eggTimer1Typo]}>
              How-Tos
            </Text>
          </View>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-1914.png")}
            />
            <Text style={[styles.eggTimer1, styles.eggTimer1Typo]}>
              sign up
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eggStyleSelectionLayout: {
    borderRadius: Border.br_xs,
    width: 358,
  },
  eggTimer1Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
  },
  navigationFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  btnLayout: {
    height: 155,
    alignSelf: "stretch",
  },
  btnBg: {
    backgroundColor: Color.colorGold_100,
    borderRadius: Border.br_81xl,
  },
  logoPosition: {
    left: "50%",
    position: "absolute",
  },
  howTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  timerFlexBox: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
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
  letsGetCracking: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.kaleko205Round,
    color: Color.colorBlack,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  chooseYourEgg: {
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  letsGetCrackingParent: {
    gap: Gap.gap_2xs,
    alignItems: "center",
    width: 358,
  },
  title: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  btnHardBoiled: {
    maxWidth: "100%",
    borderRadius: Border.br_81xl,
    height: 155,
    overflow: "hidden",
    width: "100%",
  },
  eggTimerTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
  },
  btnHardBoiledParent: {
    gap: Gap.gap_2xs,
    alignItems: "center",
    flex: 1,
  },
  frameParent: {
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  basicClock: {
    width: 70,
    height: 70,
  },
  basicClockWrapper: {
    marginTop: -33.7,
    marginLeft: -33.7,
    top: "50%",
    width: 68,
    height: 68,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  btnHardBoiled3: {
    height: 155,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  eggStyleSelection: {
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: Padding.p_base,
    width: 358,
    backgroundColor: Color.colorWhite,
  },
  eggceptionalVideosWrapper: {
    alignItems: "center",
    width: 358,
  },
  title1: {
    gap: Gap.gap_2xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
  btnHardBoiled4: {
    borderTopLeftRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    width: 84,
    height: 80,
  },
  btnHardBoiledChild: {
    width: 28,
    height: 29,
    overflow: "hidden",
  },
  howToHard: {
    flex: 1,
  },
  btnHardBoiled5: {
    borderTopRightRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    paddingVertical: Padding.p_3xs,
    height: 80,
    flexDirection: "row",
    gap: Gap.gap_2xs,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  btnHardBoiledParent1: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  btnVideoHardBoil: {
    alignSelf: "stretch",
  },
  btnStartTimer: {
    height: 55,
    backgroundColor: Color.colorGold_100,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  titleGroup: {
    gap: Gap.gap_md,
    alignSelf: "stretch",
  },
  eggceptionalVideos: {
    width: 358,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_xs,
  },
  content: {
    top: 114,
    left: 16,
    gap: Gap.gap_xl,
    position: "absolute",
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
    overflow: "hidden",
  },
  timerChild: {
    width: 27,
    height: 27,
  },
  eggTimer1: {
    fontSize: FontSize.size_3xs,
    textTransform: "uppercase",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    fontWeight: "700",
  },
  timer: {
    paddingHorizontal: 0,
    gap: Gap.gap_2xs,
  },
  navGroup: {
    height: 67,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  navigation: {
    marginLeft: -195,
    bottom: 0,
    width: 390,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  eggTimerHome: {
    height: 1232,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default EggTimerHome;
