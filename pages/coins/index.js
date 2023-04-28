import React from 'react';
import Axios from 'axios';

const CoinList = ({coinData}) => {
  console.log(coinData);
  return (
    <div> {coinData.coins.map( (coin) => {
      return (
        <div key={coin.key}>
          <h1>{coin.name}</h1>
          <img src={coin.icon} alt={coin.name}/>
          <p> {coin.price}</p>
        </div>
      );
    } )} </div>
  )
}
export const getStaticProps = async() => {
  const data = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0");

  return {
    props: {
      coinData: data.data,
    },
  };

};

export default CoinList;