export default function AboutUsValuesSection() {
  return (
    <div className="p-10">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="font-normal text-base text-primary mb-2">OUR VALUES</p>
        <p className="font-black text-4xl text-primary leading-relaxed mb-2">
          Here are the core values that guide and
          <br /> inform everything we do
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="flex flex-col items-start">
          <div className="bg-[#6BBADC21] rounded-full p-3">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9375 1.096C11.764 1.08749 11.5904 1.08333 11.4167 1.0835C5.66354 1.0835 1 5.74704 1 11.5002C1 17.2533 5.66354 21.9168 11.4167 21.9168C17.1698 21.9168 21.8333 17.2533 21.8333 11.5002C21.8333 10.6012 21.7187 9.72829 21.5052 8.896"
                stroke="#213481"
                stroke-width="1.5625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.24984 14.6253C7.73498 15.2721 8.36406 15.7972 9.08727 16.1588C9.81047 16.5204 10.6079 16.7086 11.4165 16.7086C12.2251 16.7086 13.0225 16.5204 13.7457 16.1588C14.4689 15.7972 15.098 15.2721 15.5832 14.6253M9.33317 8.89611H7.9863C7.51442 8.89611 7.06234 9.08361 6.729 9.41695M13.4998 8.89611H14.8467C15.3186 8.89611 15.7707 9.08361 16.104 9.41695M15.4665 1.42841C16.4446 0.857573 17.2978 1.08778 17.8103 1.45445C18.0207 1.60445 18.1259 1.67945 18.1873 1.67945C18.2498 1.67945 18.354 1.60445 18.5644 1.45445C19.0769 1.08778 19.93 0.857573 20.9082 1.42841C22.1915 2.17841 22.4811 4.65132 19.5228 6.73778C18.9582 7.13466 18.6759 7.33361 18.1873 7.33361C17.6988 7.33361 17.4165 7.1357 16.853 6.73778C13.8936 4.65132 14.1832 2.17841 15.4675 1.42841"
                stroke="#213481"
                stroke-width="1.5625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <p className="font-bold text-primary text-xl">Empathy</p>
          <p className="text-sm text-primary font-normal leading-loose">
            We understand the challenges you're facing because we've experienced
            them ourselves. We're continually striving to deepen our
            understanding of our customers and improve our solutions.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="bg-[#6BBADC21] rounded-full p-3">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3749 2.37454C8.76876 2.37464 7.19867 2.85076 5.86299 3.74278C4.52732 4.63479 3.48598 5.90266 2.87054 7.38622C2.2551 8.86978 2.09316 10.5025 2.4052 12.078C2.71723 13.6536 3.48923 15.1013 4.62367 16.2383C4.79937 16.4143 4.89795 16.653 4.89772 16.9017C4.89748 17.1504 4.79845 17.3888 4.62241 17.5645C4.44638 17.7402 4.20775 17.8388 3.95903 17.8386C3.71031 17.8384 3.47187 17.7393 3.29616 17.5633C2.16126 16.4259 1.31714 15.0318 0.835279 13.499C0.353418 11.9661 0.248006 10.3398 0.527969 8.7576C0.807932 7.17541 1.46502 5.68398 2.44361 4.4096C3.4222 3.13521 4.69346 2.11539 6.14975 1.43649C7.60604 0.75759 9.20449 0.439604 10.8097 0.509455C12.415 0.579306 13.9798 1.03494 15.3716 1.83777C16.7634 2.6406 17.9413 3.76699 18.8055 5.12157C19.6696 6.47615 20.1947 8.01902 20.3362 9.61954C19.8144 8.86356 19.0334 8.32537 18.1412 8.10704C17.6296 6.44678 16.5993 4.99421 15.2016 3.96249C13.8038 2.93076 12.1122 2.37422 10.3749 2.37454ZM16.1712 8.15704C15.6261 6.81368 14.6312 5.70147 13.3566 5.0107C12.082 4.31994 10.607 4.09356 9.18391 4.37029C7.76084 4.64702 6.47815 5.40966 5.55531 6.52773C4.63247 7.6458 4.12683 9.04981 4.12492 10.4995C4.12492 12.2208 4.82241 13.782 5.94741 14.912C6.12312 15.0882 6.36163 15.1874 6.61046 15.1878C6.8593 15.1881 7.09809 15.0896 7.27429 14.9139C7.45049 14.7382 7.54968 14.4997 7.55003 14.2509C7.55038 14.002 7.45187 13.7632 7.27616 13.587C6.80941 13.1184 6.455 12.55 6.23958 11.9246C6.02417 11.2993 5.95335 10.6332 6.03246 9.97649C6.11157 9.3198 6.33855 8.6896 6.69633 8.13328C7.0541 7.57696 7.53336 7.109 8.09806 6.7646C8.66276 6.42021 9.2982 6.20833 9.95659 6.14492C10.615 6.0815 11.2792 6.16819 11.8992 6.39847C12.5193 6.62876 13.0791 6.99663 13.5364 7.47443C13.9938 7.95224 14.3369 8.52753 14.5399 9.15704C14.988 8.68826 15.5501 8.34372 16.1712 8.15704ZM7.87491 10.4995C7.87491 9.8365 8.13831 9.20062 8.60715 8.73178C9.07599 8.26293 9.71187 7.99954 10.3749 7.99954C11.038 7.99954 11.6738 8.26293 12.1427 8.73178C12.6115 9.20062 12.8749 9.8365 12.8749 10.4995C12.8749 11.1626 12.6115 11.7985 12.1427 12.2673C11.6738 12.7361 11.038 12.9995 10.3749 12.9995C9.71187 12.9995 9.07599 12.7361 8.60715 12.2673C8.13831 11.7985 7.87491 11.1626 7.87491 10.4995ZM19.7499 11.7495C19.7499 12.4126 19.4865 13.0485 19.0177 13.5173C18.5488 13.9861 17.913 14.2495 17.2499 14.2495C16.5869 14.2495 15.951 13.9861 15.4821 13.5173C15.0133 13.0485 14.7499 12.4126 14.7499 11.7495C14.7499 11.0865 15.0133 10.4506 15.4821 9.98178C15.951 9.51293 16.5869 9.24954 17.2499 9.24954C17.913 9.24954 18.5488 9.51293 19.0177 9.98178C19.4865 10.4506 19.7499 11.0865 19.7499 11.7495ZM21.6249 17.3745C21.6249 18.9308 20.3749 20.4995 17.2499 20.4995C14.1249 20.4995 12.8749 18.937 12.8749 17.3745C12.8749 16.8773 13.0725 16.4003 13.4241 16.0487C13.7757 15.6971 14.2526 15.4995 14.7499 15.4995H19.7499C20.2472 15.4995 20.7241 15.6971 21.0757 16.0487C21.4274 16.4003 21.6249 16.8773 21.6249 17.3745Z"
                fill="#213481"
              />
            </svg>
          </div>

          <p className="font-bold text-primary text-xl">
            Concise Communication
          </p>
          <p className="text-sm text-primary font-normal leading-loose">
            Communication is a top priority for us, both internally and
            externally. We value open, clear, and straightforward conversations,
            avoiding jargon to ensure effective collaboration.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="bg-[#6BBADC21] rounded-full p-3">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9375 22.6981L17.7344 19.521C17.4219 19.712 17.0878 19.8554 16.7323 19.9512C16.3767 20.047 16.0076 20.0946 15.625 20.0939C14.4792 20.0939 13.4983 19.6859 12.6823 18.87C11.8663 18.054 11.4583 17.0731 11.4583 15.9272C11.4583 14.7814 11.8663 13.8005 12.6823 12.9845C13.4983 12.1686 14.4792 11.7606 15.625 11.7606C16.7708 11.7606 17.7517 12.1686 18.5677 12.9845C19.3837 13.8005 19.7917 14.7814 19.7917 15.9272C19.7917 16.3266 19.7396 16.7043 19.6354 17.0606C19.5312 17.4168 19.3837 17.7509 19.1927 18.0627L22.3958 21.2397L20.9375 22.6981ZM4.16667 20.0939C3.02083 20.0939 2.03993 19.6859 1.22396 18.87C0.407986 18.054 0 17.0731 0 15.9272C0 14.7814 0.407986 13.8005 1.22396 12.9845C2.03993 12.1686 3.02083 11.7606 4.16667 11.7606C5.3125 11.7606 6.2934 12.1686 7.10937 12.9845C7.92535 13.8005 8.33333 14.7814 8.33333 15.9272C8.33333 17.0731 7.92535 18.054 7.10937 18.87C6.2934 19.6859 5.3125 20.0939 4.16667 20.0939ZM4.16667 18.0106C4.73958 18.0106 5.22986 17.8068 5.6375 17.3991C6.04514 16.9915 6.24931 16.5009 6.25 15.9272C6.25069 15.3536 6.04688 14.8634 5.63854 14.4564C5.23021 14.0495 4.73958 13.8453 4.16667 13.8439C3.59375 13.8425 3.10347 14.0467 2.69583 14.4564C2.28819 14.8661 2.08403 15.3564 2.08333 15.9272C2.08264 16.4981 2.28681 16.9887 2.69583 17.3991C3.10486 17.8095 3.59514 18.0134 4.16667 18.0106ZM15.625 18.0106C16.1979 18.0106 16.6885 17.8068 17.0969 17.3991C17.5052 16.9915 17.709 16.5009 17.7083 15.9272C17.7076 15.3536 17.5038 14.8634 17.0969 14.4564C16.6899 14.0495 16.1993 13.8453 15.625 13.8439C15.0507 13.8425 14.5604 14.0467 14.1542 14.4564C13.7479 14.8661 13.5437 15.3564 13.5417 15.9272C13.5396 16.4981 13.7437 16.9887 14.1542 17.3991C14.5646 17.8095 15.0549 18.0134 15.625 18.0106ZM4.16667 8.63558C3.02083 8.63558 2.03993 8.22759 1.22396 7.41162C0.407986 6.59565 0 5.61475 0 4.46891C0 3.32308 0.407986 2.34218 1.22396 1.5262C2.03993 0.710232 3.02083 0.302246 4.16667 0.302246C5.3125 0.302246 6.2934 0.710232 7.10937 1.5262C7.92535 2.34218 8.33333 3.32308 8.33333 4.46891C8.33333 5.61475 7.92535 6.59565 7.10937 7.41162C6.2934 8.22759 5.3125 8.63558 4.16667 8.63558ZM15.625 8.63558C14.4792 8.63558 13.4983 8.22759 12.6823 7.41162C11.8663 6.59565 11.4583 5.61475 11.4583 4.46891C11.4583 3.32308 11.8663 2.34218 12.6823 1.5262C13.4983 0.710232 14.4792 0.302246 15.625 0.302246C16.7708 0.302246 17.7517 0.710232 18.5677 1.5262C19.3837 2.34218 19.7917 3.32308 19.7917 4.46891C19.7917 5.61475 19.3837 6.59565 18.5677 7.41162C17.7517 8.22759 16.7708 8.63558 15.625 8.63558ZM4.16667 6.55225C4.73958 6.55225 5.23021 6.34843 5.63854 5.94079C6.04688 5.53315 6.25069 5.04252 6.25 4.46891C6.24931 3.8953 6.04549 3.40502 5.63854 2.99808C5.2316 2.59113 4.74097 2.38697 4.16667 2.38558C3.59236 2.38419 3.10208 2.58836 2.69583 2.99808C2.28958 3.4078 2.08542 3.89808 2.08333 4.46891C2.08125 5.03975 2.28542 5.53037 2.69583 5.94079C3.10625 6.3512 3.59653 6.55502 4.16667 6.55225ZM15.625 6.55225C16.1979 6.55225 16.6885 6.34843 17.0969 5.94079C17.5052 5.53315 17.709 5.04252 17.7083 4.46891C17.7076 3.8953 17.5038 3.40502 17.0969 2.99808C16.6899 2.59113 16.1993 2.38697 15.625 2.38558C15.0507 2.38419 14.5604 2.58836 14.1542 2.99808C13.7479 3.4078 13.5437 3.89808 13.5417 4.46891C13.5396 5.03975 13.7437 5.53037 14.1542 5.94079C14.5646 6.3512 15.0549 6.55502 15.625 6.55225Z"
                fill="#213481"
              />
            </svg>
          </div>

          <p className="font-bold text-primary text-xl">Action Bias</p>
          <p className="text-sm text-primary font-normal leading-loose">
            Perfection can hinder progress, and overthinking is a common trap.
            While strategic planning is important, continuous iteration is the
            most effective way to achieve excellence.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="bg-[#6BBADC21] rounded-full p-3">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.47813 8.37516C2.80833 4.14912 6.76667 1.0835 11.4427 1.0835C16.8573 1.0835 21.3094 5.19495 21.8333 10.4585L19.75 10.0345M21.3552 14.6252C20.6845 16.7416 19.357 18.5894 17.5653 19.9005C15.7736 21.2116 13.6108 21.9179 11.3906 21.9168C5.97604 21.9168 1.52396 17.8054 1 12.5418L3.08333 12.9658"
                stroke="#213481"
                stroke-width="1.5625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.29369 13.0917V15.1667C8.2913 15.3339 8.33132 15.499 8.41001 15.6465C8.4887 15.7941 8.6035 15.9193 8.74369 16.0105C9.62285 16.5605 10.2906 16.7219 11.4218 16.7563C12.4645 16.7844 13.1187 16.6209 14.0916 16.0125C14.2342 15.9207 14.351 15.7941 14.4312 15.6447C14.5114 15.4953 14.5522 15.3279 14.5499 15.1584V13.0917M16.6364 10.474V13.6146M6.26035 10.2959C6.63744 9.50004 8.9739 8.11462 11.1062 7.43025C11.3117 7.36495 11.5331 7.37009 11.7354 7.44483C13.6208 8.13442 15.7187 9.17921 16.4801 10.0261C16.877 10.4688 16.4885 11.0334 16.0083 11.3823C15.0322 12.0917 13.9562 12.6427 11.7812 13.4792C11.5508 13.5675 11.2962 13.5693 11.0645 13.4844C8.83535 12.6563 6.74994 11.5886 6.27806 10.648C6.24885 10.5944 6.23209 10.5349 6.22903 10.4739C6.22596 10.413 6.23667 10.3521 6.26035 10.2959Z"
                stroke="#213481"
                stroke-width="1.5625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <p className="font-bold text-primary text-xl">Continuous Learning</p>
          <p className="text-sm text-primary font-normal leading-loose">
            Learning is at the core of everything we do, from personal and team
            development to understanding our customers' needs.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="bg-[#6BBADC21] rounded-full p-3">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.89351 6.03451C11.3727 4.05118 13.5966 3.47201 15.6425 4.0293C17.8508 4.63034 19.7925 6.52722 20.4373 9.16889C20.4706 9.3043 20.4994 9.43972 20.5237 9.57514C19.5929 9.24347 18.5805 9.21792 17.6341 9.50222C16.2935 8.51055 14.6331 8.34389 13.1571 8.88764C11.3081 9.56993 9.86434 11.3001 9.52997 13.4772C9.10288 16.2647 10.8008 18.7689 13.2018 20.8981L13.606 21.2481C13.28 21.271 12.9487 21.2199 12.6321 21.1522C12.4693 21.1172 12.3075 21.0783 12.1466 21.0356L11.5873 20.8793C6.61434 19.4803 3.28518 17.2918 2.32997 14.021C1.56747 11.4106 2.3008 8.79701 3.9133 7.17201C5.40705 5.6668 7.62163 5.05639 9.89351 6.03451ZM11.5893 13.7928C12.0352 10.8845 15.3987 9.45118 17.1258 11.947C17.1424 11.9702 17.1674 11.9859 17.1955 11.9908C17.2235 11.9957 17.2524 11.9893 17.2758 11.9731C19.7518 10.2189 22.4216 12.7158 21.8456 15.6012C21.5123 17.2748 19.9602 18.6637 17.1893 19.7678L16.7362 19.9449L16.4623 20.0574C16.2258 20.1501 15.9758 20.2241 15.7498 20.1845C15.5248 20.1449 15.3154 19.9887 15.1248 19.822L14.8018 19.5303C12.3921 17.4567 11.3213 15.5442 11.5893 13.7928Z"
                fill="#213481"
              />
            </svg>
          </div>

          <p className="font-bold text-primary text-xl">Love Our Customers</p>
          <p className="text-sm text-primary font-normal leading-loose">
            Our customers are the driving force behind everything we do, and
            their needs always come first. They rely on us to simplify their
            lives, and we are committed to upholding that trust. Our guiding
            principle is to ensure that every customer is satisfied, no matter
            the situation.
          </p>
        </div>
      </div>
    </div>
  );
}
