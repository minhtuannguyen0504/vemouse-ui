import {
  faAngleRight,
  faBagShopping,
  faChevronDown,
  faPhone,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { Logo } from "~/components/Images";
import config from "~/config";
import { Search } from "~/layouts/components";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
/*   const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }; */

  return (
    <header className={cx("wrapper")}>
      {/* Action */}
      <div className={cx("action")}>
        {/* Login - Register */}
        <div className={cx("action__btn")}>
          <input
            className={cx("action__btn-left")}
            type="button"
            value="Đăng ký"
          />
          <input
            className={cx("action__btn-left")}
            type="button"
            value="Đăng nhập"
          />
        </div>

        {/* Bill - Guide */}
        <div className={cx("action__btn")}>
          <input
            className={cx("action__btn-right")}
            type="button"
            value="Hướng dẫn"
          />
          <input
            className={cx("action__btn-right")}
            type="button"
            value="Đơn hàng"
          />
        </div>
      </div>

      {/* Logo */}
      <div className={cx("logo")}>
        {/* Logo Shop */}
        <Link to={config.routes.home} className={cx("logo-link")}>
          <img className={cx("logo-main")} src={Logo} alt="logo" />
        </Link>

        {/* Logo Transport */}
        <div className={cx("logo__transport")}>
          <div className={cx("logo__transport-icon")}>
            <FontAwesomeIcon icon={faTruckArrowRight} />
          </div>

          <div className={cx("logo__transport-info")}>
            <p className={cx("logo__transport-info-title")}>
              Miễn phí vận chuyển
            </p>
            <p className={cx("logo__transport-info-desc")}>
              Với đơn giá trị trên <strong>1.000.000đ</strong>
            </p>
          </div>
        </div>

        {/* Logo Order */}
        <div className={cx("logo__transport")}>
          <div className={cx("logo__transport-icon")}>
            <FontAwesomeIcon icon={faPhone} />
          </div>

          <div className={cx("logo__transport-info")}>
            <p className={cx("logo__transport-info-title")}>Đặt hàng nhanh</p>
            <p className={cx("logo__transport-info-desc")}>
              Gọi ngay <strong>19006750</strong>
            </p>
          </div>
        </div>

        {/* Logo cart */}
        <Link to={config.routes.cart} className={cx("logo__transport")}>
          <div className={cx("logo__transport-icon")}>
            <FontAwesomeIcon icon={faBagShopping} />
          </div>

          <div className={cx("logo__transport-info")}>
            <p className={cx("logo__transport-info-title")}>Giỏ hàng</p>
            <p className={cx("logo__transport-info-desc")}>
              <strong className={cx("red")}>(0)</strong> Sản phẩm
            </p>
          </div>
        </Link>
      </div>

      {/* Navbar */}
      <div className={cx("navbar")}>
        <div className={cx("navbar__wrap")}>
          {/* Navbar left */}
          <div className={cx("navbar__left")}>
            <ul className={cx("navbar__left-list")}>
              <Link to={config.routes.home} className={cx("navbar__left-item")}>
                Trang chủ
              </Link>
              <Link
                to={config.routes.introduce}
                className={cx("navbar__left-item")}
              >
                Giới thiệu
              </Link>
              <Link
                to={config.routes.product}
                className={cx("navbar__left-item", "navbar__left-item-product")}
              >
                Sản phẩm
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={cx("navbar__left-item-icon")}
                />
                <ul className={cx("navbar__left-list-sub")}>
                  <li
                    to={config.routes.product}
                    className={cx("navbar__left-item-sub", "first-item-sub")}
                    
                  >
                    Thời trang nam
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className={cx("navbar__left-item-sub-more")}
                    />
                    <ul className={cx("list-detail")}>
                      <li className={cx("item-detail")}>Hàng mới về</li>
                      <li className={cx("item-detail")}>Hàng giảm giá</li>
                    </ul>
                  </li>

                  <li
                    to={config.routes.product}
                    className={cx("navbar__left-item-sub", "second-item-sub")}
                    
                  >
                    Thời trang nữ
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className={cx("navbar__left-item-sub-more")}
                    />
                    <ul className={cx("list-detail", "list-detail-second")}>
                      <li className={cx("item-detail")}>Hàng mới về</li>
                      <li className={cx("item-detail")}>Hàng bán chạy</li>{" "}
                      <li className={cx("item-detail")}>Hàng khuyến mãi</li>
                    </ul>
                  </li>

                  <li
                    to={config.routes.product}
                    className={cx("navbar__left-item-sub", "third-item-sub")}
                    
                  >
                    Trang sức
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className={cx("navbar__left-item-sub-more")}
                    />
                    <ul className={cx("list-detail", "list-detail-third")}>
                      <li className={cx("item-detail")}>Hàng mới về</li>
                      <li className={cx("item-detail")}>Hàng giảm giá</li>
                    </ul>
                  </li>

                  <li className={cx("navbar__left-item-sub", "fifth-item-sub")}>
                    Sản phẩm mới
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className={cx("navbar__left-item-sub-more")}
                    />
                    <ul className={cx("list-detail", "list-detail-fifth")}>
                      <li className={cx("item-detail")}>Hàng mới về</li>
                      <li className={cx("item-detail")}>Hàng giảm giá</li>
                    </ul>
                  </li>

                  <li className={cx("navbar__left-item-sub")}>
                    Sản phẩm nổi bậc
                  </li>

                  <li className={cx("navbar__left-item-sub")}>
                    Sản phẩm bán chạy
                  </li>

                  <li className={cx("navbar__left-item-sub")}>
                    Sản phẩm khuyến mãi
                  </li>
                </ul>
              {/*   {<Product category={selectedCategory} />} */}
              </Link>
              <Link to={config.routes.news} className={cx("navbar__left-item")}>
                Tin tức
              </Link>
              <Link
                to={config.routes.contact}
                className={cx("navbar__left-item")}
              >
                Liên hệ
              </Link>
            </ul>
          </div>
          {/* Search */}
          <Search />
        </div>
      </div>
    </header>
  );
}

export default Header;
