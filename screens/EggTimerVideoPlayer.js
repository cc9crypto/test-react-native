import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  Gap,
  Border,
  FontFamily,
  FontSize,
  Padding,
} from "../GlobalStyles";

const EggTimerVideoPlayer = () => {
  return (
    <View style={styles.eggTimerVideoPlayer}>
      <View style={styles.content}>
        <View style={styles.eggStyleSelection}>
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
              <View style={[styles.frameParent, styles.parentFlexBox]}>
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
              <View style={[styles.frameParent, styles.parentFlexBox]}>
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
                    <View style={styles.basicClockWrapper}>
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
        <View style={styles.eggceptionalVideos}>
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
                <ImageBackground
                  style={[styles.btnHardBoiled4, styles.btnFlexBox]}
                  resizeMode="cover"
                  source={require("../assets/btnhardboiled.png")}
                >
                  <Image
                    style={styles.btnHardBoiledChild}
                    contentFit="cover"
                    source={require("../assets/frame-1431.png")}
                  />
                </ImageBackground>
                <View style={[styles.btnHardBoiled5, styles.btnFlexBox]}>
                  <Text style={[styles.howToHard, styles.howTypo]}>
                    How to Hard Boil Eggs
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.btnVideoHardBoil}>
              <View style={styles.btnHardBoiledParent1}>
                <ImageBackground
                  style={[styles.btnHardBoiled4, styles.btnFlexBox]}
                  resizeMode="cover"
                  source={require("../assets/btnhardboiled1.png")}
                >
                  <Image
                    style={styles.btnHardBoiledChild}
                    contentFit="cover"
                    source={require("../assets/frame-1431.png")}
                  />
                </ImageBackground>
                <View style={[styles.btnHardBoiled5, styles.btnFlexBox]}>
                  <Text style={[styles.howToHard, styles.howTypo]}>
                    How to Soft Boil Eggs
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.btnVideoHardBoil}>
              <View style={styles.btnHardBoiledParent1}>
                <ImageBackground
                  style={[styles.btnHardBoiled4, styles.btnFlexBox]}
                  resizeMode="cover"
                  source={require("../assets/btnhardboiled2.png")}
                >
                  <Image
                    style={styles.btnHardBoiledChild}
                    contentFit="cover"
                    source={require("../assets/frame-1431.png")}
                  />
                </ImageBackground>
                <View style={[styles.btnHardBoiled5, styles.btnFlexBox]}>
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
      <View style={styles.logo}>
        <Text style={[styles.eggTimer, styles.eggTimerTypo]}>Egg Timer</Text>
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
          style={[styles.vectorIcon5, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <View style={[styles.navigation, styles.navigationLayout]}>
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
              source={require("../assets/frame-190.png")}
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
              source={require("../assets/frame-1911.png")}
            />
            <Text style={[styles.eggTimer1, styles.eggTimer1Typo]}>
              sign up
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.eggTimerVideoPlayerChild, styles.navigationLayout]}
      />
      <View style={styles.tiktokVideo}>
        <View
          style={[styles.tiktokVideoChild, styles.tiktokVideoChildPosition]}
        />
        <View style={styles.videoControls}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
          <View style={styles.timeline}>
            <View style={[styles.timelineChild, styles.timelinePosition]} />
            <View style={[styles.timelineItem, styles.timelinePosition]} />
          </View>
          <Text style={[styles.text, styles.howTypo]}>0:15</Text>
        </View>
        <Image
          style={[
            styles.screenshot20240521At336,
            styles.tiktokVideoChildPosition,
          ]}
          contentFit="cover"
          source={require("../assets/screenshot-20240521-at-336-1.png")}
        />
        <Image
          style={styles.xCircleIcon}
          contentFit="cover"
          source={require("../assets/xcircle.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eggTimer1Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
  },
  parentFlexBox: {
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  btnLayout: {
    height: 155,
    alignSelf: "stretch",
  },
  btnBg: {
    backgroundColor: Color.colorGold_100,
    borderRadius: Border.br_81xl,
  },
  btnFlexBox: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
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
  eggTimerTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
  },
  vectorIconPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 5,
    width: 2,
    top: 17,
    position: "absolute",
  },
  navigationLayout: {
    width: 390,
    position: "absolute",
  },
  tiktokVideoChildPosition: {
    marginTop: -359.5,
    width: 366,
    marginLeft: -183,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  timelinePosition: {
    marginLeft: -115,
    height: 10,
    top: 0,
    left: "50%",
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
    overflow: "hidden",
    borderRadius: Border.br_81xl,
    height: 155,
    width: "100%",
  },
  btnHardBoiledParent: {
    gap: Gap.gap_2xs,
    alignItems: "center",
    flex: 1,
  },
  frameParent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  basicClock: {
    width: 70,
    height: 70,
  },
  basicClockWrapper: {
    marginTop: -33.7,
    marginLeft: -33.7,
    width: 68,
    height: 68,
    left: "50%",
    top: "50%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  btnHardBoiled3: {
    height: 155,
    alignSelf: "stretch",
  },
  eggStyleSelection: {
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: Padding.p_base,
    width: 358,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
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
  btnHardBoiledChild: {
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  btnHardBoiled4: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
  },
  howToHard: {
    flex: 1,
  },
  btnHardBoiled5: {
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    paddingLeft: Padding.p_5xl,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_3xs,
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
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  content: {
    top: -274,
    left: 16,
    gap: Gap.gap_xl,
    position: "absolute",
  },
  eggTimer: {
    marginLeft: -22.5,
    top: 14,
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    width: 30,
    height: 39,
    left: 0,
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
    height: 40,
  },
  logo: {
    marginLeft: -61,
    top: -332,
    width: 121,
    height: 40,
    left: "50%",
    position: "absolute",
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
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    left: "50%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  eggTimerVideoPlayerChild: {
    top: -382,
    backgroundColor: Color.colorGray,
    height: 1226,
    left: 0,
  },
  tiktokVideoChild: {
    height: 719,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
  },
  icon: {
    height: "100%",
    width: "10.09%",
    top: "0%",
    right: "89.91%",
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  timelineChild: {
    width: 230,
    marginLeft: -115,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  timelineItem: {
    borderTopLeftRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 61,
  },
  timeline: {
    marginLeft: -115.5,
    top: 11,
    height: 10,
    width: 230,
    left: "50%",
    position: "absolute",
  },
  text: {
    top: 5,
    left: 293,
    position: "absolute",
  },
  videoControls: {
    height: "4.59%",
    width: "89.34%",
    top: "93.05%",
    right: "5.46%",
    bottom: "2.36%",
    left: "5.19%",
    position: "absolute",
  },
  screenshot20240521At336: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    height: 651,
  },
  xCircleIcon: {
    top: 10,
    left: 316,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  tiktokVideo: {
    marginTop: -360,
    height: 719,
    width: 366,
    marginLeft: -183,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  eggTimerVideoPlayer: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default EggTimerVideoPlayer;
