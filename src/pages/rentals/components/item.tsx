import { Link } from "react-router-dom";
import images from "../../../assets/images";

export default function RentalItem() {
  return (
    <Link to='/rentals/9438' className="w-full border hover:bg-primary/10 duration-100 ease-in cursor-pointer text-primary border-primary p-10 rounded-xl flex justify-between items-center">
      <div className="flex items-center gap-10">
        <img src={images.dashboard.dashboard_h2} className="max-w-[300px]" />

        <div>
          <p className="font-bold text-xl">Property Name</p>
          <p>Property Location</p>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <p className="font-bold text-xl">Rent Price</p>
        <p>Date of Expiration</p>
      </div>
    </Link>
  );
}
