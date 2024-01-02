import React from "react";
import "./Description.css"
import ButtonColor from "../components/buttons/ButtonColor";
import ButtonBorder from "../components/buttons/ButtonBorder";
import SquareButton from "../components/buttons/SquareButton";

const Description = () => {
  return (
    <>
      <section className="bg-primary-background flex pt-[71px] pb-[51px] pl-[51px] pr-[51px]">
        <div className="w-2/4 overflow-hidden	">
          <img
            className="w-full hover:animate-zoom"
            src="./src/assets/images/description-1-app.png"
            alt="view of photo gallery"
          />
        </div>
        <section className="w-2/4 ml-[18px]">
          <h2 className="font-bold text-[40px] text-primary-letter-color">
            Organize Your Time And Star Getting Results
          </h2>
          <p className="text-secondary-letter-color mt-[13.5px] leading-[1.8em]">
            Sync is the first mobile app on tehe market to harness the power of
            social connections to help you stop procrastinating and start
            getting things done. Give it a try and see the changes right away
          </p>
          <div className="text-secondary-letter-color mt-[13.5px] ml-[13.5px] mb-[13.5px] leading-[2.5em]">
            <ul className=" list-[square]">
              <li>Analyse and evaluate your current status and productivity</li>
              <li>Begin monitoring you day to day routine with Sync app</li>
              <li>
                See the improved results in no more than a couple of weeks
              </li>
            </ul>
          </div>
          <ButtonColor
            url={"https://femcoders.factoriaf5.org/"}
            title={"LIGHTBOX"}
            hasIcon={false}
          />
        </section>
      </section>
      <section className="bg-secondary-background flex pt-[71px] pb-[51px] pl-[51px] pr-[51px]">
        <section className="w-2/4 mr-[18px]">
          <div>
            <SquareButton icon={"fa fa-clock"} title={"Schedule"} bg_color="A073E9" color="F7FAFD"/>
            <SquareButton icon={"fa fa-list-ul"} title={"Tracking"}/>
            <SquareButton icon={"fa fa-calendar-alt"} title={"Organize"}/>
          </div>
          <div className="text-secondary-letter-color mt-[13.5px] leading-[1.8em]">
            <p className=" leading-[1.8em] mt-[13.5px]">
              <b>Schedule tasks</b> to keep track of their completion. Sync
              provides multiple scheduling options including alarms and
              reminders.
            </p>
            <p className="leading-[1.8em]  mt-[13.5px]">
              <i className="fa fa-check-square text-code-icon"></i>
              You can always add new tasks or change the settings of existing
              ones in your calendar view or the app control panel
            </p>
            <p className="leading-[1.8em] mt-[13.5px]">
              <i className="fa fa-check-square  text-code-icon"></i>
              It's easy to stay focused on your most important daily activities
              that will get you closer to meeting your goals
            </p>
            <p className="leading-[1.8em] mt-[13.5px]">
              <i className="fa fa-check-square  text-code-icon"></i>
              Use phone reminders to free up your long term memory which will
              reduce strees and make you more productive
            </p>
          </div>
          <div className="flex mt-[13.5px] gap-5">
          <ButtonColor url={"https://www.somosf5.org/"} title={"TERMS"} hasIcon={false}/>
          <ButtonBorder url={"https://www.somosf5.org/"} title={"PRIVACY"} color={"000000"}/>
          </div>
        </section>
        <div class="schedule-img w-2/4 overflow-hidden	">
        <img
            className="w-full"            
            src="./src/assets/images/description-2-app.png"
            alt="view of calendar"
          />        </div>
      </section>
    </>
  );
};

export default Description;
