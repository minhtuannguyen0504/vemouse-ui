import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import styles from "~/layouts/DefaultLayout/Sidebar/Sidebar.module.scss";

const cx = classNames.bind(styles);

function ListItem({ title, items }) {
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

  return (
    <li className={cx("category__list-item")}>
      <div className={cx("flex-item")}>
        {title}
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
