import images from "../../../assets/images";
import { MainLayout } from "../../../layouts";

export default function PropertyDetailPage() {
  return (
    <MainLayout>
      <div className="p-10 text-primary pb-0">
        <div className="grid grid-cols-3 gap-8">
          <img src={images.detail_h2} className="col-span-2" />
          <div className="flex flex-col gap-8 h-full">
            <img
              src={images.dashboard.dashboard_h2}
              className="h-full object-cover rounded-2xl"
            />
            <img
              src={images.dashboard.dashboard_h2}
              className="h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 my-10">
          <div className="col-span-2 px-5">
            <p className="text-2xl font-bold">Property Name</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.875C6.89453 1.875 4.375 4.27305 4.375 7.22656C4.375 10.625 8.125 16.0105 9.50195 17.8707C9.55911 17.9492 9.63402 18.0131 9.72058 18.0572C9.80713 18.1012 9.90288 18.1242 10 18.1242C10.0971 18.1242 10.1929 18.1012 10.2794 18.0572C10.366 18.0131 10.4409 17.9492 10.498 17.8707C11.875 16.0113 15.625 10.6277 15.625 7.22656C15.625 4.27305 13.1055 1.875 10 1.875Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 9.375C11.0355 9.375 11.875 8.53553 11.875 7.5C11.875 6.46447 11.0355 5.625 10 5.625C8.96447 5.625 8.125 6.46447 8.125 7.5C8.125 8.53553 8.96447 9.375 10 9.375Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Lekki Abuja</p>
              </div>

              <p>4 bed(s) - 3 bath(s)</p>
            </div>
            <p className="leading-loose text-sm mt-3">A 3 bedroom shared apartment with a detached guest suite (BQ) in a gated estate in the heart of Lekki phase one. It comes with a 24hours power supply, 24/7 security, waste disposal, and cleaning once a week. This apartment is in close proximity to malls, and cinemas, and has easy access to admiralty way and Lekki-Epe expressway. The estate has its own, swimming pool, tennis court, and supermarket.</p>
          </div>

          <div className="px-5">
            <div>
              <p className="text-sm">Rent price</p>
              <p className="text-2xl font-semibold">N 500,000</p>
            </div>

            <div className="mt-3"> 
              <p className="text-sm">DURATION</p>
              <p className="text-2xl font-semibold">MONTHLY</p>
            </div>

            <div className="mt-3 text-sm flex flex-col gap-3">
              <p>Requirement</p>
              <div className="flex justify-between">
                <p>Service Charge:</p>
                <p>N150,000</p>
              </div>
              <div className="flex justify-between">
                <p>Security Charge:</p>
                <p>N110,000</p>
              </div>
              <div className="flex justify-between">
                <p>Discount</p>
                <p>N0</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-3">
              <button className="bg-primary text-white font-semibold w-full py-3 px-5 rounded-lg">
              RENT NOW PAY LATER
              </button>
              <button className="border-primary border text-primary font-semibold w-full py-3 px-5 rounded-lg">
              BOOK SPACE
              </button>
              <button className="border-primary border text-primary font-semibold w-full py-3 px-5 rounded-lg">
              BOOK VIEWING
              </button>
              <button className="border-primary border text-primary font-semibold w-full py-3 px-5 rounded-lg">
              Not what you are looking for ??
              </button>
            </div>
          </div>
        </div>

        <img src={images.map}/>
      </div>
    </MainLayout>
  );
}
