import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native';

const StyledDivision = () => {
  const pressed = () => {
    // join now logic
  };
  return (
    <SafeAreaView style={styles.wrapper}>
        <Upcoming/>

        <Text style={{alignSelf : 'flex-start', marginLeft : 28, marginTop : 25, fontSize : 20, fontWeight : '500'}}>All Sessions</Text>

        <View style={styles.sessionContainer}>
            <Session/>
            <Session/>
        </View>
    </SafeAreaView>
  );
};


// COMPONENTS
const Upcoming = () => {
    return(
        <View style={styles.container}>
            <Text style={[styles.sessionHeading, styles.sessionText]}>Upcoming Session</Text>
            <Text style={[styles.sessionDoctor, styles.sessionText]}>Sahana V, Msc in Clinical Psychology</Text>
            <Text style={[styles.sessionTime, styles.sessionText]}>7:30 PM - 8:30 PM</Text>
            <TouchableOpacity><Text style={styles.sessionJoin}>Join Now</Text></TouchableOpacity>
        </View>
    )
}

const Session = () =>{
    return(
        <View style={styles.session}>
            <View style={styles.doctorInfo}>
                <View style={styles.doctorPic}></View>
                <View>
                    <Text style={{fontSize : 18, fontWeight : '600'}}>Sahana V</Text>
                    <Text style={{fontSize : 14, fontWeight : '400'}}>Msc in Clinical Psychology</Text>
                </View>
            </View>

            <View style={styles.sessionDetails}>
                <View style={styles.sessionDate}>
                    <Text style={{color : '#707070'}}>31st March ‘22</Text>
                    <Text style={{color : '#707070'}}>7:30 PM - 8:30 PM</Text>
                </View>

                <View style={styles.sessionButtons}>
                    <TouchableOpacity style={[styles.button]}><Text style={styles.buttonText}>Reschedule</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button2]}><Text style={[styles.buttonText, styles.buttonText2]}>Add to Calendar</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    wrapper : {
        width : '100%',
        height : '100%',
        backgroundColor : '#EAEEE5',
        flex : 1,
        paddingLeft : 30,
        paddingRight : 30,
        alignItems : 'center',
    },
    container: {
        width: '90%',
        backgroundColor: '#588157',
        borderRadius: 20,
        height: '24%',
        marginTop : '25%',     ///////////////////////////////////////
        padding : 30,
        justifyContent : 'space-evenly',
        gap : 2,
        shadowColor : '#31572C',
        shadowOffset : {
            width : 3,
            height : 5,
        },
        shadowOpacity : 0.3,
        shadowRadius : 5,
    },
    sessionText : {
        color : '#FBFBFB',
    },
    sessionHeading : {
        fontSize : 22,
        fontWeight : '800',
    },
    sessionDoctor : {
        fontSize : 14
    },
    sessionTime : {
        fontSize : 14,
        fontWeight : '600'
    },
    sessionJoin : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#FBFBFB',
        marginTop : 12,
    },
    sessionContainer : {
        width : '90%',
        flex : 1,
        marginTop : 20,
        shadowColor : '#E6CCB2',
        shadowOffset : {
            width : 3,
            height : 5,
        },
        shadowOpacity : 0.3,
        shadowRadius : 5,
        rowGap : 25
    },
    session : {
        width : '100%',
        height : 200,
        backgroundColor : '#FFF6EB', 
        borderRadius : 18,
        padding : 10,
        paddingLeft : 20,
        paddingRight : 20,
    },
    doctorInfo : {
        width : '100%',
        height : '40%',
        borderBottomWidth : 1,
        borderBottomColor : '#D9D8D8',
        flexDirection : 'row',
        alignItems : 'center',
        marginLeft : 10
    },
    doctorPic : {
        width : '25%',
        alignItems: 'center',
    },
    sessionDetails : {
        width : '100%',
        height : '60%',
        justifyContent : 'space-around',
    },
    sessionDate : {
        flexDirection  : 'row',
        gap : 40,
        color : '#707070'
        // marginTop : 20
    },
    sessionButtons : {
        flexDirection : 'row',
        gap : 40,
    },
    button : {
        width  : 120,
        height : 50,
        borderRadius : 10,
        backgroundColor : '#573926',
        justifyContent : 'center',
        alignItems : 'center'
    },
    button2 : {
        justifyContent : 'center',
        alignItems : 'center',
        width  : 140,
        height : 50,
        borderRadius : 10,
    },
    buttonText : {
        fontSize : 18,
        fontWeight : 'bold',
        color : '#FBFBFB'
    },
    buttonText2 : {
        color: '#573926'
    }
})

export default StyledDivision;
