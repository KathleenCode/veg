import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Styles from "./All.module.css";
import aloe from "../images/indaloevera.jpg";
import cord from "../images/outdcordyline.jpg";
import hyd from "../images/outdhydrangea.jpg";
import rose from "../images/indrosemary.jpg";


export default function Hyd() {
  const navigate = useNavigate();

  const a = "Hydrangea, is an all-time-favourite with her pom-pom-esque clusters of flowers and her glossy, green leaves. She makes a beautiful and low-maintenance hedge, or a great statement potted plant.  Reaching up to 15 feet in height, the hydrangea grows quickly and often fills in a space in just one season. Either way, she's definitely top 10 material.";
  
  const [one, setOne] = useState(a);

  const b = "Hydrangea Care: choose a quality plant, use good soil, plant in proper sunlight, plant them well, accessorize your plants, remember to prune, protect them from cold, change the color. Learning the basics of how to plant hydrangeas can save you time and money";
  const c = "The hydrangea root supplement has been used in folk medicine for hundreds of years to treat prostate and bladder infections due to its purported diuretic effects — meaning its ability to increase urine output. However, no available scientific evidence backs up this claim";

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
        <NavLink to="/cord"><img src={cord} alt="cordyline" /></NavLink>
        <NavLink to="/hyd" className={Styles.active}><img src={hyd} alt="hydrangea" /></NavLink>
        <NavLink to="/rose"><img src={rose} alt="rosemary" /></NavLink>
      </div>
      <div className={Styles.one}>
        <img src={hyd} alt="hydrangea" />
        <h3>HYDRANGEA</h3>
        <span onClick={() => setOne(a)}>1</span>
        <span onClick={() => setOne(b)}>2</span>
        <span onClick={() => setOne(c)}>3</span>
        <p>{one}</p>
      </div>
    </div>
    </>
  )
}
