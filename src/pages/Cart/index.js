import classNames from "classnames/bind";
import Header from "~/layouts/DefaultLayout/Header";
import Footer from "~/layouts/DefaultLayout/Footer";
import styles from "./Cart.module.scss";
import { Fragment } from "react";

const cx = classNames.bind(styles);

function Cart() {
  return (
    <Fragment>
      <Header />
        <div className={cx("wrapper")}>
            <table>
                <tr className={cx('row')}>
                    <th className={cx('col')}>Ảnh sản phẩm</th>
                    <th className={cx('col')}>Tên sản phẩm</th>
                    <th className={cx('col')}>Đơn giá</th>
                    <th className={cx('col')}>Số lượng</th>
                    <th className={cx('col')}>Thành tiền</th>
                    <th className={cx('col')}>Xóa</th>
                </tr>
                <tr className={cx('row')}>
                    <td className={cx('col')}></td>
                    <td className={cx('col')}></td>
                    <td className={cx('col')}></td>
                    <td className={cx('col')}></td>
                    <td className={cx('col')}></td>
                    <td className={cx('col')}></td>
                </tr>
                <tr className={cx('row')}>
                    <td colSpan="4" className={cx('col', 'text-pos')}>Tổng tiền</td>
                    <td colSpan="2" className={cx('col')}></td>
                </tr>
                <tr className={cx('row')}>
                    <td colSpan="3" className={cx('col', 'col-hide')}>
                        <input type="button" value="Tiếp tục mua hàng" className={cx('btn-left')} />
                    </td>
                    <td colSpan="3" className={cx('col', 'col-hide')}>
                        <input type="button" value="Tiến hành thanh toán" className={cx('btn-right')} />
                    </td>
                </tr>
            </table>
        </div>
      <Footer />
    </Fragment>
  );
}

export default Cart;
