import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "~/components/ProductCard";
import styles from "~/components/ProductWrapper/ProductWrapper.module.scss";
import * as searchService from "~/services/searchServices";

const cx = classNames.bind(styles);

function ProductWrapper({ filterSelected }) {
  const [data, setData] = useState([]);
  const categoryState = useSelector((state) => state.categoryState);

  // eslint-disable-next-line no-unused-vars
  const sortDecrease = (prices) => {
      var temp;
      for(let i = 0; i < prices.length; i++) {
          if(prices[i] < prices[i + 1]) {
              temp = prices[i];
              prices[i+1] = prices[i];
              prices[i] = temp;
          }
      }
      return prices;
  }

  useEffect(() => {
    const fetchApi = async () => {
      const products = await searchService.search();
      const productsFilter = products.filter(
        (product) => product.category.localeCompare(categoryState) === 0
      );
      setData(productsFilter.length > 0 ? productsFilter : products);
    };
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryState]);

  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (filterSelected) {
      case "decrease":
        const listPrices = data.map(
          (product) => product.price > 0 && product.price
        );
        let afterSortPrices = sortDecrease(listPrices);
        console.log(sortDecrease(listPrices));
        const productsFilter = data.filter(
          (product, index) => product.price === afterSortPrices[index]
        );
      setData(productsFilter.length > 0 ? productsFilter : data);

        break;
      default:
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterSelected]);

  return (
    <div className={cx("product")}>
      {data?.map((product) => (
        product.category !== 'electronics' && <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}

export default ProductWrapper;
