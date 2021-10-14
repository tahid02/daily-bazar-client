import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import Header from '../../components/common/Header';
import { useEffect, useState } from 'react';
import { IProduct } from 'types';
import axios from 'axios';
import productService from 'services/productService';
const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  useEffect(() => {
    productService.getProduct().then((res) => {
      console.log({ res });
      console.log('this is home page');
      setProducts(res.data);
    });
    // axios
    //   .get('https://fvaly.herokuapp.com/api/product')
    //   .then((res) => console.log(res.data));
  }, []);
  return (
    <div>
      <Header />
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
