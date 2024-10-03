import { ReactNode } from "react";
import images from "../assets/images";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode
  backLink: string
}

export default function DetailsLayout({ children, backLink }: Props) {
  return (
    <div className="flex min-h-screen flex-col flex-1 justify-between">
      <div className="fixed w-full z-50 bg-primary p-5 px-10 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Link to={backLink}>
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.414 6.99997H3.828L9.121 1.70697L7.707 0.292969L0 7.99997L7.707 15.707L9.121 14.293L3.828 8.99997H18.414V6.99997Z"
                fill="white"
              />
            </svg>
          </Link>
          <img src={images.logo_white} className="w-[120px]" />
        </div>

        <div className="flex items-center gap-3 text-white">
            <div className="rounded-full w-[40px] h-[40px] bg-gray-300"/>
            <div className="text-xs text-right">
                <p className="text-sm font-semibold">User Name</p>
                <p>Email Address</p>
            </div>
        </div>
      </div>

      <div className="h-full p-10 mt-20">
        {children}
      </div>

      <div className="px-10 pb-10">
        <div className="bg-primary text-white text-sm p-10 rounded-xl flex justify-between items-center">
            <img src={images.logo_white} className="w-[120px]" />

            <p>PropFizer Inc, 2024</p>

            <p>Designed and Developed by Solutech</p>
        </div>
      </div>
    </div>
  );
}
