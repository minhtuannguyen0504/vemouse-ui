import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FooterLogo } from "~/components/Images";
import ListContact from "~/components/ListContact";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className="wrapper-child">
        <img src={FooterLogo} alt=""/>
        <ListContact />
      </div>
      <div className="">
        <p className={cx('title')}>tài khoản</p>
        <ul className={cx('list')}>
          <li className={cx('list-item')}>Trang chủ</li>
          <li className={cx('list-item')}>Giới thiệu</li>
          <li className={cx('list-item')}>Sản phẩm</li>
          <li className={cx('list-item')}>Tin tức</li>
          <li className={cx('list-item')}>Liên hệ</li>
        </ul>
      </div>

      <div className="">
        <p className={cx('title')}>chính sách</p>
        <ul className={cx('list')}>
          <li className={cx('list-item')}>Trang chủ</li>
          <li className={cx('list-item')}>Giới thiệu</li>
          <li className={cx('list-item')}>Sản phẩm</li>
          <li className={cx('list-item')}>Tin tức</li>
          <li className={cx('list-item')}>Liên hệ</li>
        </ul>
      </div>

      <div className="">
        <p className={cx('title')}>điều khoản</p>
        <ul className={cx('list')}>
          <li className={cx('list-item')}>Trang chủ</li>
          <li className={cx('list-item')}>Giới thiệu</li>
          <li className={cx('list-item')}>Sản phẩm</li>
          <li className={cx('list-item')}>Tin tức</li>
          <li className={cx('list-item')}>Liên hệ</li>
        </ul>
      </div>

      <div className="">
        <p className={cx('title')}>hướng dẫn</p>
        <ul className={cx('list')}>
          <li className={cx('list-item')}>Trang chủ</li>
          <li className={cx('list-item')}>Giới thiệu</li>
          <li className={cx('list-item')}>Sản phẩm</li>
          <li className={cx('list-item')}>Tin tức</li>
          <li className={cx('list-item')}>Liên hệ</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
