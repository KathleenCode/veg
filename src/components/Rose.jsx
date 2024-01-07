import rose from "../images/indrosemary.jpg";
import {Link} from "react-router-dom";

export default function Rose() {
  return (
    <>
      <div>
       <img src={rose} alt="rosemary plant" />
       <div>
         <p>ROSEMARY</p>
         <p>0 1 0</p>
       </div>
       <Link to="/rose"><button>View</button></Link>
      </div>
    </>
  )
}
