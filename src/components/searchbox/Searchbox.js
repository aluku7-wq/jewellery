/** @format */

import React, { useState, useEffect, useRef, useContext } from "react";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import { controllScroll } from "../statemaneger/actioncreators/ActionCreators";
import { Container } from "./Seacrbox.styled";
import { jewellery } from "../utils/data";
import { MdClose, MdOutlineSearch } from "react-icons/md";
import { dropAnimation } from "../animation/Animation";

const Searchbox = ({
  searchstate,
  setsearchstate,
  jewellery,
  setsuggestions,
}) => {
  const { dispatchscroll } = useContext(jewelleryContext);
  const [search, setsearch] = useState("");
  const focusRef = useRef();

  useEffect(() => {
    // uppdate suggestion arrey
    if (search.length > 0) {
      setsuggestions(
        jewellery.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    // forcus on input
    if (window.innerWidth > 640) {
      focusRef.current.focus();
    }

    // update search state
    if (search.length > 0) {
      setsearchstate(true);
    } else {
      setsearchstate(false);
    }
  }, [search]);

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <div className="form">
        <MdOutlineSearch className="search" />
        <input
          type="text"
          placeholder="search jewellery"
          onChange={(e) => setsearch(e.target.value)}
          ref={focusRef}
        />
        <MdClose
          className="close"
          onClick={() => dispatchscroll(controllScroll())}
        />
      </div>
    </Container>
  );
};

export default Searchbox;
