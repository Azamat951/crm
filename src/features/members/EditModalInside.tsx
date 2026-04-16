import { useEffect, useState } from "react";
import { useMembersStore } from "./MembersStore";
import { useModalStore } from "./MembersStore";
import { MemberIcon, PhoneIcon } from "@/components/Icons";

export const EditMemberForm = () => {
  const { editMember, selectedMember } = useMembersStore();
  const { closeModal } = useModalStore();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Fill inputs when editing
  useEffect(() => {
    if (selectedMember) {
      setName(selectedMember.name);
      setPhone(selectedMember.phone);
    }
  }, [selectedMember]);

  const handleSubmit = () => {
    if (!selectedMember) return;

    if (!name.trim() || !phone.trim()) {
      alert("Please fill in all required fields!");
      return;
    }

    editMember({
      ...selectedMember,
      name,
      phone,
    });

    closeModal();
  };

  return (
    <div className="flex flex-col gap-3 p-[15px]">
      <h1 className="font-bold text-white text-[22px] text-center mb-[20px]">
        EDIT MEMBER
      </h1>

      <div className="flex gap-10">
        <div className="flex items-center gap-2 rounded-[20px] px-3 py-2 w-full max-w-sm bg-[#272A30]">
          <MemberIcon />
          <input
            className="outline-none w-full placeholder-[#ccc90] text-[#fff]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div className="flex items-center gap-2 rounded-[20px] px-3 py-2 w-full max-w-sm bg-[#272A30]">
          <PhoneIcon />
          <input
            className="outline-none w-full placeholder-[#ccc90] text-[#fff]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
        </div>
      </div>

      <div className="flex gap-[36px] items-center absolute right-[60px] bottom-[36px]">
        <button onClick={closeModal} className="font-bold text-white">
          CANCEL
        </button>

        <button
          onClick={handleSubmit}
          className="bg-[#9B74F0] font-bold text-white py-[10px] px-[30px] rounded-[25px]"
        >
          SAVE
        </button>
      </div>
    </div>
  );
};