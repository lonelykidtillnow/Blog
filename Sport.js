import React from "react";
import Content from "./Content";
import a from "./image/d1.jpg"
import b from "./image/d2.jpg"
import c from "./image/d3.jpg"
import d from "./image/d4.jpg"
import e from "./image/d5.jpg"

const Sport =()=>{
    return(
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"50px",marginTop:"3%"}}>
            <Content image={a} headline="Hockey India League Will Revive India's Golden Era: Legend Sardar Singh" content="Former captain Sardar Singh believes the revival of the Hockey India League, including a women's league, will revive Indian hockey's golden era, with over 1,000 players registered." />
            <Content image={b} headline="Cristiano Ronaldo's Unmissable Tribute To Retiring Rafael Nadal" content="Cristiano Ronaldo paid tribute to Rafael Nadal, who announced his retirement at 38 after winning 22 Grand Slam titles, praising his humility, resilience, and illustrious career."/>
            <Content image={c} headline="Ninth to third, Marquez takes hard-fought final Sprint podium with Repsol Honda Team" content="Marc Marquez gave his all in the MotoGP Sprint, securing a third podium in 2023. Despite a setback in qualifying, he pushed hard for Repsol Honda's farewell." />
            <Content image={d} headline="Sixers star Joel Embiid ruled out of remaining preseason games" content="Philadelphia 76ers' Joel Embiid will sit out the preseason due to left knee management. The team stated he’s progressing well and will follow a personalized treatment plan ahead of the 2024-25 season." />
            <Content image={e} headline="After successive underwhelming seasons, Telugu Titans eye a change of fortunes in PKL Season 11" content="After struggling in recent Pro Kabaddi League seasons, Telugu Titans aim for a fresh, confident approach in Season 11 to improve their poor league standings." />
        </div>
    );
}
export default Sport;