import "./styles.css";

function Button({name = "Send", type}) {
  return <button className="button_component" >{name} {type} </button>;
}

export default Button;