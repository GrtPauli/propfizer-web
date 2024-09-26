import { Empty } from "../../components";
import { DashboardLayout } from "../../layouts";

export default function RentalsPage() {
  return (
    <DashboardLayout
        activeLink="rentals"
        title="Rentals"
        subTitle="See full details of all your rentals"
    >
        <Empty/>
    </DashboardLayout>
  )
}
