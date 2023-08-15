import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import Header from "../Components/Header";
function Home() {
  const navigate = useNavigate();
 return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="input">
          <form>
           <div className="subtitle">Lifestyle Diets</div>
           <div>
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSdK8uFsHN3SY3KJeEKpEFmHPqmKsnieTDQ&usqp=CAU '></img>
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRm7dRY9Fycyt2K-skfLISA6FAvMK_Kt7TKg&usqp=CAU '></img>
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNaFyBFzIYfpfGqbU8sgyNneznRYqcbZJ_93cv35lqxwMS1IMsG8DDqlyPsboVsuYGHB4&usqp=CAU '></img>
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgR1SzkSgBExkGELssXhs7aT6-ME7AlRiRQ&usqp=CAU'></img> </div>
           <div className="sub">The 9 Best Diet Plans for Your Overall Health</div>
          
           <div className="su"><b>1. The Mediterranean diet</b></div>
           <p>
             The Mediterranean diet is based on foods that people in countries like Italy and Greece have traditionally eaten. It is rich in:<br/>
             <b>vegetables, fruits, whole grains, fish, nuts, lentils, olive oil<br/>
             Foods such as poultry, eggs, and dairy products are to be eaten in moderation, and red meats are limited.<br/>
           Additionally, the Mediterranean diet limits:<br/>
           refined grains, trans fats, processed meat, added sugar, other highly processed foods</b>
           </p>
           <div className="su"><b>2. The DASH diet</b></div>
           <p>
             The DASH diet recommends specific servings of different food groups. The number of servings you are encouraged to eat depends
             on your daily calorie intake.<br/>
             For example, each day an average person on the DASH diet would eat about:<br/>
             <b>five servings of vegetables, five servings of fruit, seven servings of healthy carbs like whole grains, two servings of low fat dairy products
               two servings or fewer of lean meats</b><br/>
              In addition, it’s recommended to consume nuts and seeds two to three times per week.
           </p>
           <div className="su"><b>3. Plant-based and flexitarian diets</b></div>
           <p>Typical vegetarian diets restrict meat of all kinds but allow dairy products. Typical vegan diets restrict all animal products,
             including dairy, butter, and sometimes other byproducts like honey.<br/>
             The flexitarian eating plan does not have clear-cut rules or recommendations about calories and macronutrients,
             so it’s considered more of a lifestyle than a diet. Its principles include:<br>
             </br>
             <b>consuming protein from plants instead of animals<br/> eating mostly fruits, vegetables, legumes, and whole grains<br/>
              eating the least processed, most natural forms of foods<br/> limiting sugar and sweets</b><br/>
              Additionally, it allows the flexibility to consume meat and animal products from time to time.</p>
           <div className="su"><b>4. The MIND diet</b></div>
           <p>
             Like the flexitarian diet, the MIND diet does not have a strict meal plan,
             but instead encourages eating 10 specific foods with brain health benefits.<br />
             Per week, MIND includes eating:<br />
             <b>six or more servings of green, leafy vegetables<br/>one serving of non-starchy vegetables<br/>
             five or more servings of nuts<br/>
             Other foods it encourages multiple times a week include:<br/>berries, beans, olive oil, whole grains, fish, poultry</b>
           </p>
           <div className="su"><b>5. WW (formerly Weight Watchers)</b></div>
           <p>
             WW is a points-based system that assigns different foods and beverages a value, depending on their calorie, fat, and fiber contents.<br/>
            As you work to reach your desired weight, you must stay within your daily point allowance.
           </p>

         </form>
       </div>
     </div>
    </>
  );
}

export default Home;