import { useState } from "react";
import { DashboardLayout } from "../../layouts";
import GetStarted from "./components/get-started";
import { AppTable } from "../../components";

export default function MyListingsPage() {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const columns: any = [
    { title: "SPACE NAME", key: "space_name" },
    { title: "SPACE TYPE", key: "space_type" },
    { title: "LOCATION", key: "location" },
    { title: "STATUS", key: "status" },
    { title: "ACTION", key: "action" },
  ];

  return (
    <DashboardLayout
      title="List a space"
      subTitle="Effortlessly list your properties."
      activeLink="my-listings"
      headerSuffix={
        <>
          {!showGetStarted && (
            <button
              onClick={() => setShowGetStarted(true)}
              className="bg-primary text-white font-semibold text-sm rounded-xl px-8 py-3"
            >
              LIST SPACE
            </button>
          )}
        </>
      }
    >
      <>
        {showGetStarted ? (
          <GetStarted />
        ) : (
          <div className="mt-10">
            <AppTable columns={columns} />
          </div>
        )}
      </>
    </DashboardLayout>
  );
}
