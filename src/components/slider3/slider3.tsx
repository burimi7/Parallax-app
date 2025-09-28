import { useRef, useState } from "react";
import "../../index.css";
import "./slider3.css";

function Slider3() {
  const tableContainerRef = useRef<HTMLDivElement | null>(null);
  const [isBottomScrolled, setIsBottomScrolled] = useState(false);

  const scrollToBottom = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current?.scrollTo({
        top: tableContainerRef.current?.scrollHeight,
        behavior: "smooth",
      });
      setIsBottomScrolled(true);
    }
  };

  const scrollToTop = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsBottomScrolled(false);
    }
  };

  return (
    <div className="slider3-container">
      <div className="row">
        <div>
          <h1>LLM Leaderboard</h1>
        </div>
        <div>
          <button className="btn-outlined">Submit your model</button>
        </div>
      </div>

      <h2>
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to
        test LLMs on a large number of different evaluation tasks. The higher
        the score, the better the LLM.
      </h2>

      <div className="table-container" ref={tableContainerRef}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Model Name</th>
              <th>Average</th>
              <th>ARC</th>
              <th>HellaSwag</th>
              <th>MMLU</th>
              <th>TruthfulQA</th>
              <th>Winogrande</th>
              <th>GSM8K</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="rank">1</td>
              <td className="model">davidkim205/Rhea-72b-v0.5</td>
              <td>81.22</td>
              <td>73.78</td>
              <td>91.15</td>
              <td>77.95</td>
              <td>74.50</td>
              <td>87.85</td>
              <td>76.12</td>
              <td>1,384,193</td>
            </tr>
            <tr>
              <td className="rank up">2 ↑</td>
              <td className="model">MTSAIR/MultiVerse-70B</td>
              <td>81.00</td>
              <td>78.67</td>
              <td>89.77</td>
              <td>78.22</td>
              <td>75.18</td>
              <td>87.53</td>
              <td>76.65</td>
              <td>1,319,155</td>
            </tr>
            <tr>
              <td className="rank">3</td>
              <td className="model">SF-Foundation/Ein-72B-v0.11</td>
              <td>80.81</td>
              <td>76.79</td>
              <td>89.02</td>
              <td>77.20</td>
              <td>79.02</td>
              <td>84.06</td>
              <td>78.77</td>
              <td>1,298,529</td>
            </tr>
            <tr>
              <td className="rank up">4 ↑</td>
              <td className="model">abacusai/Smaug-72B-v0.1</td>
              <td>80.48</td>
              <td>76.02</td>
              <td>89.27</td>
              <td>77.15</td>
              <td>76.67</td>
              <td>85.08</td>
              <td>78.70</td>
              <td>1,255,720</td>
            </tr>
            <tr>
              <td className="rank down">5 ↓</td>
              <td className="model">ibotlv/alpaca-dragon-72b-v1</td>
              <td>79.30</td>
              <td>73.69</td>
              <td>88.16</td>
              <td>77.40</td>
              <td>72.69</td>
              <td>86.03</td>
              <td>77.63</td>
              <td>1,239,060</td>
            </tr>
            <tr>
              <td className="rank">6</td>
              <td className="model">mistralai/Mixtral-8x22B-Instruct-v0.1</td>
              <td>79.15</td>
              <td>72.7</td>
              <td>89.08</td>
              <td>77.17</td>
              <td>68.14</td>
              <td>95.16</td>
              <td>82.03</td>
              <td>1,208,482</td>
            </tr>
            <tr>
              <td className="rank">7</td>
              <td className="model">moreh/MoMo-72B-lora-1.8.7-DPO</td>
              <td>78.55</td>
              <td>70.82</td>
              <td>85.96</td>
              <td>77.13</td>
              <td>74.71</td>
              <td>84.06</td>
              <td>78.62</td>
              <td>1,205,577</td>
            </tr>
            <tr>
              <td className="rank">8</td>
              <td className="model">cloudyu/TomGrc_FusionNet_34Bx2_MoE</td>
              <td>77.91</td>
              <td>74.06</td>
              <td>86.74</td>
              <td>76.65</td>
              <td>72.24</td>
              <td>83.35</td>
              <td>74.45</td>
              <td>1,199,621</td>
            </tr>
            <tr>
              <td className="rank down">9 ↓</td>
              <td>metal-lisma/Mata-Llama-3-708-instruct</td>
              <td>77.89</td>
              <td>71.42</td>
              <td>85.69</td>
              <td>90.06</td>
              <td>61.81</td>
              <td>82.87</td>
              <td>85.44</td>
              <td>1,190,580</td>
            </tr>
            <tr>
              <td className="rank">10</td>
              <td>satinux/huvle-21-db-alignment-v1.0</td>
              <td>77.74</td>
              <td>77.47</td>
              <td>91.93</td>
              <td>68.10</td>
              <td>79.17</td>
              <td>87.37</td>
              <td>71.11</td>
              <td>1,185,234</td>
            </tr>
            <tr>
              <td className="rank up">11 ↑</td>
              <td>zhengzhMxTAO-7Bx2-MoE-v4.1</td>
              <td>77.50</td>
              <td>73.81</td>
              <td>89.22</td>
              <td>54.92</td>
              <td>78.57</td>
              <td>87.37</td>
              <td>71.11</td>
              <td>1,178,888</td>
            </tr>
            <tr>
              <td className="rank down">12 ↓</td>
              <td>yunconglong/Truthful_DPQ_TomGrc_Fuel...</td>
              <td>77.44</td>
              <td>74.91</td>
              <td>83.30</td>
              <td>94.67</td>
              <td>78.02</td>
              <td>88.24</td>
              <td>69.52</td>
              <td>1,177,056</td>
            </tr>
            <tr>
              <td className="rank">13</td>
              <td>JaeyeonKang/CKK_Asum_v1</td>
              <td>77.43</td>
              <td>73.99</td>
              <td>86.07</td>
              <td>75.44</td>
              <td>71.75</td>
              <td>86.35</td>
              <td>66.08</td>
              <td>1,170,554</td>
            </tr>
            <tr>
              <td className="rank down">14 ↓</td>
              <td>fbiqrjUNA-SimpleSmaug-34b-v1beta</td>
              <td>77.41</td>
              <td>74.97</td>
              <td>89.74</td>
              <td>76.58</td>
              <td>70.17</td>
              <td>83.92</td>
              <td>72.48</td>
              <td>1,162,869</td>
            </tr>
            <tr>
              <td className="rank up">15 ↑</td>
              <td>TomGrc/FusionNet_34Bv2_MoE_v0.1</td>
              <td>77.39</td>
              <td>73.72</td>
              <td>86.46</td>
              <td>76.72</td>
              <td>71.01</td>
              <td>83.35</td>
              <td>73.01</td>
              <td>1,144,223</td>
            </tr>
            <tr>
              <td className="rank">16</td>
              <td>migtissera/Tess-72B-v1.Sb</td>
              <td>77.30</td>
              <td>71.25</td>
              <td>85.53</td>
              <td>81.22</td>
              <td>71.95</td>
              <td>81.45</td>
              <td>76.95</td>
              <td>1,139,110</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="scroll-container">
        {!isBottomScrolled ? (
          <button className="btn-rounded" onClick={scrollToBottom}>
            ↓
          </button>
        ) : (
          <button className="btn-rounded" onClick={scrollToTop}>
            ↑
          </button>
        )}
      </div>
    </div>
  );
}

export default Slider3;
