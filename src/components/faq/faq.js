import React from "react";
import Background4 from "../../assets/images/background2.jpg";

const FAQ = ({ themeStyles, screenWidth, theme }) => {
  return (
    <div
      className="col-12"
      style={{
        padding: "5rem 0",
        backgroundImage: `url(${Background4})`,
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="row w-100 mx-auto justify-content-center">
        <div
          className="col-12 col-lg-8"
          style={{
            padding: "0 20px",
          }}
        >
          <div
            className="row w-100 mx-auto"
            style={{
              borderRadius: "30px",
              border: `1px solid ${themeStyles.secondaryColor}`,
              backgroundColor: themeStyles.mainColor,
            }}
          >
            <div
              className="col-12 col-lg-4 d-flex flex-column justify-content-between"
              style={{
                padding: "40px 24px",
                // width: '35%',
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
                  fontFamily: "Anton SC",
                  fontSize: screenWidth >= 576 ? "5.4rem" : "4rem",
                  lineHeight: "1",
                  marginBottom: "40px",
                  color: themeStyles.secondaryColor,
                }}
              >
                FAQ
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <box-icon
                  name="question-mark"
                  color={themeStyles.tagBgColor}
                  style={{
                    height: "140px",
                    width: "140px",
                    marginLeft: "-20px",
                  }}
                ></box-icon>
              </div>
            </div>
            <div
              className="col-12 col-lg-8 p-0"
              style={
                {
                  // width: '65%'
                }
              }
            >
              <div
                class={`accordion ${
                  theme === "light" ? "accordion-light" : "accordion-dark"
                } accordion-flush`}
                id="customAccordian"
              >
                <div
                  class="accordion-item"
                  style={{
                    borderTopRightRadius: "30px",
                  }}
                >
                  <h2
                    class="accordion-header"
                    style={{
                      borderTopRightRadius: "30px",
                      borderTop: "none !important",
                    }}
                  >
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1of8"
                      aria-expanded="false"
                      aria-controls="collapse1of8"
                      style={{
                        borderTopRightRadius: "30px",
                      }}
                    >
                      What is the Healthy Food Blog about?
                    </button>
                  </h2>
                  <div
                    id="collapse1of8"
                    class="accordion-collapse collapse"
                    data-bs-parent="#customAccordian"
                  >
                    <div
                      class={`accordion-body ${
                        theme === "light"
                          ? "accordion-body-light"
                          : "accordion-body-dark"
                      }`}
                    >
                      The Healthy Food Blog is dedicated to promoting nutritious
                      and delicious eating habits. We provide a wide range of
                      healthy recipes, nutrition tips, meal planning guides, and
                      wellness advice to help you lead a healthier lifestyle.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2of8"
                      aria-expanded="false"
                      aria-controls="collapse2of8"
                    >
                      Are the recipes on the blog suitable?
                    </button>
                  </h2>
                  <div
                    id="collapse2of8"
                    class="accordion-collapse collapse"
                    data-bs-parent="#customAccordian"
                  >
                    <div
                      class={`accordion-body ${
                        theme === "light"
                          ? "accordion-body-light"
                          : "accordion-body-dark"
                      }`}
                    >
                      Absolutely! We offer recipes catering to various dietary
                      needs, including vegan, vegetarian, gluten-free, keto, and
                      paleo. Each recipe includes clear labels and modification
                      suggestions to suit your specific requirements.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3of8"
                      aria-expanded="false"
                      aria-controls="collapse3of8"
                    >
                      How often do you update the blog?
                    </button>
                  </h2>
                  <div
                    id="collapse3of8"
                    class="accordion-collapse collapse"
                    data-bs-parent="#customAccordian"
                  >
                    <div
                      class={`accordion-body ${
                        theme === "light"
                          ? "accordion-body-light"
                          : "accordion-body-dark"
                      }`}
                    >
                      We update the blog weekly with fresh recipes, nutrition
                      articles, and wellness tips. Be sure to subscribe to our
                      newsletter to stay informed about the latest posts and
                      updates.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4of8"
                      aria-expanded="false"
                      aria-controls="collapse4of8"
                    >
                      Can I submit my own recipes?
                    </button>
                  </h2>
                  <div
                    id="collapse4of8"
                    class="accordion-collapse collapse"
                    data-bs-parent="#customAccordian"
                  >
                    <div
                      class={`accordion-body ${
                        theme === "light"
                          ? "accordion-body-light"
                          : "accordion-body-dark"
                      }`}
                    >
                      Yes, we love to feature recipes from our readers! Please
                      visit our "Submit a Recipe" page for guidelines and
                      submission instructions. We review all submissions and
                      will contact you if your recipe is selected for
                      publication.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5of8"
                      aria-expanded="false"
                      aria-controls="collapse5of8"
                    >
                      Where do you source your ingredients?
                    </button>
                  </h2>
                  <div
                    id="collapse5of8"
                    class="accordion-collapse collapse"
                    data-bs-parent="#customAccordian"
                  >
                    <div
                      class={`accordion-body ${
                        theme === "light"
                          ? "accordion-body-light"
                          : "accordion-body-dark"
                      }`}
                    >
                      We prioritize using orWe prioritize using organic,
                      locally-sourced, and sustainable ingredients in our
                      recipes. We believe in supporting local farmers and
                      providing our readers with the freshest, most nutritious
                      options available.
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item"
                  style={{
                    borderBottomRightRadius: "30px",
                    borderBottomLeftRadius:
                      screenWidth <= 991 ? "30px" : "none",
                  }}
                >
                  <h2
                    class="accordion-header"
                    style={{
                      borderBottomRightRadius: "30px",
                    }}
                  >
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6of8"
                      aria-expanded="false"
                      aria-controls="collapse6of8"
                      style={{
                        borderBottomRightRadius: "30px",
                        borderBottomLeftRadius:
                          screenWidth <= 991 ? "30px" : "none",
                      }}
                    >
                      Do you offer any meal plans?
                    </button>
                  </h2>
                  <div
                    id="collapse6of8"
                    class="accordion-collapse collapse"
                    data-bs-parent="#customAccordian"
                  >
                    <div
                      class={`accordion-body ${
                        theme === "light"
                          ? "accordion-body-light"
                          : "accordion-body-dark"
                      }`}
                    >
                      Yes, we offer a variety of meal plans designed to suit
                      different dietary needs and health goals. These plans
                      include detailed shopping lists, meal prep tips, and
                      nutritional information. You can find them on our "Meal
                      Plans" page.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
