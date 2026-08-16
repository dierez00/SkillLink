import { cn } from "clsx-for-tailwind";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
const MainWidth = ({ children, className }: Props) => {
  return (
    <div className={cn("max-w-[1030px] h-full px-[15px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default MainWidth;
