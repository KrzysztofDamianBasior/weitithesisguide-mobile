import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Title } from "react-native-paper";

const DATA: { id: string; title: string; date: string; tags: string[] }[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "change of supervisor",
    date: "11/23/2022",
    tags: ["#supervisor", "#imio"],
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "how to choose the right institute",
    date: "11/24/2022",
    tags: ["#imio", "#ise", "#irtm"],
  },
];

type ItemType = {
  title: string;
  id: string;
  date: string;
  tags: string[];
};

const Item = ({ title, date, tags }: ItemType) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View
        style={{
          width: "100%",
          height: 50,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 15 }}>{title}</Text>
          <Text style={{ fontSize: 10 }}>{date}</Text>
        </View>
        <View>
          <Text>{tags.join(" ")}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Posts = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        DATA.map((item) => (
          <Item
            title={item.title}
            id={item.id}
            date={item.date}
            tags={item.tags}
            key={item.id}
          />
        ))
      )}
    </>
  );
};

export default Posts;
