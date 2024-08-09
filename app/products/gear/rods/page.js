import RodsList from "@/components/Products/Gear/Rods/RodsList";
import Goods from "@/components/Products/GoodsList/Goods";




export default function Rods() {
  return <>
    <h1 className="pages-title">Вудилища</h1>
    {/* <RodsList /> */}
    <Goods apiEndpoint={"admin-rods"} goodFields={['name', 'brand', 'series', 'model', 'item']} />
  </>
}
