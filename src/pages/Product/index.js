import { memo, useEffect, useState } from "react";
import classNames from "classnames/bind";

import * as searchService from '~/services/searchServices'
import ProductCard from "~/components/ProductCard";
import styles from "./Product.module.scss";

const cx = classNames.bind(styles);

function Product({ category }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const products = await searchService.search(data);
      const productsFilter =  products.filter(product => product.category === category);
      setData(productsFilter);
    }

    fetchApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, data])
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <div>
          <h2>TẤT CẢ SẢN PHẨM</h2>
        </div>
        <div>
          <select name="" id="">
            <option value="" selected>
              Mặc định
            </option>
            <option value="">A- {">"} Z</option>
            <option value="">Z -{">"} A</option>
            <option value="">Giá tăng dần</option>
            <option value="">Giá giảm dần</option>
            <option value="">Cũ đến mới</option>
            <option value="">Mới đến cũ</option>
          </select>
        </div>
      </div>

      <div className={cx("product")}>
        {data?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default memo(Product);
