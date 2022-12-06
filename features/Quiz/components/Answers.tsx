import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useContext } from "react";
import useOrientation from "../../../shared/hooks/useOrientation";
import { useTheme } from "react-native-paper";
import { ThemeContext } from "../../../shared/context/ThemeContext";
import { fontStyles } from "../../../shared/utils/normalizeFontSize";

type Props = {
  answers: {
    answer: string;
    nextQuestionId: number | null;
  }[][];
  activeAnswer: {
    rowId: number | null;
    columnId: number | null;
  };
  setActiveAnswer: React.Dispatch<
    React.SetStateAction<{
      rowId: number | null;
      columnId: number | null;
    }>
  >;
};

const QuizAnswers = ({ answers, activeAnswer, setActiveAnswer }: Props) => {
  const orientation = useOrientation();
  const theme = useTheme();
  const { height, width } = useWindowDimensions();
  const { isThemeDark } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.contentContainer,
        orientation === "PORTRAIT"
          ? {
              position: "absolute",
              top: "22%",
              bottom: "15%",
              right: "2%",
              left: "2%",
              height: "63%",
              width: "94%",
            }
          : {
              position: "absolute",
              top: "22%",
              bottom: 0,
              left: "20%",
              right: 0,
              height: "78%",
              width: "80%",
            },
      ]}
    >
      {answers.map((answerRow, rowId) => (
        <View
          style={[
            styles.contentRow,
            {
              width: "100%",
              height: (height / answers.length) * 0.55,
            },
          ]}
          key={rowId}
        >
          {answerRow.map((answer, columnId) => (
            <TouchableOpacity
              onPress={() => {
                setActiveAnswer({
                  rowId: rowId,
                  columnId: columnId,
                });
              }}
              key={answer.answer}
            >
              <View
                style={[
                  orientation === "PORTRAIT"
                    ? { width: (width / answerRow.length) * 0.9 }
                    : { width: (width / answerRow.length) * 0.7 },
                  {
                    height: "80%",
                    margin: 10,
                    backgroundColor: isThemeDark
                      ? "rgba(1, 1, 1, 0.4)"
                      : "rgba(255, 255, 255, 0.4)",

                    alignItems: "center",
                    justifyContent: "center",
                  },
                  activeAnswer.columnId === columnId &&
                  activeAnswer.rowId === rowId
                    ? {
                        backgroundColor: isThemeDark
                          ? "rgba(1, 1, 1, 0.8)"
                          : "rgba(255, 255, 255, 0.8)",
                      }
                    : {
                        backgroundColor: isThemeDark
                          ? "rgba(1, 1, 1, 0.4)"
                          : "rgba(255, 255, 255, 0.4)",
                      },
                ]}
              >
                <Text
                  style={{
                    color: theme.colors.onSurface,
                  }}
                >
                  {answer.answer}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default QuizAnswers;

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  contentRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
