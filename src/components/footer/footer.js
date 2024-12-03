import React from "react";

const Footer = ({ themeStyles, screenWidth, theme, LogoDark }) => {
  return (
    <div
      className="col-12"
      style={{
        padding: "5rem 0",
        backgroundColor: themeStyles.mainColor,
      }}
    >
      <div className="row w-100 mx-auto">
        <div
          className="col-12"
          style={{
            // padding: '0 16px'
            padding: screenWidth >= 576 ? "0 20px" : "0 12px",
          }}
        >
          <div
            className="row mx-auto justify-content-center"
            style={{
              backgroundColor: themeStyles.bgPrimaryColor,
              borderRadius: "30px",
              margin: "0 24px",
            }}
          >
            <div
              className="col-12 col-lg-6"
              style={{
                // width: '50%',
                padding: "40px 24px",
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
              <div
                className=""
                style={{
                  marginBottom:
                    screenWidth >= 992
                      ? "140px"
                      : screenWidth >= 576
                      ? "100px"
                      : "40px",
                }}
              >
                <div
                  className=""
                  style={{
                    fontFamily: "Anton SC",
                    fontSize: screenWidth >= 576 ? "2.6rem" : "2.1rem",
                    lineHeight: "1.1",
                    color: themeStyles.secondaryColor,
                    marginBottom: "16px",
                  }}
                >
                  Healthy food blog
                </div>
                <div>
                  <button
                    className="btn d-inline-flex align-items-center me-3"
                    style={{
                      padding:
                        screenWidth >= 992 ? "14px 40px 14px 35px" : "14px",
                      borderRadius: "100px",
                      borderWidth: "2px",
                      fontWeight: "700",
                      backgroundColor: themeStyles.tagBgColor,
                      borderColor: themeStyles.secondaryColor,
                      color: themeStyles.textSecondaryColor,
                      boxShadow: `4px 4px 0 0 ${themeStyles.secondaryColor}`,
                      fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                      lineHeight: "1.3",
                      fontFamily: "Radio Canada Big",
                      margin: "0.6rem 0",
                    }}
                  >
                    <box-icon
                      type="logo"
                      color={themeStyles.textSecondaryColor}
                      name="apple"
                      style={{
                        height: "30px",
                        width: "30px",
                        marginTop: "-4px",
                        marginRight: "8px",
                        // marginBottom: '-5px'
                      }}
                    ></box-icon>
                    APP STORE
                  </button>
                  <button
                    className="btn d-inline-flex align-items-center"
                    style={{
                      padding:
                        screenWidth >= 992 ? "14px 40px 14px 35px" : "14px",
                      borderRadius: "100px",
                      borderWidth: "2px",
                      fontWeight: "700",
                      backgroundColor: themeStyles.tagBgColor,
                      borderColor: themeStyles.secondaryColor,
                      color: themeStyles.textSecondaryColor,
                      boxShadow: `4px 4px 0 0 ${themeStyles.secondaryColor}`,
                      fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                      lineHeight: "1.3",
                      fontFamily: "Radio Canada Big",
                      margin: "0.6rem 0",
                    }}
                  >
                    <box-icon
                      type="logo"
                      color={themeStyles.textSecondaryColor}
                      name="play-store"
                      style={{
                        height: "30px",
                        width: "30px",
                        marginTop: "-4px",
                        marginRight: "8px",
                        // marginBottom: '-5px'
                      }}
                    ></box-icon>
                    GOOGLE PLAY
                  </button>
                </div>
              </div>
              <div className="" style={{}}>
                <img
                  className=""
                  src={theme === "light" ? LogoDark : LogoDark}
                  alt="some graphics"
                  style={{
                    height: "96px",
                    width: "96px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div
              className="col-12 col-lg-6"
              style={{
                // width: '50%',
                padding: "40px 24px",
              }}
            >
              <div
                className=""
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    screenWidth >= 992
                      ? "1fr 1fr 1fr"
                      : screenWidth >= 576
                      ? "1fr 1fr"
                      : "1fr",
                  gap: "24px",
                  marginBottom:
                    screenWidth >= 992
                      ? "140px"
                      : screenWidth >= 576
                      ? "100px"
                      : "40px",
                }}
              >
                <div
                  className=""
                  style={{
                    color: themeStyles.secondaryColor,
                  }}
                >
                  <div
                    className=""
                    style={{
                      marginBottom: "14px",
                      fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                      lineHeight: "1.3",
                      fontFamily: "Radio Canada Big",
                      fontWeight: "bold",
                    }}
                  >
                    MENU
                  </div>
                  <div
                    className=""
                    style={{
                      marginBottom: "14px",
                      fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                      lineHeight: "1.3",
                      fontFamily: "Radio Canada Big",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginBottom: "6px",
                      }}
                    >
                      Home
                    </div>
                    <div
                      className=""
                      style={{
                        marginBottom: "6px",
                      }}
                    >
                      Contacts
                    </div>
                    <div
                      className=""
                      style={{
                        marginBottom: "6px",
                      }}
                    >
                      Menu
                    </div>
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    color: themeStyles.secondaryColor,
                  }}
                >
                  <div
                    className=""
                    style={{
                      marginBottom: "14px",
                      fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                      lineHeight: "1.3",
                      fontFamily: "Radio Canada Big",
                      fontWeight: "bold",
                    }}
                  >
                    VIEW
                  </div>
                  <div
                    className=""
                    style={{
                      marginBottom: "14px",
                      fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                      lineHeight: "1.3",
                      fontFamily: "Radio Canada Big",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginBottom: "6px",
                      }}
                    >
                      Team
                    </div>
                    <div
                      className=""
                      style={{
                        marginBottom: "6px",
                      }}
                    >
                      News
                    </div>
                    <div
                      className=""
                      style={{
                        marginBottom: "6px",
                      }}
                    >
                      Media
                    </div>
                    <div
                      className=""
                      style={{
                        marginBottom: "6px",
                      }}
                    >
                      Social
                    </div>
                  </div>
                </div>

                <div
                  className=""
                  style={{
                    color: themeStyles.secondaryColor,
                  }}
                >
                  <div
                    className=""
                    style={{
                      marginBottom: "14px",
                      fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                      lineHeight: "1.3",
                      fontFamily: "Radio Canada Big",
                      fontWeight: "bold",
                    }}
                  >
                    FOLLOW
                  </div>
                  <div
                    className=""
                    style={{
                      marginBottom: "14px",
                      fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                      lineHeight: "1.3",
                      fontFamily: "Radio Canada Big",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        marginBottom: "6px",
                      }}
                    >
                      TikTok
                    </div>
                    <div
                      className=""
                      style={{
                        marginBottom: "6px",
                      }}
                    >
                      Instagram
                    </div>
                    <div
                      className=""
                      style={{
                        marginBottom: "6px",
                      }}
                    >
                      Facebook
                    </div>
                    <div
                      className=""
                      style={{
                        marginBottom: "6px",
                      }}
                    >
                      LinkedIn
                    </div>
                    <div
                      className=""
                      style={{
                        marginBottom: "6px",
                      }}
                    >
                      X
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=""
                style={{
                  fontSize: screenWidth >= 576 ? "1.2rem" : "1.4rem",
                  lineHeight: "1.3",
                  fontFamily: "Radio Canada Big",
                  color: themeStyles.secondaryColor,
                }}
              >
                © Copyright 2030 Mobirise - All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
