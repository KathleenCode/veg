import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Styles from "./All.module.css";
import aloe from "../images/indaloevera.jpg";
import cord from "../images/outdcordyline.jpg";
import hyd from "../images/outdhydrangea.jpg";
import rose from "../images/indrosemary.jpg";
import {useState} from "react";


export default function RosePage() {
  const navigate = useNavigate();
  const a = "Rosemary is a perennial herb. In colder areas, you can keep it going by bringing it indoors, where you'll be able to enjoy fresh rosemary all year. It needs at least six hours of bright, indirect sunlight daily.  Even where the rosemary is tough, it'll die back outdoors in the cold. It's a great addition to any indoor herb garden."
  const [one, setOne] = useState("Rosemary is a perennial herb. In colder areas, you can keep it going by bringing it indoors, where you'll be able to enjoy fresh rosemary all year. It needs at least six hours of bright, indirect sunlight daily.  Even where the rosemary is tough, it'll die back outdoors in the cold. It's a great addition to any indoor herb garden.")
  const b = "Rosemary is usually robust and healthy when grown in a suitable warm, sunny, well-drained area. Waterlog and cold, wet soil or potting compost can cause problems such as make roots rot and die. Good drainage can solve such issues.";
  const c = "Rosemary  been used in folk medicine to alleviate several diseases including headache, dysmenorrhea, stomachache, epilepsy, rheumatic pain, spasms, nervous agitation, improvement of memory, hysteria, depression, as well as physical and mental fatigue";
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
        <NavLink to="/hyd"><img src={hyd} alt="hydrangea" /></NavLink>
        <NavLink to="/rose" className={Styles.active}><img src={rose} alt="rosemary" /></NavLink>
      </div>
      <div className={Styles.one}>
        <img src={rose} alt="rosemary" />
        <h3>ROSEMARY</h3>
        <span onClick={() => setOne(a)}>1</span>
        <span onClick={() => setOne(b)}>2</span>
        <span onClick={() => setOne(c)}>3</span>
        <p>{one}</p>
      </div>
    </div>
    </>
  )
}
