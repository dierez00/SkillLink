import { cn } from "clsx-for-tailwind";
import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}
const SimpleCard = ({ title, children, className }: Props) => {
  return (
    <div
      className={cn(
        "w-[310px] min-h-[350px] p-3 bg-white",
        "rounded-2xl ring-1 ring-gray-400",
        className,
      )}
    >
      <h3 className={cn("font-bold text-3xl mb-3")}>{title} </h3>
      {children}
    </div>
  );
};

export default SimpleCard;
