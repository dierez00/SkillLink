import { cn } from "clsx-for-tailwind";
import education from "../../assets/images/Educación.png";
import Banner from "../ui/Banner";
import MainWidth from "../ui/MainWidth";
import SimpleCard from "../ui/SimpleCard";

const Main = () => {
  return (
    <main className={cn("py-24")}>
      <Banner />
      <div className={cn("relative ")}>
        <img
          className={cn("mt-20 absolute top-1 -z-10")}
          src={education}
          alt="Un grupo de personas estudiando"
        />
      </div>
      <MainWidth
        className={cn(
          "flex justify-between flex-wrap gap-6",
          "mt-[750px] max-[1100px]:mt-[500px] max-[1100px]:justify-center",
          "max-[660px]:mt-[310px]",
        )}
      >
        <SimpleCard title="Misión">
          <p className={cn("text-[20px]")}>
            Nuestra misión es conectar personas a través del saber, facilitando
            un espacio donde compartir y aprender de forma accesible y
            colaborativa.
          </p>
        </SimpleCard>

        <SimpleCard title="Visión">
          <p className={cn("text-[20px]")}>
            Ser la plataforma referente para el intercambio de conocimientos,
            reconocida por su diversidad, calidad y el impacto positivo en el
            aprendizaje de nuestros usuarios.{" "}
          </p>
        </SimpleCard>

        <SimpleCard title="Nosotros">
          <p className={cn("text-[20px]")}>
            En “jedi”, creemos que compartir conocimiento nos hace crecer.
            Creamos un lugar donde puedes aprender de otros y enseñar lo que
            sabes, impulsando el aprendizaje mutuo en un ambiente de
            respeto.{" "}
          </p>
        </SimpleCard>
      </MainWidth>
    </main>
  );
};

export default Main;
