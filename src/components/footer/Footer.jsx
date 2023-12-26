import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="bg-primary-background  text-quartery-letter-color">
      <div className="m-auto">
        <div className=" flex flex-wrap leading-7">

          <div className="footer-col ">
            <h3 className=" text-[15px]	font-bold	tracking-tight">Contact Info</h3>
            <ul className="list-none">
              <li>
                <a href="#" className="text-[13px] font-normal pt-2.5 transition-all duration-200 ease hover:text-tertiary-letter-color hover:font-bold hover:pl-1">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  22 Innovation Street, CA, US
                </a>
              </li>
              <li>
              <a href="#" className="text-[13px] font-normal pt-2.5 transition-all duration-200 ease hover:text-tertiary-letter-color hover:font-bold hover:pl-1">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  office@syncmobile.com
                </a>
              </li>
              <li>
              <a href="#" className="text-[13px] font-normal pt-2.5 transition-all duration-200 ease hover:text-tertiary-letter-color hover:font-bold hover:pl-1">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  +44 376 945 23
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col ">
          <h3 className="text-[15px] font-bold	tracking-tight">Value Links</h3>
                <ul className="list-none">
                    <li>
                    <a href="#" className="text-[13px] font-normal pt-2.5 transition-all duration-200 ease hover:text-tertiary-letter-color hover:font-bold hover:pl-1">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[13px] font-normal pt-2.5 transition-all duration-200 ease hover:text-tertiary-letter-color hover:font-bold hover:pl-1">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[13px] font-normal pt-2.5 transition-all duration-200 ease hover:text-tertiary-letter-color hover:font-bold hover:pl-1">
                        Article Details
                      </a>
                    </li>
                </ul>
          </div>

          <div className="footer-col ">
          <h3 className="text-[15px]	font-bold	tracking-tight">Other Apps</h3>
                <ul className="list-none">
                    <li>
                      <a href="#" className="text-[13px] font-normal pt-2.5 transition-all duration-200 ease hover:text-tertiary-letter-color hover:font-bold hover:pl-1">
                        Scientific Calculator
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[13px] font-normal pt-2.5 transition-all duration-200 ease hover:text-tertiary-letter-color hover:font-bold hover:pl-1">
                        Advanced Timer
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[13px] font-normal pt-2.5 transition-all duration-200 ease hover:text-tertiary-letter-color hover:font-bold hover:pl-1">
                        Music Store
                      </a>
                    </li>
                </ul>
          </div>

          <div className="footer-col ">
          <div className="social-links">
                    <a href="https://www.facebook.com/" target="_blank" className="text-3xl p-1 hover:text-tertiary-letter-color">
                      <i className="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" className="text-3xl p-1 hover:text-tertiary-letter-color">
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.pinterest.es/" target="_blank" className="text-3xl p-1 hover:text-tertiary-letter-color">
                      <i className="fab fa-pinterest" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="text-3xl p-1 hover:text-tertiary-letter-color">
                      <i className="fab fa-instagram-square" aria-hidden="true"></i>
                    </a>
                </div>
          </div>
          
        </div>
      </div>

      <section className="flex-col items-center text-center w-full mt-14 text-[13px]">
        <div>
          <p>Copyright © 2020 Inovatik - All rights reserved</p>
        </div>
      </section>

    </footer>
  );
};

export default Footer;
