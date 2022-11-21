import react, { useEffect, useState, useRef } from "react";
import { useWindowDimensions } from "react-native";

export default function useOrientation(): "PORTRAIT" | "LANDSCAPE" {
  const { height, width } = useWindowDimensions();
  const [orientation, setOrientation] = useState<"PORTRAIT" | "LANDSCAPE">(
    height >= width ? "PORTRAIT" : "LANDSCAPE"
  );

  useEffect(() => {
    setOrientation(height >= width ? "PORTRAIT" : "LANDSCAPE");
  }, [width, height]);

  return orientation;
}
