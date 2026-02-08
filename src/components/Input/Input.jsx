import "./styles.css";

function Input ({name, type, placeholder, label}) {

    return <div className="form_input">
<label className="input_label" htmlFor="email">{label} 

</label>
<input 
id="email"
name={name}
placeholder={placeholder}
type={type}
/>

   </div>
}

export default Input;