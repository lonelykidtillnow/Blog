import React from "react";
import Content from "./Content";
import a from "./image/a1.jpg";
import b from "./image/a6.jpg";
import c from "./image/a3.jpg";
import d from "./image/a5.jpg";
import e from "./image/a7.jpg"
import f from "./image/b2.jpg"
import g from "./image/d3.jpg"
import h from "./image/e4.jpg"
import i from "./image/f4.jpg";
import j from "./image/g5.jpg";
import k from "./image/b3.jpg"
import l from "./image/d1.jpg";
import m from "./image/f5.jpg";
import n from "./image/e1.jpg";
import o from "./image/c2.jpg";
import p from "./image/g3.jpg";
import q from "./image/b4.jpg";
import r from "./image/e5.jpg";
import s from "./image/d4.jpg"
const Home=()=>{
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"left",marginLeft:"7%",gap:"50px",marginTop:"2%"}}>
            <Content image={a} headline="IPL 2025: MS Dhoni Set For Rs 4 Crore Retention Talks With CSK. What We Know So Far" content="MS Dhoni has not confirmed his participation in the IPL 2025 season, leaving fans uncertain about his future involvement."/>
            <Content image={f} headline="Israel's PM Netanyahu mourns Ratan Tata's death: ‘Proud son of India’" content="Israeli Prime Minister Benjamin Netanyahu has condoled the death of Indian industry titan Ratan Tata, calling him a champion of the friendship between Israel and India." />
            <Content image={g} headline="Ninth to third, Marquez takes hard-fought final Sprint podium with Repsol Honda Team" content="Marc Marquez gave his all in the MotoGP Sprint, securing a third podium in 2023. Despite a setback in qualifying, he pushed hard for Repsol Honda's farewell." />
            <Content image={e} headline="How an 8-day trip turned into an 8-month nightmare for NASA astronauts Sunita Williams and Butch Wilmore" content="A planned eight-day ISS mission became an eight-month ordeal for astronauts, rescued by SpaceX Dragon with NASA and Roscosmos." />
            <Content image={h} headline="Elon Musk-owned Tesla's Optimus humanoid robot 'will revolutionise the world" content="At Tesla's 'We Robot' event, Elon Musk showcased Optimus humanoid robots performing tasks like walking, serving drinks, handing out gift bags, and hinted at future companionship and labor capabilities." />
            <Content image={i} headline="Surprising benefits of drinking a glass of orange juice ever" content="Freshly squeezed orange juice, rich in antioxidants, Vitamin C, folate, and potassium, boosts immunity, provides instant energy, and supports heart, skin, brain health, while also protecting against kidney stones." />
            <Content image={d} headline="JEE Main, NEET, CUET 2025 dates awaited, were announced in September last time" content="The National Testing Agency (NTA) will announce exam dates for JEE Main, NEET UG, CUET UG/PG, and UGC NET 2025 on its official website, nta.ac.in." />
            <Content image={b} headline="Bengaluru Schedule Of Yash And Kiara Advani-starrer Toxic Ends" content="The film Toxic has already created a significant craze among the fans. Actor Yash earlier shared about the start of the shooting." />
            <Content image={j} headline="As Canada, UK and Australia tighten visa rules, Japan, Germany and Ireland to emerge as premier study abroad destinations" content="Indian students are increasingly exploring alternative study abroad destinations as stricter visa regulations have led to a decline in enrolments in popular countries like Canada, the UK, US, and Australia." />
            <Content image={c} headline="RUMOR: Robert Downey Jr. Will Reunite With Tom Holland...As Doctor Doom In SPIDER-MAN 4!" content="Spider-Man 4 is directed by Destin Daniel Cretton, but details are scarce, with only rumors circulating beyond that." />
            <Content image={k} headline="7 out of 10 companies see drop by ₹1.22 lakh crore in market cap; Airtel, Infosys gained" content="Last week, the combined market valuation of seven of India’s top 10 companies dropped by ₹1,22,107.11 crore, with TCS and Reliance Industries facing the biggest losses." />
            <Content image={l} headline="Hockey India League Will Revive India's Golden Era: Legend Sardar Singh" content="Former captain Sardar Singh believes the revival of the Hockey India League, including a women's league, will revive Indian hockey's golden era, with over 1,000 players registered." />
            <Content image={m} headline="Can a dash of cinnamon in your coffee speed up belly fat lose" content="A study found that consuming 1.5 grams (half a teaspoon) of cinnamon daily can reduce waist circumference by 1.68 cm, but higher amounts showed no significant additional effect." />
            <Content image={n} headline="80% software engineers could lose jobs to AI if they don’t upskill, Analysts warn" content="According to Gartner analysts, over 80% of software engineers must learn new skills like natural-language prompt engineering and retrieval-augmented generation (RAG) to stay competitive in the generative AI era." />
            <Content image={o} headline="Weekly TV Top 10: Love Next Door Secures Top Spot For 5th Consecutive Week" content="TVN's *Love Next Door* dominates ratings with a happy ending. *No Gain No Love* pleased fans, while *The Judge from Hell* dropped, and *Doubt* debuts on MBC."/>
            <Content image={p} headline="75% Attendance Mandatory for Board Exams 2025: CBSE Issues Directive to Schools" content="CBSE has mandated 75% attendance for Class 10 and 12 students to qualify for the 2025 board exams. Schools must enforce the rule and inform parents and students about the consequences of non-compliance." />
            <Content image={q} headline="Dalal Street Week Ahead: Hyundai IPO, US retail sales, ECB interest rate decision, GDP among 10 factors to watch" content="Next week, the market may consolidate, focusing on earnings, Hyundai Motor India IPO, US retail sales, and global economic indicators." />
            <Content image={r} headline="NASA Filmmaker Claims Evidence Of Alien Life Could Be Revealed Next Month" content="NASA filmmaker Simon Holland claims Earth-based telescopes detected signs of intelligent extraterrestrial life, with an Oxford-backed program set to announce the discovery next month." />
            <Content image={s} headline="Sixers star Joel Embiid ruled out of remaining preseason games" content="Philadelphia 76ers' Joel Embiid will sit out the preseason due to left knee management. The team stated he’s progressing well and will follow a personalized treatment plan ahead of the 2024-25 season." />
        </div>
    );
}
export default Home;