import PropertyItem from "./property";

export default function DashboardSectionTwo() {
  return (
    <div className="mt-10">
        <div className="flex justify-between items-center">
            <div className="text-primary font-semibold">
                <h2 className="text-2xl">Explore Listings</h2>
                <p className="text-sm">Search for properties and spaces you may like</p>
            </div>

            <button className="bg-primary text-white rounded-xl px-8 py-3 text-sm font-semibold">
                Browse
            </button>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-5">
            <PropertyItem/>
            <PropertyItem/>
            <PropertyItem/>
            <PropertyItem/>
        </div>
    </div>
  )
}
