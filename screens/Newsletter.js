import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Gap,
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const Newsletter = () => {
  return (
    <View style={styles.newsletter}>
      <View style={[styles.recipeLandingPage, styles.recipePosition1]}>
        <View style={[styles.title, styles.titleFlexBox]}>
          <Text style={styles.subscribeToThe}>
            Subscribe to the Eggs.ca Newsletter
          </Text>
          <Text style={[styles.bodyCopy, styles.bodyTypo]}>
            Get egg-citing recipes, how-tos, egg 101s and so much more delivered
            to your inbox every month!
          </Text>
          <View style={[styles.frameParent, styles.titleFlexBox]}>
            <View style={styles.searchWrapper}>
              <View style={styles.searchPosition}>
                <View style={[styles.searchChild, styles.searchPosition]} />
                <Text style={[styles.searchEggsca, styles.submitTypo]}>
                  Your Email Address
                </Text>
              </View>
            </View>
            <View style={[styles.button, styles.logoFlexBox]}>
              <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
            </View>
          </View>
          <Text style={[styles.bodyCopy1, styles.bodyTypo]}>
            As a subscriber to eggs.ca, you may receive emails containing
            delicious recipes, nutrition tips, contests and promotions. You may
            unsubscribe at any time.
          </Text>
        </View>
        <Image
          style={styles.mobileNavigationClosed}
          contentFit="cover"
          source={require("../assets/mobile-navigation--closed.png")}
        />
      </View>
      <View style={[styles.recipeHeader, styles.recipePosition]}>
        <View style={[styles.recipeHeaderChild, styles.recipePosition]} />
        <View style={[styles.recipeHeaderItem, styles.logoPosition]} />
        <View style={[styles.recipeHeaderInner, styles.recipePosition1]} />
        <View style={[styles.logo, styles.logoFlexBox]}>
          <Image
            style={styles.clipboardIcon}
            contentFit="cover"
            source={require("../assets/clipboard.png")}
          />
          <Text style={[styles.newsletterSignUp, styles.submitTypo]}>
            Newsletter Sign-up
          </Text>
        </View>
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
  recipePosition1: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  titleFlexBox: {
    gap: Gap.gap_sm,
    alignItems: "center",
  },
  bodyTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  searchPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  submitTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  logoFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  recipePosition: {
    height: 99,
    top: 0,
    width: 390,
    left: 0,
    position: "absolute",
  },
  logoPosition: {
    left: "50%",
    position: "absolute",
  },
  subscribeToThe: {
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    alignSelf: "stretch",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
  },
  bodyCopy: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
  },
  searchChild: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
  },
  searchEggsca: {
    top: 8,
    left: 16,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkgray,
    position: "absolute",
  },
  searchWrapper: {
    height: 48,
    width: 358,
    overflow: "hidden",
  },
  submit: {
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
  button: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 14,
    borderRadius: Border.br_xs,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
  frameParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xl,
  },
  bodyCopy1: {
    fontSize: FontSize.size_sm,
  },
  title: {
    top: 96,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    width: 358,
    left: "50%",
    position: "absolute",
    marginLeft: -179,
    gap: Gap.gap_sm,
    alignItems: "center",
  },
  mobileNavigationClosed: {
    right: "0%",
    left: "0%",
    maxWidth: "100%",
    height: 64,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  recipeLandingPage: {
    top: 99,
    height: 745,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  recipeHeaderChild: {
    backgroundColor: Color.colorBlack,
  },
  recipeHeaderItem: {
    marginTop: -17.5,
    marginLeft: -180,
    top: "50%",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: Color.colorSilver,
    width: 360,
    height: 67,
  },
  recipeHeaderInner: {
    top: 39,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 60,
  },
  clipboardIcon: {
    width: 32,
    height: 30,
    overflow: "hidden",
  },
  newsletterSignUp: {
    lineHeight: 20,
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  logo: {
    marginLeft: -100,
    top: 54,
    gap: Gap.gap_2xs,
    left: "50%",
    position: "absolute",
  },
  xCircleIcon: {
    top: 49,
    right: 16,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  recipeHeader: {
    overflow: "hidden",
  },
  newsletter: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorBlack,
  },
});

export default Newsletter;
