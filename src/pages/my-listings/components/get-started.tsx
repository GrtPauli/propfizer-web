import { Link } from "react-router-dom";
import images from "../../../assets/images";

export default function GetStarted() {
  return (
    <div className="mt-10">
        <img src={images.get_started}/>

        <div className="mt-10 grid grid-cols-2 gap-10 font-semibold text-primary px-5">
            <div>
                <p>Please make sure you have the following in your space to be eligible for approval</p>
                <ul className="list-disc pl-10 mt-5 flex flex-col gap-2">
                    <li>Minimum of 12 hours power supply</li>
                    <li>24-hour security</li>
                    <li>Stand by Facility Manager/On-Call Security Guard</li>
                    <li>Treated water and waste disposal</li>
                </ul>
            </div>
            
            <div className="flex items-center justify-center">
                <Link to='/my-listings/create' className="bg-primary text-white w-full text-center font-semibold text-sm rounded-xl px-8 py-3">
                    GET STARTED
                </Link>
            </div>
        </div>
    </div>
  )
}
