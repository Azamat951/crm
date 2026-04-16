import { FilterICon } from "./Icons"

type FilterProps = {
    onClick?: () => void,
    style?: string
}


export const FilterButton = ({onClick,style}: FilterProps) => {
    return <>
        <button className={`flex gap-[10px] text-white py-[10px] px-[30px] bg-[#343743] rounded-[20px] mt-[10px] ${style}`} onClick={onClick}><FilterICon/>  Filter</button>

    </>
}