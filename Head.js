import React from "react";
import { FaBloggerB } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { FcSportsMode } from "react-icons/fc";
import { SiDcentertainment } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { MdApartment } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiNews } from "react-icons/ti";
import { Link,useNavigate } from "react-router-dom";

const Head=()=>{
    const navigate=useNavigate()
    function change(){
        var a=document.querySelector('input').value.toLowerCase()
        if(a==="bussiness" | a==="stock" | a==="share" | a==="market"){
            navigate('/bussiness');
        }
        // if (["bussiness", "stock", "share", "market"].includes(a)) {
        //     navigate('/bussiness');
        // } 
        else if(a==="entertainment" | a==="movies" | a==="webseries" | a==="updates"){
            navigate('/entertainment')
        }
        else if(a==="sports" | a==="hockey" | a==="football" | a==="cricket" | a==="basketball" | a==="race" | a==="kabaddi"){
            navigate('/sport')
        }
        else if(a==="technology" | a==="ai" | a==="robot" | a==="5g" | a==="alien" | a==="spaceship" | a==="jobs"|a==="software"){
            navigate('/technology')
        }
        else if(a==="food" | a==="apple" | a==="mango" | a==="juice" | a==="oil" | a==="orange"){
            navigate('/food')
        }
        else if(a==="education" | a==="leave" | a==="aboard" | a==="exam" | a==="result" | a==="foreign"){
            navigate('/education')
        }
        else{
            alert('Invalid')
        }
    }
    return(
        <div>
            <div className="a">
                    <p style={{fontSize:"20px"}}><FaBloggerB /> Blogger</p>
                    <h1 style={{marginTop:"1%",display:"flex",gap:"8px"}}>Short News <TiNews style={{paddingTop:"4px"}}/></h1>
                    <p style={{fontSize:"20px"}}>
                        <Link to='/login'>
                            <button><FaUserAlt /> Sign in </button>
                        </Link>
                        <Link to='/register'>
                            <button><FaSignInAlt /> Sign up</button>
                        </Link>
                    </p>
            </div>
            <div className="b" style={{display:"flex",justifyContent:"center",gap:"20px"}}>
                <Link to='/'style={{textDecoration:"none",color:"black"}}>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}}><FaHome /> Home</label>
                </Link>
                <Link to='/bussiness' style={{textDecoration:"none",color:"black"}}>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}}><MdApartment /> Bussiness</label>
                </Link>
                <Link to='/entertainment' style={{textDecoration:"none",color:"black"}}>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}}><SiDcentertainment /> Entertainment</label>
                </Link>
                <Link to='/sport' style={{textDecoration:"none",color:"black"}}>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}}><FcSportsMode /> Sports</label>
                </Link>
                <Link to='/technology' style={{textDecoration:"none",color:"black"}}>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}}><GrTechnology /> Technology</label>
                </Link>
                <Link to='/food' style={{textDecoration:"none",color:"black"}}>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}}><IoFastFood /> Food</label>
                </Link>
                <Link to='/education' style={{textDecoration:"none",color:"black"}}>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}}><MdOutlineCastForEducation /> Education</label>
                </Link>
                <Link to='/weather' style={{textDecoration:"none",color:"black"}}>
                <label style={{border:"1px solid black",borderRadius:"100px",padding:"5px",cursor:"pointer"}}><TiWeatherPartlySunny /> Weather</label>
                </Link>
            </div>
            <hr></hr>
            <div className="c">
                <input placeholder="Search" style={{width:"300px",height:"30px",border:"1px solid black"}}></input>
                <button style={{borderRadius:"2px",border:"1px solid black"}} onClick={change}>Search</button>
            </div>
    </div>
    )
}
export default Head;