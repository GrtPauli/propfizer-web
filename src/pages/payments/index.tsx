import { useState } from "react";
import { DashboardLayout } from "../../layouts";
import { PaymentsTab, Wallet } from "./components";

export default function PaymentsPage() {
    const [current, setCurrent] = useState<'wallet' | 'payment-history'>('wallet')
  return (
    <DashboardLayout
        activeLink="payments"
        title="Payments"
        subTitle="Manage payments on PropFizer"
    >
        <div className="mt-10">
            <PaymentsTab
                current={current}
                setCurrent={setCurrent}
            />

            {current == 'wallet' && <Wallet/>}
        </div>
    </DashboardLayout>
  )
}
