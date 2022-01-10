import React, { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./MovieRow.css";

export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);
  const [showNavigateRight, setShowNavigateRight] = useState(true);

  const handleLeftArrow = () => {
    const x =
      scrollX + Math.round(window.innerWidth / 2) > 0
        ? 0
        : scrollX + Math.round(window.innerWidth / 2);
    setScrollX(x);
    setShowNavigateRight(true);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listW = items.results.length * 200;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 90;
      setShowNavigateRight(false);
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => {
              return (
                <div className="movieRow--item" key={key} id={item.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                  />
                </div>
              );
            })}
        </div>
      </div>
      {showNavigateRight ? (
        <div className="movieRow--right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>
      ) : null}
    </div>
  );
};
