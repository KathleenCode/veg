import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Styles from "./All.module.css";
import { useState } from 'react';
import aloe from "../images/indaloevera.jpg";
import cord from "../images/outdcordyline.jpg";
import hyd from "../images/outdhydrangea.jpg";
import rose from "../images/indrosemary.jpg";


export default function Cord() {
  const navigate = useNavigate();

  const a = "Hailing from southern Europe and south-east Asia, Cory the Cordyline is an easy-to-please plant with a lovely tropical look. It comes in an eye-catching red or green, and it looks good when put side-by-side with pretty much any other plant. Low maintenance and versatile - that's why we love it.";

  const [one, setOne] = useState(a);

  const b = "When growing in borders, newly planted cordylines should be watered regularly during their first season. Fairly-grown plants are drought tolerant and don't require watering. Cordylines in containers need regular watering during the growing season, but should be kept fairly dry in cold seasons.";
  const c = "The leaves can make a rain cloak. The plants are also widely used for traditional medicine, dye, and ornamentation throughout Austronesia and New Guinea. Cordyline fruticosa flowers are a traditional treatment for asthma, and their anthocyanin content has been assessed to see if they might be commercial herbal remedy.";

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
        <NavLink to="/aloe"><img src={aloe} alt="aloevera" /></NavLink>
        <NavLink to="/cord" className={Styles.active}><img src={cord} alt="cordyline" /></NavLink>
        <NavLink to="/hyd"><img src={hyd} alt="hydrangea" /></NavLink>
        <NavLink to="/rose"><img src={rose} alt="rosemary" /></NavLink>
      </div>
      <div className={Styles.one}>
        <img src={cord} alt="cordyline" />
        <h3>CORDYLINE</h3>
        <span onClick={() => setOne(a)}>1</span>
        <span onClick={() => setOne(b)}>2</span>
        <span onClick={() => setOne(c)}>3</span>
        <p>{one}</p>
      </div>
    </div>
    </>
  )
}
