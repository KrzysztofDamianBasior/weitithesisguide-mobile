import { StyleSheet, Text, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { GuideStackParamList } from "../../../shared/navigation/GuideStack";

const TableOfContents = ({
  navigation,
  route,
}: StackScreenProps<GuideStackParamList, "TableOfContents">) => {
  return (
    <SafeAreaView style={style.tableOfContentsContainer}>
      <ScrollView>
        <List.Accordion
          title="Choosing the topic and the thesis supervisor"
          id="0"
          left={(props) => (
            <List.Icon {...props} icon="clipboard-text-search-outline" />
          )}
        >
          <List.Item
            title="Align research interests"
            onPress={() => {
              navigation.navigate("Chapter", { chapterNumber: 0 });
            }}
          />
          <List.Item
            title="Seek trusted sources"
            onPress={() => {
              navigation.navigate("Chapter", { chapterNumber: 1 });
            }}
          />
          <List.Item
            title="Expectations"
            onPress={() => {
              navigation.navigate("Chapter", { chapterNumber: 2 });
            }}
          />
        </List.Accordion>
        <List.Accordion
          title="Thesis arrangement "
          id="0"
          left={(props) => (
            <List.Icon {...props} icon="arrange-bring-to-front" />
          )}
        >
          <List.Item
            title="Introduction"
            onPress={() => {
              navigation.navigate("Chapter", { chapterNumber: 0 });
            }}
          />
          <List.Item
            title="Major paper"
            onPress={() => {
              navigation.navigate("Chapter", { chapterNumber: 0 });
            }}
          />
        </List.Accordion>
        <List.Accordion
          title="Stress management techniques"
          id="0"
          left={(props) => <List.Icon {...props} icon="sprout-outline" />}
        >
          <List.Item
            title="Routine and schedule"
            onPress={() => {
              navigation.navigate("Chapter", { chapterNumber: 0 });
            }}
          />
          <List.Item
            title="Connect with others"
            onPress={() => {
              navigation.navigate("Chapter", { chapterNumber: 0 });
            }}
          />
          <List.Item
            title="Physical exercises"
            onPress={() => {
              navigation.navigate("Chapter", { chapterNumber: 0 });
            }}
          />
        </List.Accordion>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TableOfContents;

const style = StyleSheet.create({
  tableOfContentsContainer: {
    padding: 15,
  },
});
