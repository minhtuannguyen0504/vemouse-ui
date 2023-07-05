import classNames from "classnames/bind";
import ProductWrapper from "~/components/ProductWrapper";
import styles from "./Product.module.scss";

const cx = classNames.bind(styles);

function Product() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <div>
          <h2>TẤT CẢ SẢN PHẨM</h2>
        </div>
        <div>
          <select name="" id="">
            <option value="">
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

      <ProductWrapper />
    </div>
  );
}

export default Product;
