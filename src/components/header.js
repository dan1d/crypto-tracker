import React from 'react'
import { View, Text, StyleSheet } from 'react-native' 

const Header = function(){
 return (
     <View style={headerContainer}>
        <Text style={title}>
          CryptApp
        </Text>
        <Text style={subTitle}>
          Marketcap top 15
        </Text>
    </View>
 )   
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 30,
    padding: 10,
    alignItems: "center",
    borderBottomColor: "#323234",
    borderBottomWidth: 3
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ff6d00"
  },
  subTitle: {
    color: "gray",
    fontSize: 10
  }
});

const { headerContainer, title, subTitle } = styles;

export default Header