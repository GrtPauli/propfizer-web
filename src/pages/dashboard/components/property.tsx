import images from "../../../assets/images";

export default function PropertyItem() {
  return (
    <div>
      <div className="relative">
        <img src={images.dashboard.dashboard_h2} />
        <div className="absolute h-full w-full flex justify-between items-center px-3 top-0">
          <ChevronButton />
          <ChevronButton className="rotate-180" />
        </div>
      </div>

      <div className="mt-3 text-primary">
        <p className="font-bold mb-1">Property Name</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.875C6.89453 1.875 4.375 4.27305 4.375 7.22656C4.375 10.625 8.125 16.0105 9.50195 17.8707C9.55911 17.9492 9.63402 18.0131 9.72058 18.0572C9.80713 18.1012 9.90288 18.1242 10 18.1242C10.0971 18.1242 10.1929 18.1012 10.2794 18.0572C10.366 18.0131 10.4409 17.9492 10.498 17.8707C11.875 16.0113 15.625 10.6277 15.625 7.22656C15.625 4.27305 13.1055 1.875 10 1.875Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 9.375C11.0355 9.375 11.875 8.53553 11.875 7.5C11.875 6.46447 11.0355 5.625 10 5.625C8.96447 5.625 8.125 6.46447 8.125 7.5C8.125 8.53553 8.96447 9.375 10 9.375Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Lekki Abuja</p>
          </div>

          <p>4 bed(s)  - 3 bath(s)</p>
        </div>
        <p className="mt-1">
          Price: 
          <span className="font-bold ml-1">N40,000,000.00</span>
        </p>
      </div>
    </div>
  );
}

const ChevronButton = ({ className }: any) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="45.2047"
        height="45.91"
        rx="22.6024"
        transform="matrix(-1 0 0 1 45.2046 0)"
        fill="#022440"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.3658 23.8388L25.4371 30.91L27.2046 29.1425L21.0171 22.955L27.2046 16.7675L25.4371 15L18.3658 22.0712C18.1315 22.3057 17.9999 22.6235 17.9999 22.955C17.9999 23.2865 18.1315 23.6043 18.3658 23.8388Z"
        fill="white"
      />
    </svg>
  );
};

