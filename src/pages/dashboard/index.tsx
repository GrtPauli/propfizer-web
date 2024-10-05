import { useEffect, useState } from "react";
import { DashboardLayout } from "../../layouts";
import { DashboardSectionOne, DashboardSectionTwo } from "./components";

export default function DashboardPage() {
  const [userType, setUserType] = useState<'tenant' | 'landlord'>('landlord')
  useEffect(() => {
    setUserType('tenant')
  }, [])

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
      <DashboardSectionOne userType={userType}/>
      <DashboardSectionTwo userType={userType}/>
    </div>
   </DashboardLayout>
  )
}
