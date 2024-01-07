import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import plant from "../images/plant.jpg";
import Styles from "./Home.module.css";


export default function Home() {
  return (
    <>
    <span className={Styles.logo}>Florest</span>
    <NavLink to="login"><button>Login</button></NavLink>
     <div className={Styles.section}>
        <span>TOP <br /> PICKS</span>
        <img src={plant} alt="plant" />
     </div>
     <div className={Styles.buttons}>
        <NavLink to="all" className={Styles.active}><button>All</button></NavLink>
        <NavLink to="out" ><button>Outdoor</button></NavLink>
        <NavLink to="in" ><button>Indoor</button></NavLink>
     </div>
     <div className={Styles.section}>
        <Outlet />
     </div>
    </>
  )
}
