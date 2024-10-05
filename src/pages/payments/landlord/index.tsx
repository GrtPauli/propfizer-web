import { useState } from "react"
import LandlordPaymentsTab from "./components/tab"
import BankAccounts from "./components/bank-accounts"

export default function LandlordPaymentsPage() {
    const [current, setCurrent] = useState<'bank-accounts' | 'remittance'>('bank-accounts')

  return (
    <div className="mt-2">
        <button className="bg-primary text-white font-semibold text-sm rounded-xl px-8 py-3">
            View Terms and Conditions
        </button>

        <div className="mt-10">
            <LandlordPaymentsTab
                current={current}
                setCurrent={setCurrent}
            />

            {current == 'bank-accounts' && <BankAccounts/>}
        </div>
    </div>
  )
}
