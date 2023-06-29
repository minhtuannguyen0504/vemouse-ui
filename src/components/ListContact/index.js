import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import styles from "./ListContact.module.scss";


const cx = classNames.bind(styles);


function ListContact() {
    return ( 
        <ul className={cx('list')}>
          <li className={cx('list-item')}>
          <FontAwesomeIcon className={cx('list-item-icon')} icon={faLocationDot}/>
            Tầng 6 Dương Bá Trạc, phường 1, quận 8, TP.Hồ Chí Minh
          </li>
          <li className={cx('list-item')}>
          <FontAwesomeIcon className={cx('list-item-icon')} icon={faPhone} />
          19001000
          </li>
          <li className={cx('list-item')}>
          <FontAwesomeIcon className={cx('list-item-icon')} icon={faEnvelope} />
          hellovemouse@gmail.com
          </li>
        </ul>
    );
}

export default ListContact;