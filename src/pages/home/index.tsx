import { MainLayout } from "../../layouts";
import { HomeAboutSection, HomeHero, HomeSection3 } from "./components";

export default function HomePage() {
  return (
    <MainLayout>
      <div>
        <HomeHero/>
        <HomeAboutSection/>
        <HomeSection3/>
      </div>
    </MainLayout>
  );
}
