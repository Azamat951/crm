type ModalProps = {
 isOpen: boolean,
 onClose: () => void,
 children: React.ReactNode;
}


export const Modal = ({isOpen,onClose,children}:ModalProps) => {
    if(!isOpen) return null;
    return <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-[#343743] rounded-md w-[825px] h-[350px] relative" onClick={(e) => e.stopPropagation()}>
        <div>{children}</div>
      </div>
    </div>
}