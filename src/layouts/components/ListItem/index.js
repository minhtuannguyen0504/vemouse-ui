import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import config from "~/config";
import { Link } from "react-router-dom";

import styles from "~/layouts/DefaultLayout/Sidebar/Sidebar.module.scss";

const cx = classNames.bind(styles);

function ListItem({ title, items, subTitle }) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [icon, setIcon] = useState(faAngleRight);

  const handleExpanded = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setIcon(faAngleDown);
    } else {
      setIcon(faAngleRight);
    }
  };

  const handleSelectedCategory = (category) => {
    dispatch({type: 'UPDATE_CATEGORY_STATE', payload: category});
  }

  return (
    <li className={cx("category__list-item")}>
      <div className={cx("flex-item")}>
        <Link to={config.routes.product} onClick={() => handleSelectedCategory(subTitle)} className={cx("category__list-item-title")}>{title}</Link>
        <FontAwesomeIcon
          icon={icon}
          className={cx("category__list-item-icon")}
          onClick={handleExpanded}
        />
      </div>
      {expanded && (
        <ul className={cx("sub-list")}>
          {items.map((item, index) => (
            <li key={index} className={cx("sub-item")}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default ListItem;
