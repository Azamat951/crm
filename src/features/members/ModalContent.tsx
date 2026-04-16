import { useMembersStore } from "./MembersStore";

import { AddMemberForm } from "./AddModalInside";
import { EditMemberForm } from "./EditModalInside";

export const MembersModalContent = () => {
  const { mode } = useMembersStore();

  if (mode === "add") return <AddMemberForm />;
  if (mode === "edit") return <EditMemberForm />;

  return null;
};