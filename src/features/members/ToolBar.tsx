import { AddButton } from "@/components/AddButton"
import { FilterButton } from "@/components/FilterButton"
import { SearchInput } from "@/components/SearchInput"
import { useMembersStore} from "./MembersStore";
import { useMemberModal } from "./UseMemberModal";
const ToolBar = () => {
  const { search, setSearch } = useMembersStore();
  const { openAddModal } = useMemberModal()
    return (
    <div className="flex flex-wrap items-center gap-3 w-full mb-[26px]">

  <SearchInput value={search} onChange={setSearch}/>

  <div className="flex gap-2">
    <FilterButton />
    <AddButton onClick={() => openAddModal()}/>
  </div>

</div>
    )
}

export default ToolBar