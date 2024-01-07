import cord from "../images/outdcordyline.jpg";
import {Link} from "react-router-dom";

export default function Cord() {
  return (
    <>
       <div>
        <img src={cord} alt="a cordyline plant" />
        <div>
        <p>CORDYLINE</p>
        <p>0 1 0</p>
      </div>
      <Link to="/cord"><button>View</button></Link>
      </div>
    </>
  )
}
