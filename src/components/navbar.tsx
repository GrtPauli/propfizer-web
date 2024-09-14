import images from "../assets/images";

export default function Navbar() {
  return (
    <div className="flex bg-white justify-between items-center px-10 py-4">
        <div>
            <img src={images.logo}/>
        </div>

        <button className="bg-primary text-white rounded-full px-5 py-2.5 text-sm font-semibold">
            Login 
        </button>
    </div>
  )
}
