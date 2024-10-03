import images from "../../assets/images";
import { DetailsLayout } from "../../layouts";
import { PropertyItem } from "../dashboard/components";

export default function PropertyListingPage() {
  return (
    <DetailsLayout
      backLink="/dashboard"
    >
      <div>
        <div>
          <img src={images.map}/>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-20">
          <PropertyItem/>
          <PropertyItem/>
          <PropertyItem/>
          <PropertyItem/>
          <PropertyItem/>
          <PropertyItem/>
          <PropertyItem/>
          <PropertyItem/>
          <PropertyItem/>
        </div>
      </div>
    </DetailsLayout>
  )
}
