import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPhone,
  faBagShopping,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import * as searchService from "~/services/searchServices";
import styles from "./Sidebar.module.scss";
import { ListItem } from "~/layouts/components";
import ProductItem from "~/components/ProductItem";

const cx = classNames.bind(styles);

function Sidebar() {
  const [data, setData] = useState([]);
  const [expandedState, setExpanedState] = useState([
    false,
    false,
    false,
    false,
  ]);

  const items = [
    { title: "Thời trang nam", items: ["Hàng mới về", "Hàng giảm giá"] },
    {
      title: "Thời trang nữ",
      items: ["Hàng mới về", "Hàng giảm giá", "Hàng khuyến mãi"],
    },
    { title: "Trang sức", items: ["Hàng mới về", "Hàng giảm giá"] },
    { title: "Sản phẩm mới", items: ["Hàng mới về", "Hàng giảm giá"] },
  ];

  useEffect(() => {
    const fetchApi = async () => {
      const respon = await searchService.search();
      setData(respon);
    };

    fetchApi();
  });

  const handleExpansion = (index) => {
    const newExpandedState = [...expandedState];
    newExpandedState[index] = !newExpandedState[index];
    setExpanedState(newExpandedState);
  };

  return (
    <div className={cx("wrapper")}>
      {/* Cagegory */}
      <div className={cx("category")}>
        <div className={cx("category__title")}>
          <FontAwesomeIcon icon={faBars} />
          <p className={cx("category__title-text")}>Danh mục sản phẩm</p>
        </div>

        <div>
          <ul>
            {items.map((item, index) => (
              <ListItem
                key={index}
                title={item.title}
                items={item.items}
                expanded={expandedState[index]}
                onExpansion={() => handleExpansion(index)}
              />
            ))}

            <li className={cx("category__list-item")}>Sản phẩm nổi bật</li>
            <li className={cx("category__list-item")}>Sản phẩm bán chạy</li>
            <li className={cx("category__list-item")}>Sản phẩm khuyến mãi</li>
          </ul>
        </div>
      </div>

      {/* Top Products */}
      <div className={cx("product__header")}>
        <h4 className={cx("product__header-title")}>Sản phẩm bán chạy</h4>
        <div className={cx("product__header-direct")}>
          <FontAwesomeIcon icon={faAngleLeft} />
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>

      <div className={cx("product__divider")}></div>
      <div className={cx("product__dividers")}></div>

      <div className={cx("product__list")}>
        {data?.map(
          (item) => item.category === "jewelery" && <ProductItem key={item.id} data={item} />
        )}
      </div>

      {/* Support */}
      <div className={cx("support")}>
        {/* Support Order */}
        <div className={cx("support__transport")}>
          <div className={cx("support__transport-icon")}>
            <FontAwesomeIcon icon={faPhone} />
          </div>

          <div className={cx("support__transport-info", "scale")}>
            <p className={cx("support__transport-info-title")}>
              Hỗ trợ trực tuyến 24/7
            </p>
            <h3 className={cx("support__transport-info-desc")}>19006750</h3>
          </div>
        </div>

        {/* Support Change */}
        <div className={cx("support__transport")}>
          <div className={cx("support__transport-icon")}>
            <FontAwesomeIcon icon={faBagShopping} />
          </div>

          <div className={cx("support__transport-info", "scale-second")}>
            <p className={cx("support__transport-info-title")}>Đổi trả hàng trong ngày</p>
            <h3 className={cx("support__transport-info-desc")}>19006750</h3>
          </div>
        </div>

        {/* Support Transport */}
        <div className={cx("support__transport")}>
          <div className={cx("support__transport-icon")}>
            <FontAwesomeIcon icon={faTruckArrowRight} />
          </div>

          <div className={cx("support__transport-info")}>
            <p className={cx("support__transport-info-title")}>Miễn phí vận chuyển</p>
            <h3 className={cx("support__transport-info-desc")}>19006750</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
