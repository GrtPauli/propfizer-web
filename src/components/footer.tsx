import images from "../assets/images";

export default function Footer() {
  return (
    <div className="bg-white px-10 py-10">
        <div className="bg-primary p-10 rounded-xl">
            <div className="flex justify-center items-center gap-3 mb-10">
                <h2 className="text-white font-black text-3xl">Subscribe for property updates</h2>
            </div>

            <div className="flex gap-10">
                <div className="w-[30%]">
                    <img src={images.logo_white}/>
                    <p className="text-white font-light text-sm leading-loose mt-3">PropFizer envisions a future where rental management in Nigeria is both efficient and affordable for landlords and tenants. Our services make it easy to find apartments with monthly payment options, conduct tenant verification, request facility management for your property, and apply for rental loans. How can we assist you today?</p>
                </div>

                <div className="grid grid-cols-3 gap-10 w-[70%]">
                    <div className="flex flex-col gap-5 items-start text-start">
                        <h2 className="font-bold text-white text-sm">WHY PROPFIZER</h2>
                        <h2 className="font-light text-white text-sm">Rent a Home</h2>
                        <h2 className="font-light text-white text-sm">List Your Space for Free</h2>
                        <h2 className="font-light text-white text-sm">Tenant Verification</h2>
                        <h2 className="font-light text-white text-sm">Rent Now Pay Later</h2>
                    </div>

                    <div className="flex flex-col gap-5 items-start text-start">
                        <h2 className="font-bold text-white text-sm">WHY PROPFIZER</h2>
                        <h2 className="font-light text-white text-sm">Rent a Home</h2>
                        <h2 className="font-light text-white text-sm">List Your Space for Free</h2>
                        <h2 className="font-light text-white text-sm">Tenant Verification</h2>
                        <h2 className="font-light text-white text-sm">Rent Now Pay Later</h2>
                    </div>

                    <div className="flex flex-col gap-5 items-start text-start">
                        <h2 className="font-bold text-white text-sm">WHY PROPFIZER</h2>
                        <h2 className="font-light text-white text-sm">Rent a Home</h2>
                        <h2 className="font-light text-white text-sm">List Your Space for Free</h2>
                        <h2 className="font-light text-white text-sm">Tenant Verification</h2>
                        <h2 className="font-light text-white text-sm">Rent Now Pay Later</h2>
                    </div>
                </div>
            </div>  

            <div className="border-t border-white w-full pt-3 flex justify-between mt-10 text-white text-sm font-light">
                <p>Term and Conditions</p>
                <p>PropFizer Inc, 2024</p>
                <p>Designed and Developed by Solutech</p>
            </div>
        </div>
    </div>
  )
}
