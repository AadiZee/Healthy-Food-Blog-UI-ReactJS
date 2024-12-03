import React, { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const NavBar = ({ themeStyles, screenWidth, theme, LogoDark }) => {
  const [navbarToggle, setNavbarToggle] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        padding: screenWidth >= 992 ? "10px 24px" : "10px 20px",
        borderBottom: `1px solid ${themeStyles.secondaryColor}`,
        minHeight: "70px",
        transition: "all .3s",
        backgroundColor: themeStyles.primaryColor,
      }}
    >
      <div className="container-fluid p-0">
        <div
          className="navbar-brand d-flex flex-shrink-0 align-items-center m-0"
          style={{
            minHeight: "70px",
            padding: "10px 0",
          }}
        >
          <span
            className="navbar-logo"
            style={{
              marginRight: "10px",
              verticalAlign: "-4px",
              lineHeight: "1",
            }}
          >
            <a
              href="/public/index.html"
              style={{
                outline: "none",
                textDecoration: "none",
                color: "var(--cstm-secondary-color)",
              }}
            >
              <img
                className=""
                src={theme === "light" ? LogoDark : LogoDark}
                alt="website logo"
                style={{
                  maxWidth: "62px",
                  minHeight: "62px",
                  objectFit: "contain",
                  borderRadius: ".75rem !important",
                  width: "auto",
                  height: "3.125rem",
                }}
              />
            </a>
          </span>
          {screenWidth >= 992 && (
            <span
              style={{
                verticalAlign: "-4px",
                lineHeight: "1",
              }}
            >
              <a
                className=""
                href="/public/index.html"
                style={{
                  fontWeight: "400",
                  lineHeight: "inherit",
                  color: themeStyles.secondaryColor,
                  fontSize: "2.6rem",
                  whiteSpace: "normal",
                  verticalAlign: "-4px",
                  textDecoration: "none",
                }}
              >
                HFB
              </a>
            </span>
          )}
        </div>
        {screenWidth <= 991 && (
          <span
            style={{
              verticalAlign: "-4px",
              lineHeight: "1",
            }}
          >
            <a
              className=""
              href="/public/index.html"
              style={{
                fontWeight: "400",
                lineHeight: "inherit",
                color: themeStyles.secondaryColor,
                fontSize: "2.6rem",
                whiteSpace: "normal",
                verticalAlign: "-4px",
                textDecoration: "none",
              }}
            >
              HFB
            </a>
          </span>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ boxShadow: "none", border: "none" }}
          onClick={() => setNavbarToggle(!navbarToggle)}
        >
          {navbarToggle ? (
            <HiOutlineXMark
              style={{
                height: screenWidth >= 576 ? "30px" : "23px",
                width: screenWidth >= 576 ? "30px" : "23px",
              }}
            />
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{
            padding: screenWidth <= 991 ? "34px 0" : "0",
          }}
        >
          <ul
            className="navbar-nav justify-content-start w-100"
            style={{
              paddingInlineStart: screenWidth >= 992 ? "48px" : "unset",
              minWidth: "200px",
              gap: "15px",
            }}
          >
            <li className="nav-item">
              <p
                className="nav-link"
                style={{
                  color: themeStyles.secondaryColor,
                  cursor: "pointer",
                }}
              >
                HOME
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link"
                style={{
                  color: themeStyles.secondaryColor,
                  cursor: "pointer",
                }}
              >
                ABOUT
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link"
                style={{
                  color: themeStyles.secondaryColor,
                  cursor: "pointer",
                }}
              >
                FOLLOW
              </p>
            </li>
          </ul>
          <div
            className=""
            style={{
              marginTop: screenWidth >= 576 ? "0" : "15px",
            }}
          >
            <button
              className="btn"
              style={{
                margin: "8px",
                padding: screenWidth >= 992 ? "14px 40px" : "14px",
                minWidth: "120px",
                whiteSpace: "nowrap",
                minHeight: "auto",
                borderRadius: "100px",
                borderWidth: "2px",
                fontWeight: "700",
                backgroundColor: themeStyles.primaryColor,
                borderColor: themeStyles.secondaryColor,
                color: themeStyles.textPrimaryColor,
                boxShadow: `4px 4px 0 0 ${themeStyles.secondaryColor}`,
                fontFamily: "Radio Canada Big",
                fontSize: "1.2rem",
                lineHeight: "1.3",
              }}
            >
              START NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
