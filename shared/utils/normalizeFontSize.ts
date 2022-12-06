import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

// https://stackoverflow.com/questions/33628677/react-native-responsive-font-size
export function normalize(size: number, scale: number) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const fontStyles = {
  mini: normalize(12, scale),

  small: normalize(15, scale),

  medium: normalize(17, scale),

  large: normalize(20, scale),

  xlarge: normalize(24, scale),
};
