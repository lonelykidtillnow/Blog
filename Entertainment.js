import React from "react";
import Content from "./Content";
import a from "./image/a6.jpg";
import b from "./image/a3.jpg";
import c from "./image/c1.jpg";
import d from "./image/c2.jpg";
import e from "./image/c3.jpg";

const Entertainment=()=>{
    return(
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"50px",marginTop:"3%"}}>
            <Content image={a} headline="Bengaluru Schedule Of Yash And Kiara Advani-starrer Toxic Ends" content="The film Toxic has already created a significant craze among the fans. Actor Yash earlier shared about the start of the shooting." />
            <Content image={b} headline="RUMOR: Robert Downey Jr. Will Reunite With Tom Holland...As Doctor Doom In SPIDER-MAN 4!" content="Spider-Man 4 is directed by Destin Daniel Cretton, but details are scarce, with only rumors circulating beyond that." />
            <Content image={c} headline="Blockbuster Movie Premalu Heroine Mamitha Baiju’s Next Telugu Release Is ‘Dear Krishna’" content="Mamitha Baiju, famous for Premalu, stars in bilingual film Dear Krishna directed by Dinesh Baboo, releasing in multiple languages."/>
            <Content image={d} headline="Weekly TV Top 10: Love Next Door Secures Top Spot For 5th Consecutive Week" content="TVN's *Love Next Door* dominates ratings with a happy ending. *No Gain No Love* pleased fans, while *The Judge from Hell* dropped, and *Doubt* debuts on MBC."/>
            <Content image={e} headline="Pawan Kalyan Turns Singer For Hari Hara Veera Mallu; Song To Be Released Soon" content="Pawan Kalyan sings for *Hari Hara Veera Mallu*. A Dasara poster shows him aiming arrows, symbolizing Goddess Shakti's power."/>
        </div>
    );
}
export default Entertainment;