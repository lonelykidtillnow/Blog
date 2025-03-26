import React from "react";
import Content from "./Content";
import a from "./image/f1.jpg";
import b from "./image/f2.jpg";
import c from "./image/f3.jpg";
import d from "./image/f4.jpg";
import e from "./image/f5.jpg";
const Food=()=>{
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"50px",marginTop:"3%"}}>
            <Content image={a} headline="Fall In Love With Bengaluru's Unique Must-Try Desserts" content="Bengaluru's top restaurants are redefining desserts with creative ingredients. From one8 Commune’s Textures of Coconut to Foo Bengaluru’s Mount Foo-Ji, these sweet creations elevate dessert experiences to new heights." />
            <Content image={b} headline="This Chinese restaurant in Bengaluru has curated its menu inspired by the flavours of Durga Puja and Navratri" content="This festive season, Chinese-specialty restaurant Chowman in Bengaluru expands its menu with new dishes, offering more options for both Durga Puja celebrations and Navratri-friendly diets." />
            <Content image={c} headline="Shops to sell cooking oil at reduced rate till this month’s end" content="AP Minister Nadendla Manohar announced reduced rates for palm olein (Rs 110/litre) and sunflower oil (Rs 124/litre) in all shops during the festive season, limited to ration cardholders." />
            <Content image={d} headline="Surprising benefits of drinking a glass of orange juice ever" content="Freshly squeezed orange juice, rich in antioxidants, Vitamin C, folate, and potassium, boosts immunity, provides instant energy, and supports heart, skin, brain health, while also protecting against kidney stones." />
            <Content image={e} headline="Can a dash of cinnamon in your coffee speed up belly fat lose" content="A study found that consuming 1.5 grams (half a teaspoon) of cinnamon daily can reduce waist circumference by 1.68 cm, but higher amounts showed no significant additional effect." />
        </div>
    );
}
export default Food;