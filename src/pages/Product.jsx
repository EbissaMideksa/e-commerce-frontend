import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import BreadCrum from '../components/breadCrum/BreadCrum';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import ProductTabs from '../components/productTabs/ProductTabs';
import RelatedProducts from '../components/relatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (all_product && all_product.length > 0) {
      const foundProduct = all_product.find(
        (item) => item.id === Number(productId)
      );
      setProduct(foundProduct || null);
      //console.log('productId from URL:', productId);
    }
  }, [productId, all_product]);

  if (!all_product || all_product.length === 0) {
    return <p>Loading product…</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <ProductTabs description={product.description} />
      <RelatedProducts
        category={product.category}
        currentProductId={product.id}
        allProducts={all_product}
      />
    </div>
  );
};

export default Product;
