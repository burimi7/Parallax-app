import "../../index.css";
import "./slider1.css";
import logo1 from "../../assets/img/logo1.png";
import logo2 from "../../assets/img/logo2.png";
import logo3 from "../../assets/img/logo3.png";
import logo4 from "../../assets/img/logo4.png";

function Slider1() {
  return (
    <div className="slider1-container">
      <div className="ecosystem-banner">
        <h3>Projects integrated into the Arrakis AI Ecosystem</h3>
        <div className="ecosystem-logos">
          <img src={logo1}  />
          <img src={logo2}  />
          <img src={logo3}  />
          <img src={logo4}  />
        </div>
      </div>
    </div>
  );
}

export default Slider1;
