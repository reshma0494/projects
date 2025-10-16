import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className="cursor-pointer">
      <div className="overflow-hidden">
        <img
          className={'hover:scale-90 transition ease-in-out'}
          src={image}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductCard;
