import classNames from "classnames/bind";
import style from '~/pages/Find/Find.module.scss'

const cx = classNames.bind(style);

function Find() {
  return (
      <div className={cx('wrapper')}>Find</div>
  );
}

export default Find;
