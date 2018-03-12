import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import FetchCoinData from "../actions/fetchCoinData";
class CryptoContainer extends Component {
  componentDidMount(){
    console.log("Login properties");
    
    console.log(this.props);
    
    this.props.FetchCoinData();
  }

  render() {
    return (
      <View>
        <Text>Container</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log("LOGING STATE");
  console.log(state);
  
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
