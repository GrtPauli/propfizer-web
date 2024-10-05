import { useState } from "react";
import { DashboardLayout } from "../../../layouts";
import { Empty } from "../../../components";
import AddTenantForm from "./components/form";

export default function VerifyTenantPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      {showForm ? (
        <AddTenantForm
          onDismiss={() => setShowForm(false)}
        />
      ) : (
        <DashboardLayout
          activeLink="add-tenant"
          title="ADD TENANTS"
          subTitle="See all your tenants here"
        >
          <>
            {!showForm && (
              <Empty
                title="It looks like you haven’t made any verifications requests yet. Create a verification request now to get started."
                suffix={(
                  <button onClick={() => setShowForm(true)} className="bg-primary mt-3 text-white font-semibold text-sm rounded-xl px-8 py-3">
                    VERIFY TENANT
                  </button>
                )}
              />
            )}
          </>
        </DashboardLayout>
      )}    
    </>
  )
}
