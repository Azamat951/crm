
import { create } from "zustand";

export type Member = {
  id: number;
  name: string;
  phone: string;
  status: string;
  type: string;
  expire: string;
};

type MembersState = {
  members: Member[];

  // search
  search: string;
  setSearch: (value: string) => void;

  // edit/add system
  selectedMember: Member | null;
  mode: "add" | "edit" | null;

  setMode: (mode: "add" | "edit" | null) => void;
  setSelectedMember: (member: Member | null) => void;

  addMember: (member: Member) => void;
  editMember: (member: Member) => void;
  deleteMember: (id: number) => void;

  openMemberId: number | null;
  setMemberId: (id: number) => void
};

export const useMembersStore = create<MembersState>((set) => ({
  members: [],

  
  search: "",
  setSearch: (value) => set({ search: value }),
  
  openMemberId: null,
  setMemberId: (id) =>
  set((state) => ({
    openMemberId: state.openMemberId === id ? null : id,
  })),
  
  selectedMember: null,
  mode: null,

  setMode: (mode) => set({ mode }),
  setSelectedMember: (member) => set({ selectedMember: member }),

  
  addMember: (member) =>
    set((state) => ({
      members: [...state.members, member],
    })),

  editMember: (updated) =>
    set((state) => ({
      members: state.members.map((m) =>
        m.id === updated.id ? updated : m
      ),
    })),

  deleteMember: (id) =>
    set((state) => ({
      members: state.members.filter((m) => m.id !== id),
    })),
}));



type ModalState = {
  isOpen: boolean,
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));