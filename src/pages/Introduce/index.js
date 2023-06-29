import classNames from "classnames/bind";

import styles from "./Introduce.module.scss";
import Header from "~/layouts/DefaultLayout/Header";
import Footer from "~/layouts/DefaultLayout/Footer";

const cx = classNames.bind(styles);

function Introduce() {
  return (
    <div>
      <Header />
      <div className={cx("wrapper")}>
        <h1 className={cx('title')}>Giới thiệu</h1>
        <h4 className={cx('index')}>
          VEMOUSE - WEBSITE MUA SẮM THỜI TRANG HÀNG HIỆU TRỰC TUYẾN HÀNG ĐẦU
          VIỆT NAM
        </h4>

        <p className={cx('slogan')}>
          BẠN ĐANG TÌM KIẾM NHỮNG MẪU THỜI TRANG, QUẦN ÁO, GIÀY DÉP VÀ PHỤ KIỆN
          MỚI NHẤT TRÊN MẠNG? HÃY MUA SẮM NGAY HÔM NAY TẠI VEMOUSE !
        </p>

        <p>
          Vemouse sẽ mang lại cho khách hàng những trải nghiệm mua sắm thời
          trang hàng hiệu trực tuyến thú vị từ các thương hiệu thời trang quốc
          tế và trong nước, cam kết chất lượng phục vụ hàng đầu cùng với những
          bộ sưu tập quần áo nam nữ khổng lồ từ giày dép, trang phục, phụ kiện
          đến mỹ phẩm cho cả phụ nữ và nam giới với những xu hướng thời trang
          mới nhất. Bạn có thể tìm thấy những bộ trang phục mình muốn từ những
          bộ đồ ở nhà thật thoải mái hay tự tin trong những bộ trang phục công
          sở phù hợp. Những trải nghiệm mới chỉ có ở trang mua sắm hàng hiệu
          trực tuyến Vemouse.
        </p>

        <h4 className={cx('index')}>VEMOUSE - MÓN QUÀ TẶNG NGƯỜI THÂN THẬT Ý NGHĨA!</h4>

        <p>
          Vemouse sẽ gợi ý cho bạn những món quà thật ý nghĩa để tặng người
          thân, bạn bè. Chúng tôi sẽ làm bạn hài lòng với sự lựa chọn của mình
          bằng giá tốt nhất và chất lượng dịch vụ hoàn hảo của Vemouse.
        </p>

        <h4 className={cx('index')}>
          MUA SẮM Ở VEMOUSE - PHÙ HỢP VỚI TÚI TIỀN TỪ DOANH NHÂN, NHÂN VIÊN VĂN
          PHÒNG ĐẾN CÁC BẠN TRẺ
        </h4>

        <p>
          Vemouse luôn cập nhật những xu hướng thời trang phong cách nhất từ
          những hãng thời trang cao cấp như Lime Orange hoặc Alachic, những đôi
          giày nổi tiếng mà giá cả phải chăng như Me Girl hoặc Bandolini, Juno,
          JShoes cho tới các thương hiệu thời trang tầm trung như Lotus Shoes và
          Mollet, Lithe S, Om Shoes tất cả đều có ở Vemouse. Đặc biệt, Vemouse
          còn có nhiều đợt khuyến mãi, giảm giá đặc biệt với giá tốt nhất. Thời
          trang hàng hiệu chất lượng cao, phù hợp túi tiền - chỉ có ở Vemouse!
        </p>

        <h4 className={cx('index')}>
          PHONG CÁCH MUA SẮM HIỆN ĐẠI - THUẬN TIỆN, THANH TOÁN AN TOÀN - DỄ DÀNG
        </h4>

        <p>
          Bạn có thể mua sắm thoải mái trên Vemouse mà không có bất kỳ lo lắng
          nào: trả hàng trong vòng 30 ngày kể từ ngày nhận hàng. Nếu bạn có bất
          kì câu hỏi nào về các sản phẩm của chúng tôi từ quần áo nam, trang
          phục nữ, mỹ phẩm nam hay trang sức hãy gọi ngay tới bộ phận chăm sóc
          khách hàng.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Introduce;
