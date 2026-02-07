import "./styles.css";

function SimpsonsCard(props) {
  // const homerSimpson = {
  //   firstName: "Homer",
  //   lastName: "Simpson",
  //   job: "Nuclear Security Specialist",
  //   hobby: "Bear, TV, FastFood",
  //   avatarURL:
  //     "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  // };
  return (
    <div className="card">
      <img className="avatar" src={props.avatar} alt="User Avatar" />
      <p className="card_info">
        <span className="info_title">Fullname: </span>
        <p>{`${props.firstName} ${props.lastName}`}</p>
      </p>
      <p className="card_info">
        <span className="info_title"> Job: </span>
        <p>{props.job}</p>
      </p>
      <p className="card_info">
        <span className="info_title">Hobby: </span>
        <p>{props.hobby}</p>
      </p>
    </div>
  );
}
export default SimpsonsCard;