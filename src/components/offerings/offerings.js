import React from "react";
import Image1 from "../../assets/images/image5.jpg";
import Image2 from "../../assets/images/image7.jpg";

const Offerings = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="row w-100 mx-auto"
      style={{
        backgroundColor: themeStyles.mainColor,
        padding: screenWidth <= 991 ? "0 20px" : "0",
        borderBottom:
          screenWidth <= 991
            ? `1px solid ${themeStyles.secondaryColor}`
            : "unset",
        // borderTop: '1px solid var(--cstm-secondary-color)',
        // borderBottom: '1px solid var(--cstm-secondary-color)',
      }}
    >
      <div className="col-12 col-lg-6 p-0">
        <div
          className=""
          style={{
            padding:
              screenWidth >= 992 ? "48px 24px 24px 24px" : "48px 0px 24px 0px",
            borderRight:
              screenWidth >= 992
                ? `1px solid ${themeStyles.secondaryColor}`
                : "unset",
            borderBottom: `1px solid ${themeStyles.secondaryColor}`,
          }}
        >
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <div
                className="text-center"
                style={{
                  padding: "8px 16px",
                  backgroundColor: themeStyles.tagBgColor,
                  color: themeStyles.textSecondaryColor,
                  borderRadius: ".75rem",
                  fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                  lineHeight: "1.3",
                  fontFamily: "Radio Canada Big",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                KITCHEN
              </div>
            </div>
            <div
              className="text-center"
              style={{
                fontSize: screenWidth >= 576 ? "2.6rem" : "2.1rem",
                lineHeight: "1.1",
                fontFamily: "Anton SC",
                color: themeStyles.secondaryColor,
                marginBottom: "20px",
              }}
            >
              Virtual cooking classes
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button
                className="btn"
                style={{
                  padding: screenWidth >= 992 ? "14px 40px" : "14px 14px",
                  borderRadius: "100px",
                  borderWidth: "2px",
                  fontWeight: "700",
                  backgroundColor: themeStyles.tagBgColor,
                  borderColor: themeStyles.secondaryColor,
                  color: themeStyles.textSecondaryColor,
                  boxShadow: `4px 4px 0 0 ${themeStyles.secondaryColor}`,
                  fontSize: screenWidth >= 576 ? "1.2rem" : "1.45rem",
                  lineHeight: "1.3",
                  fontFamily: "Radio Canada Big",
                  margin: "0.6rem 0",
                }}
              >
                BUY TICKET
              </button>
            </div>
          </div>
          <div
            style={{
              marginTop: "38px",
            }}
          >
            <img
              className="w-100"
              src={Image1}
              alt="some graphics"
              style={{
                height: "510px",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 p-0">
        <div
          className=""
          style={{
            padding:
              screenWidth >= 992 ? "48px 24px 24px 24px" : "48px 0px 24px 0px",
            borderRight:
              screenWidth >= 992
                ? "1px solid var(--cstm-secondary-color)"
                : "unset",
            borderBottom:
              screenWidth >= 992
                ? "1px solid var(--cstm-secondary-color)"
                : "unset",
          }}
        >
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <div
                className="text-center"
                style={{
                  padding: "8px 16px",
                  backgroundColor: themeStyles.tagBgColor,
                  color: themeStyles.textSecondaryColor,
                  borderRadius: ".75rem",
                  fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                  lineHeight: "1.3",
                  fontFamily: "Radio Canada Big",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                SKILLS
              </div>
            </div>
            <div
              className="text-center"
              style={{
                fontSize: screenWidth >= 576 ? "2.6rem" : "2.1rem",
                lineHeight: "1.1",
                fontFamily: "Anton SC",
                color: themeStyles.secondaryColor,
                marginBottom: "20px",
              }}
            >
              Monthly recipe challenges
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button
                className="btn"
                href="/public/index.html"
                style={{
                  padding: screenWidth >= 992 ? "14px 40px" : "14px 14px",
                  borderRadius: "100px",
                  borderWidth: "2px",
                  fontWeight: "700",
                  backgroundColor: themeStyles.tagBgColor,
                  borderColor: themeStyles.secondaryColor,
                  color: themeStyles.textSecondaryColor,
                  boxShadow: `4px 4px 0 0 ${themeStyles.secondaryColor}`,
                  fontSize: screenWidth >= 576 ? "1.2rem" : "1.45rem",
                  lineHeight: "1.3",
                  fontFamily: "Radio Canada Big",
                  margin: "0.6rem 0",
                }}
              >
                BUY TICKET
              </button>
            </div>
          </div>
          <div
            style={{
              marginTop: "38px",
            }}
          >
            <img
              className="w-100"
              src={Image2}
              alt="some graphics"
              style={{
                height: "510px",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
