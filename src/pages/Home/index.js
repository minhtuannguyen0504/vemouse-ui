import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import * as searchService from "~/services/searchServices";
import styles from "./Home.module.scss";
import { Slide, BannerFirst, BannerSecond, Banner } from "~/components/Images";
import ProductCard from "~/components/ProductCard";

const cx = classNames.bind(styles);

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await searchService.search();
      setData(result);
    };
    fetchApi();
  });

  return (
    <div className={cx("wrapper")}>
      {/* Slider */}
      <img className={cx("img")} src={Slide} alt="slide" />

      {/* New Products */}
      <div className={cx("product")}>
        <div className={cx("product__header")}>
          <h4 className={cx("product__header-title")}>Sản phẩm mới</h4>
          <div className={cx("product__header-direct")}>
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>

        <div className={cx("product__divider")}></div>
        <div className={cx("product__dividers")}></div>

        <div className={cx("product__list")}>
          {data?.map(
            (item) =>
              item.category === "men's clothing" &&
              item.id <= 3 && <ProductCard key={item.id} data={item}/>
          )}
        </div>
      </div>

      {/* Banner */}
      <div className={cx("banner", "banner-second")}>
        <img
          className={cx("banner__img-left")}
          src={BannerFirst}
          alt="banner"
        />
        <img
          className={cx("banner__img-right")}
          src={BannerSecond}
          alt="banner"
        />
      </div>

      {/* Free Products */}
      <div className={cx("product")}>
        <div className={cx("product__header")}>
          <h4 className={cx("product__header-title")}>Sản phẩm khuyến mãi</h4>
          <div className={cx("product__header-direct")}>
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>

        <div className={cx("product__divider")}></div>
        <div className={cx("product__dividers")}></div>

        <div className={cx("product__list-free")}>
          {data?.map(
            (item) =>
              item.category === "women's clothing" &&
              item.id <= 18 && <ProductCard key={item.id} data={item} />
          )}
        </div>
      </div>

      {/* Banner */}
      <img src={Banner} className={cx("banner", "banner-second")} alt="" />

      {/* Selling Product */}
      <div className={cx("product")}>
        <div className={cx("product__header")}>
          <h4 className={cx("product__header-title")}>Sản phẩm mua nhều</h4>
          <div className={cx("product__header-direct")}>
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>

        <div className={cx("product__divider")}></div>
        <div className={cx("product__dividers")}></div>

        <div className={cx("product__list-free")}>
          {data?.map(
            (item) =>
              item.category === "jewelery" && <ProductCard key={item.id} data={item} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
