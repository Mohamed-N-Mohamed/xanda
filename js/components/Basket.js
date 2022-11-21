import React, { useState } from "react";
import { Link } from "react-router-dom";

const Basket = ({ basket, clicked, removeGame, total }) => {
  //add total together
  const sumTotal = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <div className='basket'>
      <div className='title'>
        <h2>Basket</h2>
      </div>
      <div>
        {basket.length === 0 && <span className='empty'>No items</span>}
      </div>
      <div className='games'>
        {basket.map((game) => (
          <div className='games-basket' key={game.id}>
            <div className='game-image'>
              <img src={game.image} alt='game image' />
            </div>
            <div className='game-info'>
              <h3>{game.name}</h3>

              <div className='game-price'>
                <img src='/assets/coins.png' alt='' />
                <p>{game.price} Gill</p>
              </div>
            </div>

            <div className='delete' onClick={() => removeGame(game)}>
              <img src='/assets/bin.png' alt='' />
            </div>
          </div>
        ))}
      </div>

      {clicked && (
        <div className='total'>
          <div className='total-text'>
            {}
            <h4>Total</h4>
          </div>

          <div className='price'>
            <p>{sumTotal} Gill</p>
          </div>
        </div>
      )}

      {/* <button className='continue'>Continue</button> */}

      <button
        className={clicked ? "continue" : "continue btn"}
        disabled={clicked}
      >
        <Link to='/checkout' className='link' state={{ basket, total }}>
          Continue
        </Link>
      </button>
    </div>
  );
};

export default Basket;
