import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./new.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

export default function App() {
  return (
    <div classskill="card">
      <Avatar
        image="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg"
        name="web developer"
      />
      <div classskill="data">
        <Intro
          name="Jonas Schmedtmann"
          description="Determined and productive web developer with a passion for creative solutions. Proficient in Java, C# and HTML. Dedicated to learning additional technologies and coding languages (currently enrolled in a C++ course). Regularly attend the Boston Morning Hackathon and various DevOps meetups. Created a non-profit website for a local arts project at the Boston Youth Gallery."
        />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return <img className="avatar" src={props.image} alt={props.name} />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
     {skills.map(skill=><Skill skill={skill.skill} color={skill.color} level={skill.level}/>)}
       {/* <ul>
        {skills.map(skill => (
          <li ><Skill skillObj={skill} /></li>
        ))}
      </ul> */}
      {/* <Skill skill="HTML+CSS" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Web Design" emoji="💪" color="green" />
      <Skill skill="Git and GitHub" emoji="👍" color="red" />
      <Skill skill="React" emoji="💪" color="purple" />
      <Skill skill="Svelte" emoji="😎" color="grey" /> */}
    </div>
  );
}
function Skill({ skill, level, color }) {
 
  return (
   
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😎"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   // const style = { color: "red", fontSize: "48px", textTransform: "Uppercase" }
//   const style = {};

//   return (
//     <header className="header">
//       <h1 style={style}>Fast React Pizza Co.</h1>
//     </header>
//   );
// }

// function Menu() {
// const pizzas =pizzaData;
// // const pizzas=[];
// const numPizzas=pizzas.length;

//   return (
//     <main className="menu">
//       <h2>Our menu</h2>

//       {numPizzas > 0 ? (
//         <> 
//         <p>Authentic Italian cuisine</p>
//         <ul className="pizzas">
//         {pizzas.map((pizza) => (
//           <Pizza
//             pizzaObj={pizza}
//             key={pizza.name}
//             //  name={pizza.name}
//             // ingredients={pizza.ingredients}
//             // photoName={pizza.photoName}
//             // price={pizza.price}
//           />
//         ))}
//       </ul>
//       </>
       
//       ):(<p>We're still working on our menu.Please come back later.</p> )}
      
//       {/* <Pizza
//         name="Pizza Margherita"
//         ingradients="Tomato and mozarella"
//         photoName="pizzas/margherita.jpg"
//         price={10}
//       />
//       <Pizza
//         name="Pizza Spinaci"
//         ingradients="Tomato, mozarella, spinach, and ricotta cheese"
//         photoName="pizzas/spinaci.jpg"
//         price={12}
//       />
//      */}
//     </main>
//   );
// }

// function Pizza({pizzaObj}) {

//   // if(pizzaObj.soldOut) return null;

//   return (
//     <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
//       <img src={pizzaObj.photoName} alt={pizzaObj.name} />
//       <div>
//         <h3>{pizzaObj.name}</h3>
//         <p>{pizzaObj.ingredients}</p>

//         {/* {pizzaObj.soldOut ? (<span>SOLD OUT</span>) : (<span>{pizzaObj.price}</span>)} */}

//         <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
//       </div>
//     </li>
//   );
// }

// const Footer = () => {
//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;

//   // console.log(isOpen)
//   // if (hour >= openHour && hour <= closeHour) alert("We'currently open!")
//   // else alert("Sorry we're closed")

//   return (
//     <footer className="footer">
//       {isOpen ? <Order  closeHour={closeHour} openHour={openHour}/>:(<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>)}
//       {/* {new Date().toLocaleTimeString()}.We're currently open! */}
//     </footer>
//   );
//   // return React.createElement("footer", null, "We're currently open!")
// };

// function Order({closeHour,openHour}){
//   return(
//     <div className="order">
//       <p>
//         We're open from {openHour}:00 to {closeHour}:00.Come visit us or order online.
//         </p>
//         <button className="btn">Order</button>
//     </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
