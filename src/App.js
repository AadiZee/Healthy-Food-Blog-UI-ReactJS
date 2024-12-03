import { useState, useEffect, useMemo } from "react";
import LogoDark from "./assets/images/logoDark.png";
import ThemeChanger from "./components/theme-mode/theme-mode";
import NavBar from "./components/nav/nav";
import Header from "./components/header/header";
import Featured from "./components/featured/featured";
import Features from "./components/features/features";
import Offerings from "./components/offerings/offerings";
import ChildBlog from "./components/child-blog/child-blog";
import LifeStyleBlog from "./components/lifestyle-blog/lifestyle-blog";
import Media from "./components/media/media";
import FAQ from "./components/faq/faq";
import Subscriptions from "./components/subscriptions/subscriptions";
import Follow from "./components/follow/follow";
import Reviews from "./components/reviews/reviews";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => "light");

  const [screenWidth, setScreenWidth] = useState(0);

  const themeStyles = useMemo(() => {
    return theme === "light"
      ? {
          primaryColor: "#4188ff",
          secondaryColor: "#150764",
          tertiaryColor: "#56c595",
          mainColor: "#f4f2ef",
          iconColor: "#e7271c",
          borderColor: "#07150f",
          textPrimaryColor: "#ffffff",
          textSecondaryColor: "#ffffff",
          tagBgColor: "#4188ff",
          iconSecondaryColor: "#56c595",
          bgPrimaryColor: "#4188ff",
        }
      : {
          primaryColor: "rgb(34, 40, 49)",
          secondaryColor: "rgb(240, 84, 84)",
          tertiaryColor: "rgb(48, 71, 94)",
          textDarkSection: "rgb(221, 221, 221)",
          mainColor: "rgb(34, 40, 49)",
          iconColor: "rgb(221, 221, 221)",
          borderColor: "rgb(34, 40, 49)",
          textPrimaryColor: "rgb(221, 221, 221)",
          textSecondaryColor: "rgb(34, 40, 49)",
          tagBgColor: "rgb(221, 221, 221)",
          iconSecondaryColor: "rgb(221, 221, 221)",
          bgPrimaryColor: "rgb(48, 71, 94)",
        };
  }, [theme]);

  useEffect(() => {
    const resizeWindow = () => {
      setScreenWidth(window?.innerWidth);
    };

    resizeWindow();

    window.addEventListener("resize", resizeWindow);

    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="row w-100 mx-auto">
        <ThemeChanger
          themeStyles={themeStyles}
          theme={theme}
          setTheme={setTheme}
        />

        <NavBar
          themeStyles={themeStyles}
          screenWidth={screenWidth}
          theme={theme}
          LogoDark={LogoDark}
        />

        <Header themeStyles={themeStyles} screenWidth={screenWidth} />

        <Featured themeStyles={themeStyles} screenWidth={screenWidth} />
        <Features themeStyles={themeStyles} screenWidth={screenWidth} />
        <Offerings themeStyles={themeStyles} screenWidth={screenWidth} />

        <ChildBlog themeStyles={themeStyles} screenWidth={screenWidth} />
        <LifeStyleBlog themeStyles={themeStyles} screenWidth={screenWidth} />
        <Media themeStyles={themeStyles} screenWidth={screenWidth} />
        <FAQ
          themeStyles={themeStyles}
          screenWidth={screenWidth}
          theme={theme}
        />

        <Subscriptions themeStyles={themeStyles} screenWidth={screenWidth} />
        <Follow themeStyles={themeStyles} screenWidth={screenWidth} />
        <Reviews themeStyles={themeStyles} screenWidth={screenWidth} />

        <Footer
          themeStyles={themeStyles}
          screenWidth={screenWidth}
          theme={theme}
          LogoDark={LogoDark}
        />
      </div>
    </div>
  );
}

export default App;
