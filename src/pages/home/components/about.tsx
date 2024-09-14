import images from "../../../assets/images";

export default function HomeAboutSection() {
  return (
    <div className="bg-primary px-10 py-28 flex justify-between items-center gap-10">
    <img src={images.home.home_about_us} className="w-[50%]" />

    <div className="flex flex-col w-[50%] items-start">
      <h2 className="text-[#C6EEFF] font-bold text-3xl mb-3">About Us</h2>
      <p className="text-white font-light text-sm leading-loose mb-5">
        We are full service real estate agancy dedicated to helping you
        achieve your real estate goals. Wheather you are looking to buy,
        sell or rent a property, we have the experience and expertise to
        guide you through every step of the process.
      </p>
      <button className="bg-[#2AA8DD] text-white rounded-full px-5 py-2.5 text-sm font-semibold">
        Contact Us
      </button>
    </div>
  </div>
  )
}
