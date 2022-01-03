import React, { useState, useEffect } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  box: {
    position: "fixed",
    bottom: "70px",
    right: "30px",
    zIndex: "99",
    cursor: "pointer",
  },
  button: {
    fontSize: "14px",
    lineHeight: "1",
    fontWeight: "bold",
    borderRadius: "5px",
    color: "#fff",
    backgroundColor: "blue",
    textTransform: "uppercase",
  },
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isVisible && (
        <div style={styles.box}>
          <button
            style={styles.button}
            className="btn btn-primary"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      )}
    </>
  );
};

export default BackToTop;
