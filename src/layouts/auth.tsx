import images from "../assets/images";

export default function AuthLayout({children}: any) {
  return (
    <div className="w-full h-screen">
        <div className="flex items-center justify-between gap-10 w-full h-screen p-10">
            <div className="w-[40%] h-full flex flex-col items-start ">
                 <img src={images.logo} className="w-[150px]"/>
                <div className="self-center flex flex-1 h-full justify-center items-center w-full">
                    {children}
                </div>
            </div>
            
            <div className="w-[60%] bg-cover bg-center h-full rounded-3xl" style={{backgroundImage: `url(${images.auth_bg})`}}/>
            {/* <img className=" h-screen m1" src={}/> */}
        </div>
    </div>
  )
}
