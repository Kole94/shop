import { useSelector } from "react-redux";
import { Col } from "../../components";

const Profile = (props: any) => {
  //   const isLogedIn = useSelector((store: any) => {
  //     return store.logedIn;
  //   });
  //   debugger;
  return (
    <div className="login">
      {/* <Col className="profil">
        <div className="profile-element">
          <p>ime</p>
          <p>{isLogedIn.users[0].name}</p>
        </div>
        <div className="profile-element">
          <p>email</p>
          <p>{isLogedIn.users[0].email}</p>
        </div>
        <div className="profile-element">
          <p>prezime</p>
          <p>{isLogedIn.users[0].lastname}</p>
        </div>
        <div className="profile-element">
          <p>adresa</p>
          <p>{isLogedIn.users[0].address}</p>
        </div>
      </Col> */}
    </div>
  );
};

export default Profile;
