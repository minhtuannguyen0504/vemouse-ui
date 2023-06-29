import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ProductCard({ data }) {
  return (
    <Link to={"#"} className={cx("wrapper")}>
      <img src={data.image} className={cx("image")} alt="img" />
      <div className={cx("info")}>
        <p className={cx("name")}>{data.title}</p>
        <p className={cx("price")}>{data.price}<span className={cx("symbol")}>₫</span></p>
      </div>
    </Link>
  );
}

export default ProductCard;
