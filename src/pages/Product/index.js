import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import ProductWrapper from "~/components/ProductWrapper";
import config from "~/config";
import styles from "./Product.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function Product() {
  const [filter, setFilter] = useState({});

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <div>
          <h2>TẤT CẢ SẢN PHẨM</h2>
        </div>
        <div>
          <Link to={config.routes.product}>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="">Mặc định</option>
              <option value="a->z">A- {">"} Z</option>
              <option value="z->a">Z -{">"} A</option>
              <option value="ascending">Giá tăng dần</option>
              <option value="decrease">Giá giảm dần</option>
              <option value="old->new">Cũ đến mới</option>
              <option value="new->old">Mới đến cũ</option>
            </select>
          </Link>
        </div>
      </div>

      <ProductWrapper filterSelected={filter}/>
    </div>
  );
}

export default Product;
