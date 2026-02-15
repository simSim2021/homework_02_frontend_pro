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
        return prevValue +1;
    }

    )
};

const handleReset =()=>{
    setLike(0);
    setDislike(0);
};

    return(

        <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          <Button name="Like" onClick={handleLike} />
          <p className="count">{like}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={handleDislike} />
          <p className="count">{dislike}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={handleReset} />
    </div>
    )
}

export default Feedback;