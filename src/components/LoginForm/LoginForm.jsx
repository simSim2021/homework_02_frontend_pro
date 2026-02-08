import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm(){

    return <div className="login_form">
        <p className="form_name">Login form</p>
        <Input
        label="Email"
        name="email"
        placeholder="Enter your email"        
        type="email"
        
        />
        <Input
        label="Password"
        name="password"
        placeholder="Enter your password"        
        type="password"
        
        />
        <Button
        name="Login"
        
        
            />
    
    </div>
}

export default LoginForm;