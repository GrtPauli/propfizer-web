import images from "../../../assets/images";
import { DetailsLayout } from "../../../layouts";

export default function RentalDetailPage() {
  return (
    <DetailsLayout backLink="/rentals">
      <div className="h-full">
        <div className="relative">
          <img src={images.detail_h1} />
          <div className="bg-white text-primary text-2xl font-bold rounded-lg py-3 px-8 absolute bottom-10 left-10">
            Property Overview
          </div>
        </div>

        <div className="grid grid-cols-2 text-primary mt-10 px-5">
          <div className="flex flex-col items-center justify-center gap-3 place-self-start">
            <p className="font-semibold text-xl">Property Owner Details</p>
            <div className="bg-gray-300 h-[100px] w-[100px] rounded-xl" />
            <p className="font-semibold text-sm">Owner Name</p>
            <p className="text-xs">(Owner)</p>
            <div className="w-[180px] mt-3">
              <button className="mb-2 bg-primary text-white rounded-lg font-semibold text-sm px-8 w-full text-center py-3">
                Call
              </button>
              <button className="border-primary border text-primary rounded-lg font-semibold text-sm px-8 w-full text-center py-3">
                Message
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-xl mb-3">Property Details</p>
            <div className="flex w-full justify-between text-xs">
              <div>
                <p className="font-semibold text-sm mb-1">Property Name</p>
                <p>Property Location</p>
              </div>

              <div className="flex flex-col items-end">
                <p className="font-semibold text-sm mb-1">Rent Price</p>
                <p>Date of Expiration</p>
              </div>
            </div>
          </div>
        </div>

        <img className="mt-20" src={images.map}/>
      </div>
    </DetailsLayout>
  );
}
