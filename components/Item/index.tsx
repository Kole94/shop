import { Button } from "../";
import Image from "next/image";
import { useSelector } from "react-redux";
import orah from "../../public/images/orah.jpeg";
const Item = (props: any) => {
  // const isLogedIn = useSelector((store: any) => {
  //   return store.logedIn;
  // });
  return (
    <div className="item-ii">
      <Image src={`/images/${props.item.img}.jpeg`} width={100} height={100} />
      <p>{props.item.name}</p>
      <p>{props.item.price} rsd</p>
      {/* {isLogedIn.loginIn ? (
        <Button
          name="Kupi"
          onClick={(e: any) => {
            e.preventDefault();
            alert(`Kupili ste proizvod ${props.item.name}`);
          }} */}
        />
      ) : null}
    </div>
  );
};

export default Item;
