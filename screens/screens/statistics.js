import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import Navbar from './navbar'

const StatisticPage = () => {
    return(
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.heading}>Statistics</Text>
            <View style={styles.mainBox1}>
                <View style={styles.innerBox1}>
                    <View style = {{width : '50%'}}>
                        <Text style={styles.elementHeading}>Heart Rate</Text>
                        <Text style={styles.elementHuge}>96 bpm</Text>
                    </View>
                    <Image style={{width : '50%'}}/>
                </View>
                <View style={styles.innerBox2}>
                    <View style={styles.miniBox1}>
                        <Image/>
                        <Text style={styles.elementHeading}>sPO2</Text>
                        <Text style={styles.elementHuge}>96%</Text>
                    </View>
                    <View style={styles.miniBox2}>
                        <Image/>
                        <Text style={styles.elementHeading}>Stress rate</Text>
                        <Text style={styles.elementHuge}>43%</Text>
                    </View>
                </View>
            </View>

            <Text style={{marginLeft : 25, fontSize : 17, fontWeight : 'bold', letterSpacing : 1}}>Latest Reports</Text>

            <View style={styles.mainBox2}>
                <View style={[styles.report]}>
                    <View style={[styles.reportLogo, styles.reportLogo1]}></View>
                    <View style={styles.reportText}>
                        <Text style={styles.reportHeading}>Stress levels report</Text>
                        <Text style={styles.reportSub}>8 files</Text>
                    </View>
                    <TouchableOpacity style={{width : '10%', backgroundColor : 'yellow'}}><Text>Button</Text></TouchableOpacity>
                </View>

                <View style={[styles.report]}>
                    <View style={[styles.reportLogo, styles.reportLogo2]}></View>
                    <View style={styles.reportText}>
                        <Text style={styles.reportHeading}>Sleep report</Text>
                        <Text>6 files</Text>
                    </View>
                    <TouchableOpacity style={{width : '10%', backgroundColor : 'yellow'}}><Text>Button</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper : {
        flex : 1,
        backgroundColor : '#EAEEE5',
        width : '100%',
        height : '100%',
        // paddingLeft : 40,
        justifyContent : 'space-evenly',
        // alignItems : 'center'
    },
    heading : {
        fontSize: 27,
        fontWeight : 'bold',
        marginTop : 70,
        marginLeft : 30,
    },
    mainBox1 : {
        width : '100%',
        height : '45%',
        padding : 20,
        rowGap : 15,   //////////////////////////////////
        shadowColor: '#999', 
        shadowOffset: {
        width: 4,
        height: 4, 
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,  
    },
    mainBox2 : {
        width : '100%',
        height : '35%',
        padding : 20,
        // justifyContent : 'space-around',
        gap : 15
    },
    innerBox1 : {
        width : '100%',
        height : '45%',
        backgroundColor : '#F0F9DC',
        borderRadius : 24,
        flexDirection : 'row',
        alignItems : 'center',
        paddingLeft : 15
    },
    innerBox2 : {
        width : '100%',
        height : '45%',
        flexDirection : 'row',
        // columnGap : 15
        justifyContent : 'space-between'
    },
    miniBox1 : {
        width : '48%',
        height : '100%',
        backgroundColor : '#E1F5F1',
        borderRadius : 24,
        justifyContent : 'space-around',
        paddingLeft : 15
    },
    miniBox2 : {
        width : '48%',
        height : '100%',
        backgroundColor : '#FAF0DB',
        borderRadius : 24,
        justifyContent : 'space-around',
        paddingLeft : 15
    },
    elementHeading : {
        fontSize : 16,
        color : '#0E1012',
    },
    elementHuge : {
        fontSize : 50,
        color : '#0E1012',
    },
    report : {
        width : '100%',
        height : '35%',
        borderColor : '#D7DDEA',
        borderWidth : 1,
        borderRadius : 28,
        flexDirection : 'row',
        alignItems : 'center',
        gap : 15,
        shadowColor: '#91B7C7', 
        shadowOffset: {
        width: 4,
        height: 5, 
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,   
    },
    reportLogo:{
        width : '20%',
        height : '80%',
        borderRadius : 20,
        marginLeft : 10
    },
    reportLogo1 : {
        backgroundColor : '#DCEDF9',
    },
    reportLogo2 : {
        backgroundColor : '#D6FFF3',
    },
    reportText : {
        justifyContent : 'center',
        width : '55%'
    },
    reportHeading : {
        fontSize  : 18,
        fontWeight : 'bold',
        color : '#0E1012'
    },
    reportSub : {
        fontSize : 14,
        color : '#4A545E'
    }
})

export default StatisticPage;