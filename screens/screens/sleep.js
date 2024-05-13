import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Sleep(){
  return (
    <View style={styles.wrapper}>
      <View style={styles.meter}>
        <Text style={styles.metContent}>Sleep</Text>
        <View style={{borderWidth:4,height:'60%', width: '38%',borderRadius:'100%',marginLeft:'31%',marginTop:30, borderColor:'#4949C9'}}></View>
      </View>
      <View style={{borderWidth:1, marginTop: 18,}}></View>
      <View style={styles.container}>
        <View style={[styles.box1, styles.box]}>
          <View style={styles.innerBox1}>
            <Text style={styles.boxHeadings}>Sleep</Text>
            <Text style={{color : '#FFFFFE'}}><Text style={styles.boxNums}>2,000</Text>{"\n"}Calories</Text>
              <View style={styles.cylContainer}>
                <View style={styles.cylinder}></View>
                <View style={styles.cylinder}></View>
                <View style={styles.cylinder}></View>
                <View style={styles.cylinder}></View>
              </View>
          </View>
        </View>
        <View style={[styles.box2, styles.box]}>
          <View style={[styles.innerBox2, styles.timeBox]}>
            <Text style={styles.boxHeadings}>Time</Text>
            <Text style={{color : '#FFFFFE'}}><Text style={styles.boxNums}>10</Text>{"\n"}Diet Misses</Text>
          </View>
          <View style={[styles.innerBox2, styles.quaBox]}>
            <Text style={styles.boxHeadings}>Quality</Text>
            <Text style={{color : '#FFFFFE', fontWeight : 400, fontSize : 12, writingDirection : 'rtl', marginRight : 5}}><Text style={styles.boxNums}>190</Text>{"\n"}Pounds</Text>
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
      paddingTop : '35%',
      backgroundColor : '#EAEEE5',
    },
    meter : {
      width : '100%',
      height : '30%',
      // backgroundColor : 'orange',
    },
    metContent : {
      color:'#5B0000',
      fontSize:30,
      fontWeight:700,
      fontFamily:'Epilogue',
      marginLeft : '40%',
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
      height : '72%',
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
      alignItems : 'flex-end',
      justifyContent : 'center',
      // borderColor : '#bbb',
      // borderWidth : 2,
      height : '55%',
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
      marginTop:'5%',
      marginHorizontal:'2%',
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
      fontSize : 36,
      fontWeight : 900,
      fontFamily : 'Roboto',
    },
    timeBox : {
      backgroundColor : '#05B080',
      marginBottom : 15,
      height : '45%',
      padding : 20
    },
    quaBox : {
      backgroundColor : '#FFB36D',
      height : '62%',
      padding : 20
    },
  }
)

// export default Sleep;