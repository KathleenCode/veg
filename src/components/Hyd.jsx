import hyd from "../images/outdhydrangea.jpg";
import { Link } from "react-router-dom";

export default function Hyd() {
  return (
    <>
     <div>
     <img src={hyd} alt="hydrangea" />
     <div>
      <p>HYDRANGEA</p>
      <p>0 1 0</p>
     </div>
     <Link to="/hyd"><button>View</button></Link>
     </div>
    </>
  )
}
