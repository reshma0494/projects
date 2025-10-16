import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductCard from './ProductCard';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  console.log('products', products);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={'Latest'} text2={'Collection'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-6">
          {latestProducts.map((latestProduct) => {
            return (
              <ProductCard
                key={latestProduct._id}
                id={latestProduct._id}
                image={latestProduct.image[0]}
                name={latestProduct.name}
                price={latestProduct.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
