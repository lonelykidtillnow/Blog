import React from "react";
import Content from "./Content";
import a from "./image/b2.jpg"
import b from "./image/b1.jpg"
import c from "./image/b3.jpg"
import d from "./image/b4.jpg"
import e from "./image/b5.jpg"

const Bussiness=()=>{
    return(
        <div>
            <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"50px",marginTop:"3%"}}>
            <Content image={a} headline="Israel's PM Netanyahu mourns Ratan Tata's death: ‘Proud son of India’" content="Israeli Prime Minister Benjamin Netanyahu has condoled the death of Indian industry titan Ratan Tata, calling him a champion of the friendship between Israel and India." />
            <Content image={b} headline="Reliance Bonus issue 2024: RIL may announce bonus share record date tomorrow - reports" content="RIL's bonus issuance may be the largest in India’s stock market, coinciding with the festive season, dubbed an 'early Diwali gift' for investors." />
            <Content image={c} headline="7 out of 10 companies see drop by ₹1.22 lakh crore in market cap; Airtel, Infosys gained" content="Last week, the combined market valuation of seven of India’s top 10 companies dropped by ₹1,22,107.11 crore, with TCS and Reliance Industries facing the biggest losses." />
            <Content image={d} headline="Dalal Street Week Ahead: Hyundai IPO, US retail sales, ECB interest rate decision, GDP among 10 factors to watch" content="Next week, the market may consolidate, focusing on earnings, Hyundai Motor India IPO, US retail sales, and global economic indicators." />
            <Content image={e} headline="Average airfares around Diwali drop 20-25% on many routes" content="Airfares on many domestic routes have decreased by 20-25% this Diwali season due to increased capacity and falling oil prices, benefiting air passengers." />
        </div>
        </div>
    )
}
export default Bussiness;