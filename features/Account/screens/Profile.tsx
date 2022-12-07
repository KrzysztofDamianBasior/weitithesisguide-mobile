import React, { useState, useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import Posts from "../components/Posts";
import { AuthContext } from "../../../shared/context/AuthContext";

const Profile = () => {
  const { signOut } = useContext(AuthContext);
  const [showContent, setShowContent] = useState<
    "CreatedPosts" | "UserAnswers"
  >("CreatedPosts");
  const [modalVisible, setModalVisible] = React.useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    width: "70%",
    height: "50%",
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                signOut();
              }}
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                borderRadius: 4,
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: "#39e2d1",
                width: 100,
                height: 40,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  color: "#083833",
                }}
              >
                sign out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <View style={{ backgroundColor: "#eff7fd" }}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                borderWidth: 3,
                borderColor: "#fff",
              }}
              source={{
                uri: "https://picsum.photos/200",
              }}
            />
          </View>

          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text style={{ fontSize: 26 }}>{"Nelly Samuels"}</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 20 }}>2</Text>
              <Text style={{ fontSize: 18, color: "#333" }}>Posts</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 20 }}>2</Text>
              <Text style={{ fontSize: 18, color: "#333" }}>Answers</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                borderRadius: 4,
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: "#39e2d1",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  color: "#083833",
                }}
              >
                account settings
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderTopWidth: 2,
              borderTopColor: "#f1f3f6",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                paddingVertical: 10,
                borderBottomColor: "#000",
                borderBottomWidth: showContent === "CreatedPosts" ? 2 : 0,
              }}
              onPress={() => setShowContent("CreatedPosts")}
            >
              <Text style={{ fontSize: 18 }}>Post you've created</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                paddingVertical: 10,
                borderBottomColor: "#000",
                borderBottomWidth: showContent === "UserAnswers" ? 2 : 0,
              }}
              onPress={() => setShowContent("UserAnswers")}
            >
              <Text style={{ fontSize: 18 }}>Post you've answered</Text>
            </TouchableOpacity>
          </View>
          <Posts />
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
