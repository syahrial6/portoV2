import AboutMe from "@/components/AboutMe";
import CardSkill from "@/components/CardSkill";
import Hero from "@/components/Hero";
import Hubungi from "@/components/Hubungi";
import Navbar from "@/components/Navbar";
import Portofolio from "@/components/Portofolio";

export default function Home() {
  return (
    <div className="container bg-custom-radial h-full">
      <Navbar />
      <div className="container w-[80vw] m-auto relative ">
        <Hero />
        <div>
          <AboutMe />
        </div>
        <Portofolio />
      </div>

      <div className="py-24">
        <Hubungi />
      </div>
    </div>
  );
}
