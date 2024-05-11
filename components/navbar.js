import React from "react";
import {View, StyleSheet} from 'react-native';

const NavBar =() => {
    return (
        <View style={styles.navbar}></View>
    );
};

const styles = StyleSheet.create({
        navbar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor : '#EAEEF5',
            position : 'absolute',  
            bottom : 0,
            width : '100%',
            height : 90,
        },
    }
)

export default NavBar;