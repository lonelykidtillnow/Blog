import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link} from "react-router-dom";

const Register=()=>{
    return(
        <form style={{marginTop:"7%"}}>
                <h1 style={{textAlign:"center"}}>Welcome</h1>
                <center>
                    
                    <div>
                        <p style={{marginBottom:"0.5%",position:"relative",right:"5%"}}>Name</p>
                        <div style={{display:"inline",border:"2px solid black",padding:"0.2%"}}>
                            <CiUser/>
                            <input type="text" placeholder="Enter name" style={{border:"none",outline:"none"}} required></input>
                        </div>
                        <p style={{marginBottom:"0.5%",position:"relative",right:"5%"}}>Email</p>
                        <div style={{display:"inline",border:"2px solid black",padding:"0.2%"}}>
                            <MdOutlineMail />
                            <input type="email" placeholder="Enter email" style={{border:"none",outline:"none"}} required></input>
                        </div>
                        <p style={{marginBottom:"0.5%",position:"relative",right:"4%"}}>Password</p>
                        <div style={{display:"inline",border:"2px solid black",padding:"0.2%"}}>
                            <RiLockPasswordLine />
                            <input type="password" placeholder="Enter password" style={{border:"none",outline:"none"}} required></input>
                        </div>
                        <Link to='/login'>
                        <button style={{display:"block",backgroundColor:"darkgreen",color:"white",marginTop:"2%",width:"200px",padding:"5px",borderBottom:"none"}}>Register</button>
                        </Link>
                        <p style={{position:"relative",right:"1%",marginTop:"0",fontSize:"15px"}}>Already Have an account</p>
                        <button style={{width:"200px"}}>Login</button>
                    </div>
                </center>
            </form>
    )
}
export default Register;