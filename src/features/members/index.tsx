import MembersTable from "@/components/MembersTable"
import ToolBar from "./ToolBar"
import { Modal } from "@/components/Modal"
import { useModalStore } from "./MembersStore"
import { MembersModalContent } from "./ModalContent"
const Members = () => {
    const {isOpen,closeModal} = useModalStore()
    return <div className="ml-[60px]">
    <div className="mt-[44px]">   
    <ToolBar/>
    <div className="overflow-x-auto min-w-0">
  <div className="min-w-[400px] md:table-cell min-w-[1040px]">
    
    <MembersTable />
</div>
  
  
</div>
    
    </div> 
    <Modal isOpen={isOpen} onClose={closeModal}>
        <MembersModalContent/>
    </Modal>
    </div>
}
export default Members

