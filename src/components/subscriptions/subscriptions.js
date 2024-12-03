import React from "react";
import Image5 from "../../assets/images/image18.jpg";
import Image6 from "../../assets/images/image1.jpg";
import Image7 from "../../assets/images/image19.jpg";

const Subscriptions = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="col-12"
      style={{
        padding: "5rem 0",
        backgroundColor: themeStyles.mainColor,
        borderTop: `1px solid ${themeStyles.secondaryColor}`,
        borderBottom: `1px solid ${themeStyles.secondaryColor}`,
      }}
    >
      <div className="row w-100 mx-auto">
        <div className="col-12 p-0">
          <div
            className=""
            style={{
              padding: screenWidth >= 992 ? "0 24px" : "0 20px",
              marginBottom:
                screenWidth >= 992
                  ? "104px"
                  : screenWidth >= 576
                  ? "45px"
                  : "40px",
            }}
          >
            <div
              style={{
                fontFamily: "Anton SC",
                fontSize: screenWidth >= 576 ? "5.4rem" : "3.4rem",
                lineHeight: screenWidth >= 576 ? "1" : "1.25",
                color: themeStyles.secondaryColor,
                // textOverflow: 'ellipsis',
                // overflow: 'hidden'
              }}
            >
              Blog subscriptions
            </div>
          </div>
        </div>
      </div>
      <div
        className="row w-100 mx-auto justify-content-center"
        style={{
          padding: screenWidth >= 992 ? "0 22px" : "0 20px",
          margin: "0 -12px",
        }}
      >
        <div
          className="col-12 col-lg-4"
          style={{
            padding: screenWidth >= 992 ? "0 12px" : "0",
            marginBottom: "24px",
          }}
        >
          <div
            className="h-100"
            style={{
              border: `1px solid ${themeStyles.secondaryColor}`,
              borderRadius: "0 0 40px 40px",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: themeStyles.bgPrimaryColor,
                borderBottom: `1px solid ${themeStyles.secondaryColor}`,
                padding: "50px 0",
                position: "relative",
              }}
            >
              <div className="">
                <img
                  className=""
                  src={Image5}
                  alt="some graphics"
                  style={{
                    height: screenWidth >= 992 ? "300px" : "250px",
                    width: screenWidth >= 992 ? "300px" : "250px",
                    objectFit: "cover",
                    borderRadius: "100%",
                  }}
                />
              </div>
              <div
                className=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  // width: '100%',
                  padding: "1rem",
                }}
              >
                <button
                  className="btn d-flex align-items-center justify-content-center"
                  style={{
                    padding: "6px 12px 6px 16px",
                    borderRadius: "100px",
                    borderWidth: "2px",
                    fontWeight: "700",
                    backgroundColor: themeStyles.tagBgColor,
                    borderColor: themeStyles.secondaryColor,
                    color: themeStyles.textSecondaryColor,
                    boxShadow: `2px 2px 0 0 ${themeStyles.secondaryColor}`,
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    fontFamily: "Radio Canada Big",
                    // margin: '0.6rem 0'
                  }}
                >
                  BUY NOW
                  <box-icon
                    name="plus"
                    color={themeStyles.textSecondaryColor}
                    style={{
                      // marginRight: '-10px'
                      marginLeft: "4px",
                      marginTop: "-5px",
                      lineHeight: "1",
                      height: "25px",
                      width: "25px",
                    }}
                  ></box-icon>
                </button>
              </div>
            </div>
            <div className="">
              <div
                className="text-center"
                style={{
                  padding: "32px",
                  borderBottom: `1px solid ${themeStyles.secondaryColor}`,
                  // borderTop: '1px solid var(--cstm-secondary-color)',
                  fontSize: screenWidth >= 576 ? "2.6rem" : "2.1rem",
                  lineHeight: "1.1",
                  fontFamily: "Anton SC",
                  color: themeStyles.secondaryColor,
                }}
              >
                Basic <br />
                Subscription
              </div>
              <div
                className="text-center"
                style={{
                  fontFamily: "Radio Canada Big",
                  fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                  lineHeight: "1.3",
                  fontWeight: "bold",
                  color: themeStyles.secondaryColor,
                  padding: "12px",
                }}
              >
                $5 per month or $50 per year
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-lg-4"
          style={{
            padding: screenWidth >= 992 ? "0 12px" : "0",
            marginBottom: "24px",
          }}
        >
          <div
            className="h-100"
            style={{
              border: `1px solid ${themeStyles.secondaryColor}`,
              borderRadius: "0 0 40px 40px",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: themeStyles.bgPrimaryColor,
                borderBottom: `1px solid ${themeStyles.secondaryColor}`,
                padding: "50px 0",
                position: "relative",
              }}
            >
              <div className="">
                <img
                  className=""
                  src={Image6}
                  alt="some graphics"
                  style={{
                    height: screenWidth >= 992 ? "300px" : "250px",
                    width: screenWidth >= 992 ? "300px" : "250px",
                    objectFit: "cover",
                    borderRadius: "100%",
                  }}
                />
              </div>
              <div
                className=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  // width: '100%',
                  padding: "1rem",
                }}
              >
                <button
                  className="btn d-flex align-items-center justify-content-center"
                  style={{
                    padding: "6px 12px 6px 16px",
                    borderRadius: "100px",
                    borderWidth: "2px",
                    fontWeight: "700",
                    backgroundColor: themeStyles.tagBgColor,
                    borderColor: themeStyles.secondaryColor,
                    color: themeStyles.textSecondaryColor,
                    boxShadow: `2px 2px 0 0 ${themeStyles.secondaryColor}`,
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    fontFamily: "Radio Canada Big",
                    // margin: '0.6rem 0'
                  }}
                >
                  BUY NOW
                  <box-icon
                    name="plus"
                    color={themeStyles.textSecondaryColor}
                    style={{
                      // marginRight: '-10px'
                      marginLeft: "4px",
                      marginTop: "-5px",
                      lineHeight: "1",
                      height: "25px",
                      width: "25px",
                    }}
                  ></box-icon>
                </button>
              </div>
            </div>
            <div className="">
              <div
                className="text-center"
                style={{
                  padding: "32px",
                  borderBottom: `1px solid ${themeStyles.secondaryColor}`,
                  // borderTop: '1px solid var(--cstm-secondary-color)',
                  fontSize: screenWidth >= 576 ? "2.6rem" : "2.1rem",
                  lineHeight: "1.1",
                  fontFamily: "Anton SC",
                  color: themeStyles.secondaryColor,
                }}
              >
                Premium <br />
                Subscription
              </div>
              <div
                className="text-center"
                style={{
                  fontFamily: "Radio Canada Big",
                  fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                  lineHeight: "1.3",
                  fontWeight: "bold",
                  color: themeStyles.secondaryColor,
                  padding: "12px",
                }}
              >
                $10 per month or $100 per year
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-lg-4"
          style={{
            padding: screenWidth >= 992 ? "0 12px" : "0",
            marginBottom: "24px",
          }}
        >
          <div
            className="h-100"
            style={{
              border: `1px solid ${themeStyles.secondaryColor}`,
              borderRadius: "0 0 40px 40px",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: themeStyles.bgPrimaryColor,
                borderBottom: `1px solid ${themeStyles.secondaryColor}`,
                padding: "50px 0",
                position: "relative",
              }}
            >
              <div className="">
                <img
                  className=""
                  src={Image7}
                  alt="some graphics"
                  style={{
                    height: screenWidth >= 992 ? "300px" : "250px",
                    width: screenWidth >= 992 ? "300px" : "250px",
                    objectFit: "cover",
                    borderRadius: "100%",
                  }}
                />
              </div>
              <div
                className=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  // width: '100%',
                  padding: "1rem",
                }}
              >
                <button
                  className="btn d-flex align-items-center justify-content-center"
                  style={{
                    padding: "6px 12px 6px 16px",
                    borderRadius: "100px",
                    borderWidth: "2px",
                    fontWeight: "700",
                    backgroundColor: themeStyles.tagBgColor,
                    borderColor: themeStyles.secondaryColor,
                    color: themeStyles.textSecondaryColor,
                    boxShadow: `2px 2px 0 0 ${themeStyles.secondaryColor}`,
                    fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                    lineHeight: "1.3",
                    fontFamily: "Radio Canada Big",
                    // margin: '0.6rem 0'
                  }}
                >
                  BUY NOW
                  <box-icon
                    name="plus"
                    color={themeStyles.textSecondaryColor}
                    style={{
                      // marginRight: '-10px'
                      marginLeft: "4px",
                      marginTop: "-5px",
                      lineHeight: "1",
                      height: "25px",
                      width: "25px",
                    }}
                  ></box-icon>
                </button>
              </div>
            </div>
            <div className="">
              <div
                className="text-center"
                style={{
                  padding: "32px",
                  borderBottom: `1px solid ${themeStyles.secondaryColor}`,
                  // borderTop: '1px solid var(--cstm-secondary-color)',
                  fontSize: screenWidth >= 576 ? "2.6rem" : "2.1rem",
                  lineHeight: "1.1",
                  fontFamily: "Anton SC",
                  color: themeStyles.secondaryColor,
                }}
              >
                vip <br />
                Subscription
              </div>
              <div
                className="text-center"
                style={{
                  fontFamily: "Radio Canada Big",
                  fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                  lineHeight: "1.3",
                  fontWeight: "bold",
                  color: themeStyles.secondaryColor,
                  padding: "12px",
                }}
              >
                $20 per month or $200 per year
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
