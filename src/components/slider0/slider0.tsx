import "../../index.css";
import Slider1 from "../slider1/slider1";
import "./slider0.css";

function Slider0({partialStep}:any) {
  return (
    <>
    <div className="slider0-container">
      <h1 className="gradient-text">
        A new economic primitive for funding decentralized AI
      </h1>
      <h3>
        We track, rank and pay for the best open source decentralized LLMs to
        compete against OpenAI
      </h3>

      <div>
        <button className="btn-outlined">Buy Salt AI</button>

        <button className="btn">Try now</button>
      </div>
      <div className={partialStep ? 'show-buttons' : 'hide-buttons'}>
        
      <div className="slider1-container">
      {/* <Slider0/> */}
      <div className="stats">
        {/* Stat1 */}
        <div className="stat">
          <h1>1873</h1>
          <h2>LLM Models</h2>
        </div>
        {/* Stat2 */}
        <div className="stat">
          <h1>$326,734</h1>
          <h2>Paid to data scientists</h2>
        </div>
        {/* Stat3 */}
        <div className="stat">
          <h1>6,557</h1>
          <h2>Developers</h2>
        </div>
      </div>
    </div>

      </div>
    </div>
      </>
  );
}

export default Slider0;
