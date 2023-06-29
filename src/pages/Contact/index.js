import classNames from "classnames/bind";

import Footer from "~/layouts/DefaultLayout/Footer";
import Header from "~/layouts/DefaultLayout/Header";
import styles from "./Contact.module.scss";
import { Logo } from "~/components/Images";
import ListContact from "~/components/ListContact";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div>
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("contact")}>
          <div className={cx("contact__left")}>
            <h2>LIÊN HỆ</h2>
            <div className={cx('contact__left-row')}>
              <label>Họ và tên:<strong className={cx('red')}>*</strong></label><br></br>
              <input type="text" className={cx('contact__left-row-input')}/>
            </div>

            <div className={cx('contact__left-row')}>
              <label>Email:<strong className={cx('red')}>*</strong></label><br></br>
              <input type="text" className={cx('contact__left-row-input')}/>
            </div>

            <div className={cx('contact__left-row')}>
              <label>Nội dung:<strong className={cx('red')}>*</strong></label><br></br>
              <input type="text" className={cx('contact__left-row-input', 'input-height')}/>
            </div>

            <input type="button" value="Gửi liên hệ" className={cx('contact__left-row', 'contact__left-btn')}/>
          </div>

          <div className={cx("contact__right")}>
            <img src={Logo} alt="" srcset="" />
            <p>
              Sapo được thành lập với niềm đam mê và khát vọng thành công trong
              lĩnh vực Thương mại điện tử. Chúng tôi đã và đang khẳng định được
              vị trí hàng đầu bằng những sản phẩm
            </p>
            <ListContact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
