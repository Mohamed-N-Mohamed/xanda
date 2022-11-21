import React, { useState } from "react";

const Product = ({ products, setBasket, setGames, setClicked, setTotal }) => {
  //add games to basket when clicked
  const handleOnclick = (game) => {
    //add new game
    setBasket((prev) => [...prev, game]);

    //add selected price
    setTotal((prev) => [...prev, game.price]);

    let newS = {
      selected: true,
    };

    //update game TODO -- loop through each array and change selected value to true
    // setGames((prev) => [{ ...prev, selected: true }]);

    //basket state refreshes on reload TODO - make sure the state stays the same

    //set clicked to true
    setClicked(true);
  };
  return (
    <div className='products-container'>
      {products.map((product) => (
        <div className='product' key={product.id}>
          <div className='product-image'>
            <img src={product.image} alt='product image' className='p-img' />
          </div>
          <div className='product-info'>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span className='flex-coins'>
              <img src='/assets/coins.png' alt='' className='coins' />
              <p>{product.price} Gill</p>
            </span>

            <img src='/assets/controller.png' alt='' className='bg-image' />

            <button onClick={(e) => handleOnclick(product)}>
              Add to Basket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
