import "./fruitList.css";
import { useState } from "react";

const FruitList = () => {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () => {
    const redFruits = fruits.filter((fruit) => fruit.color === "red");
    setFruits(redFruits);
  };

  const totalPrice = fruits.reduce((acc, fruit) => acc + fruit.price, 0);

  return (
    <div className="fruitBox">
      <h2>Preço total = {totalPrice}</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}> {fruit.name} </li>
        ))}
      </ul>
      <button onClick={filterRedFruits}>Exibir frutas vermelhas</button>
    </div>
  );
};

export default FruitList;
