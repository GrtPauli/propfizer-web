import images from "../../../assets/images";
import { DetailsLayout } from "../../../layouts";

export default function CreateListingPage() {
  return (
    <DetailsLayout
        backLink="/my-listings"
    >
        <div className="relative">
          <img src={images.get_started} className="w-full h-auto object-cover object-center" />
          <div className="bg-white text-primary text-2xl font-bold rounded-lg py-3 px-5 w-[400px] absolute bottom-10 left-10">
            List a space
            <p className="text-sm mt-">Effortlessly list your properties.</p>
          </div>
        </div>
    </DetailsLayout>
  )
}
