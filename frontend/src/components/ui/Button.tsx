import { cn } from "clsx-for-tailwind";
import type { ReactNode } from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  style?: "primary" | "secondary" | "tertiary";
  className?: string;
  onClick?: () => void;
}
const Button = ({
  type = "button",
  children,
  style = "primary",
  onClick = () => {
    alert("Botón aún no implementado");
  },

  className,
}: Props) => {
  return (
    <button
      className={cn(
        "h-[35px] px-2 rounded-[10px]",
        "font-bold select-none text-nowrap",
        "shadow-xl transition",
        "hover:text-sky-600 hover:-translate-y-0.5",
        style === "primary" &&
          "text-[#474747] bg-white border-[1px] border-[#474747]",
        style === "secondary" && "bg-[#474747] text-white",
        style === "tertiary" && "bg-black text-white ",
        className,
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
