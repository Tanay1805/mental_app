import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MiniBlockWrapper = () => {
    return (
      <View style={styles.wrapper}>
        <View>
          <ProfileBar/>
        </View>
        <View>
          <HeadingText/>
        </View>
        <View>
          <FeelingBox/>
        </View>
        <View>
          <SessionBox/>
        </View>
        <NavBar/>
      </View>
    );
  };
  
  const FeelingBox = () => {
    return (
      <View style={styles.feelingBox}>
          <Text style = {{fontSize : 16}}>How are you feeling today?</Text>
          <View style = {styles.container}>
            <MiniBlock />
            <MiniBlock />
            <MiniBlock />
            <MiniBlock />
            <MiniBlock />
          </View>
      </View>
    );
  };
  
  const ProfileBar = () => {
    return(
      <View style = {styles.profile}>
        <Image source={{width : 30, height : 30, uri : 'https://imgs.search.brave.com/BAYqxwYBzias4DgElqqShphx03loDKZduaosYlo3eZI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9o/ZWFsdGhjYXRlLW1l/ZGljYWwvc29tZS1t/ZWRpY2FsLWFwcC1p/Y29ucy91c2VyLTE0/Ni5wbmc'}}/>
        <Text>Profile Bar</Text>
        <View style = {{width : 30, height : 30, backgroundColor : '#68B2A0'}}>Icon</View>
      </View>
    )
  }
  
  const MiniBlock = () => {
    return (
      <View style={styles.miniBlock}></View>
    );
  };
  
  const HeadingText = () => {
    return (
      <View style = {styles.heading}>
        <Text style = {styles.HeadingText}>Good Afternoon,
          <Text style = {styles.HeadingTextBold}>{'\n'}Poonam!</Text>
        </Text>
      </View>
    );
  };
  
  const SessionBox = () => {
    return (
      <View style={styles.sessionBlock}>
          <View style = {styles.sessionInfo}>
            <Text style = {{fontSize : 22, color: '#FBFBFB'}}>1 on 1 Sessions</Text>
            <Text style={{color: '#FBFBFB', fontSize : 12}}>Let’s open up to the things that matter the most</Text>
            <Text style={{color: '#FFFFFE', fontSize : 16}}>Book Now</Text>
          </View>
          <View>
            <Image
              source={{ uri: 'https://imgs.search.brave.com/rh1nBRntbrIeU45RLfbns78pS_jAcV15JGl0h04Jo24/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZiL01lZXR1cF9M/b2dvLnBuZw' }}
              style={styles.image}
            />
          </View>
        </View>
    );
  };
  
  const NavBar = () => {
    return (
      <View style = {styles.navbar}>
        <MiniBlock/>
        <MiniBlock/>
        <MiniBlock/>
        <MiniBlock/>
        <MiniBlock/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      width : '100%',
      height : '100%',
      justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor : '#EAEEE5',
      padding : 30,
    },
    wrapperText: {
      fontSize: 20,
      marginBottom: 10,
    },
    profile : {
      width : '100%',
      height : 38,
      flexDirection : 'row',
      justifyContent : 'space-evenly'
    },
    feelingBox : {
      // borderWidth: 2,
      marginTop : 20,
      height : 120,
      width : '90%',
      flexDirection : 'column',
    },
    container: {
      // borderWidth: 2,
      // padding: 10,
      // borderRadius: 10,
      width : '100%',
      height : 100,
      justifyContent : 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    containerText: {
      fontSize: 16,
      marginBottom: 5,
    },
    miniBlock: {
      width: 50,
      height: 50,
      backgroundColor: '#AEAFF7',
      borderRadius : '6px',
      marginRight : '10px',
    },
    miniBlockText: {
      fontSize: 14,
      color: 'white',
    },
    heading : {
      width : '100%',
      height : '30%',
      textAlign : 'left',
    },
    HeadingText : {
      fontSize : 26,
      color: '#371B34',
      width : '100%',
    },
    HeadingTextBold : {
      fontWeight : "bold",
    },
    sessionBlock : {
      width : '100%',
      // borderWidth : 1,
      height : 150,
      borderRadius : 15,
      backgroundColor : '#68B2A0',
      flexDirection : 'row'
    },
    sessionInfo : {
      width : '70%',
      height : '100%',
      paddingLeft : 15,
      justifyContent : 'space-evenly'
    },
    navbar : {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 85,
      backgroundColor: '#FFfEF5', 
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft : -25,
    },
  });
  
  export default MiniBlockWrapper;