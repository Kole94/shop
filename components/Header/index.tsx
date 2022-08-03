import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../../slices/authSlice";
import { productSlice } from "../../slices/productSlice";

import { Row } from "../index";

const Header = (props: any) => {
  const isLogin = useSelector((state: any) => state.authSlice.user);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Row className="menu space-between">
        <div className="menu-item mr-3">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="menu-item mr-3">
          <Link href={"/About"}>O Nama</Link>
        </div>
        <div className="menu-item mr-3">
          <Link href={"/Contacts"}>Kontakti</Link>
        </div>
        <div className="menu-item mr-3">
          <Link href={"/Profile"}>Profil</Link>
        </div>
        {isLogin ? (
          <div
            className="menu-item mr-3 pointer"
            // onClick={() => dispatch(authSlice.actions.logout({}))}
            onClick={() => dispatch(productSlice.actions.deleteProduct({}))}
          >
            Logout
          </div>
        ) : (
          <div className="menu-item mr-3">
            <Link href={"/Login"}>Login</Link>
          </div>
        )}
        {isLogin ? null : (
          <div className="menu-item mr-3">
            <Link href={"/Register"}>Register</Link>
          </div>
        )}
      </Row>
    </div>
  );
};

export default Header;
