import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link} from "react-router-dom";

const Login=()=>{
    
    return(
        <form style={{marginTop:"10%"}}>
            <div>
                <h1 style={{textAlign:"center"}}>Welcome</h1>
                <center>
                    <div>
                        <p style={{marginBottom:"0.5%",position:"relative",right:"5%"}}>Email</p>
                        <div style={{display:"inline",border:"2px solid black",padding:"0.2%"}}>
                            <MdOutlineMail />
                            <input type="email" placeholder="Enter email" style={{border:"none",outline:"none"}} required ></input>
                        </div>
                        <p style={{marginBottom:"0.5%",position:"relative",right:"4%"}}>Password</p>
                        <div style={{display:"inline",border:"2px solid black",padding:"0.2%"}}>
                            <RiLockPasswordLine />
                            <input type="password" placeholder="Enter password" style={{border:"none",outline:"none"}} required></input>
                        </div>
                        <Link to='/'>
                        <button style={{width:"200px",display:"block",marginTop:"2%"}}>Login</button>
                        </Link>
                    </div>
                </center>
            </div>
            </form>
    );
}
export default Login