import React from 'react'
import { View, Text } from 'react-native' 

const Header = function(){
 return (
     <View styles={headerContainer}>
        <Text style={header}>
            Crypto-Currency App.
        </Text>
    </View>
 )   
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 55,
    alignItems: "center"
  },
  header: {
    fontWeight: "bold",
    fonSize: 20
  }
});

const { headerContainer, header } = styles;

export default Header