import { useState } from "react";

import { v4 } from "uuid";

import Button from "../../components/Button/Button";

import "./styles.css";

function Lesson_05() {

  const [order, setOrder] = useState([]);// ["Burger"] => ["Burger", "Fries"]

  // Можно использовать функции по отдельности для каждой кнопки, 
  // и это будет работать
  // Но код однотипный и намного удобнее и компактнее использовать 
  // универсальную функцию addMenuElement,
  // в которую мы будем передавать нудный нам элемент заказа

  // const addBurger = ()=>{
  //   setOrder((prevValue)=>{//prevValue=["Burger", "Fries"]
  //     return [...prevValue, "Burger"];
  //   })
  // };

  // const addFries = ()=>{
  //   setOrder((prevValue)=>{//prevValue=["Burger", "Fries"]
  //     return [...prevValue, "Fries"];
  //   })
  // };

  // const addCola = ()=>{
  //   setOrder((prevValue)=>{//prevValue=["Burger", "Fries"]
  //     return [...prevValue, "Cola"];
  //   })
  // };

  const addMenuElement = (menuElement)=>{
    setOrder((prevValue)=>{//prevValue=["Burger", "Fries"]
      return [...prevValue, menuElement];
    })
  };

  // map() JSX
  // ["Burger", "Fries"] => [<li>Burger</li>, <li>Fries</li>]
const finalOrder = order.map((orderEl)=>{
  return <li key={v4()}>{orderEl}</li>
});
  
console.log(finalOrder);

//массив имен кнопок (menu)
const menuButtons = ["Burger", "Fries", "Cola", "Salad", "Ketchup", "Ice-cream"];

//кнопки через map
const menuButtonsJSX = menuButtons.map((name) => (
    <div className="button_control" key={name}>
      <Button name={name} onClick={() => addMenuElement(name)} />
    </div>
  ));


  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">{menuButtonsJSX}</div>
          {/* <div className="button_control">
            <Button name="Burger" onClick={()=>addMenuElement("Burger")} />
          </div>
          <div className="button_control">
            <Button name="Fries" onClick={()=>addMenuElement("Fries")} />
          </div>
          <div className="button_control">
            <Button name="Cola" onClick={()=>addMenuElement("Cola")} />
          </div>
          <div className="button_control">
            <Button name="Salad" onClick={()=>addMenuElement("Salad")} />
          </div>
          <div className="button_control">
            <Button name="Ketchup" onClick={()=>addMenuElement("Ketchup")} />
          </div>
          <div className="button_control">
            <Button name="Ice-cream" onClick={()=>addMenuElement("Ice-cream")} />
          </div> */}


      </div>

      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{finalOrder}</ol>
        
      </div>
    </div>
  );
}

export default Lesson_05;
