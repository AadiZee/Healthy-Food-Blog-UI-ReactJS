import React from "react";
import Background3 from "../../assets/images/background4.jpg";

const Media = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="col-12"
      style={{
        padding: screenWidth >= 576 ? "5rem 0" : "6.4rem 0",
        borderTop: `1px solid ${themeStyles.secondaryColor}`,
        borderBottom: `1px solid ${themeStyles.secondaryColor}`,
        backgroundColor: themeStyles.mainColor,
      }}
    >
      <div className="row w-100 mx-auto">
        <div className="col-12 p-0">
          <div
            className=""
            style={{
              padding: screenWidth >= 576 ? "0 20px" : "0 14px",
            }}
          >
            <div
              className="text-center"
              style={{
                marginBottom: screenWidth >= 576 ? "104px" : "50px",
                fontFamily: "Anton SC",
                fontSize: screenWidth >= 576 ? "5.4rem" : "3.6rem",
                lineHeight: "1",
                color: themeStyles.secondaryColor,
              }}
            >
              Media Project
            </div>
            <div>
              <div
                className=""
                style={{
                  position: "relative",
                  height: screenWidth >= 992 ? "780px" : "350px",
                }}
              >
                <img
                  className="h-100 w-100"
                  src={Background3}
                  alt="some graphics"
                  style={{
                    objectFit: "cover",
                    borderRadius: "30px",
                  }}
                />
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "80px",
                    width: "80px",
                    borderRadius: "100%",
                    border: `2px solid ${themeStyles.secondaryColor}`,
                    boxShadow: `4px 4px ${themeStyles.secondaryColor}`,
                    backgroundColor: themeStyles.mainColor,
                    zIndex: "1",
                  }}
                >
                  <box-icon
                    name="right-arrow"
                    color={themeStyles.secondaryColor}
                    style={{
                      height: "38px",
                      width: "38px",
                      marginLeft: "6px",
                    }}
                  ></box-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
