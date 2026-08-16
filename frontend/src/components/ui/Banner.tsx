import { cn } from "clsx-for-tailwind";
import Button from "./Button";
import MainWidth from "./MainWidth";

const Banner = () => {
  return (
    <article className={cn("text-center")}>
      <MainWidth className={cn("px-8")}>
        <h2
          className={cn(
            "text-[65px] font-bold text-center leading-[80px]",
            "max-[720px]:text-[35px] max-[720px]:leading-[45px]",
          )}
        >
          Donde las <span className={cn("text-blue-400")}>habilidades</span>{" "}
          Encuentran <span className={cn("text-yellow-400")}>proyectos</span>
        </h2>
      </MainWidth>
      <MainWidth className={cn("mt-8")}>
        <p className={cn("text-[22px] text-center", "max-[720px]:text-[18px]")}>
          Únete a una comunidad de creadores, mentores y aprendices. Conecta con
          personas que comparten tus ineteréses y colabora en proyectos
          innovadores y lleva tus habilidades al siguiente nivel.
        </p>
        <Button
          style="tertiary"
          className={cn("h-[46px] text-[25px] px-5 mt-8")}
        >
          Comenzar
        </Button>
      </MainWidth>
    </article>
  );
};

export default Banner;
