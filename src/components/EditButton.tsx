import { EditIcon } from "./Icons"

type EbtnProps = {
    onClick:() => void,//placeholder for actual logout func
    style?: string
}

export const EditButton = ({onClick,style}:EbtnProps) => {
    return(
    <button onClick={onClick} className={style}>
    <EditIcon/>
    </button>)
}