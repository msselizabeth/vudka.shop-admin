import AddProductButton from "@/components/Buttons/AddProductButton";
import AddRod from "@/components/Products/Gear/Rods/AddRod";
import RodsList from "@/components/Products/Gear/Rods/RodsList";
import Goods from "@/components/Products/GoodsList/Goods";





export default function Rods() {
  return <>
    <div className="pages-title-container">
      <h1 className="pages-title">Вудилища</h1>
     <AddRod/>
    </div>
    {/* <RodsList /> */}
    <Goods collection={"rods"} />

  </>
}
