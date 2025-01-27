import { brandsImgList } from "@/lib/constants";
import BrandsMarquee from "./BrandsMarquee";
const BrandsContainer = () => {
  return (
    <div>
      <BrandsMarquee brandsImgList={brandsImgList} />
      <BrandsMarquee brandsImgList={brandsImgList} leftToRight={true} />
    </div>
  );
};
export default BrandsContainer;
