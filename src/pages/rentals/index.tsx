// import { Empty } from "../../components";
import { DashboardLayout } from "../../layouts";
import { RentalItem } from "./components";

export default function RentalsPage() {
  return (
    <DashboardLayout
        activeLink="rentals"
        title="Rentals"
        subTitle="See full details of all your rentals"
    >
        {/* <Empty/> */}
        <div className="flex flex-col gap-5 w-full mt-10">
          <RentalItem/>
          <RentalItem/>
          <RentalItem/>
          <RentalItem/>
          <RentalItem/>
        </div>
    </DashboardLayout>
  )
}
