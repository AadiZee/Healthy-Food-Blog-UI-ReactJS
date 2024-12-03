import React from "react";

const Features = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="row w-100 mx-auto"
      style={{
        backgroundColor: themeStyles.tertiaryColor,
        padding: screenWidth <= 991 ? "0 20px" : "0",
        borderBottom:
          screenWidth <= 991
            ? `1px solid ${themeStyles.secondaryColor}`
            : "unset",
      }}
    >
      <div className="col-12 col-lg-4 p-0">
        <div
          className="d-flex flex-column justify-content-between h-100"
          style={{
            padding: screenWidth >= 992 ? "40px 24px" : "40px 0",
            borderRight:
              screenWidth >= 992
                ? `1px solid ${themeStyles.secondaryColor}`
                : "unset",
            borderBottom: `1px solid ${themeStyles.secondaryColor}`,
          }}
        >
          <div
            className=""
            style={{
              color: themeStyles.secondaryColor,
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                marginBottom: "32px",
              }}
            >
              <box-icon
                name="heart"
                color={themeStyles.iconColor}
                style={{
                  height: "100px",
                  width: "100px",
                }}
              ></box-icon>
            </div>
            <div
              className="text-center"
              style={{
                fontSize: screenWidth >= 576 ? "2.6rem" : "2.1rem",
                lineHeight: "1.1",
                fontFamily: "Anton SC",
                marginBottom: "32px",
                wordBreak: "break-word",
                wordWrap: "break-word",
              }}
            >
              Superfoods spotlight
            </div>
            <div
              className="text-center"
              style={{
                fontFamily: "Radio Canada Big",
                fontSize: screenWidth >= 576 ? "1.2rem" : "1.45rem",
                lineHeight: "1.3",
                marginBottom: "22px",
                wordBreak: "break-word",
                wordWrap: "break-word",
              }}
            >
              Delve into the world of superfoods with our comprehensive guides
              and articles highlighting the most nutrient-dense foods on the
              planet.
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{}}
          >
            <button
              className="btn"
              style={{
                padding: screenWidth >= 992 ? "14px 40px" : "14px 14px",
                borderRadius: "100px",
                borderWidth: "2px",
                fontWeight: "700",
                backgroundColor: themeStyles.tertiaryColor,
                color: themeStyles.textPrimaryColor,
                boxShadow: `4px 4px 0 0 ${themeStyles.borderColor}`,
                borderColor: themeStyles.borderColor,
                // boxShadow: '4px 4px 0 0 #07150f',
                fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                lineHeight: "1.3",
                fontFamily: "Radio Canada Big",
                margin: "0.6rem 0",
              }}
            >
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 p-0">
        <div
          className="d-flex flex-column justify-content-between h-100"
          style={{
            padding: screenWidth >= 992 ? "40px 24px" : "40px 0",
            borderRight:
              screenWidth >= 992
                ? `1px solid ${themeStyles.secondaryColor}`
                : "unset",
            borderBottom: `1px solid ${themeStyles.secondaryColor}`,
          }}
        >
          <div
            className=""
            style={{
              color: themeStyles.secondaryColor,
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                marginBottom: "32px",
              }}
            >
              <box-icon
                name="heart"
                color={themeStyles.iconColor}
                style={{
                  height: "100px",
                  width: "100px",
                }}
              ></box-icon>
            </div>
            <div
              className="text-center"
              style={{
                fontSize: screenWidth >= 576 ? "2.6rem" : "2.1rem",
                lineHeight: "1.1",
                fontFamily: "Anton SC",
                marginBottom: "32px",
                wordBreak: "break-word",
                wordWrap: "break-word",
              }}
            >
              Healthy meal prep
            </div>
            <div
              className="text-center"
              style={{
                fontFamily: "Radio Canada Big",
                fontSize: screenWidth >= 576 ? "1.2rem" : "1.45rem",
                lineHeight: "1.3",
                marginBottom: "22px",
                wordBreak: "break-word",
                wordWrap: "break-word",
              }}
            >
              Master the art of meal prepping with our step-by-step guides and
              tips designed to help you save time while maintaining a nutritious
              diet.
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{}}
          >
            <button
              className="btn"
              style={{
                padding: screenWidth >= 992 ? "14px 40px" : "14px 14px",
                borderRadius: "100px",
                borderWidth: "2px",
                fontWeight: "700",
                backgroundColor: themeStyles.tertiaryColor,
                color: themeStyles.textPrimaryColor,
                boxShadow: `4px 4px 0 0 ${themeStyles.borderColor}`,
                borderColor: themeStyles.borderColor,
                fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                lineHeight: "1.3",
                fontFamily: "Radio Canada Big",
                margin: "0.6rem 0",
              }}
            >
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 p-0">
        <div
          className="d-flex flex-column justify-content-between h-100"
          style={{
            padding: screenWidth >= 992 ? "40px 24px" : "40px 0",
            borderBottom:
              screenWidth >= 992
                ? `1px solid ${themeStyles.secondaryColor}`
                : "unset",
            // borderRight: '1px solid var(--cstm-secondary-color)'
          }}
        >
          <div
            className=""
            style={{
              color: themeStyles.secondaryColor,
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                marginBottom: "32px",
              }}
            >
              <box-icon
                name="heart"
                color={themeStyles.iconColor}
                style={{
                  height: "100px",
                  width: "100px",
                }}
              ></box-icon>
            </div>
            <div
              className="text-center"
              style={{
                fontSize: screenWidth >= 576 ? "2.6rem" : "2.1rem",
                lineHeight: "1.1",
                fontFamily: "Anton SC",
                marginBottom: "32px",
                wordBreak: "break-word",
                wordWrap: "break-word",
              }}
            >
              Plant-based eating
            </div>
            <div
              className="text-center"
              style={{
                fontFamily: "Radio Canada Big",
                fontSize: screenWidth >= 576 ? "1.2rem" : "1.45rem",
                lineHeight: "1.3",
                marginBottom: "22px",
                wordBreak: "break-word",
                wordWrap: "break-word",
              }}
            >
              Explore the benefits and versatility of plant-based eating with
              our extensive collection of recipes and articles. Whether you're
              vegan, vegetarian, or simply looking.
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{}}
          >
            <button
              className="btn"
              style={{
                padding: screenWidth >= 992 ? "14px 40px" : "14px 14px",
                borderRadius: "100px",
                borderWidth: "2px",
                fontWeight: "700",
                backgroundColor: themeStyles.tertiaryColor,
                color: themeStyles.textPrimaryColor,
                boxShadow: `4px 4px 0 0 ${themeStyles.borderColor}`,
                borderColor: themeStyles.borderColor,
                fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                lineHeight: "1.3",
                fontFamily: "Radio Canada Big",
                margin: "0.6rem 0",
              }}
            >
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
