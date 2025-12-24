import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductCard from './ProductCard';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestSellerProducts = products.filter((product) => product.bestseller);
    setBestSeller(bestSellerProducts.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={'Best'} text2={'Seller'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-6">
          {bestSeller.map((bestSellerProduct) => {
            return (
              <ProductCard
                key={bestSellerProduct._id}
                id={bestSellerProduct._id}
                image={bestSellerProduct.image[0]}
                name={bestSellerProduct.name}
                price={bestSellerProduct.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
