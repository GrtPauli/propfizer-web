const data = [
  { title: "Wallet", key: "wallet" },
  { title: "Payment History", key: "payment-history" },
];

export default function PaymentsTab({ current, setCurrent }: any) {
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
