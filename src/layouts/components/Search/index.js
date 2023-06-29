import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import * as searchServices from "~/services/searchServices";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import ProductItem from "~/components/ProductItem";
import { useDebounce } from "~/hook";
import styles from "~/layouts/DefaultLayout/Header/Header.module.scss";
import style from "~/layouts/components/Search/Search.module.scss";

const cx = classNames.bind(styles);
const st = classNames.bind(style);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  const debounced = useDebounce(searchValue, 600);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounced);
      setSearchResult(result);

      setLoading(false);

    };
    
    fetchApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced] );

  useEffect(() => {
    if (searchResult.length > 4) {
      setIsOverflow(true);
    } else {
      setIsOverflow(false);
    }
  }, [searchResult.length])

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    <Tippy
      visible={showResult && searchResult.length > 0}
      interactive
      placement="bottom"
      render={(attrs) => (
        <div
          className={cx("search-result")}
          tabIndex="-1"
          {...attrs}
        >
          <PopperWrapper>
            <div style={{
            maxHeight: isOverflow ? "300px" : "auto",
            overflowY: isOverflow ? "scroll" : "visible",
          }}>
              <p className={cx("search-title")}>Sản phẩm gợi ý</p>
              {searchResult.map(
                (result) =>
                  result.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) && (
                    <ProductItem key={result.id} data={result} />
                  )
              )}
            </div>
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("navbar__right")}>
        <input
          ref={inputRef}
          value={searchValue}
          className={cx("navbar__right-input")}
          type="text"
          placeholder="Tìm kiếm..."
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
        />
        {searchValue && !loading && (
          <button className={cx("navbar__right-close")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon
            icon={faSpinner}
            className={`${cx("navbar__right-close")} ${st("close")}`}
          />
        )}

        <button className={cx("navbar__right-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
