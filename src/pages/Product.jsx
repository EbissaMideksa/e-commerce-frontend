import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../components/breadCrum/BreadCrum';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import ProductTabs from '../components/productTabs/ProductTabs';
import RelatedProducts from '../components/relatedProducts/RelatedProducts';


const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!all_product || all_product.length === 0) {
    return <p>Loading product...</p>;
  }

  const product = all_product.find(item => item.id === Number(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <ProductTabs description={product.description} />
      <RelatedProducts category={product.category} currentProductId={product.id} />
    </div>
  );
};

export default Product;
