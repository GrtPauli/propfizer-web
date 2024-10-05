const data = [
  { title: "Bank Accounts", key: "bank-accounts" },
  { title: "Remittance", key: "remittance" },
];

export default function LandlordPaymentsTab({ current, setCurrent }: any) {
  return (
    <div className="flex gap-5">
      {data?.map((item) => (
        <div
          onClick={() => setCurrent(item?.key)}
          key={item?.key}
          className={`font-bold text-xl text-center px-10 pb-3 ${
            current == item?.key
              ? "text-primary border-b-2 border-b-primary"
              : "text-[#6BBADC]"
          }`}
        >
          <p>{item?.title}</p>
        </div>
      ))}
    </div>
  );
}
