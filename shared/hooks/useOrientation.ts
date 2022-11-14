import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const isPortrait = () => {
  const dim = Dimensions.get("screen");
  return dim.height >= dim.width;
};

// https://stackoverflow.com/questions/47683591/react-native-different-styles-applied-on-orientation-change
export default function useOrientation(): "PORTRAIT" | "LANDSCAPE" {
  const [orientation, setOrientation] = useState<"PORTRAIT" | "LANDSCAPE">(
    isPortrait() ? "PORTRAIT" : "LANDSCAPE"
  );

  useEffect(() => {
    const callback = () =>
      setOrientation(isPortrait() ? "PORTRAIT" : "LANDSCAPE");

    Dimensions.addEventListener("change", callback);

    return () => {
      Dimensions.removeEventListener("change", callback);
    };
  }, []);

  return orientation;
}
