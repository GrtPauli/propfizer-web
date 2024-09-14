import { MainLayout } from "../../layouts";
import { AboutSection2, AboutUsHero, AboutUsValuesSection } from "./components";

export default function AboutUsPage() {
  return (
    <MainLayout>
        <div>
            <AboutUsHero/>
            <AboutSection2/>
            <AboutUsValuesSection/>
        </div>
    </MainLayout>
  )
}
