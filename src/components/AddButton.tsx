import { AddIcon } from "./Icons"
type AddProps = {
    style?: string
    onClick: () => void
}


export const AddButton = ({style,onClick}: AddProps) => {
    return <>
        <button className={`flex gap-[10px] text-white py-[10px] px-[30px] bg-[#343743] rounded-[20px] mt-[10px] ${style}`}
         onClick={onClick} ><AddIcon/>  ADD NEW</button>

    </>
}