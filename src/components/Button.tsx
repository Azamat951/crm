    const styles: {[key: string]:string} = {
    menu: "bg-[#9B74F0] hover:bg-[#9B74F080] transition duration-600 px-4 py-1 rounded-xl text-white",
    control: "bg-transparent"
    }

    type ButtonProps = {
        text: string;
        onClick?: () => void;
        style: string
    }

    export const Button = ({text,onClick,style}: ButtonProps) => {
        return <button onClick={onClick} className={styles[style]}>{text}</button>
    }