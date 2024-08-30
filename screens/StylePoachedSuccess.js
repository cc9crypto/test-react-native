import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  Padding,
  Border,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const StylePoachedSuccess = () => {
  return (
    <View style={styles.stylePoachedSuccess}>
      <View style={[styles.logo, styles.logoPosition]}>
        <Text style={[styles.eggTimer, styles.eggTypo]}>Egg Timer</Text>
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
      <View style={[styles.frame, styles.framePosition]}>
        <View>
          <View>
            <View style={[styles.title, styles.titleSpaceBlock]}>
              <View
                style={[
                  styles.yourPoachedEggsAreDoneWrapper,
                  styles.timerParentSpaceBlock,
                ]}
              >
                <Text style={[styles.yourPoachedEggs, styles.eggTypo]}>
                  Your poached eggs are done!
                </Text>
              </View>
            </View>
            <Image
              style={[styles.frameChild, styles.title2Position]}
              contentFit="cover"
              source={require("../assets/rectangle-299.png")}
            />
          </View>
        </View>
        <View style={styles.moreDeliciousIdeas}>
          <View style={styles.title1}>
            <View style={styles.moreDeliciousIdeasWrapper}>
              <Text style={[styles.yourPoachedEggs, styles.eggTypo]}>
                More Delicious Ideas
              </Text>
            </View>
          </View>
          <View style={styles.entry2xOpenParent}>
            <View style={styles.entry2xOpen}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image.png")}
              />
              <View style={[styles.title2, styles.title2Position]}>
                <View style={styles.titleWrapper}>
                  <Text style={[styles.title3, styles.title3Typo]}>
                    Mushroom Spaetzle with Poached Egg
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.entry2xOpen}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image1.png")}
              />
              <View style={[styles.title2, styles.title2Position]}>
                <View style={styles.titleWrapper}>
                  <Text style={[styles.title3, styles.title3Typo]}>
                    Perfect Poached Eggs
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.entry2xOpenParent}>
            <View style={styles.entry2xOpen}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image2.png")}
              />
              <View style={[styles.title2, styles.title2Position]}>
                <View style={styles.titleWrapper}>
                  <Text style={[styles.title3, styles.title3Typo]}>
                    Pesto Pizza with Poached Eggs
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.entry2xOpen}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image3.png")}
              />
              <View style={[styles.title2, styles.title2Position]}>
                <View style={styles.titleWrapper}>
                  <Text style={[styles.title3, styles.title3Typo]}>
                    Indian Spiced Rice with Poached Eggs
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.entry2xOpenParent}>
            <View style={styles.entry2xOpen}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image4.png")}
              />
              <View style={[styles.title2, styles.title2Position]}>
                <View style={styles.titleWrapper}>
                  <Text style={[styles.title3, styles.title3Typo]}>
                    Poached Egg On Maple Roasted Autumn Squash With Hollandaise
                    Sauce
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.entry2xOpen}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image5.png")}
              />
              <View style={[styles.title2, styles.title2Position]}>
                <View style={styles.titleWrapper}>
                  <Text style={[styles.title3, styles.title3Typo]}>
                    Roasted Mediterranean Veggies with Poached Eggs and Feta
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.entry2xOpenParent}>
            <View style={styles.entry2xOpen}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image6.png")}
              />
              <View style={[styles.title2, styles.title2Position]}>
                <View style={styles.titleWrapper}>
                  <Text style={[styles.title3, styles.title3Typo]}>
                    Baked Beans on Toast with Spinach and Poached Eggs
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.entry2xOpen}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image7.png")}
              />
              <View style={[styles.title2, styles.title2Position]}>
                <View style={styles.titleWrapper}>
                  <Text style={[styles.title3, styles.title3Typo]}>
                    Linguine With Roasted Cherry Tomatoes, Spinach And Eggplant
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.btnStartTimer, styles.timerFlexBox]}>
            <Text style={[styles.exploreMoreDelicious, styles.title3Typo]}>
              Explore More Delicious Recipes
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.btnBackArrowIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/btnback-arrow.png")}
      />
      <View style={[styles.navigation, styles.titleSpaceBlock]}>
        <View style={[styles.timerParent, styles.timerParentSpaceBlock]}>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-189.png")}
            />
            <Text style={[styles.eggTimer1, styles.eggTypo]}>Egg timer</Text>
          </View>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-1901.png")}
            />
            <Text style={[styles.eggTimer1, styles.eggTypo]}>Recipes</Text>
          </View>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-1915.png")}
            />
            <Text style={[styles.eggTimer1, styles.eggTypo]}>How-Tos</Text>
          </View>
          <View style={[styles.timer, styles.timerFlexBox]}>
            <Image
              style={styles.timerChild}
              contentFit="cover"
              source={require("../assets/frame-1911.png")}
            />
            <Text style={[styles.eggTimer1, styles.eggTypo]}>sign up</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoPosition: {
    left: "50%",
    position: "absolute",
  },
  eggTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
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
  framePosition: {
    left: 16,
    position: "absolute",
  },
  titleSpaceBlock: {
    paddingBottom: Padding.p_base,
    alignItems: "center",
  },
  timerParentSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  title2Position: {
    borderBottomLeftRadius: Border.br_xs,
    borderBottomRightRadius: Border.br_xs,
  },
  title3Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  timerFlexBox: {
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  eggTimer: {
    marginLeft: -22.5,
    top: 14,
    fontFamily: FontFamily.kaleko205Round,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
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
  yourPoachedEggs: {
    fontSize: FontSize.size_5xl,
    alignSelf: "stretch",
    fontFamily: FontFamily.kaleko205Round,
  },
  yourPoachedEggsAreDoneWrapper: {
    height: 72,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    width: 358,
  },
  title: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    paddingTop: Padding.p_5xl,
    backgroundColor: Color.colorGold_100,
  },
  frameChild: {
    height: 269,
    width: 358,
  },
  moreDeliciousIdeasWrapper: {
    width: 358,
    alignItems: "center",
  },
  title1: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  imageIcon: {
    borderRadius: Border.br_xs,
    height: 167,
    width: 167,
  },
  title3: {
    alignSelf: "stretch",
    fontFamily: FontFamily.kaleko205Round,
    fontWeight: "700",
    textAlign: "left",
  },
  titleWrapper: {
    alignSelf: "stretch",
  },
  title2: {
    paddingTop: Padding.p_base,
    width: 167,
  },
  entry2xOpen: {
    width: 167,
  },
  entry2xOpenParent: {
    flexDirection: "row",
    gap: Gap.gap_md,
  },
  exploreMoreDelicious: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 20,
  },
  btnStartTimer: {
    borderRadius: Border.br_81xl,
    height: 55,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorGold_100,
  },
  moreDeliciousIdeas: {
    gap: Gap.gap_md,
  },
  frame: {
    top: 114,
    gap: Gap.gap_xl,
  },
  btnBackArrowIcon: {
    top: 49,
    width: 40,
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
  },
  timer: {
    paddingHorizontal: 0,
    gap: Gap.gap_2xs,
  },
  timerParent: {
    height: 67,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_17xl,
    flexDirection: "row",
    flex: 1,
  },
  navigation: {
    marginLeft: -195,
    bottom: 0,
    backgroundColor: Color.colorWhite,
    width: 390,
    paddingTop: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  stylePoachedSuccess: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: "100%",
    height: 1844,
    overflow: "hidden",
    flex: 1,
  },
});

export default StylePoachedSuccess;
