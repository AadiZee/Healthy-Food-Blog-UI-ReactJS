import React from "react";
import Background2 from "../../assets/images/image14.jpg";

const Featured = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="row w-100 mx-auto align-items-center justify-content-between"
      style={{
        padding: "5rem 0",
        backgroundColor: themeStyles.tertiaryColor,
        marginLeft: "-16px",
        marginRight: "-16px",
        borderTop: `1px solid ${themeStyles.secondaryColor}`,
        borderBottom: `1px solid ${themeStyles.secondaryColor}`,
      }}
    >
      <div
        className="col-12 col-lg-6 p-0"
        style={{
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <div
          className=""
          style={{
            padding: screenWidth > 992 ? "0 24px" : "0 20px",
            color: themeStyles.secondaryColor,
          }}
        >
          <div
            className=""
            style={{
              fontSize:
                screenWidth >= 768
                  ? "5.4rem"
                  : screenWidth >= 576
                  ? "4.5rem"
                  : "3.8rem",
              fontFamily: "Anton SC",
              lineHeight:
                screenWidth >= 768 ? "1" : screenWidth >= 576 ? "1.25" : "1.25",
              fontStyle: "normal",
              marginBottom: "32px",
              wordBreak: "break-word",
              wordWrap: "break-word",
            }}
          >
            THE ULTIMATE HEALTHY FOOD BLOG
          </div>
          <div className="" style={{}}>
            <div
              className=""
              style={{
                fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                fontFamily: "Radio Canada Big",
                lineHeight: "1.3",
                wordBreak: "break-word",
                wordWrap: "break-word",
                marginBottom: "22px",
              }}
            >
              Whether you’re a seasoned home cook, a busy professional, or a
              newbie in the kitchen.
            </div>
            <div className="" style={{}}>
              <button
                className="btn"
                style={{
                  fontFamily: "Radio Canada Big",
                  fontSize: screenWidth >= 576 ? "1.2rem" : "1.5rem",
                  lineHeight: "1.3",
                  padding: screenWidth >= 992 ? "14px 40px" : "14px 14px",
                  borderRadius: "100px",
                  borderWidth: "2px",
                  fontWeight: "700",
                  backgroundColor: themeStyles.primaryColor,
                  borderColor: themeStyles.secondaryColor,
                  color: themeStyles.textPrimaryColor,
                  boxShadow: `4px 4px 0 0 ${themeStyles.secondaryColor}`,
                  marginBottom: "40px",
                }}
              >
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-5 p-0"
        style={{
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <div
          className=""
          style={{
            padding: screenWidth > 992 ? "0 24px" : "0 20px",
          }}
        >
          <img
            className="w-100"
            src={Background2}
            alt="section background"
            style={{
              height: screenWidth >= 992 ? "480px" : "350px",
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
