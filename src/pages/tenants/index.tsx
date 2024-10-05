import { Link } from "react-router-dom";
import images from "../../assets/images";
import { AppTable } from "../../components";
import { DashboardLayout } from "../../layouts";

export default function TenantsPage() {
  const columns: any = [
    {
      title: "Profile Pic",
      key: "profile_pic",
      dataIndex: "profile_pic",
      render: () => <img src={images.tenant} />,
    },
    { title: "Date Created", key: "date_created", dataIndex: 'date_created' },
    { title: "Tenant Name", key: "name", dataIndex: "name" },
    { title: "Tenant Phone Number", key: "phone", dataIndex: "phone" },
    {
      title: "Action",
      key: "action",
      render: () => (
        <button className="bg-primary text-white font-semibold text-sm rounded-xl px-8 py-3">
          Approve Tenant
        </button>
      ),
    },
  ];

  return (
    <DashboardLayout
      activeLink="tenants"
      title="Tenants"
      subTitle="See all your tenants here"
      headerSuffix={(
        <Link
            to='/tenants/add'
            className="bg-primary text-white font-semibold text-sm rounded-xl px-8 py-3"
        >
            VERIFY TENANT
        </Link>
      )}
    >
      <div className="mt-10">
        <AppTable columns={columns} dataSource={data} />
      </div>
    </DashboardLayout>
  );
}

const data: any = [
  {
    profile_pic: images.tenant,
    date_created: "08-01-2024",
    name: "John Doe",
    phone: "0802838294832",
  },
  {
    profile_pic: images.tenant,
    date_created: "08-01-2024",
    name: "John Doe",
    phone: "0802838294832",
  },
  {
    profile_pic: images.tenant,
    date_created: "08-01-2024",
    name: "John Doe",
    phone: "0802838294832",
  },
];
