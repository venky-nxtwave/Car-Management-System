
import { FaCarCrash } from "react-icons/fa";

import "./Footer.css"


function Footer() {
  return (
    <footer className="pt-5 p-5">
      <div className="footer-div shadow-lg">
        <div className="footer-about">
          <ul>
            <li>
              <h3 className="services-head">Services</h3>
            </li>
            <li>
              <a href="/sell">Sell</a>
            </li>
            <li>
              <a href="/home">Buy</a>
            </li>
            <li>
              <a href="/developers">Developers</a>
            </li>
          </ul>
        </div>
        <div className="footer-about">
          <ul>
            <li>
              <h3>Help and Support</h3>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
          <div className="reserved" >
              <a href="">
                <i className="fab fa-linkedin linkedin"></i>
              </a>
              <a href="">
                <i className="fab fa-facebook-square facebook"></i>
              </a>
              <a href="">
                <i className="fab fa-instagram-square insta"></i>
              </a>
            </div>
        </div>

        <div className="footer-about">
          
          <div className="logo-div">

            <a href="/home" className="logo logo1">
            <FaCarCrash size={50} className="carLogo" />
               &nbsp; CMS <br/>
            </a>

            <p>All at one place</p>


          </div>
          
        </div>  
      </div>
    </footer>
  );
}

export default Footer;
