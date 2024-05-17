import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native"; // Import Text component
import { Avatar, Card, IconButton } from "react-native-paper"; // Removed unused imports
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Community = () => {
  const [thumbsClicked, setThumbsClicked] = useState(false);

  const data = [
    { id: "1", username: "Manas", time: "just now" },
    { id: "2", username: "Raheel", time: "5h" },
    { id: "3", username: "Anonymous", time: "3h" },
    { id: "4", username: "Prem", time: "1h" },
    { id: "5", username: "Hanshika", time: "2h" },
    { id: "6", username: "Name1", time: "3h" },
  ];

  const getTimeDisplay = (time) => {
    if (time === "just now") {
      return time;
    } else {
      return `${time} ago`;
    }
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.username}
        subtitle="Ouch?"
        left={(props) => (
          <Avatar.Icon
            {...props}
            icon="account-circle"
            color="white"
            backgroundColor="black"
          />
        )}
        right={() => (
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{getTimeDisplay(item.time)}</Text>
          </View>
        )}
      />
      <Card.Content>
        <Text>{item.content}</Text>
      </Card.Content>

      <Card.Actions style={styles.cardActions}>
        <IconButton
          icon="thumb-up-outline"
          color={thumbsClicked ? "#4949c9" : "#d9d8d8"}
          onPress={() => setThumbsClicked(!thumbsClicked)}
        />
        <IconButton icon="comment-outline" onPress={() => {}} />
        <IconButton
          icon="share-outline"
          onPress={() => {}}
          style={styles.shareIcon}
        />
      </Card.Actions>
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: "#eaeee5" }]}>
      {/* Profile icon */}
      <View style={styles.profileContainer}>
        <Avatar.Icon
          size={50}
          icon="account-circle"
          style={styles.profileIcon}
        />
      </View>

      {/* Community heading */}
      <Text style={styles.heading}>Community</Text>

      {/* Notification icon */}
      <View style={styles.notificationContainer}>
        <IconButton
          icon="bell"
          color="#69B2A0"
          style={styles.notificationIcon}
          onPress={() => {}}
        />
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationNumber}>9</Text>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <View style={styles.editIconContainer}>
        <View style={styles.editButton}>
          <IconButton icon="pencil" onPress={() => {}} color="white" />
        </View>
        <Text style={styles.editIconText}>Edit</Text>
      </View>

      {/* <View style={styles.bottomIcons}>
        <IconButton icon="home" onPress={() => {}} />
        <IconButton icon="video" onPress={() => {}} />
        <IconButton icon="music" onPress={() => {}} />
        <MaterialCommunityIcons
          name="account-group"
          size={24}
          onPress={() => {}}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 40,
    marginRight: 330,
  },
  profileIcon: {
    backgroundColor: "white",
  },
  heading: {
    fontSize: 46,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    marginVertical: 1,
    elevation: 1,
    borderColor: "#d9d8d8",
    backgroundColor: "",
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 200,
    marginBottom: 25,
  },
  timeText: {
    color: "#777777", // Set text color to a lighter shade
    fontSize: 12,
    marginLeft: 5,
  },
  shareIcon: {
    marginLeft: 230,
  },
  bottomIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  notificationContainer: {
    position: "absolute",
    top: 29,
    right: 20,
  },
  notificationIcon: {
    marginTop: 20,
    backgroundColor: "#f2f6f5",
  },
  notificationBadge: {
    backgroundColor: "#69B2A0",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -5,
    top: -5,
    marginTop: 20,
  },
  notificationNumber: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 20,
  },
  editIconContainer: {
    position: "absolute",
    bottom: 70,
    right: 15,
    alignItems: "flex-end", // Align items to the end
  },
  editButton: {
    backgroundColor: "#69B2A0",
    borderRadius: 50,
    padding: 10,
  },
  editIconText: {
    fontSize: 12,
    marginTop: 5,
    color: "#777777", // Set text color to a lighter shade
  },
});

export default Community;
