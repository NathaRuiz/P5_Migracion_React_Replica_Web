import React from "react";
import "./Screens.css"
import UserTestimonial from "../components/Cards/UserTestimonial";
import Counter from "../components/Cards/Counter";
import ButtonColor from "../components/buttons/ButtonColor";

const Screens = () => {
  return (
    <>
      <article className="user-testimonials bg-primary-background flex flex-col items-center">
        <div className="section-title">
          <h2 className="font-bold text-[40px] text-primary-letter-color mt-[5%]">
            User Testimonials
          </h2>
        </div>

        <section className="testimonials flex flex-col items-center mt-[3%] mb-[3%]">
          <div className="users w-[90%] flex flex-wrap justify-between">
            <UserTestimonial
              opinion={
                "I love using Sync for my personal development needs. It meets all my requirements and it actually helps a lot with focusing skills."
              }
              name={"Rick Jones "}
              profession={" Designer"}
            />
            <UserTestimonial
              opinion={
                "After trying out a large number of personal coaching apps i decided to give Sync a try and what a wonderful surprise it was."
              }
              name={"Lynda Marquez "}
              profession={" Developer"}
            />
            <UserTestimonial
              opinion={
                "Never dreamed i could learn so fast how to focus on my personal goals and improve my life to levels i never thought possible."
              }
              name={"Jay Frisco "}
              profession={" Marketer"}
            />
          </div>
        </section>

        <section className="customers-logo bg-white flex flex-col items-center w-[90%]">
          <div className="customers-images flex flex-wrap justify-around items-center w-4/5">
            <img
              src="/src/assets/images/customer-logo-1.png"
              alt="logo of primester"
              className="mt-[3%] mb-[3%]"
            />
            <img
              src="/src/assets/images/customer-logo-2.png"
              alt="logo of green app"
              className="mt-[3%] mb-[3%]"
            />
            <img
              src="/src/assets/images/customer-logo-3.png"
              alt="logo of voltmeter"
              className="mt-[3%] mb-[3%]"
            />
            <img
              src="/src/assets/images/customer-logo-4.png"
              alt="logo of keyrunner"
              className="mt-[3%] mb-[3%]"
            />
            <img
              src="/src/assets/images/customer-logo-5.png"
              alt="logo of amplifier"
              className="mt-[3%] mb-[3%]"
            />
          </div>
        </section>

        <section className="testimonials flex flex-col items-center mt-[3%] mb-[3%]">
          <div className="users w-[90%] flex flex-wrap justify-between">
            <UserTestimonial
              opinion={
                "I got so much value from using Sync in my daily life for which i am very grateful and would recommend it to everybody"
              }
              name={"Frank Gibson "}
              profession={" Manager"}
            />
            <UserTestimonial
              opinion={
                "If you have great goals but can't figure out a way to keep focused then you should definitely give Sync a try and see the results"
              }
              name={"Rita Longmile "}
              profession={" Designer"}
            />
            <UserTestimonial
              opinion={
                "I've been looking for a great organizer app for such a long time but now i am really happy that i found Sync. It's been working great"
              }
              name={"Jones Smith "}
              profession={" Developer"}
            />
          </div>
        </section>
      </article>

      <section className=" testimonial-counter w-full flex flex-col justify-around items-center bg-secondary-background">
              <div className="counter-box w-[90%] mt-[5%] mb-[5%] flex flex-wrap justify-around">
                  <Counter icon={"users"} number={"231"} title={"Happy User"}/>
                  <Counter icon={"code"} number={"385"} title={"Issues Solved"}/>
                  <Counter icon={"cog"} number={"159"} title={"Good Reviews"}/>
                  <Counter icon={"comments"} number={"127"} title={"Case Studies"}/>
                  <Counter icon={"rocket"} number={"211"} title={"Oders Received"}/>
              </div>
      </section>

      <article className="publicity">
              <div className="publicity-box flex flex-col w-4/5 items-center pt-[7%] pb-[7%]">
                <section className="img-publicity w-[90%]">
                  <img className="w-full" src="./src/assets/images/download-iphone.png" alt="phone" />
                </section>
                <section className="info-publicity flex flex-col items-center text-center">
                  <p>Do you feel like you're wasting time with small stuff instead of working towards your goals? Start using Sync to organize your time and get a grip on your personal development</p>
                  <div className="buttons pt-[3%] flex gap-2 flex-wrap items-center justify-center">
                    <ButtonColor icon={"fab fa-apple"} title={"DOWNLOAD"}/>
                    <ButtonColor icon={"fab fa-google-play"} title={"DOWNLOAD"}/>
                  </div>
                </section>
              </div>
      </article>

    </>
  );
};

export default Screens;
