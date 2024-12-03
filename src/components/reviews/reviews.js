import React, { useRef, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Reviews = ({ themeStyles, screenWidth }) => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollToNextItem = () => {
    const container = scrollContainerRef.current;

    const itemWidth = container.querySelector(".scroll-item").offsetWidth + 25;

    if (currentIndex < container.children.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      container.scrollLeft += itemWidth;
    }
  };

  const scrollToPrevItem = () => {
    const container = scrollContainerRef.current;

    const itemWidth = container.querySelector(".scroll-item").offsetWidth + 25;

    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      container.scrollLeft -= itemWidth;
    }
  };
  return (
    <div
      className="col-12"
      style={{
        padding: "5rem 0",
        backgroundColor: themeStyles.bgPrimaryColor,
        position: "relative",
        // borderTop: '1px solid var(--cstm-secondary-color)',
        borderBottom: `1px solid ${themeStyles.secondaryColor}`,
      }}
    >
      <div
        className="d-inline-flex align-items-center"
        style={{
          position: "absolute",
          bottom: screenWidth >= 576 ? "70px" : "40px",
          right: 0,
          padding: "0 20px",
          gap: "15px",
        }}
      >
        <div
          className=""
          style={{
            padding: "8px 14px",
            border: `2px solid ${themeStyles.secondaryColor}`,
            backgroundColor: themeStyles.textSecondaryColor,
            boxShadow: `2px 2px ${themeStyles.secondaryColor}`,
            borderRadius: "100%",
            cursor: "pointer",
          }}
          onClick={() => scrollToPrevItem()}
        >
          <IoIosArrowRoundBack
            style={{
              fontSize: "30px",
              color: themeStyles.secondaryColor,
            }}
          />
          {/* <FaArrowLeftLong style={{
                    fontSize: '15px'
                }}/> */}
        </div>
        <div
          className=""
          style={{
            padding: "8px 14px",
            border: `2px solid ${themeStyles.secondaryColor}`,
            backgroundColor: themeStyles.textSecondaryColor,
            boxShadow: `2px 2px ${themeStyles.secondaryColor}`,
            borderRadius: "100%",
            cursor: "pointer",
          }}
          onClick={() => scrollToNextItem()}
        >
          <IoIosArrowRoundForward
            style={{
              fontSize: "30px",
              color: themeStyles.secondaryColor,
            }}
          />
        </div>
      </div>
      <div
        className="row w-100 mx-auto"
        style={{
          paddingInline: screenWidth >= 992 ? "0" : "15px",
        }}
      >
        <div className="col-12 p-0">
          <div
            className="row w-100 mx-auto flex-nowrap ps-lg-4 pe-lg-4"
            ref={scrollContainerRef}
            style={{
              overflowX: "scroll",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              scrollBehavior: "smooth",
              paddingBottom: "4rem",
              gap: "25px",
            }}
          >
            <div
              className="col-12 col-lg-11 col-xl-auto scroll-item"
              style={{
                padding: screenWidth >= 992 ? "80px 64px" : "40px 24px",
                border: `2px solid ${themeStyles.secondaryColor}`,
                backgroundColor: themeStyles.textSecondaryColor,
                boxShadow: `4px 4px ${themeStyles.secondaryColor}`,
                borderRadius: "30px",
                minWidth: "300px",
                zIndex: "5",
              }}
            >
              <div
                className="w-100"
                style={{
                  color: themeStyles.secondaryColor,
                }}
              >
                <div
                  className=""
                  style={{
                    fontFamily: "Radio Canada Big",
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                  }}
                >
                  "I’ve been following the Healthy Food Blog for a few months
                  now, and it has quickly become one of my favorite resources
                  for healthy living."
                </div>
                <div
                  className=""
                  style={{
                    fontFamily: "Radio Canada Big",
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  GREAT RESOURCE FOR HEALTHY LIVING — JESSICA K.
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-11 col-xl-auto scroll-item"
              style={{
                padding: screenWidth >= 992 ? "80px 64px" : "40px 24px",
                border: `2px solid ${themeStyles.secondaryColor}`,
                backgroundColor: themeStyles.textSecondaryColor,
                boxShadow: `4px 4px ${themeStyles.secondaryColor}`,
                borderRadius: "30px",
                minWidth: "300px",
                zIndex: "5",
              }}
            >
              <div
                className="w-100"
                style={{
                  color: themeStyles.secondaryColor,
                }}
              >
                <div
                  className=""
                  style={{
                    fontFamily: "Radio Canada Big",
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                  }}
                >
                  "I’ve been following the Healthy Food Blog for a few months
                  now, and it has quickly become one of my favorite resources
                  for healthy living."
                </div>
                <div
                  className=""
                  style={{
                    fontFamily: "Radio Canada Big",
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  GREAT RESOURCE FOR HEALTHY LIVING — JESSICA K.
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-11 col-xl-auto scroll-item"
              style={{
                padding: screenWidth >= 992 ? "80px 64px" : "40px 24px",
                border: `2px solid ${themeStyles.secondaryColor}`,
                backgroundColor: themeStyles.textSecondaryColor,
                boxShadow: `4px 4px ${themeStyles.secondaryColor}`,
                borderRadius: "30px",
                minWidth: "300px",
                zIndex: "5",
              }}
            >
              <div
                className="w-100"
                style={{
                  color: themeStyles.secondaryColor,
                }}
              >
                <div
                  className=""
                  style={{
                    fontFamily: "Radio Canada Big",
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                  }}
                >
                  "I’ve been following the Healthy Food Blog for a few months
                  now, and it has quickly become one of my favorite resources
                  for healthy living."
                </div>
                <div
                  className=""
                  style={{
                    fontFamily: "Radio Canada Big",
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  GREAT RESOURCE FOR HEALTHY LIVING — JESSICA K.
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-11 col-xl-auto scroll-item"
              style={{
                padding: screenWidth >= 992 ? "80px 64px" : "40px 24px",
                border: `2px solid ${themeStyles.secondaryColor}`,
                backgroundColor: themeStyles.textSecondaryColor,
                boxShadow: `4px 4px ${themeStyles.secondaryColor}`,
                borderRadius: "30px",
                minWidth: "300px",
                zIndex: "5",
              }}
            >
              <div
                className="w-100"
                style={{
                  color: themeStyles.secondaryColor,
                }}
              >
                <div
                  className=""
                  style={{
                    fontFamily: "Radio Canada Big",
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                  }}
                >
                  "I’ve been following the Healthy Food Blog for a few months
                  now, and it has quickly become one of my favorite resources
                  for healthy living."
                </div>
                <div
                  className=""
                  style={{
                    fontFamily: "Radio Canada Big",
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  GREAT RESOURCE FOR HEALTHY LIVING — JESSICA K.
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-11 col-xl-auto scroll-item"
              style={{
                padding: screenWidth >= 992 ? "80px 64px" : "40px 24px",
                border: `2px solid ${themeStyles.secondaryColor}`,
                backgroundColor: themeStyles.textSecondaryColor,
                boxShadow: `4px 4px ${themeStyles.secondaryColor}`,
                borderRadius: "30px",
                minWidth: "300px",
                zIndex: "5",
              }}
            >
              <div
                className="w-100"
                style={{
                  color: themeStyles.secondaryColor,
                }}
              >
                <div
                  className=""
                  style={{
                    fontFamily: "Radio Canada Big",
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                  }}
                >
                  "I’ve been following the Healthy Food Blog for a few months
                  now, and it has quickly become one of my favorite resources
                  for healthy living."
                </div>
                <div
                  className=""
                  style={{
                    fontFamily: "Radio Canada Big",
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  GREAT RESOURCE FOR HEALTHY LIVING — JESSICA K.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
