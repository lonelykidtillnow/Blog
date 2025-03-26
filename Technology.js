import React from "react";
import Content from "./Content";
import a from "./image/e1.jpg"
import b from "./image/e2.jpg"
import c from "./image/e3.jpg"
import d from "./image/e4.jpg"
import e from "./image/e5.jpg"
const Technology=()=>{
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"50px",marginTop:"3%"}}>
            <Content image={a} headline="80% software engineers could lose jobs to AI if they don’t upskill, Analysts warn" content="According to Gartner analysts, over 80% of software engineers must learn new skills like natural-language prompt engineering and retrieval-augmented generation (RAG) to stay competitive in the generative AI era." />
            <Content image={b} headline="Samsung Galaxy Z Fold 6 Special Edition Tipped to Feature Less Visible Display Crease" content="Samsung's Galaxy Z Fold Special Edition, a thinner variant of the Z Fold 6, is rumored to feature an 8-inch display and a less noticeable crease, launching soon." />
            <Content image={c} headline="Exclusive: Ericsson gets new 5G contract from India's Bharti Airtel, sources say" content="Ericsson secured a multi-billion dollar 5G equipment contract from Bharti Airtel, following its involvement in a $3.6 billion contract with Vodafone Idea alongside Nokia and Samsung." />
            <Content image={d} headline="Elon Musk-owned Tesla's Optimus humanoid robot 'will revolutionise the world" content="At Tesla's 'We Robot' event, Elon Musk showcased Optimus humanoid robots performing tasks like walking, serving drinks, handing out gift bags, and hinted at future companionship and labor capabilities." />
            <Content image={e} headline="NASA Filmmaker Claims Evidence Of Alien Life Could Be Revealed Next Month" content="NASA filmmaker Simon Holland claims Earth-based telescopes detected signs of intelligent extraterrestrial life, with an Oxford-backed program set to announce the discovery next month." />
        </div>
    )
}
export default Technology;