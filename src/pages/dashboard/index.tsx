import { DashboardLayout } from "../../layouts";
import { DashboardSectionOne, DashboardSectionTwo } from "./components";

export default function DashboardPage() {
  const headerPrefix = () => {
    return (
      <div className="flex items-center gap-5">
          <div className="bg-gray-400 rounded-full p-6" />
          <p className="text-black font-semibold text-base">Good Morning Prince</p>
      </div>
    )
  }

  return (
   <DashboardLayout
    headerPrefix={headerPrefix()}
    activeLink="dashboard"
   >
    <div>
      <DashboardSectionOne/>
      <DashboardSectionTwo/>
    </div>
   </DashboardLayout>
  )
}
