import AboutMe from "@/components/AboutMe";
import CardSkill from "@/components/CardSkill";
import Certificate from "@/components/Certificate";
import Hero from "@/components/Hero";
import Hubungi from "@/components/Hubungi";
import Navbar from "@/components/Navbar";
import Portofolio from "@/components/Portofolio";

export default function Home() {
  return (
    <div className="container bg-custom-radial h-full">
      <div className="container sticky top-0 z-50">
      <Navbar />
      </div>
      <div className="container w-[80vw] m-auto relative ">
        <Hero />
        <div className="container lg:mt-0 mt-96">
          <AboutMe />
        </div>
        <Portofolio />
        <div className="container mt-36">
        <Certificate/>
        </div>
      </div>
      
      <div className="py-24">
        <Hubungi />
      </div>
    </div>
  );
}
