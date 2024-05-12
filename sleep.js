import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Sleep = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.meter}></View>

      <View style={styles.container}>
        <View style={[styles.box1, styles.box]}>
          <View style={styles.innerBox1}>
            <Text style={{color : '#FFFFFE'}}>Sleep</Text>
            <Text style={{color : '#FFFFFE'}}>2000 {"\n"}Calories</Text>
          </View>
        </View>
        <View style={[styles.box2, styles.box]}>
          <View style={[styles.innerBox2, styles.timeBox]}>
            <Text style={{color : '#FFFFFE'}}>Time</Text>
            <Text style={{color : '#FFFFFE'}}>10{"\n"}Diet Misses</Text>
          </View>
          <View style={[styles.innerBox2, styles.quaBox]}>
            <Text style={{color : '#FFFFFE'}}>Quality</Text>
            <Text style={{color : '#FFFFFE'}}>190{"\n"}Pounds</Text>
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
      height : '35%',
      backgroundColor : 'orange',
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
      height : '75%',
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
    innerBox2 : {
      height : '50%',
      width : '100%',
      // borderColor : '#bbb',
      // borderWidth : 2,
      borderRadius : 20
    },
    timeBox : {
      backgroundColor : '#05B080',
      marginBottom : 15,
      height : '40%',
      padding : 20
    },
    quaBox : {
      backgroundColor : '#FFB36D',
      height : '60%',
      padding : 20
    },
  }
)

export default Sleep;