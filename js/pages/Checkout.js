import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Checkout = ({ removeGame }) => {
  //use location to get states from link
  const location = useLocation();

  const { basket, total } = location.state;

  //add total together
  const sumTotal = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  //TODO -- Update checkout when you click on remove button
  return (
    <div className='xanda-react-trial relative'>
      <Header />
      <div className='checkout-content'>
        <div className='basket'>
          <div className='title'>
            <h2>Checkout</h2>
          </div>
          <div>
            <Link
              to='/'
              className='link-2'
              state={{ data: basket, price: total }}
            >
              Go Back
            </Link>
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

          <div className='total'>
            <div className='total-text'>
              <h4>Total</h4>
            </div>

            <div className='price'>
              <p>{sumTotal} Gill</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
