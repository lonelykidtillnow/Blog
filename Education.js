import React from "react";
import Content from "./Content";
import a from "./image/g1.jpg"
import b from "./image/g2.jpg"
import c from "./image/g3.jpg"
import d from "./image/g4.jpg"
import e from "./image/g5.jpg"
const Education=()=>{
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"3%",gap:"50px"}}>
            <Content image={a} headline="Minister Anbil Mahesh release schedule of TN public examinations" content="School Education Minister Anbil Mahesh Poyyamozhi announced Coimbatore's public exam schedule: Class XII practicals from Feb 7-14, main exams from March 3-25; Class XI from March 5-27, Class X from March 28-April 15." />
            <Content image={b} headline="Academic freedom is eroding in India, here’s how to stop it" content="Deepak Malghan's experience at IIM Bangalore highlights a troubling trend in elite institutions, emphasizing that academic freedom is diminishing in favor of rank-driven excellence and avoiding controversies." />
            <Content image={c} headline="75% Attendance Mandatory for Board Exams 2025: CBSE Issues Directive to Schools" content="CBSE has mandated 75% attendance for Class 10 and 12 students to qualify for the 2025 board exams. Schools must enforce the rule and inform parents and students about the consequences of non-compliance." />
            <Content image={d} headline="NEET PG 2024 counselling schedule to be announced soon: Key details here" content="The Medical Counselling Committee (MCC) will soon release the NEET PG 2024 counselling schedule. Candidates can check the official MCC website for updates and important details." />
            <Content image={e} headline="As Canada, UK and Australia tighten visa rules, Japan, Germany and Ireland to emerge as premier study abroad destinations" content="Indian students are increasingly exploring alternative study abroad destinations as stricter visa regulations have led to a decline in enrolments in popular countries like Canada, the UK, US, and Australia." />
        </div>
    )
}
export default Education;