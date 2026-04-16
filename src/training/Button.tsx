import { NavLink } from "react-router-dom";

type IconColor = "default" | "active" | "white";

const iconColors: Record<IconColor, string> = {
  default: "#9B74F0",
  active: "#000",
  white: "#FFFFFF",
};

type ButtonProps = {
  text: string;
  onClick?: () => void;
  style?: string;
  icon?: React.ReactNode;
  iconColor?: IconColor;
  to?: string; // 👈 ADD THIS
};

export const Button = ({
  text,
  onClick,
  style = "",
  icon,
  iconColor = "default",
  to,
}: ButtonProps) => {
  const baseClass = `flex items-center gap-2 rounded-lg p-[11px] ${style}`;

  // 👉 IF "to" EXISTS → act as NavLink
  if (to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${baseClass} ${isActive ? "bg-gray-200" : ""}`
        }
      >
        {icon && (
          <span style={{ color: iconColors[iconColor] }}>
            {icon}
          </span>
        )}
        <span>{text}</span>
      </NavLink>
    );
  }

  // 👉 OTHERWISE → normal button
  return (
    <button className={baseClass} onClick={onClick}>
      {icon && (
        <span style={{ color: iconColors[iconColor] }}>
          {icon}
        </span>
      )}
      <span>{text}</span>
    </button>
  );
};