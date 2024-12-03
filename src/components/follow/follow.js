import React from "react";

const Follow = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="row w-100 mx-auto"
      style={{
        backgroundColor: themeStyles.mainColor,
        borderBottom:
          screenWidth <= 991
            ? `1px solid ${themeStyles.secondaryColor}`
            : "unset",
        padding: screenWidth <= 991 ? "0 20px" : "0",
      }}
    >
      <div
        className="col-12 col-lg-4 p-0"
        style={{
          borderRight:
            screenWidth >= 992
              ? `1px solid ${themeStyles.secondaryColor}`
              : "unset",
          borderBottom: `1px solid ${themeStyles.secondaryColor}`,
        }}
      >
        <div
          style={{
            padding: screenWidth >= 992 ? "48px 24px 48px" : "48px 0",
          }}
        >
          <div
            className=""
            style={{
              fontSize: screenWidth >= 576 ? "5.4rem" : "3.7rem",
              lineHeight: "1",
              fontFamily: "Anton SC",
              color: themeStyles.secondaryColor,
            }}
          >
            Follow
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-4 p-0"
        style={{
          borderRight:
            screenWidth >= 992
              ? `1px solid ${themeStyles.secondaryColor}`
              : "unset",
          borderBottom: `1px solid ${themeStyles.secondaryColor}`,
        }}
      >
        <div
          className="h-100"
          style={{
            padding: screenWidth >= 992 ? "48px 24px 48px" : "48px 0",
          }}
        >
          <div
            className="d-inline-flex h-100 flex-wrap align-items-center"
            style={{}}
          >
            <div
              className=""
              style={{
                padding: "9px 14px 8px 15px",
                backgroundColor: themeStyles.textPrimaryColor,
                boxShadow: `4px 3px ${themeStyles.secondaryColor}`,
                border: `2px solid ${themeStyles.secondaryColor}`,
                borderRadius: "100%",
                margin: "0 12px 12px 0",
              }}
            >
              <box-icon
                name="tiktok"
                type="logo"
                style={{
                  height: screenWidth >= 576 ? "23px" : "20px",
                  width: screenWidth >= 576 ? "23px" : "20px",
                }}
              ></box-icon>
            </div>
            <div
              className=""
              style={{
                padding: "9px 14px 8px 15px",
                backgroundColor: themeStyles.textPrimaryColor,
                boxShadow: `4px 3px ${themeStyles.secondaryColor}`,
                border: `2px solid ${themeStyles.secondaryColor}`,
                borderRadius: "100%",
                margin: "0 12px 12px 0",
              }}
            >
              <box-icon
                name="instagram"
                type="logo"
                style={{
                  height: screenWidth >= 576 ? "23px" : "20px",
                  width: screenWidth >= 576 ? "23px" : "20px",
                }}
              ></box-icon>
            </div>
            <div
              className=""
              style={{
                padding: "9px 14px 8px 15px",
                backgroundColor: themeStyles.textPrimaryColor,
                boxShadow: `4px 3px ${themeStyles.secondaryColor}`,
                border: `2px solid ${themeStyles.secondaryColor}`,
                borderRadius: "100%",
                margin: "0 12px 12px 0",
              }}
            >
              <box-icon
                name="facebook"
                type="logo"
                style={{
                  height: screenWidth >= 576 ? "23px" : "20px",
                  width: screenWidth >= 576 ? "23px" : "20px",
                }}
              ></box-icon>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-4 p-0"
        style={{
          borderBottom:
            screenWidth >= 992
              ? `1px solid ${themeStyles.secondaryColor}`
              : "unset",
        }}
      >
        <div
          className="h-100"
          style={{
            padding: screenWidth >= 992 ? "48px 24px 48px" : "48px 0",
            color: themeStyles.secondaryColor,
          }}
        >
          <div
            className=""
            style={{
              marginBottom: "12px",
              fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
              lineHeight: "1.3",
              fontFamily: "Radio Canada Big",
            }}
          >
            OUR CONTACTS
          </div>
          <div
            className=""
            style={{
              fontSize: screenWidth >= 576 ? "2.6rem" : "2.1rem",
              lineHeight: "1.1",
              fontFamily: "Anton SC",
            }}
          >
            some.email@mailservice.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
