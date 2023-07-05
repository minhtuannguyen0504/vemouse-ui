import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import ProductCard from "~/components/ProductCard";
import styles from "~/components/ProductWrapper/ProductWrapper.module.scss";
import * as searchService from "~/services/searchServices";

const cx = classNames.bind(styles);

function ProductWrapper() {
  const [data, setData] = useState([]);
  const categoryState = useSelector(state => state.myState);

  useEffect(() => {
    const fetchApi = async () => {
      const products = await searchService.search();
      const productsFilter = products.filter(product => product.category === categoryState);
      setData(productsFilter);
    };

    fetchApi();
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryState]);

  return (
    <div className={cx("product")}>
      {data?.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}

export default ProductWrapper;
