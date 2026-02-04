import "./styles.css";

 function Card(){
    return (
        <div className="homework_02_wrapper">
            <div className="simpson_card">
                <p className="card_title">Gomer Simpson</p>
                <img className="avatar" src="https://www.hollywoodreporter.com/wp-content/uploads/2016/02/simp2006_homerarmscrossed_f_hires2_-_h_2016.jpg" alt="Gomer Avatar"/>
                <p className="card_info">Name and Surname: Gomer Simpson </p>
                <p className="card_info">Occupation: Manager</p>
                <p className="card_info">Hobby: Dancing</p>
            </div>

        </div>
    );
}

export default Card;