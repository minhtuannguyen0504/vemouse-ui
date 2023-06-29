import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);

function ProductItem({ data }) {
  const nameProduct = data.title.split(" ");
  const firstFourWords = nameProduct.slice(0, 3);
  return (
    <Link to={config.routes.find} className={cx("link")}>
      <div className={cx("wrapper")}>
        <img src={data.image} className={cx("image")} alt="img" />
        <div className={cx("info")}>
          <p className={cx("name")}>{firstFourWords.join(" ")}</p>
          <p className={cx("price")}>
            {data.price}
            <span className={cx("symbol")}>₫</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
