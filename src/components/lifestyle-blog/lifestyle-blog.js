import React from "react";
import Image4 from "../../assets/images/image9.jpg";

const LifeStyleBlog = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="row w-100 mx-auto"
      style={{
        borderTop: `1px solid ${themeStyles.secondaryColor}`,
        borderBottom: `1px solid ${themeStyles.secondaryColor}`,
        backgroundColor: themeStyles.mainColor,
        padding: screenWidth <= 991 ? "0 20px" : "0",
      }}
    >
      <div className="col-12 col-lg-6 p-0">
        <div
          className="d-flex align-items-center justify-content-center h-100"
          style={{
            padding: screenWidth >= 992 ? "40px 24px" : "40px 0",
            backgroundColor: themeStyles.bgPrimaryColor,
            borderRight:
              screenWidth >= 992
                ? `1px solid ${themeStyles.secondaryColor}`
                : "unset",
            borderBottom:
              screenWidth <= 991
                ? `1px solid ${themeStyles.secondaryColor}`
                : "unset",
          }}
        >
          <img
            className=""
            src={Image4}
            alt="some graphics"
            style={{
              height: screenWidth >= 576 ? "450px" : "250px",
              width: screenWidth >= 576 ? "450px" : "250px",
              borderRadius: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="col-12 col-lg-6 p-0">
        <div
          className="h-100 d-flex flex-column justify-content-between"
          style={{
            padding: screenWidth >= 992 ? "40px 24px" : "40px 0",
            color: themeStyles.secondaryColor,
          }}
        >
          <div
            className=""
            style={{
              marginBottom: "16px",
              fontSize: screenWidth >= 576 ? "5.4rem" : "3.8rem",
              fontFamily: "Anton SC",
              lineHeight: screenWidth >= 576 ? "1" : "1.25",
            }}
          >
            Healthier lifestyles
          </div>
          <div className="">
            <div
              className=""
              style={{
                marginBottom: "22px",
                width: screenWidth >= 992 ? "50%" : "100%",
                fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                lineHeight: "1.3",
                fontFamily: "Radio Canada Big",
              }}
            >
              Whether you're a seasoned health enthusiast or just starting your
              journey towards better eating habits, our blog offers something
              for everyone. Dive into our vibrant world of whole foods, discover
              the benefits of superfoods.
            </div>
            <div>
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
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeStyleBlog;
