import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  Gap,
  Padding,
  FontSize,
  Color,
  FontFamily,
  Border,
} from "../GlobalStyles";

const HowTos = () => {
  return (
    <View style={styles.howTos}>
      <View style={styles.eggs101}>
        <View style={[styles.eggs101Page, styles.eggs101PageFlexBox]}>
          <Image
            style={styles.mobileNavigationClosed}
            contentFit="cover"
            source={require("../assets/mobile-navigation--closed1.png")}
          />
          <View style={[styles.title, styles.parentFlexBox]}>
            <Text style={styles.eggs1011}>Eggs 101</Text>
            <Text style={styles.wantToMaster}>
              Want to master the art of meringues or learn how to poach an egg
              like a pro? Our how-to articles and videos have everything you
              need to become a certified eggs-pert.
            </Text>
          </View>
          <View style={[styles.howTo, styles.howToSpaceBlock]}>
            <View style={styles.footerNavFlexBox}>
              <Text style={[styles.fromOurHow, styles.fromOurHowTypo]}>
                From Our How To Series
              </Text>
              <View style={styles.eggs101PageFlexBox}>
                <View style={styles.recipe2xOpen}>
                  <Image
                    style={[styles.imageIcon, styles.imageIconLayout]}
                    contentFit="cover"
                    source={require("../assets/image32.png")}
                  />
                  <View
                    style={[
                      styles.howToMakeHollandaiseSauceParent,
                      styles.howParentSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.howToMake, styles.recipesTypo]}>
                      How to Make Hollandaise Sauce
                    </Text>
                    <Text style={[styles.bodyCopy, styles.bodyTypo]}>
                      Not just for eggs Benedict, hollandaise sauce is delicious
                      drizzled over many seafood and vegetable dishes, including
                      salmon and asparagus!
                    </Text>
                  </View>
                </View>
                <View style={styles.recipe2xOpen}>
                  <Image
                    style={[styles.imageIcon, styles.imageIconLayout]}
                    contentFit="cover"
                    source={require("../assets/image33.png")}
                  />
                  <View
                    style={[
                      styles.howToMakeHollandaiseSauceParent,
                      styles.howParentSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.howToMake, styles.recipesTypo]}>
                      How to Soft Boil Eggs
                    </Text>
                    <Text style={[styles.bodyCopy, styles.bodyTypo]}>
                      Soft boiled eggs are a perfect way to enjoy eggs, and take
                      virtually no time to make.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.getCraftyForHalloween}>
            <View style={[styles.recipe2xOpen2, styles.topArticles2Position]}>
              <Image
                style={[styles.imageIcon2, styles.imageIconPosition]}
                contentFit="cover"
                source={require("../assets/image34.png")}
              />
              <View
                style={[
                  styles.eggCartonPumpkinCraftForKParent,
                  styles.eggParentPosition,
                ]}
              >
                <Text style={styles.eggCartonPumpkin}>
                  Egg Carton Pumpkin Craft For Kids
                </Text>
                <Text style={[styles.bodyCopy2, styles.bodyTypo]}>
                  Egg cartons are painted and glued to make a crafty
                  Jack-O-Lantern.
                </Text>
                <View style={[styles.buttons, styles.buttonsSpaceBlock]}>
                  <Text style={[styles.seeAll, styles.seeTypo]}>
                    Learn More
                  </Text>
                </View>
              </View>
              <View style={styles.badge}>
                <Image
                  style={styles.editorSmile}
                  contentFit="cover"
                  source={require("../assets/editor--smile.png")}
                />
                <Text style={[styles.kidApproved, styles.howTos1Layout]}>
                  Kid Approved
                </Text>
              </View>
            </View>
            <Text style={[styles.getCraftyFor, styles.fromOurHowTypo]}>
              Get Crafty for Halloween
            </Text>
          </View>
          <View style={styles.recipe2xOpen}>
            <Image
              style={styles.bannerImageIcon}
              contentFit="cover"
              source={require("../assets/banner-image.png")}
            />
            <View
              style={[
                styles.perfectEggsEveryTimeGetParent,
                styles.parentPosition,
              ]}
            >
              <Text style={styles.eggCartonPumpkin}>
                Perfect eggs. Every time. Get the app.
              </Text>
              <View style={[styles.buttons, styles.buttonsSpaceBlock]}>
                <Text style={[styles.seeAll, styles.seeTypo]}>
                  Download Now
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.topArticlesParent}>
            <View style={[styles.topArticles, styles.howToSpaceBlock]}>
              <View style={styles.footerNavFlexBox}>
                <View style={styles.topArticlesWrapper}>
                  <Text
                    style={[styles.topArticles2, styles.topArticles2Position]}
                  >
                    Top Articles
                  </Text>
                </View>
                <View style={styles.eggs101PageFlexBox}>
                  <View style={styles.recipe2xOpen3}>
                    <Image
                      style={[styles.imageIcon2, styles.imageIconPosition]}
                      contentFit="cover"
                      source={require("../assets/image35.png")}
                    />
                    <View
                      style={[
                        styles.howToPoachAnEggLikeAProParent,
                        styles.parentPosition,
                      ]}
                    >
                      <Text style={[styles.howToMake, styles.recipesTypo]}>
                        How to Poach an Egg Like a Pro
                      </Text>
                      <Text style={[styles.bodyCopy, styles.bodyTypo]}>
                        With the proper technique and a little practice,
                        poaching an egg is easy.
                      </Text>
                    </View>
                    <Image
                      style={[styles.iconPlayVideo, styles.iconPosition]}
                      contentFit="cover"
                      source={require("../assets/iconplay-video1.png")}
                    />
                  </View>
                  <View style={styles.recipe2xOpen3}>
                    <Image
                      style={[styles.imageIcon2, styles.imageIconPosition]}
                      contentFit="cover"
                      source={require("../assets/image36.png")}
                    />
                    <View
                      style={[
                        styles.howToFryThePerfectEggParent,
                        styles.eggParentPosition,
                      ]}
                    >
                      <Text style={[styles.howToMake, styles.recipesTypo]}>
                        How to Fry the Perfect Egg
                      </Text>
                      <Text style={[styles.bodyCopy, styles.bodyTypo]}>
                        Fried eggs are usually thought of as diner breakfast
                        fare, but they’re a easy way to add protein to all kinds
                        of meals.
                      </Text>
                    </View>
                    <Image
                      style={[styles.iconPlayVideo1, styles.iconPosition]}
                      contentFit="cover"
                      source={require("../assets/iconplay-video1.png")}
                    />
                  </View>
                  <View style={styles.recipe2xOpen3}>
                    <Image
                      style={[styles.imageIcon2, styles.imageIconPosition]}
                      contentFit="cover"
                      source={require("../assets/image37.png")}
                    />
                    <View
                      style={[
                        styles.howToPoachAnEggLikeAProParent,
                        styles.parentPosition,
                      ]}
                    >
                      <Text style={[styles.howToMake, styles.recipesTypo]}>
                        How to Make Scrambled Eggs
                      </Text>
                      <Text style={[styles.bodyCopy, styles.bodyTypo]}>
                        Scrambled eggs are one of the most versatile breakfast
                        dishes to prepare.
                      </Text>
                    </View>
                    <Image
                      style={[styles.iconPlayVideo2, styles.iconPosition]}
                      contentFit="cover"
                      source={require("../assets/iconplay-video1.png")}
                    />
                  </View>
                  <View style={styles.recipe2xOpen3}>
                    <Image
                      style={[styles.imageIcon2, styles.imageIconPosition]}
                      contentFit="cover"
                      source={require("../assets/image38.png")}
                    />
                    <View
                      style={[
                        styles.howToPoachAnEggLikeAProParent,
                        styles.parentPosition,
                      ]}
                    >
                      <Text style={[styles.howToMake, styles.recipesTypo]}>
                        How to Cook the Perfect Omelette
                      </Text>
                      <Text style={[styles.bodyCopy, styles.bodyTypo]}>
                        The omelette is one of the easiest and most inexpensive
                        meals, and it works beautifully for breakfast, lunch or
                        dinner.
                      </Text>
                    </View>
                    <Image
                      style={[styles.iconPlayVideo3, styles.iconPosition]}
                      contentFit="cover"
                      source={require("../assets/iconplay-video1.png")}
                    />
                  </View>
                  <View style={styles.recipe2xOpen3}>
                    <Image
                      style={[styles.imageIcon2, styles.imageIconPosition]}
                      contentFit="cover"
                      source={require("../assets/image39.png")}
                    />
                    <View
                      style={[
                        styles.howToPoachAnEggLikeAProParent,
                        styles.parentPosition,
                      ]}
                    >
                      <Text style={[styles.howToMake, styles.recipesTypo]}>
                        How to Make the Perfect Hard Boiled Egg
                      </Text>
                      <Text style={[styles.bodyCopy, styles.bodyTypo]}>
                        Hard boiled eggs are great food to have on hand as their
                        uses are so versatile.
                      </Text>
                    </View>
                    <Image
                      style={[styles.iconPlayVideo4, styles.iconPosition]}
                      contentFit="cover"
                      source={require("../assets/iconplay-video1.png")}
                    />
                  </View>
                  <View style={styles.recipe2xOpen}>
                    <Image
                      style={[styles.imageIcon8, styles.imageIconPosition]}
                      contentFit="cover"
                      source={require("../assets/image40.png")}
                    />
                    <View
                      style={[
                        styles.howToPeelAHardBoiledEggParent,
                        styles.parentPosition,
                      ]}
                    >
                      <Text style={[styles.howToMake, styles.recipesTypo]}>
                        How to Peel a Hard Boiled Egg
                      </Text>
                      <Text style={[styles.bodyCopy, styles.bodyTypo]}>
                        Peeling hard boiled eggs can be frustrating and time
                        consuming. Here are a few simple tips to make easier
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.buttons2, styles.buttonsSpaceBlock]}>
                  <Text style={[styles.seeAll2, styles.seeTypo]}>
                    More Eggs 101 Articles
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.footerLayout}>
              <View style={[styles.footerChild, styles.footerLayout]} />
              <View
                style={[styles.newsletterSignup, styles.newsletterPosition]}
              >
                <View
                  style={[
                    styles.newsletterSignupChild,
                    styles.newsletterPosition,
                  ]}
                />
                <View style={[styles.search, styles.searchPosition]}>
                  <View style={[styles.searchChild, styles.searchPosition]} />
                  <Image
                    style={[styles.iconArrow, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/iconarrow.png")}
                  />
                  <Text style={styles.enterYourEmail}>
                    Enter Your Email Address
                  </Text>
                </View>
                <Text style={styles.subscribeToThe}>
                  Subscribe to the eggs.ca newsletter
                </Text>
              </View>
              <View style={[styles.footerNav, styles.footerNavFlexBox]}>
                <Text style={[styles.recipes, styles.recipesTypo]}>
                  About Us
                </Text>
                <Text style={[styles.recipes, styles.recipesTypo]}>
                  Contact Us
                </Text>
                <Text style={[styles.recipes, styles.recipesTypo]}>
                  Accessibility
                </Text>
                <Text style={[styles.recipes, styles.recipesTypo]}>FAQ</Text>
                <View style={styles.logoFlexBox}>
                  <Text style={[styles.recipes, styles.recipesTypo]}>
                    International
                  </Text>
                  <Image
                    style={styles.chevronDownIcon}
                    contentFit="cover"
                    source={require("../assets/chevrondown.png")}
                  />
                </View>
              </View>
              <View style={[styles.logoEqaParent, styles.logoLayout]}>
                <Image
                  style={[styles.logoEqaIcon, styles.logoLayout]}
                  contentFit="cover"
                  source={require("../assets/logoeqa.png")}
                />
                <Image
                  style={[styles.efcLogo, styles.logoLayout]}
                  contentFit="cover"
                  source={require("../assets/efc-logo.png")}
                />
              </View>
              <View style={[styles.bottomCredits, styles.bottomPosition]}>
                <Text style={styles.chickenFarme}>
                  © 2023 Egg Farmers of Canada. All rights reserved.
                </Text>
                <View
                  style={[
                    styles.bottomCreditsInner,
                    styles.bottomCreditsInnerLayout,
                  ]}
                >
                  <View
                    style={[styles.chickenFarmeParent, styles.chickenPosition]}
                  >
                    <Text
                      style={[styles.chickenFarme1, styles.chickenPosition]}
                    >
                      Privacy Policy
                    </Text>
                    <Text
                      style={styles.chickenFarme2}
                    >{`Terms & Conditions`}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.socials}>
                <Image
                  style={[styles.iconFacebook, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/iconfacebook.png")}
                />
                <Image
                  style={[styles.iconInstagram, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/iconinstagram.png")}
                />
                <Image
                  style={styles.iconPinterest}
                  contentFit="cover"
                  source={require("../assets/iconpinterest.png")}
                />
                <Image
                  style={styles.iconYoutube}
                  contentFit="cover"
                  source={require("../assets/iconyoutube.png")}
                />
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/icontiktok.png")}
                />
                <Image
                  style={[styles.twitterXIcon, styles.bottomPosition]}
                  contentFit="cover"
                  source={require("../assets/twitter-x.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.recipeHeader, styles.recipePosition]}>
        <View style={[styles.recipeHeaderChild, styles.recipePosition]} />
        <View style={[styles.recipeHeaderItem, styles.bottomPosition]} />
        <View style={[styles.recipeHeaderInner, styles.imageIconPosition]} />
        <View style={[styles.logo, styles.logoFlexBox]}>
          <Image
            style={styles.file02Icon}
            contentFit="cover"
            source={require("../assets/file021.png")}
          />
          <Text style={[styles.howTos1, styles.howTos1Layout]}>How-Tos</Text>
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
  eggs101PageFlexBox: {
    gap: Gap.gap_lg,
    alignItems: "center",
  },
  parentFlexBox: {
    gap: Gap.gap_sm,
    alignItems: "center",
  },
  howToSpaceBlock: {
    paddingVertical: Padding.p_13xl,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  fromOurHowTypo: {
    justifyContent: "center",
    display: "flex",
    height: 24,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    alignItems: "center",
  },
  imageIconLayout: {
    height: 239,
    width: 358,
  },
  howParentSpaceBlock: {
    paddingTop: Padding.p_base,
    gap: Gap.gap_2xs,
  },
  recipesTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
  },
  bodyTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  topArticles2Position: {
    marginLeft: -179,
    left: "50%",
    width: 358,
    position: "absolute",
  },
  imageIconPosition: {
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
  },
  eggParentPosition: {
    paddingHorizontal: Padding.p_base,
    zIndex: 1,
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  buttonsSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    height: 48,
    alignItems: "center",
    overflow: "hidden",
  },
  seeTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  howTos1Layout: {
    lineHeight: 20,
    textAlign: "left",
  },
  parentPosition: {
    paddingBottom: Padding.p_5xl,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_base,
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "4.47%",
    right: "82.12%",
    width: "13.41%",
    maxWidth: "100%",
    zIndex: 2,
    position: "absolute",
    overflow: "hidden",
  },
  footerLayout: {
    height: 763,
    width: 390,
  },
  newsletterPosition: {
    height: 186,
    left: "50%",
    marginLeft: -179,
    width: 358,
    position: "absolute",
  },
  searchPosition: {
    width: 326,
    marginLeft: -163,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  footerNavFlexBox: {
    gap: Gap.gap_md,
    alignItems: "center",
  },
  logoLayout: {
    height: 48,
    position: "absolute",
  },
  bottomPosition: {
    top: "50%",
    position: "absolute",
  },
  bottomCreditsInnerLayout: {
    height: 17,
    width: 236,
  },
  chickenPosition: {
    marginLeft: -118,
    marginTop: -8.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  recipePosition: {
    height: 99,
    top: 0,
    width: 390,
    left: 0,
    position: "absolute",
  },
  logoFlexBox: {
    flexDirection: "row",
    gap: Gap.gap_2xs,
    alignItems: "center",
  },
  mobileNavigationClosed: {
    height: 64,
    width: 390,
    overflow: "hidden",
  },
  eggs1011: {
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  wantToMaster: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  title: {
    width: 358,
  },
  fromOurHow: {
    height: 24,
    width: 390,
  },
  imageIcon: {
    borderRadius: Border.br_xs,
  },
  howToMake: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  bodyCopy: {
    textAlign: "left",
  },
  howToMakeHollandaiseSauceParent: {
    gap: Gap.gap_2xs,
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    paddingTop: Padding.p_base,
    alignSelf: "stretch",
  },
  recipe2xOpen: {
    width: 358,
  },
  howTo: {
    backgroundColor: Color.colorLinen,
  },
  imageIcon2: {
    zIndex: 0,
    height: 239,
    width: 358,
  },
  eggCartonPumpkin: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  bodyCopy2: {
    textAlign: "center",
  },
  seeAll: {
    color: Color.colorWhite,
  },
  buttons: {
    backgroundColor: Color.colorBlack,
  },
  eggCartonPumpkinCraftForKParent: {
    paddingVertical: Padding.p_5xl,
    zIndex: 1,
    backgroundColor: Color.colorWhitesmoke_100,
    gap: Gap.gap_sm,
    alignItems: "center",
  },
  editorSmile: {
    width: 14,
    height: 14,
  },
  kidApproved: {
    color: "#88221c",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  badge: {
    top: 16,
    borderRadius: Border.br_81xl,
    backgroundColor: "#ffcac7",
    zIndex: 2,
    left: 16,
    height: 32,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    gap: Gap.gap_2xs,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  recipe2xOpen2: {
    top: 48,
    left: "50%",
  },
  getCraftyFor: {
    marginLeft: -195,
    left: "50%",
    height: 24,
    top: 0,
    width: 390,
    position: "absolute",
  },
  getCraftyForHalloween: {
    height: 513,
    width: 390,
  },
  bannerImageIcon: {
    height: 160,
    width: 358,
  },
  perfectEggsEveryTimeGetParent: {
    backgroundColor: Color.colorGold_100,
    gap: Gap.gap_sm,
    alignItems: "center",
  },
  topArticles2: {
    left: "50%",
    height: 24,
    justifyContent: "center",
    display: "flex",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    alignItems: "center",
    top: 0,
  },
  topArticlesWrapper: {
    height: 24,
    width: 358,
  },
  howToPoachAnEggLikeAProParent: {
    zIndex: 1,
    gap: Gap.gap_2xs,
    backgroundColor: Color.colorWhite,
  },
  iconPlayVideo: {
    top: "46.68%",
    bottom: "40.58%",
    height: "12.73%",
    maxHeight: "100%",
    left: "4.47%",
    right: "82.12%",
    width: "13.41%",
  },
  recipe2xOpen3: {
    width: 358,
  },
  howToFryThePerfectEggParent: {
    paddingBottom: Padding.p_13xl,
    zIndex: 1,
    gap: Gap.gap_2xs,
    paddingTop: Padding.p_base,
    backgroundColor: Color.colorWhite,
  },
  iconPlayVideo1: {
    height: "12.5%",
    top: "48.44%",
    bottom: "39.06%",
  },
  iconPlayVideo2: {
    height: "13.56%",
    top: "39.83%",
    bottom: "46.61%",
  },
  iconPlayVideo3: {
    height: "12.03%",
    top: "41.1%",
    bottom: "46.87%",
  },
  iconPlayVideo4: {
    top: "40.58%",
    bottom: "46.68%",
    height: "12.73%",
    maxHeight: "100%",
    left: "4.47%",
    right: "82.12%",
    width: "13.41%",
  },
  imageIcon8: {
    height: 239,
    width: 358,
  },
  howToPeelAHardBoiledEggParent: {
    gap: Gap.gap_2xs,
    backgroundColor: Color.colorWhite,
  },
  seeAll2: {
    color: Color.colorBlack,
  },
  buttons2: {
    backgroundColor: Color.colorGold_100,
  },
  topArticles: {
    backgroundColor: Color.colorAliceblue,
    alignSelf: "stretch",
  },
  footerChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    top: 0,
    left: 0,
    position: "absolute",
  },
  newsletterSignupChild: {
    backgroundColor: Color.colorGold_100,
    borderRadius: Border.br_xs,
    top: 0,
  },
  searchChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
  },
  iconArrow: {
    left: 278,
    top: 8,
    width: 32,
    position: "absolute",
    overflow: "hidden",
  },
  enterYourEmail: {
    lineHeight: 32,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 8,
    left: 16,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  search: {
    height: "25.81%",
    top: "56.99%",
    bottom: "17.2%",
  },
  subscribeToThe: {
    marginLeft: -154,
    width: 309,
    top: 32,
    lineHeight: 28,
    left: "50%",
    justifyContent: "center",
    display: "flex",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    alignItems: "center",
    position: "absolute",
  },
  newsletterSignup: {
    top: 32,
    overflow: "hidden",
  },
  recipes: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  chevronDownIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  footerNav: {
    marginLeft: -81.5,
    top: 330,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  logoEqaIcon: {
    left: 157,
    width: 114,
    top: 0,
    overflow: "hidden",
  },
  efcLogo: {
    width: 109,
    top: 0,
    left: 0,
  },
  logoEqaParent: {
    top: 250,
    left: 60,
    width: 271,
  },
  chickenFarme: {
    marginTop: -24.5,
    lineHeight: 16,
    top: "50%",
    marginLeft: -173,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: "50%",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  chickenFarme1: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorBlack,
  },
  chickenFarme2: {
    marginLeft: -15,
    marginTop: -8.5,
    lineHeight: 16,
    top: "50%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "50%",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  chickenFarmeParent: {
    height: 17,
    width: 236,
  },
  bottomCreditsInner: {
    marginTop: 7.5,
    marginLeft: -117,
    top: "50%",
    position: "absolute",
    left: "50%",
  },
  bottomCredits: {
    marginTop: 292.5,
    width: 346,
    height: 49,
    marginLeft: -173,
    top: "50%",
    left: "50%",
  },
  iconFacebook: {
    left: 61,
    top: 0,
    position: "absolute",
  },
  iconInstagram: {
    left: 123,
    top: 0,
    position: "absolute",
  },
  iconPinterest: {
    left: 186,
    width: 25,
    height: 32,
    top: 0,
    position: "absolute",
  },
  iconYoutube: {
    width: 46,
    height: 32,
  },
  twitterXIcon: {
    marginTop: -16,
    width: "8.91%",
    right: "91.09%",
    left: "0%",
    maxWidth: "100%",
    top: "50%",
    height: 32,
    overflow: "hidden",
  },
  socials: {
    marginLeft: -174,
    top: 594,
    width: 349,
    height: 32,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  topArticlesParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  eggs101Page: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  eggs101: {
    top: 98,
    height: 5458,
    width: 390,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  recipeHeaderChild: {
    backgroundColor: Color.colorBlack,
  },
  recipeHeaderItem: {
    marginTop: -17.5,
    marginLeft: -180,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: Color.colorSilver,
    width: 360,
    height: 67,
    left: "50%",
  },
  recipeHeaderInner: {
    top: 39,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 60,
    width: 390,
    left: 0,
    position: "absolute",
  },
  file02Icon: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  howTos1: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.colorBlack,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
  },
  logo: {
    marginLeft: -56,
    top: 56,
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
  howTos: {
    flex: 1,
    width: "100%",
    height: 5556,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default HowTos;
