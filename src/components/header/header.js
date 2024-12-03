import React from "react";
import Background1 from "../../assets/images/background1.jpg";

const Header = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="row w-100 mx-auto flex-row-reverse"
      style={{
        backgroundColor: themeStyles.primaryColor,
        padding: screenWidth <= 991 ? "0 20px" : "0",
      }}
    >
      <div className="col-12 col-lg-6 p-0">
        <div className="h-100">
          <img
            className="h-100 w-100"
            src={Background1}
            style={{
              objectFit: "cover",
              borderRadius: "0",
              minHeight: "350px",
            }}
            alt="section bg"
          />
        </div>
      </div>
      <div className="col-12 col-lg-6 p-0">
        <div
          className=""
          style={{
            padding: screenWidth >= 992 ? "190px 24px" : "40px 0",
            borderRight:
              screenWidth >= 992
                ? "1px solid var(--cstm-secondary-color)"
                : "unset",
            color: themeStyles.secondaryColor,
          }}
        >
          <div
            className=""
            style={{
              fontSize:
                screenWidth >= 768
                  ? "6.2rem"
                  : screenWidth >= 576
                  ? "5rem"
                  : "4.25rem",
              lineHeight: screenWidth >= 768 ? "1" : "1.1",
              fontWeight: "500",
              marginBottom: "16px",
              fontFamily: "Anton SC",
              fontStyle: "normal",
              wordBreak: "break-word",
              wordWrap: "break-word",
            }}
          >
            Healthy <br />
            Food Blog
          </div>

          <div
            className=""
            style={{
              fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
              lineHeight: "1.3",
              fontFamily: "Radio Canada Big",
              marginBottom: "16px",
            }}
          >
            Welcome to our Blog, your go-to place for all things healthy!
          </div>
          <div
            className="w-100"
            style={
              {
                // marginLeft: '-0.6rem',
                // marginRight: '-0.6rem'
              }
            }
          >
            <button
              className="btn w-100"
              style={{
                padding: "14px 40px",
                borderRadius: "100px",
                borderWidth: "2px",
                fontWeight: "700",
                backgroundColor: themeStyles.primaryColor,
                borderColor: themeStyles.secondaryColor,
                color: themeStyles.textPrimaryColor,
                boxShadow: `4px 4px 0 0 ${themeStyles.secondaryColor}`,
                fontSize: screenWidth >= 576 ? "1.5rem" : "1.5rem",
                lineHeight: "1.3",
                fontFamily: "Radio Canada Big",
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
