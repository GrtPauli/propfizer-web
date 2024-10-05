import { useEffect, useState } from "react";
import { DashboardLayout } from "../../layouts";
import { PaymentsTab, Wallet } from "./components";
import LandlordPaymentsPage from "./landlord";

export default function PaymentsPage() {
    const [current, setCurrent] = useState<'wallet' | 'payment-history'>('wallet')
    const [userType, setUserType] = useState<'tenant' | 'landlord'>('landlord')
    useEffect(() => {
      setUserType('tenant')
    }, [])

  return (
    <DashboardLayout
        activeLink="payments"
        title="Payments"
        subTitle="Manage payments on PropFizer"
    >
        {userType == 'landlord' ? (
            <LandlordPaymentsPage/>
        ) : (
            <div className="mt-10">
                <PaymentsTab
                    current={current}
                    setCurrent={setCurrent}
                />

                {current == 'wallet' && <Wallet/>}
            </div>
        )}
    </DashboardLayout>
  )
}
