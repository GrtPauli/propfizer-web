import images from "../../../assets/images";

export default function DashboardSectionOne() {
  return (
    <div className="grid grid-cols-5 gap-3 mt-5">
        <div className="col-span-3 flex justify-between items-center bg-primary text-white rounded-2xl">
            <div className="pl-10">
                <p className="font-semibold mb-5">Discover a wide range of rental properties tailored to your needs.</p>
                <button className="bg-white text-primary rounded-xl px-8 py-3 text-sm font-semibold">
                    Rent Now 
                </button>
            </div>

            <img src={images.dashboard.dashboard_h1} className="w-[50%]"/>
        </div>  

        <div className="col-span-2 flex gap-3">
            <div className="bg-primary w-full text-white p-5 rounded-2xl flex flex-col items-start gap-3">
                <p className="font-semibold">Maintenance <br/>Requests</p>
                <p className="font-semibold text-3xl">0</p>
                <button className="bg-white text-primary rounded-xl px-8 py-3 text-sm font-semibold">
                    See All 
                </button>
            </div> 

            <div className="bg-secondary w-full text-white p-5 rounded-2xl flex flex-col items-start gap-3">
                <p className="font-semibold">Active <br/>Subscriptions</p>
                <p className="font-semibold text-3xl">0</p>
                <button className="bg-white text-primary rounded-xl px-8 py-3 text-sm font-semibold">
                    See All 
                </button>
            </div> 
        </div>
    </div>
  )
}
