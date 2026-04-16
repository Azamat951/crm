
import { Button } from "./Button"
import { useStore } from "./Zustand"




type CardProps = {
    img: string,
    title: string,
    brand: string,
    quality: string,
}

export const Card = ({img,title,brand,quality}:CardProps) =>{
    const styles:{[keys: string]: string} = {
    
    img: "placeholder style for img",
    title: "placeholder style for title",
    brand: "placeholder",
    quality: "placeholder",
    container: "AHHH BUGS"
    
}


    const { ProductInCart, increase } = useStore()
    return <div className={styles.container}>
        <div className={styles.img}>
            <img src={img} alt="" />
        </div>
        
        <p className={styles.title}>{title}</p>
        <p className={styles.brand}>{brand}</p>
        <p className={styles.quality}>{quality}</p>
        <Button text="Add to cart" onClick={increase} style="menu"/>
        <p>in your cart you have: {ProductInCart}</p>
     </div>
}