import React from "react";
import "./Menu.css";

const menuSections = [
  {
    title: "VEGGIE PROTEIN/GUISADOS",
    details: [
      "1. Al Pastor / Mexico City Inspired Beef",
      "2. Deshebrada / Shredded Beef",
      "3. Fajita / Tex-Mex Style",
      "4. Bistec Ranchero / Chopped mesquite grilled flank steak",
      "*5. Chipotle Shredded Chicken / Smokey Chipotle Jackfruit",
      "*6. Huitlacoche / Aztec Corn Truffle",
      "7. Nopalitos en Masa / Grandma Eva's cheesy corn flour cactus leaf",
      "8. Barbacoa de flor de Jamaica / Hibiscus flower barbacoa",
      "9. Hongos en chipotle / creamy chipotle mushrooms and onions",
      "10. Calabacitas con elote / zucchini and corn veggie medley",
    ],
  },
  {
    title: "ENCHILADAS",
    details: "Pick your protein and sauce. served with rice & beans.",
  },
  {
    title: "FLAUTAS $13",
    details: "Pick your protein and sauce. served with rice & beans.",
  },
  {
    title: "CHIMI $15",
    details: "Pick your protein and sauce. served with rice & beans.",
  },
  {
    title: "CORN STREET TACOS $2 each",
    title2: "FLOUR TACO $3.50 each",
  },
  {
    title: "TORTA $13",
    details: "Pick your protein and sauce. served with rice & beans.",
  },
  {
    title: "LOADED BURRITO $10",
    details: "Pick your protein and sauce. served with rice & beans.",
  },
  {
    title: "NUNO'S LOADED NACHOS $14",
    details: "Pick your protein and sauce. served with rice & beans.",
  },
  {
    title: "TACO BOWL $12",
    details: "Pick your protein and sauce. served with rice & beans.",
  },
  {
    title: "EL PLATILLO $12",
    details: "Pick your protein and sauce. served with rice & beans.",
  },
  {
    title: "QUESADILLA $14",
    details: "Pick your protein and sauce. served with rice & beans.",
  },
  {
    title: "TOSTADOS $12",
    details: "Pick your protein and sauce. served with rice & beans.",
  },
  {
    title: "HUITLACOCHE CORN QUESADILLAS $13",
    details: "Pick your protein and sauce. served with rice & beans.",
  },
  {
    title: "TEJANO BBQ WRAP $14",
    details: "Pick your protein and sauce. served with rice & beans.",
  },
];

const menu = () => {
  return (
    <div>
      <div className="container">
        {menuSections.map((item) => {
          return (
            <div className="grids">
              <h1>{item.title}</h1>
              <h1>{item.title2 ? item.title2 : ""}</h1>
              {!item[0] ? (
                <p>{item.details}</p>
              ) : (
                item.details.map((protein) => {
                  return (
                    <ul>
                      <li>{protein}</li>
                    </ul>
                  );
                })
              )}
              <button>Add to Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default menu;
