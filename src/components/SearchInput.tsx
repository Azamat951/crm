
import { SearchIcon } from "./Icons";

type InputProps = {
  value: string,
  onChange: (value: string) => void
}

export const SearchInput = ({value,onChange}: InputProps) => {
  return (
    <div className="flex items-center gap-2 rounded-lg px-3 py-2 w-full max-w-sm bg-[#343743] sm:w-[300px]">
      <SearchIcon />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search members..."
        className="outline-none w-full placeholder-[#ccc90] text-[#fff] "
      />
    </div>
  );
};
