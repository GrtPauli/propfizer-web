export default function Wallet() {
  return (
    <div className="mt-10">
        <div className="w-full rounded-lg bg-primary text-white p-10 flex justify-between items-center">
            <div className="flex flex-col items-start gap-3">
                <h2 className="text-2xl font-bold">Hi, John Doe</h2>
                <button className="bg-white rounded-lg w-full h-[50px] font-semibold text-primary items-center justify-center flex">
                    Fund Wallet
                </button>
            </div>

            <div className="flex flex-col items-end text-sm gap-2">
                <p>(Tenant)</p>
                <p className="text-xl font-bold">N1,000,000</p>
                <p>Wallet Balance</p>
            </div>
        </div>

        <div className="text-primary mt-10">
            <p className="text-2xl font-semibold">Service</p>
            <div className="grid grid-cols-3 gap-5 mt-5">
                <ServiceItem
                    title="Airtime"
                    content="Top up your mobile airtime instantly! Stay connected with our fast and secure airtime service, offering convenient and seamless recharges for all major networks."
                />
                <ServiceItem
                    title="Data"
                    content="Get your data bundles instantly! Enjoy fast, reliable, and affordable data top-ups for all major networks."
                />
                <ServiceItem
                    title="Cable TV"
                    content="Instantly renew your cable TV subscription with ease. Stay connected to your favorite shows with quick and reliable service for all major providers."
                />
                <ServiceItem
                    title="Electricity"
                    content="Recharge your electricity meter instantly. Enjoy quick, secure, and reliable top-ups for uninterrupted power."
                />
                <ServiceItem
                    title="Service Charge"
                    content="Pay your service charge effortlessly. Quick and secure payments to keep your utilities running smoothly."
                />
                <ServiceItem
                    title="Security Charge"
                    content="Security charges ensure the protection of property, people, or services, and are often non-negotiable."
                />
            </div>
        </div>
    </div>
  )
}

const ServiceItem = ({ title, content }: any) => {
    return (
        <div className="border-primary border rounded-2xl p-5 w-full flex flex-col justify-between">
            <div>
                <p className="font-semibold text-xl mb-3">{title}</p>
                <p className="text-sm leading-loose font-medium">{content}</p>
            </div>
           <div className="flex justify-end mt-5 font-semibold">
                <button className="py-2.5 px-8 text-white bg-primary rounded-xl">
                Purchase
                </button>
            </div>  
        </div>
    )
}