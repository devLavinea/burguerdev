import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const ProductCardBurguer = ({ image, name, description, price, onClick,  }) => {
  
  return (
    <div className="flex gap-2 bg-neutral-900 text-white p-[15px] rounded-1xl">
      <img
        src={image}
        alt={name}
        className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p className="font-sm">{description}</p>
        <div className="flex items-center gap-2 justify-between mt-3">
          <p className="font-bold text-lg">R$ {price}</p>
          <button
            className="bg-amber-500 rounded cursor-pointer w-[47px] h-[25px] flex items-center justify-center"
            onClick={onClick} // Aqui chamamos addToCart diretamente
          >
            <FaCartPlus className="fa fa-cart-plus text-lg text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardBurguer;
