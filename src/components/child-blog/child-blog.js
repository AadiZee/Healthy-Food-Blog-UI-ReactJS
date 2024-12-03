import React from "react";
import Image3 from "../../assets/images/image10.jpg";

const ChildBlog = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="row w-100 mx-auto flex-row-reverse"
      style={{
        backgroundColor: themeStyles.mainColor,
        padding: screenWidth <= 991 ? "0 20px" : "0",
      }}
    >
      <div className="col-12 col-lg-6 p-0">
        <img
          className="w-100 h-100"
          src={Image3}
          alt="some graphics"
          style={{
            objectFit: "cover",
            minHeight: "350px",
            borderBottom:
              screenWidth <= 991
                ? "1px solid var(--cstm-secondary-color)"
                : "unset",
          }}
        />
      </div>
      <div className="col-12 col-lg-6 p-0">
        <div
          className=""
          style={{
            padding: screenWidth >= 992 ? "190px 24px" : "40px 0px",
            borderRight:
              screenWidth >= 992
                ? "1px solid var(--cstm-secondary-color)"
                : "unset",
            color: themeStyles.secondaryColor,
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              marginBottom: screenWidth >= 992 ? "40px" : "10px",
            }}
          >
            <box-icon
              name="extension"
              color={themeStyles.iconSecondaryColor}
              style={{
                height: "100px",
                width: "100px",
              }}
            ></box-icon>
          </div>
          <div
            className="text-center"
            style={{
              fontSize: screenWidth >= 576 ? "5.4rem" : "3.6rem",
              lineHeight: screenWidth >= 576 ? "1" : "1.25",
              fontFamily: "Anton SC",
              marginBottom: "16px",
            }}
          >
            Healthy eating for children
          </div>
          <div
            className="text-center"
            style={{
              fontFamily: "Radio Canada Big",
              fontSize: screenWidth >= 576 ? "1.2rem" : "1.5rem",
              lineHeight: "1.3",
            }}
          >
            Guide to nourishing young mind and bodies
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              marginTop: screenWidth >= 992 ? "54px" : "20px",
            }}
          >
            <button
              className="btn w-100 d-flex align-items-center justify-content-center"
              style={{
                padding: "14px 40px",
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
              <box-icon
                name="globe"
                color={themeStyles.textSecondaryColor}
                style={{
                  height: screenWidth >= 576 ? "25px" : "28px",
                  width: screenWidth >= 576 ? "25px" : "28px",
                  lineHeight: "1",
                  marginRight: "9px",
                  marginTop: "-2px",
                }}
              ></box-icon>
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildBlog;
