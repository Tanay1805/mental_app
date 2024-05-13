import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Avatar = ({ source }) => (
  <Image source={source} style={styles.avatar} />
);

const NotificationIcon = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={require('./notification.png')} style={styles.notificationIcon} />
  </TouchableOpacity>
);

const Sleep = () => {
  const handleNotificationPress = () => {
    // Handle notification icon press
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Avatar source={require('./userimage.png')} />
        <NotificationIcon onPress={handleNotificationPress} />
      </View>
      <View style={styles.meter}>
        <Text style={styles.metContent}>Activity</Text>
        <View style={{borderWidth:5,height:'70%', width: '55%',borderRadius:'120%',marginLeft:'25%',marginTop:30, borderColor:'#4949C9'}}>
        </View>
      </View>
      <View style={{borderWidth:1, marginTop: 18,}}></View>
      <View style={styles.container}>
        <View style={[styles.box1, styles.box]}>
          <View style={styles.innerBox1}>
            <Text style={styles.boxHeadings}>Food</Text>
            <Text style={{color : '#FFFFFE'}}><Text style={styles.boxNums}>2,000</Text>{"\n"}Calories</Text>
              <View style={styles.cylContainer}>
                <View style={styles.cylinder}></View>
                <View style={styles.cylinder}></View>
                <View style={styles.cylinder}></View>
                
              </View>
          </View>
        </View>
        <View style={[styles.box2, styles.box]}>
          <View style={[styles.innerBox2, styles.timeBox]}>
            <Text style={styles.boxHeadings}>Diet</Text>
            <Text style={{color : '#FFFFFE'}}><Text style={styles.boxNums}>10</Text>{"\n"}Diet Misses</Text>
          </View>
          <View style={[styles.innerBox2, styles.quaBox]}>
            <Text style={styles.boxHeadings}>Weight</Text>
            <Text style={{color : '#FFFFFE', fontWeight : 400, fontSize : 12, writingDirection : 'rtl'}}><Text style={styles.boxNums}>190</Text>{"\n"}Pounds</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper : {
      flex : 1,
      width : '100%',
      height : '100%',
      paddingRight : 25,
      paddingLeft : 25,
      paddingTop : '20%', // Adjust the paddingTop here
      backgroundColor : '#EAEEE5',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    meter : {
      width : '100%',
      height : '35%',
      // backgroundColor : 'orange',
    },
    metContent : {
      color:'#5B0000',
      fontSize:30,
      fontWeight:700,
      fontFamily:'Epilogue',
      marginLeft : '35%',
    },
    container : {
      width : '95%',
      height : '45%',
      // backgroundColor : 'tomato',
      marginTop : 20,
      flexDirection : 'row',
      justifyContent : 'space-between',
      columnGap : 15
    },
    box : {
      // borderColor : '#333',
      // borderWidth : 2,
      width : '50%',
      // padding : 10,
      borderRadius : 20
    },
    box1 : {
      height : '100%',
      backgroundColor : '#4949C9',
      borderRadius : 20,
    },
    box2 : {
      height : '100%',
      borderRadius : 20
    },
    innerBox1 : {
      height : '100%',
      padding : 20
    },
    cylContainer : {
      display : 'flex',
      flexDirection : 'row',
      // borderColor : '#bbb',
      // borderWidth : 2,
      height : '60%',
      // margin : 10,
      // marginTop : '5%',
      // marginLeft : '2%',
    },
    cylinder : {
      borderColor : '#bbb',
      borderWidth : 2,
      height : '90%',
      width : 30,
      // margin : '2%',
      marginTop:'10%',
      marginHorizontal:'3%',
      borderRadius : '30%',
    },
    innerBox2 : {
      height : '50%',
      width : '100%',
      // borderColor : '#bbb',
      // borderWidth : 2,
      borderRadius : 20
    },
    boxHeadings : {
      color : '#FFFFFE',
      fontSize : 20,
      fontWeight : 500,
      marginBottom : 10,
      fontFamily : 'Roboto',
    },
    boxNums : {
      fontSize : 30,
      fontWeight : 900,
      fontFamily : 'Roboto',
    },
    timeBox : {
      backgroundColor : '#05B080',
      marginBottom : 15,
      height : '47%',
      padding : 15
    },
    quaBox : {
      backgroundColor : '#FFB36D',
      height : '55%',
      padding : 15
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    notificationIcon: {
      width: 30,
      height: 30,
    },
  }
)

export default Sleep;

