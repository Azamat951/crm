import { LogOutIcon } from "./Icons"

type LbtnProps = {
    onClick:() => void,//placeholder for actual logout func
    style?: string
}

export const LogOutButton = ({onClick,style}:LbtnProps) => {
    return(
    <button onClick={onClick} className={style}>
    <LogOutIcon/>
    </button>)
}