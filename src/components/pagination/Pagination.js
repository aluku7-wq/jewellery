/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "./Pagination.stled";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { paginateAnimation } from "../animation/Animation";

const Pagination = ({ filtered, setfiltered, setpaginated }) => {
  const [currentpage, setcurrentpage] = useState(1);
  const itemsPerPage = 8;

  const pages = [];
  for (let i = 1; i <= Math.ceil(filtered.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const lastitem = currentpage * itemsPerPage;
  const firstitem = lastitem - itemsPerPage;
  const currenPageItems = filtered.slice(firstitem, lastitem);

  const handlePages = (number) => {
    setcurrentpage(number);
  };
  const pageNoLimit = 3;
  const [maxpageNoLimit, setmaxpageNoLimit] = useState(pageNoLimit);
  const [minpageNoLimit, setminpageNoLimit] = useState(0);

  const handleButtons = (type) => {
    if (type === "next") {
      setcurrentpage(currentpage + 1);
      if (currentpage + 1 > maxpageNoLimit) {
        setmaxpageNoLimit(maxpageNoLimit + pageNoLimit);
        setminpageNoLimit(minpageNoLimit + pageNoLimit);
      }
    } else {
      setcurrentpage(currentpage - 1);
      if ((currentpage - 1) % pageNoLimit === 0) {
        setmaxpageNoLimit(maxpageNoLimit - pageNoLimit);
        setminpageNoLimit(minpageNoLimit - pageNoLimit);
      }
    }
  };
  useEffect(() => {
    setpaginated(currenPageItems);
    setcurrentpage(1);
    setminpageNoLimit(0);
    setmaxpageNoLimit(pageNoLimit);
  }, [filtered]);
  useEffect(() => {
    setpaginated(currenPageItems);
  }, [currentpage]);

  return (
    <Container>
      <motion.div
        variants={paginateAnimation}
        initial="hidden"
        animate="visible"
        className="pagination">
        <div className="buttons">
          {currentpage > 1 ? (
            <MdArrowLeft
              onClick={() => handleButtons("prev")}
              className="button"
            />
          ) : null}
        </div>
        <div className="page_container">
          <div className="buttons">
            {pages.map((number) => {
              if ((number > minpageNoLimit) & (number < maxpageNoLimit + 1)) {
                return (
                  <div
                    className="page"
                    key={number}
                    onClick={(e) => handlePages(number)}>
                    <p
                      style={{
                        backgroundColor:
                          currentpage === number ? "#fd5866" : null,
                        color: currentpage === number ? "#fff" : null,
                      }}>
                      {number}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="buttons">
          {currentpage < pages.length ? (
            <MdArrowRight
              onClick={() => handleButtons("next")}
              className="button"
            />
          ) : null}
        </div>
      </motion.div>
    </Container>
  );
};

export default Pagination;
