import { create } from "zustand";


//Button store
type Store = {
  ProductInCart: number;
  increase: () => void;
};

export const useStore = create<Store>((set)=>(
    {
        ProductInCart:0,
        increase: () => set((state) => ({ ProductInCart: state.ProductInCart + 1 })),
    }
))


// Modal state
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