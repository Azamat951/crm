import { DelIcon } from "./Icons"

type DbtnProps = {
    onClick:() => void,//placeholder for actual logout func
    style?: string
}

export const DeleteButton = ({onClick,style}:DbtnProps) => {
    
    return(
    <button onClick={onClick} className={style}>
    <DelIcon/>
    </button>)
}