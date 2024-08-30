import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Padding,
  Border,
  FontFamily,
  FontSize,
  Color,
  Gap,
} from "../GlobalStyles";

const StyleTimer = () => {
  return (
    <View style={styles.styleTimer1}>
      <View style={[styles.background, styles.backgroundLayout]}>
        <Image
          style={[styles.background, styles.backgroundLayout]}
          contentFit="cover"
          source={require("../assets/hardboiledbackground-1.png")}
        />
        <View style={[styles.backgroundChild, styles.backgroundLayout]} />
        <LinearGradient
          style={[styles.backgroundItem, styles.vectorIconPosition]}
          locations={[0, 1]}
          colors={["rgba(255, 255, 255, 0)", "#fff"]}
        />
      </View>
      <Text style={[styles.poachedEggs, styles.poachedEggsPosition]}>
        Poached Eggs
      </Text>
      <View style={[styles.logo, styles.iconLayout]}>
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
          style={[styles.vectorIcon5, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <Image
        style={[styles.btnBackArrowIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/btnback-arrow.png")}
      />
      <View style={styles.timerSelectors}>
        <View style={[styles.btnOption3, styles.btnSpaceBlock]}>
          <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
        </View>
        <View style={[styles.btnStartTimer, styles.timerSpaceBlock]}>
          <Text style={[styles.pauseTimer, styles.cancelTypo]}>
            Pause Timer
          </Text>
        </View>
      </View>
      <View style={[styles.btnOption31, styles.timer1SpaceBlock]}>
        <View
          style={[styles.mediumDonenessWrapper, styles.btnStartTimerFlexBox]}
        >
          <Text style={[styles.mediumDoneness, styles.cancelTypo]}>
            Medium Doneness
          </Text>
        </View>
      </View>
      <View style={[styles.timer, styles.timerPosition]}>
        <Image
          style={[styles.timerChild, styles.timerPosition]}
          contentFit="cover"
          source={require("../assets/frame-1771.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>3:00</Text>
        <Image
          style={styles.timerItem}
          contentFit="cover"
          source={require("../assets/group-175.png")}
        />
      </View>
      <View style={[styles.navigation, styles.btnOption3FlexBox]}>
        <View style={styles.timerParent}>
          <View style={[styles.timer1, styles.timer1SpaceBlock]}>
            <Image
              style={styles.timerInner}
              contentFit="cover"
              source={require("../assets/frame-189.png")}
            />
            <Text style={[styles.eggTimer1, styles.textTypo]}>Egg timer</Text>
          </View>
          <View style={[styles.timer1, styles.timer1SpaceBlock]}>
            <Image
              style={styles.timerInner}
              contentFit="cover"
              source={require("../assets/frame-190.png")}
            />
            <Text style={[styles.eggTimer1, styles.textTypo]}>Recipes</Text>
          </View>
          <View style={[styles.timer1, styles.timer1SpaceBlock]}>
            <Image
              style={styles.timerInner}
              contentFit="cover"
              source={require("../assets/frame-191.png")}
            />
            <Text style={[styles.eggTimer1, styles.textTypo]}>How-Tos</Text>
          </View>
          <View style={[styles.timer1, styles.timer1SpaceBlock]}>
            <Image
              style={styles.timerInner}
              contentFit="cover"
              source={require("../assets/frame-1911.png")}
            />
            <Text style={[styles.eggTimer1, styles.textTypo]}>sign up</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundLayout: {
    width: 390,
    position: "absolute",
  },
  vectorIconPosition: {
    left: 0,
    top: 0,
  },
  poachedEggsPosition: {
    width: 358,
    left: 16,
    position: "absolute",
  },
  iconLayout: {
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
  btnSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
  },
  cancelTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  timerSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  timer1SpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
  },
  btnStartTimerFlexBox: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  timerPosition: {
    height: 370,
    width: 370,
    marginLeft: -185,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "center",
    fontWeight: "700",
    color: Color.colorBlack,
  },
  btnOption3FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  backgroundItem: {
    backgroundColor: "transparent",
    width: 390,
    position: "absolute",
    height: 844,
    top: 0,
  },
  poachedEggs: {
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
  btnBackArrowIcon: {
    top: 49,
    width: 40,
    left: 16,
    height: 40,
    overflow: "hidden",
  },
  cancel: {
    lineHeight: 20,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  btnOption3: {
    flex: 0.8849,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 55,
    backgroundColor: Color.colorWhitesmoke_200,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
  },
  pauseTimer: {
    color: Color.colorWhite,
    lineHeight: 20,
    textAlign: "center",
  },
  btnStartTimer: {
    backgroundColor: Color.colorBlack,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    height: 55,
    flex: 1,
    paddingVertical: Padding.p_5xs,
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
  mediumDoneness: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  mediumDonenessWrapper: {
    paddingVertical: Padding.p_4xs,
    backgroundColor: Color.colorWhite,
  },
  btnOption31: {
    top: 181,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    width: 358,
    left: 16,
    position: "absolute",
  },
  timerChild: {
    marginTop: -185,
    top: "50%",
  },
  text: {
    marginTop: -40,
    marginLeft: -88,
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
    gap: Gap.gap_2xs,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  timerParent: {
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
    position: "absolute",
    left: "50%",
    marginLeft: -195,
  },
  styleTimer1: {
    width: "100%",
    overflow: "hidden",
    height: 844,
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default StyleTimer;
