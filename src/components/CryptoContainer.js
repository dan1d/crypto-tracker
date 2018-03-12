import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import FetchCoinData from "../actions/fetchCoinData";
import CoinCard from './CoinCard';
import Spinner from 'react-native-loading-spinner-overlay';

class CryptoContainer extends Component {
  componentDidMount(){
    this.props.FetchCoinData();
  }

  renderCoin(coin, index){
    console.log("COINCARD: ", CoinCard);
    
    return (
      <CoinCard
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
      />
    )
  }

  renderCoinCards(){
    const { crypto } = this.props;
    return crypto.data.map(this.renderCoin);
  }

  renderSpinner() {
    return (
      <View>
        <Spinner
          visible={this.props.crypto.isFetching}
          textContent={"Loading..."}
          textStyle={{color: "#253145"}}
          animation="fade"
        />
      </View>
    )
  }

  render() {
    const { crypto } = this.props;
    if(crypto.isFetching) {
      return this.renderSpinner()
    }
    return (
      <View>
        { this.renderCoinCards() }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
