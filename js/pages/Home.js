import React, { useState } from "react";
import Header from "../components/Header";
import data from "../gameData";
import Product from "../components/Product";
import Basket from "../components/Basket";

const Home = () => {
  //set state for selected games
  const [games, setGames] = useState(data);
  const [basket, setBasket] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [total, setTotal] = useState([]);

  //remove game from array
  const removeGame = (game) => {
    setBasket(basket.filter((x) => x.id !== game.id));

    //set clicked false
    if (basket.length > 1) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };
  return (
    <div className='xanda-react-trial relative'>
      <Header />
      <div className='flex'>
        <Product
          products={games}
          setBasket={setBasket}
          setGames={setGames}
          setClicked={setClicked}
          setTotal={setTotal}
        />
        <Basket
          basket={basket}
          clicked={clicked}
          removeGame={removeGame}
          total={total}
        />
      </div>
    </div>
  );
};

export default Home;
