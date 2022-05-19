import { Col as AntCol } from "antd";
import Link from "next/link";
const Header = (props: any) => {
  return (
    <div>
      <ul>
        {/* <Link href={"/Dashboard"}>Dashboard</Link> */}
        <Link href={"/Addproduct"}>Addproduct</Link>
        <Link href={"/"}>Dashboard</Link>
      </ul>
    </div>
  );
};

export default Header;
