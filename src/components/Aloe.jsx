import aloe from "../images/indaloevera.jpg";
import {Link} from "react-router-dom";

export default function Aloe() {
  return (
    <>
      <div >
        <img src={aloe} alt="aloe" />
       <div>
         <p>ALOE VERA</p>
         <p>0 1 0</p>
       </div>
       <Link to="/aloe"><button>View</button></Link>
      </div>
    </>
  )
}
