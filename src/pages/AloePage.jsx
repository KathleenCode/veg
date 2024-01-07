import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Styles from "./All.module.css";
import aloe from "../images/indaloevera.jpg";
import cord from "../images/outdcordyline.jpg";
import hyd from "../images/outdhydrangea.jpg";
import rose from "../images/indrosemary.jpg";

export default function AloePage() {
  const navigate = useNavigate();

  const a = "Aloe vera is commonly grown as a houseplant and also does well outdoors. It can only stay outdoors all year in Zones 9 and higher, but it can be moved outdoors during the warmer months in other areas. It needs bright, indirect light indoors. Outdoors, aloe plants need at least eight hours of bright light daily. It's very important to acclimate them before exposing to direct sun.";

  const [one, setOne] = useState(a);

  const b = "Aloe is quite drought tolerant. Water plants sparingly, allowing the upper one to two inches of soil to dry completely between waterings. Make sure containers have adequate drainage and do not let plants sit in trays of water. Plants brought outdoors should be placed in a location sheltered from excess rain.";
  const c = "Aloe vera is a medicinal plant with antioxidant and antibacterial properties. Aloe vera benefits can include reducing dental plaque, accelerating wound healing, preventing wrinkles, and managing blood sugar.";

  return (
    <>
      <button 
      style={{margin: "1rem", 
      padding: "1rem 1.7rem", 
      color: "#555843", 
      backgroundColor: "#A2C579",
      fontSize: "1.2rem"
    }} 
      onClick={() => navigate("/")} >Back</button>
     <div className={Styles.plant}>
      <div className={Styles.group}>
        <NavLink className={Styles.active} to="/aloe"><img src={aloe} alt="aloevera" /></NavLink>
        <NavLink to="/rose"><img src={cord} alt="cordyline" /></NavLink>
        <NavLink to="/cord"><img src={hyd} alt="hydrangea" /></NavLink>
        <NavLink to="/hyd"><img src={rose} alt="rosemary" /></NavLink>
      </div>
      <div className={Styles.one}>
        <img src={aloe} alt="aloevera" />
        <h3>ALOE VERA</h3>
        <span onClick={() => setOne(a)}>1</span>
        <span onClick={() => setOne(b)}>2</span>
        <span onClick={() => setOne(c)}>3</span>
        <p>{one}</p>
      </div>
    </div>
    </>
  )
}
