import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Padding,
  Border,
  FontFamily,
  FontSize,
  Color,
  Gap,
} from "../GlobalStyles";

const Recipes = () => {
  return (
    <View style={styles.recipes}>
      <View style={[styles.recipeLandingPage, styles.recipePosition1]}>
        <View style={styles.buttonsParent}>
          <View style={[styles.buttons, styles.buttonsSpaceBlock]}>
            <Text style={[styles.seeAll, styles.seeTypo]}>
              Explore Recipe Categories
            </Text>
          </View>
          <Text style={[styles.recipeCategories, styles.theTypo]}>
            Recipe Categories
          </Text>
          <View style={[styles.recipe2xOpen, styles.recipe2xPosition7]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image8.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text
                style={[styles.sandwichesWraps, styles.recipesTypo]}
              >{`Sandwiches & Wraps`}</Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen1, styles.recipe2xPosition7]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image9.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Brunch
              </Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen2, styles.recipe2xPosition6]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image10.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Boiled Eggs
              </Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen3, styles.recipe2xPosition6]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image11.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Lunch
              </Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen4, styles.recipe2xPosition5]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image12.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Nutritious Bowl Recipes
              </Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen5, styles.recipe2xPosition5]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image13.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Poached Eggs
              </Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen6, styles.recipe2xPosition4]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image14.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text
                style={[styles.sandwichesWraps, styles.recipesTypo]}
              >{`Appetizers & Canapés`}</Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen7, styles.recipe2xPosition4]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image15.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Vegetarian
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.breakfastOnTheGo, styles.backgroundLayout]}>
          <View style={[styles.background, styles.backgroundLayout]} />
          <View style={styles.recipe2xOpen8}>
            <Image
              style={[styles.imageIcon8, styles.imageIconLayout]}
              contentFit="cover"
              source={require("../assets/image16.png")}
            />
            <View style={[styles.cloudEggsParent, styles.parentPosition]}>
              <Text style={[styles.cloudEggs, styles.recipes2Typo]}>
                Cloud Eggs
              </Text>
              <Text style={[styles.bodyCopy, styles.bodyTypo]}>
                Loco Moco is a delicious and filling contemporary Hawaiian meal
                made of three layers: rice and a hamburger patty smothered in
                delicious gravy and topped with a fried egg.
              </Text>
            </View>
          </View>
          <View style={styles.recipe2xOpen9}>
            <Image
              style={[styles.imageIcon9, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image17.png")}
            />
            <View
              style={[
                styles.makeAheadBreakfastBowlsParent,
                styles.title8Position,
              ]}
            >
              <Text style={[styles.cloudEggs, styles.recipes2Typo]}>
                Make-Ahead Breakfast Bowls
              </Text>
              <Text
                style={[styles.bodyCopy, styles.bodyTypo]}
              >{`Your new favourite noodle dish is going to be this one that’s right out of your own kitchen – but will taste like it’s from the hottest new noodle bar in the city! `}</Text>
            </View>
            <View style={styles.badge}>
              <Image
                style={styles.basicHeart}
                contentFit="cover"
                source={require("../assets/basic--heart.png")}
              />
              <Text style={[styles.heartSmart, styles.recipes3Layout]}>
                Heart Smart
              </Text>
            </View>
          </View>
          <Text style={[styles.breakfastOnTheGo1, styles.needPosition]}>
            Breakfast On-the-Go
          </Text>
        </View>
        <View style={styles.eggsForAnyTimeOfDay}>
          <View style={[styles.recipe2xOpen10, styles.recipe2xPosition3]}>
            <Image
              style={[styles.imageIcon10, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image18.png")}
            />
            <View style={[styles.title8, styles.title8Position]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Baked Oatmeal Cups
              </Text>
            </View>
            <Image
              style={styles.iconPlayVideo}
              contentFit="cover"
              source={require("../assets/iconplay-video.png")}
            />
          </View>
          <View style={[styles.recipe2xOpen11, styles.recipe2xPosition2]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image19.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Hearty Tropical Oatmeal Bowl
              </Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen12, styles.recipe2xPosition1]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image20.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Egyptian Fava Bean Foule
              </Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen13, styles.recipe2xPosition]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image21.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Shakshuka For One
              </Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen14, styles.recipe2xPosition3]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image22.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text
                style={[styles.sandwichesWraps, styles.recipesTypo]}
              >{`Bacon & Egg Breakfast Burrito`}</Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen15, styles.recipe2xPosition2]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image23.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Chilaquiles (Breakfast Nachos)
              </Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen16, styles.recipe2xPosition1]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image24.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Mushroom Khachapuri
              </Text>
            </View>
          </View>
          <View style={[styles.recipe2xOpen17, styles.recipe2xPosition]}>
            <Image
              style={[styles.imageIcon, styles.imageIconLayout1]}
              contentFit="cover"
              source={require("../assets/image25.png")}
            />
            <View style={[styles.title, styles.parentPosition]}>
              <Text style={[styles.sandwichesWraps, styles.recipesTypo]}>
                Traditional Khachapuri
              </Text>
            </View>
          </View>
          <View style={styles.tabs}>
            <View style={[styles.badge1, styles.badgeLayout]}>
              <Text style={[styles.breakfast, styles.recipes3Layout]}>
                Breakfast
              </Text>
            </View>
            <View style={[styles.badge2, styles.badgeLayout]}>
              <Text style={[styles.breakfast, styles.recipes3Layout]}>
                Lunch
              </Text>
            </View>
            <View style={[styles.badge3, styles.badgeLayout]}>
              <Text style={[styles.breakfast, styles.recipes3Layout]}>
                Dinner
              </Text>
            </View>
            <View style={[styles.badge4, styles.badgeLayout]}>
              <Text style={[styles.breakfast, styles.recipes3Layout]}>
                Snacks
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.searchWrapper}>
          <View style={[styles.search, styles.searchPosition1]}>
            <View style={[styles.searchChild, styles.searchPosition1]} />
            <Text style={styles.searchEggsca}>Search our recipes</Text>
            <Image
              style={[styles.searchIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/search-icon.png")}
            />
          </View>
        </View>
        <View style={styles.title16}>
          <Text style={[styles.recipes1, styles.recipesTypo]}>Recipes</Text>
          <Text style={[styles.bodyCopy2, styles.recipes2Layout]}>
            Browse our collection of egg recipes, everything from quick
            breakfast ideas to our favourite classic egg recipes. We’ve got
            delicious ideas for any meal!
          </Text>
        </View>
        <Image
          style={[styles.mobileNavigationClosed, styles.twitterXIconPosition]}
          contentFit="cover"
          source={require("../assets/mobile-navigation--closed1.png")}
        />
        <View style={[styles.needSomeInspiration, styles.needPosition]}>
          <View style={[styles.recipe2xOpen18, styles.recipe2xPosition7]}>
            <Image
              style={[styles.imageIcon18, styles.imageIcon18Position]}
              contentFit="cover"
              source={require("../assets/image26.png")}
            />
            <View
              style={[
                styles.eggceptionalHalloweenIdeasParent,
                styles.parentSpaceBlock,
              ]}
            >
              <Text
                style={[styles.eggceptionalHalloweenIdeas, styles.recipesTypo]}
              >
                5 Eggceptional Halloween Ideas
              </Text>
              <Text style={[styles.bodyCopy3, styles.bodyTypo]}>
                Halloween is just around the corner and we have 5 easy and fun
                ways to include eggs in your Halloween prep. From recipes to
                crafts we’ve got you covered.
              </Text>
              <View style={[styles.buttons1, styles.buttonsSpaceBlock]}>
                <Text style={[styles.seeAll1, styles.seeTypo]}>Learn More</Text>
              </View>
            </View>
          </View>
          <View style={styles.recipe2xOpen19}>
            <Image
              style={[styles.imageIcon18, styles.imageIcon18Position]}
              contentFit="cover"
              source={require("../assets/image27.png")}
            />
            <View
              style={[
                styles.eggceptionalHalloweenIdeasParent,
                styles.parentSpaceBlock,
              ]}
            >
              <Text
                style={[styles.eggceptionalHalloweenIdeas, styles.recipesTypo]}
              >
                4 Ways to Love Your Leftovers
              </Text>
              <Text style={[styles.bodyCopy3, styles.bodyTypo]}>
                Eggs are an easy way to transform last-night’s leftovers into
                something new and delicious for today.
              </Text>
              <View style={[styles.buttons1, styles.buttonsSpaceBlock]}>
                <Text style={[styles.seeAll1, styles.seeTypo]}>Learn More</Text>
              </View>
            </View>
          </View>
          <Text style={[styles.needSomeInspiration1, styles.needPosition]}>
            Need Some Inspiration?
          </Text>
        </View>
        <View style={[styles.funEasyEggAppetizers, styles.background1Position]}>
          <View style={[styles.background1, styles.background1Position]} />
          <View style={styles.recipe2xOpen20}>
            <Image
              style={[styles.imageIcon18, styles.imageIcon18Position]}
              contentFit="cover"
              source={require("../assets/image28.png")}
            />
            <View
              style={[
                styles.sunDriedTomatoAndBasilBakParent,
                styles.parentPosition,
              ]}
            >
              <Text style={[styles.cloudEggs, styles.recipes2Typo]}>
                Sun-Dried Tomato and Basil Baked Ricotta
              </Text>
              <Text style={[styles.bodyCopy, styles.bodyTypo]}>
                This easy, flavour-packed dish is perfect for entertaining.
              </Text>
            </View>
          </View>
          <View style={styles.recipe2xOpen21}>
            <Image
              style={[styles.imageIcon18, styles.imageIcon18Position]}
              contentFit="cover"
              source={require("../assets/image29.png")}
            />
            <View
              style={[styles.eggAndBaconCanapsParent, styles.parentPosition]}
            >
              <Text style={[styles.cloudEggs, styles.recipes2Typo]}>
                Egg and Bacon Canapés
              </Text>
              <Text style={[styles.bodyCopy, styles.bodyTypo]}>
                Dress up bacon and eggs by making these easy and elegant
                canapés.
              </Text>
            </View>
          </View>
          <View style={styles.recipe2xOpen22}>
            <Image
              style={[styles.imageIcon18, styles.imageIcon18Position]}
              contentFit="cover"
              source={require("../assets/image30.png")}
            />
            <View
              style={[
                styles.sunDriedTomatoAndBasilBakParent,
                styles.parentPosition,
              ]}
            >
              <Text style={[styles.cloudEggs, styles.recipes2Typo]}>
                Mean Green Cheesy Bites
              </Text>
              <Text style={[styles.bodyCopy, styles.bodyTypo]}>
                With kale and spinach, these savory bites loaded with Italian
                cheeses are a delicious way to eat your greens. They make a
                great snack or appetizer.
              </Text>
            </View>
          </View>
          <View style={styles.title17}>
            <Text
              style={[styles.eggceptionalHalloweenIdeas, styles.recipesTypo]}
            >{`Fun & East Egg Appetizers`}</Text>
            <Text style={[styles.letsGetCreative, styles.bodyCopy2Typo]}>
              Let’s get creative with these fun and easy appetizer ideas!
            </Text>
          </View>
        </View>
        <View style={styles.chefsCorner}>
          <View style={styles.recipe2xOpen23}>
            <Image
              style={[styles.imageIcon18, styles.imageIcon18Position]}
              contentFit="cover"
              source={require("../assets/image31.png")}
            />
            <View
              style={[
                styles.marysolsDutchBabyPancakesParent,
                styles.parentSpaceBlock,
              ]}
            >
              <Text
                style={[styles.eggceptionalHalloweenIdeas, styles.recipesTypo]}
              >{`Marysol’s
Dutch Baby Pancakes with Fresh Berries`}</Text>
              <Text style={[styles.bodyCopy3, styles.bodyTypo]}>
                As tempting as it may be to peek, the key to the success of
                these pancakes is to make sure no heat escapes from the oven
                during baking. So keep the oven light on and the oven door
                closed!
              </Text>
              <View style={[styles.buttons1, styles.buttonsSpaceBlock]}>
                <Text style={[styles.seeAll1, styles.seeTypo]}>Learn More</Text>
              </View>
            </View>
          </View>
          <View style={styles.chefsCornerParent}>
            <Text
              style={[styles.eggceptionalHalloweenIdeas, styles.recipesTypo]}
            >
              Chef’s Corner
            </Text>
            <Text style={[styles.letsGetCreative, styles.bodyCopy2Typo]}>
              A new recipe every month from our Egg Farmers of Canada
              Ambassadors.
            </Text>
          </View>
        </View>
        <View style={[styles.footer, styles.footerLayout]}>
          <View style={[styles.footerChild, styles.footerLayout]} />
          <View style={[styles.newsletterSignup, styles.newsletterPosition]}>
            <View
              style={[styles.newsletterSignupChild, styles.newsletterPosition]}
            />
            <View style={[styles.search1, styles.searchPosition]}>
              <View style={[styles.searchItem, styles.searchPosition]} />
              <Image
                style={[styles.iconArrow, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/iconarrow.png")}
              />
              <Text style={styles.searchEggsca}>Enter Your Email Address</Text>
            </View>
            <Text style={[styles.subscribeToThe, styles.theTypo]}>
              Subscribe to the eggs.ca newsletter
            </Text>
          </View>
          <View style={styles.footerNav}>
            <Text style={[styles.recipes2, styles.recipes2Layout]}>
              About Us
            </Text>
            <Text style={[styles.recipes2, styles.recipes2Layout]}>
              Contact Us
            </Text>
            <Text style={[styles.recipes2, styles.recipes2Layout]}>
              Accessibility
            </Text>
            <Text style={[styles.recipes2, styles.recipes2Layout]}>FAQ</Text>
            <View style={[styles.eggsAreEasyParent, styles.logoFlexBox]}>
              <Text style={[styles.recipes2, styles.recipes2Layout]}>
                International
              </Text>
              <Image
                style={[styles.chevronDownIcon, styles.iconLayout1]}
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
              <View style={[styles.chickenFarmeParent, styles.chickenPosition]}>
                <Text style={[styles.chickenFarme1, styles.chickenPosition]}>
                  Privacy Policy
                </Text>
                <Text style={styles.chickenFarme2}>{`Terms & Conditions`}</Text>
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
      <View style={[styles.recipeHeader, styles.recipePosition]}>
        <View style={[styles.recipeHeaderChild, styles.recipePosition]} />
        <View style={[styles.recipeHeaderItem, styles.bottomPosition]} />
        <View style={[styles.recipeHeaderInner, styles.imageIcon18Position]} />
        <View style={[styles.logo, styles.logoFlexBox]}>
          <Image
            style={[styles.file02Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/file02.png")}
          />
          <Text style={[styles.recipes3, styles.recipes3Layout]}>Recipes</Text>
        </View>
        <Image
          style={[styles.xCircleIcon, styles.iconPosition]}
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
  buttonsSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    overflow: "hidden",
  },
  seeTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 28,
    fontSize: FontSize.size_base,
  },
  theTypo: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    alignItems: "center",
  },
  recipe2xPosition7: {
    top: 48,
    left: "50%",
    position: "absolute",
  },
  imageIconLayout1: {
    height: 167,
    width: 167,
  },
  parentPosition: {
    paddingTop: Padding.p_base,
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
  },
  recipesTypo: {
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  recipe2xPosition6: {
    top: 300,
    width: 167,
    left: "50%",
    position: "absolute",
  },
  recipe2xPosition5: {
    top: 533,
    width: 167,
    left: "50%",
    position: "absolute",
  },
  recipe2xPosition4: {
    top: 784,
    width: 167,
    left: "50%",
    position: "absolute",
  },
  backgroundLayout: {
    height: 892,
    width: 390,
    left: 0,
    position: "absolute",
  },
  imageIconLayout: {
    height: 239,
    width: 358,
  },
  recipes2Typo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    textAlign: "left",
  },
  bodyTypo: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    alignSelf: "stretch",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  imageIconPosition: {
    zIndex: 0,
    borderRadius: Border.br_xs,
  },
  title8Position: {
    zIndex: 1,
    paddingTop: Padding.p_base,
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
  },
  recipes3Layout: {
    lineHeight: 20,
    textAlign: "left",
  },
  needPosition: {
    marginLeft: -195,
    left: "50%",
    width: 390,
    position: "absolute",
  },
  recipe2xPosition3: {
    top: 56,
    width: 167,
    left: "50%",
    position: "absolute",
  },
  recipe2xPosition2: {
    top: 307,
    width: 167,
    left: "50%",
    position: "absolute",
  },
  recipe2xPosition1: {
    top: 558,
    width: 167,
    left: "50%",
    position: "absolute",
  },
  recipe2xPosition: {
    top: 809,
    width: 167,
    left: "50%",
    position: "absolute",
  },
  badgeLayout: {
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_base,
    height: 32,
    top: 0,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  searchPosition1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout1: {
    width: 24,
    overflow: "hidden",
  },
  recipes2Layout: {
    lineHeight: 24,
    color: Color.colorBlack,
  },
  twitterXIconPosition: {
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  imageIcon18Position: {
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_5xl,
    gap: Gap.gap_sm,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    alignItems: "center",
  },
  background1Position: {
    height: 1368,
    marginLeft: -195,
    left: "50%",
    width: 390,
    position: "absolute",
  },
  bodyCopy2Typo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  footerLayout: {
    height: 763,
    width: 390,
    left: 0,
    position: "absolute",
  },
  newsletterPosition: {
    height: 186,
    width: 358,
    left: "50%",
    marginLeft: -179,
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
  logoFlexBox: {
    flexDirection: "row",
    gap: Gap.gap_2xs,
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
  iconPosition: {
    right: 16,
    position: "absolute",
  },
  seeAll: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  buttons: {
    marginLeft: -126,
    top: 1027,
    backgroundColor: Color.colorGold_100,
    left: "50%",
    position: "absolute",
  },
  recipeCategories: {
    height: 24,
    top: 0,
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  imageIcon: {
    borderRadius: Border.br_xs,
  },
  sandwichesWraps: {
    alignSelf: "stretch",
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontWeight: "700",
  },
  title: {
    width: 167,
  },
  recipe2xOpen: {
    width: 167,
    marginLeft: -179,
  },
  recipe2xOpen1: {
    marginLeft: 12,
    width: 167,
  },
  recipe2xOpen2: {
    marginLeft: -179,
  },
  recipe2xOpen3: {
    marginLeft: 12,
  },
  recipe2xOpen4: {
    marginLeft: -179,
  },
  recipe2xOpen5: {
    marginLeft: 12,
  },
  recipe2xOpen6: {
    marginLeft: -179,
  },
  recipe2xOpen7: {
    marginLeft: 12,
  },
  buttonsParent: {
    top: 5590,
    height: 1075,
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.colorAliceblue,
    top: 0,
  },
  imageIcon8: {
    borderRadius: Border.br_xs,
  },
  cloudEggs: {
    alignSelf: "stretch",
    color: Color.colorBlack,
  },
  bodyCopy: {
    textAlign: "left",
  },
  cloudEggsParent: {
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
  },
  recipe2xOpen8: {
    top: 486,
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  imageIcon9: {
    height: 239,
    width: 358,
  },
  makeAheadBreakfastBowlsParent: {
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
  },
  basicHeart: {
    width: 15,
    height: 13,
  },
  heartSmart: {
    color: "#045012",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  badge: {
    top: 16,
    backgroundColor: "#a2ff93",
    display: "none",
    zIndex: 2,
    left: 16,
    paddingHorizontal: Padding.p_base,
    height: 32,
    borderRadius: Border.br_81xl,
    gap: Gap.gap_2xs,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  recipe2xOpen9: {
    top: 80,
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  breakfastOnTheGo1: {
    top: 32,
    height: 24,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    alignItems: "center",
  },
  breakfastOnTheGo: {
    top: 1465,
  },
  imageIcon10: {
    height: 167,
    width: 167,
  },
  title8: {
    width: 167,
  },
  iconPlayVideo: {
    height: "14.61%",
    width: "19.16%",
    top: "57.99%",
    right: "76.05%",
    bottom: "27.4%",
    left: "4.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    zIndex: 2,
    position: "absolute",
    overflow: "hidden",
  },
  recipe2xOpen10: {
    marginLeft: -179,
  },
  recipe2xOpen11: {
    marginLeft: -179,
  },
  recipe2xOpen12: {
    marginLeft: -179,
  },
  recipe2xOpen13: {
    marginLeft: -179,
  },
  recipe2xOpen14: {
    marginLeft: 12,
  },
  recipe2xOpen15: {
    marginLeft: 12,
  },
  recipe2xOpen16: {
    marginLeft: 12,
  },
  recipe2xOpen17: {
    marginLeft: 12,
  },
  breakfast: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  badge1: {
    backgroundColor: "#ffcf00",
    paddingHorizontal: Padding.p_base,
    height: 32,
    left: 0,
  },
  badge2: {
    left: 106,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_base,
    height: 32,
  },
  badge3: {
    left: 190,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_base,
    height: 32,
  },
  badge4: {
    left: 276,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_base,
    height: 32,
  },
  tabs: {
    height: 32,
    top: 0,
    width: 358,
    left: 0,
    position: "absolute",
  },
  eggsForAnyTimeOfDay: {
    top: 405,
    height: 1028,
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  searchChild: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    borderRadius: Border.br_xs,
    width: 358,
    left: "50%",
    marginLeft: -179,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  searchEggsca: {
    lineHeight: 32,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 8,
    left: 16,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  searchIcon: {
    top: 12,
    right: 16,
    position: "absolute",
    height: 24,
  },
  search: {
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  searchWrapper: {
    height: "0.64%",
    top: "4.14%",
    bottom: "95.21%",
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  recipes1: {
    fontSize: FontSize.size_21xl,
    alignSelf: "stretch",
    textAlign: "center",
  },
  bodyCopy2: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    alignSelf: "stretch",
  },
  title16: {
    top: 96,
    paddingVertical: 0,
    gap: Gap.gap_sm,
    paddingHorizontal: Padding.p_base,
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
    alignItems: "center",
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  mobileNavigationClosed: {
    right: "0%",
    height: 64,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  imageIcon18: {
    height: 239,
    width: 358,
  },
  eggceptionalHalloweenIdeas: {
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
  },
  bodyCopy3: {
    textAlign: "center",
  },
  seeAll1: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  buttons1: {
    backgroundColor: Color.colorBlack,
  },
  eggceptionalHalloweenIdeasParent: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  recipe2xOpen18: {
    width: 358,
    marginLeft: -179,
  },
  recipe2xOpen19: {
    top: 589,
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  needSomeInspiration1: {
    height: 24,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    alignItems: "center",
    top: 0,
  },
  needSomeInspiration: {
    top: 2389,
    height: 1076,
  },
  background1: {
    backgroundColor: Color.colorLinen,
    top: 0,
  },
  sunDriedTomatoAndBasilBakParent: {
    paddingBottom: Padding.p_5xl,
    paddingHorizontal: Padding.p_base,
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  recipe2xOpen20: {
    top: 135,
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  eggAndBaconCanapsParent: {
    paddingBottom: Padding.p_13xl,
    paddingHorizontal: Padding.p_base,
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  recipe2xOpen21: {
    top: 544,
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  recipe2xOpen22: {
    top: 938,
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  letsGetCreative: {
    color: Color.colorBlack,
    width: 358,
  },
  title17: {
    top: 32,
    gap: Gap.gap_2xs,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  funEasyEggAppetizers: {
    top: 4190,
  },
  marysolsDutchBabyPancakesParent: {
    backgroundColor: Color.colorGold_100,
  },
  recipe2xOpen23: {
    top: 103,
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  chefsCornerParent: {
    gap: Gap.gap_2xs,
    top: 0,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  chefsCorner: {
    top: 3497,
    height: 661,
    width: 358,
    left: "50%",
    marginLeft: -179,
    position: "absolute",
  },
  footerChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    top: 0,
  },
  newsletterSignupChild: {
    borderRadius: Border.br_xs,
    top: 0,
    backgroundColor: Color.colorGold_100,
  },
  searchItem: {
    bottom: "0%",
    top: "0%",
    height: "100%",
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
  search1: {
    height: "25.81%",
    top: "56.99%",
    bottom: "17.2%",
  },
  subscribeToThe: {
    marginLeft: -154,
    width: 309,
    top: 32,
    lineHeight: 28,
    display: "flex",
    left: "50%",
    position: "absolute",
  },
  newsletterSignup: {
    top: 32,
    overflow: "hidden",
  },
  recipes2: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    textAlign: "left",
  },
  chevronDownIcon: {
    height: 24,
  },
  eggsAreEasyParent: {
    gap: Gap.gap_2xs,
    alignItems: "center",
  },
  footerNav: {
    marginLeft: -81.5,
    top: 330,
    gap: Gap.gap_md,
    alignItems: "center",
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
    textAlign: "center",
    color: Color.colorBlack,
    left: "50%",
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
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "50%",
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
    overflow: "hidden",
    height: 32,
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
  footer: {
    top: 6693,
  },
  recipeLandingPage: {
    top: 98,
    height: 7456,
    backgroundColor: Color.colorWhite,
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
    height: 30,
  },
  recipes3: {
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  logo: {
    marginLeft: -50,
    top: 54,
    gap: Gap.gap_2xs,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  xCircleIcon: {
    top: 49,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  recipeHeader: {
    overflow: "hidden",
  },
  recipes: {
    flex: 1,
    height: 7555,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorBlack,
  },
});

export default Recipes;
