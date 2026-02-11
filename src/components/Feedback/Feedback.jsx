import "./styles.css";
import Button from "../Button/Button";

import { useState } from "react";


function Feedback(){
const [like, setLike] = useState(0);
const [dislike, setDislike] = useState(0);


const handleLike = ()=>{
    setLike ((prevValue)=>{
        return prevValue +1;
    }

    );
};

const handleDislike = ()=>{
    setDislike ((prevValue) =>{
        return prevValue -1;
    }

    )
};

const handleReset =()=>{
    setLike(0);
    setDislike(0);
};

    return(

        <div className="feedback_wrapper">
            <div className="button_control">
            <Button name="Like" onClick={handleLike}/>
            </div>
            <p className="count">{like}</p>
            <div className="button_control">
                <Button name="Dislike" onClick={handleDislike}/>
            </div>
            <p className="count">{dislike}</p>
            <div className="button_control">
                <Button name="Reset Results" onClick={handleReset}/>
            </div>
        </div>
    )
}

export default Feedback;