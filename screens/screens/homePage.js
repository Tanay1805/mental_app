import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MiniBlockWrapper() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View>
        <ProfileBar />
      </View>
      <View>
        <HeadingText />
      </View>
      <View>
        <FeelingBox />
      </View>
      <View>
        <SessionBox />
      </View>
      <View>
        <Buttons />
      </View>
      {/* <NavBar /> */}
    </View>
  );
}

const ProfileBar = () => {
  return (
    <View style={styles.profile}>
      <Text>Icon</Text>
    </View>
  );
};

const HeadingText = () => {
  return (
    <View style={styles.heading}>
      <Text style={styles.HeadingText}>
        Good Afternoon,
        <Text style={styles.HeadingTextBold}>{"\n"}PK!</Text>
      </Text>
    </View>
  );
};

const FeelingBox = () => {
  return (
    <View style={styles.feelingBox}>
      <Text style={styles.para}> How are you feeling today?</Text>
      <View style={styles.container}>
        <MoodBlock1 />
        <MoodBlock2 />
        <MoodBlock3 />
        <MoodBlock4 />
        <MoodBlock5 />
      </View>
    </View>
  );
};

const MoodBlock1 = () => {
  return <View style={[styles.miniBlock1, styles.miniBlock]}></View>;
};
const MoodBlock2 = () => {
  return <View style={[styles.miniBlock2, styles.miniBlock]}></View>;
};
const MoodBlock3 = () => {
  return <View style={[styles.miniBlock3, styles.miniBlock]}></View>;
};
const MoodBlock4 = () => {
  return <View style={[styles.miniBlock4, styles.miniBlock]}></View>;
};
const MoodBlock5 = () => {
  return <View style={[styles.miniBlock5, styles.miniBlock]}></View>;
};

const SessionBox = () => {
  return (
    <View style={styles.sessionBlock}>
      <View style={styles.sessionInfo}>
        <Text style={{ fontSize: 22, color: "#FBFBFB", fontWeight: "700" }}>
          1 on 1 Sessions
        </Text>
        <Text style={{ color: "#FFFFEF", fontSize: 12, fontWeight: "500" }}>
          Let's open up to the things that matter the most
        </Text>
        <Text style={{ color: "#FFFFFE", fontSize: 16, fontWeight: "600" }}>
          Book Now
        </Text>
      </View>
      <View style={styles.imageBox}>
        <Image
          source={require("../../assets/sessions.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const Buttons = () => {
  return (
    <View style={styles.buttonMain}>
      <View style={styles.row1}>
        <TouchableOpacity style={[styles.button, styles.button1]}>
          <Text style={styles.buttonText1}>Sleep</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button2]}>
          <Text style={styles.buttonText1}>Activity</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row2}>
        <TouchableOpacity style={[styles.button, styles.button3]}>
          <Text style={styles.buttonText2}>Podcast</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button3]}>
          <Text style={styles.buttonText2}>Articles</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    justifyContent: "flex-start",
    backgroundColor: "#EAEEE5",
    paddingLeft: 30,
    paddingRight: 30,
  },
  profile: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    // justifyContent: "space-evenly",
    marginTop: "28%",
  },
  heading: {
    width: "100%",
    height: "28%",
    textAlign: "left",
    marginTop: "4%",
    marginBottom: '20%',
    // borderBottomColor : 'black',
    // borderWidth : 2,
  },
  HeadingText: {
    fontSize: 26,
    color: "#371B34",
    width: "100%",
  },
  HeadingTextBold: {
    fontWeight: "bold",
  },
  para: {
    marginBottom: -75,
    marginTop: -230,
    fontSize: 16,
    // borderBottomColor : 'black',
    // borderWidth : 2,
  },
  feelingBox: {
    marginTop: 35,
    height: 120,
    width: "100%",
    flexDirection: "column",
    // borderBottomColor : 'black',
    // borderWidth : 2,
  },
  container: {
    width: "95%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 75,
    paddingLeft: 10,
    // borderBottomColor : 'blue',
    // borderWidth : 2,
  },
  miniBlock: {
    width: 55,
    height: 55,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  miniBlock1: { backgroundColor: "#C5EDAC" },
  miniBlock2: { backgroundColor: "#9EE5B9" },
  miniBlock3: { backgroundColor: "#99C2A2" },
  miniBlock4: { backgroundColor: "#739E82" },
  miniBlock5: { backgroundColor: "#2C5530" },
  sessionBlock: {
    width: "100%",
    height: 170,
    borderRadius: 15,
    backgroundColor: "#68B2A0",
    flexDirection: "row",
    marginTop: -210,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  sessionInfo: {
    width: "60%",
    height: "100%",
    paddingLeft: 15,
    justifyContent: "space-evenly",
  },
  imageBox: {
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
  },
  buttonMain: {
    width: "100%",
    height: "45%",
    justifyContent: "center",
    // borderBottomColor : 'black',
    // borderWidth : 2,
    marginTop: '-1%',
  },
  row1: {
    flexDirection: "row",
    // alignItems: 'center',
    justifyContent: "space-between",
    marginBottom: 5,
  },
  row2: {
    flexDirection: "row",
    // alignItems: 'center',
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonBox: {
    flex: 1,
    // marginHorizontal: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 16,
    marginHorizontal: 6,
    height: 70,
  },
  button1: { backgroundColor: "#469D89" },
  button2: { backgroundColor: "#74BF97" },
  button3: { backgroundColor: "#A4D6B6" },
  buttonText1: {
    color: "#FFFFFE",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonText2: {
    color: "#573926",
    fontWeight: "bold",
    fontSize: 16,
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 85,
    backgroundColor: "#FFfEF5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: -25,
  },
});
