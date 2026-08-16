import { cn } from "clsx-for-tailwind";
import Button from "../../ui/Button";
import MainWidth from "../../ui/MainWidth";

const Header = () => {
  return (
    <header 
      className={cn(
        "bg-[#65CEEB] h-[100px] shadow-[0_3px_5px_gray]",
        "max-[290px]:h-[150px]",
      )}
    >
      <MainWidth
        className={cn(
          "flex justify-between items-center flex-wrap",
          "max-[363px]:justify-center",
          "h-full",
        )}
      >
        <h1 className={cn("text-3xl text-white font-bold select-none")}>
          Logo
        </h1>
        <div className={cn("flex gap-4 flex-wrap justify-center")}>
          <Button>Iniciar sesión</Button>
          <Button style="secondary">Crear cuenta</Button>
        </div>
      </MainWidth>
    </header>
  );
};

export default Header;
