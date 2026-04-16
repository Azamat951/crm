import { Button } from "./Button";

const styles: {[key: string]:string} = {
    container: "w-[245px] h-[295px] bg-[#343743] rounded-md",
    IMGcontainer: "bg-[#272A30] rounded-md w-[225px] h-[131px]"
}

type CardProps = {
    img: string;
    title: string;
    brand: string;
    quality:string;
    style: string;
    imgStyle: string
}
export const Card = ({img,title,brand,quality,style,imgStyle}: CardProps) => {
   return <div className={styles[style]}>
    <div className={imgStyle}><img src={img} alt="" /></div>
    
    <p className="font-[700] text-white">{title}</p>
    <p className="text-[14px text-white">Brand: {brand}</p>
    <p className="text-[14px text-white">Quality: {quality}</p>
    <Button text="Add to cart" style="POS" />
   </div>
}