import { useMembersStore } from "./MembersStore";
import { useModalStore } from "./MembersStore";
import type {Member} from "./MembersStore"

export const useMemberModal = () => {
  const { setMode, setSelectedMember } = useMembersStore();
  const { openModal, closeModal } = useModalStore();

  const openAddModal = () => {
    setMode("add");
    setSelectedMember(null);
    openModal();
  };

  const openEditModal = (member: Member) => {
    setMode("edit");
    setSelectedMember(member);
    openModal();
  };

  return {
    openAddModal,
    openEditModal,
    closeModal,
  };
};