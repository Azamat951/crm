import { EditIcon } from "./Icons"

type EbtnProps = {
    onClick:() => void,
    style?: string
}

export const EditButton = ({onClick,style}:EbtnProps) => {
    return(
    <button onClick={onClick} className={style}>
    <EditIcon/>
    </button>)
}