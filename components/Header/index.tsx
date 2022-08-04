import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../../slices/authSlice";
import { productSlice } from "../../slices/productSlice";
import User from "../../models/user";

import { Row } from "../index";
import { useRouter } from "next/router";

const Header = (props: any) => {
  const isLogin: User = useSelector((state: any) => state.authSlice.user);
  const isAdmin: User = useSelector((state: any) => state.authSlice.user);

  const dispatch = useDispatch();
  const router = useRouter();
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
        {isAdmin ? (
          <div className="menu-item mr-3">
            <Link href={"/Addproduct"}>Add Product</Link>
          </div>
        ) : null}
        {isLogin ? (
          <div
            className="menu-item mr-3 pointer"
            onClick={() => {
              dispatch(authSlice.actions.logout({}));
              router.push("/");
            }}
            // onClick={() => dispatch(productSlice.actions.deleteProduct({}))}
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
