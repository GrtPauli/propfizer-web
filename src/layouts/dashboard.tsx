import { ReactNode } from "react";
import images from "../assets/images";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  headerPrefix?: ReactNode;
}

export default function DashboardLayout({ children, headerPrefix }: Props) {
  return (
    <div className="flex">
      <div className="bg-primary w-[25%] h-screen p-10">
        <img src={images.logo_white} className="w-[130px]" />

        <div className="mt-10">
          <div>
            <p className="text-[#83DAFF] text-xs">MENU</p>
            <div className="flex flex-col gap-2 mt-2">
              <NavLink
                title="DASHBOARD"
                to="/dashboard"
                active={true}
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.6665 1.66663H4.58317C4.2015 1.66663 3.87317 1.66663 3.58317 1.73496C3.13423 1.84223 2.72375 2.0717 2.39722 2.39794C2.07069 2.72418 1.84085 3.13445 1.73317 3.58329C1.6665 3.87329 1.6665 4.19996 1.6665 4.58329V8.74996C1.6665 9.13163 1.6665 9.45996 1.73484 9.74996C1.84211 10.1989 2.07158 10.6094 2.39782 10.9359C2.72406 11.2624 3.13433 11.4923 3.58317 11.6C3.87317 11.6666 4.19984 11.6666 4.58317 11.6666H8.74984C9.1315 11.6666 9.45984 11.6666 9.74984 11.5983C10.1988 11.491 10.6093 11.2615 10.9358 10.9353C11.2623 10.6091 11.4922 10.1988 11.5998 9.74996C11.6665 9.45996 11.6665 9.13329 11.6665 8.74996V4.58329C11.6665 4.20163 11.6665 3.87329 11.5982 3.58329C11.4909 3.13435 11.2614 2.72388 10.9352 2.39734C10.6089 2.07081 10.1987 1.84097 9.74984 1.73329C9.45984 1.66663 9.13317 1.66663 8.74984 1.66663H4.6665ZM3.9715 3.35663C4.04317 3.33996 4.15484 3.33329 4.6665 3.33329H8.6665C9.17984 3.33329 9.28984 3.33829 9.3615 3.35663C9.51122 3.39243 9.64809 3.469 9.75694 3.57785C9.86579 3.6867 9.94237 3.82358 9.97817 3.97329C9.99484 4.04329 9.99984 4.15329 9.99984 4.66663V8.66663C9.99984 9.17996 9.99484 9.28996 9.9765 9.36163C9.9407 9.51134 9.86413 9.64822 9.75528 9.75707C9.64643 9.86592 9.50955 9.94249 9.35984 9.97829C9.2915 9.99329 9.1815 9.99996 8.6665 9.99996H4.6665C4.15317 9.99996 4.04317 9.99496 3.9715 9.97663C3.82179 9.94082 3.68491 9.86425 3.57606 9.7554C3.46721 9.64655 3.39064 9.50968 3.35484 9.35996C3.33984 9.29163 3.33317 9.18163 3.33317 8.66663V4.66663C3.33317 4.15329 3.33817 4.04329 3.3565 3.97163C3.39231 3.82191 3.46888 3.68504 3.57773 3.57619C3.68658 3.46733 3.82345 3.39076 3.97317 3.35496M16.3332 1.66663H16.2498C15.8682 1.66663 15.5398 1.66663 15.2498 1.73496C14.8009 1.84223 14.3904 2.0717 14.0639 2.39794C13.7374 2.72418 13.5075 3.13445 13.3998 3.58329C13.3332 3.87329 13.3332 4.19996 13.3332 4.58329V8.74996C13.3332 9.13163 13.3332 9.45996 13.4015 9.74996C13.5088 10.1989 13.7382 10.6094 14.0645 10.9359C14.3907 11.2624 14.801 11.4923 15.2498 11.6C15.5398 11.6666 15.8665 11.6666 16.2498 11.6666H20.4165C20.7982 11.6666 21.1265 11.6666 21.4165 11.5983C21.8654 11.491 22.2759 11.2615 22.6025 10.9353C22.929 10.6091 23.1588 10.1988 23.2665 9.74996C23.3332 9.45996 23.3332 9.13329 23.3332 8.74996V4.58329C23.3332 4.20163 23.3332 3.87329 23.2648 3.58329C23.1576 3.13435 22.9281 2.72388 22.6019 2.39734C22.2756 2.07081 21.8653 1.84097 21.4165 1.73329C21.1265 1.66663 20.7998 1.66663 20.4165 1.66663H16.3332ZM15.6382 3.35663C15.7098 3.33996 15.8215 3.33329 16.3332 3.33329H20.3332C20.8465 3.33329 20.9565 3.33829 21.0282 3.35663C21.1779 3.39243 21.3148 3.469 21.4236 3.57785C21.5325 3.6867 21.609 3.82358 21.6448 3.97329C21.6615 4.04329 21.6665 4.15329 21.6665 4.66663V8.66663C21.6665 9.17996 21.6598 9.28996 21.6432 9.36163C21.6074 9.51134 21.5308 9.64822 21.4219 9.75707C21.3131 9.86592 21.1762 9.94249 21.0265 9.97829C20.9565 9.99496 20.8465 9.99996 20.3332 9.99996H16.3332C15.8198 9.99996 15.7098 9.99496 15.6382 9.97663C15.4885 9.94082 15.3516 9.86425 15.2427 9.7554C15.1339 9.64655 15.0573 9.50968 15.0215 9.35996C15.0065 9.29163 14.9998 9.18163 14.9998 8.66663V4.66663C14.9998 4.15329 15.0048 4.04329 15.0232 3.97163C15.059 3.82191 15.1355 3.68504 15.2444 3.57619C15.3532 3.46733 15.4901 3.39076 15.6398 3.35496M4.58317 13.3333H8.74984C9.1315 13.3333 9.45984 13.3333 9.74984 13.4016C10.1988 13.5089 10.6093 13.7384 10.9358 14.0646C11.2623 14.3908 11.4922 14.8011 11.5998 15.25C11.6665 15.54 11.6665 15.8666 11.6665 16.25V20.4166C11.6665 20.7983 11.6665 21.1266 11.5982 21.4166C11.4909 21.8656 11.2614 22.276 10.9352 22.6026C10.6089 22.9291 10.1987 23.1589 9.74984 23.2666C9.45984 23.3333 9.13317 23.3333 8.74984 23.3333H4.58317C4.2015 23.3333 3.87317 23.3333 3.58317 23.265C3.13423 23.1577 2.72375 22.9282 2.39722 22.602C2.07069 22.2757 1.84085 21.8655 1.73317 21.4166C1.6665 21.1266 1.6665 20.8 1.6665 20.4166V16.25C1.6665 15.8683 1.6665 15.54 1.73484 15.25C1.84211 14.801 2.07158 14.3905 2.39782 14.064C2.72406 13.7375 3.13433 13.5076 3.58317 13.4C3.87317 13.3333 4.19984 13.3333 4.58317 13.3333ZM4.6665 15C4.15317 15 4.04317 15.005 3.9715 15.0233C3.82179 15.0591 3.68491 15.1357 3.57606 15.2445C3.46721 15.3534 3.39064 15.4902 3.35484 15.64C3.33984 15.7083 3.33317 15.8183 3.33317 16.3333V20.3333C3.33317 20.8466 3.33817 20.9566 3.3565 21.0283C3.39231 21.178 3.46888 21.3149 3.57773 21.4237C3.68658 21.5326 3.82345 21.6092 3.97317 21.645C4.04317 21.6616 4.15317 21.6666 4.6665 21.6666H8.6665C9.17984 21.6666 9.28984 21.66 9.3615 21.6433C9.51122 21.6075 9.64809 21.5309 9.75694 21.4221C9.86579 21.3132 9.94237 21.1763 9.97817 21.0266C9.99484 20.9566 9.99984 20.8466 9.99984 20.3333V16.3333C9.99984 15.82 9.99484 15.71 9.9765 15.6383C9.9407 15.4886 9.86413 15.3517 9.75528 15.2429C9.64643 15.134 9.50955 15.0574 9.35984 15.0216C9.2915 15.0066 9.1815 15 8.6665 15H4.6665ZM16.3332 13.3333H16.2498C15.8682 13.3333 15.5398 13.3333 15.2498 13.4016C14.8009 13.5089 14.3904 13.7384 14.0639 14.0646C13.7374 14.3908 13.5075 14.8011 13.3998 15.25C13.3332 15.54 13.3332 15.8666 13.3332 16.25V20.4166C13.3332 20.7983 13.3332 21.1266 13.4015 21.4166C13.5088 21.8656 13.7382 22.276 14.0645 22.6026C14.3907 22.9291 14.801 23.1589 15.2498 23.2666C15.5398 23.335 15.8682 23.335 16.2498 23.335H20.4165C20.7982 23.335 21.1265 23.335 21.4165 23.2666C21.8651 23.1591 22.2753 22.9295 22.6015 22.6033C22.9277 22.2771 23.1573 21.8669 23.2648 21.4183C23.3332 21.1283 23.3332 20.8 23.3332 20.4183V16.2516C23.3332 15.87 23.3332 15.5416 23.2648 15.2516C23.1578 14.8024 22.9285 14.3916 22.6022 14.0647C22.276 13.7379 21.8656 13.5078 21.4165 13.4C21.1265 13.3333 20.7998 13.3333 20.4165 13.3333H16.3332ZM15.6382 15.0233C15.7098 15.0066 15.8215 15 16.3332 15H20.3332C20.8465 15 20.9565 15.005 21.0282 15.0233C21.1779 15.0591 21.3148 15.1357 21.4236 15.2445C21.5325 15.3534 21.609 15.4902 21.6448 15.64C21.6615 15.71 21.6665 15.82 21.6665 16.3333V20.3333C21.6665 20.8466 21.6598 20.9566 21.6432 21.0283C21.6074 21.178 21.5308 21.3149 21.4219 21.4237C21.3131 21.5326 21.1762 21.6092 21.0265 21.645C20.9565 21.6616 20.8465 21.6666 20.3332 21.6666H16.3332C15.8198 21.6666 15.7098 21.66 15.6382 21.6433C15.4885 21.6075 15.3516 21.5309 15.2427 21.4221C15.1339 21.3132 15.0573 21.1763 15.0215 21.0266C15.0065 20.9583 14.9998 20.8483 14.9998 20.3333V16.3333C14.9998 15.82 15.0048 15.71 15.0232 15.6383C15.059 15.4886 15.1355 15.3517 15.2444 15.2429C15.3532 15.134 15.4901 15.0574 15.6398 15.0216"
                      fill="white"
                    />
                  </svg>
                }
              />
              <NavLink
                title="MY RENTALS"
                to="/dashboard"
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.2085 20.8333V12.5H2.0835L12.5002 3.125L22.9168 12.5H19.7918V20.8333H5.2085ZM12.5002 5.92708L7.29183 10.6146V18.75H17.7085V10.6146L12.5002 5.92708ZM11.4585 17.7083V16.6667H13.5418V17.7083H11.4585ZM11.4585 15.625C11.1668 15.625 10.9377 15.3958 10.9377 15.1042V14.1667C10.0002 13.625 9.37516 12.6146 9.37516 11.4583C9.37516 9.72917 10.771 8.33333 12.5002 8.33333C14.2293 8.33333 15.6252 9.72917 15.6252 11.4583C15.6252 12.6146 15.0002 13.625 14.0627 14.1667V15.1042C14.0627 15.3958 13.8335 15.625 13.5418 15.625H11.4585Z"
                      fill="white"
                    />
                  </svg>
                }
              />
              <NavLink
                title="PAYMENTS"
                to="/dashboard"
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5875 10.6712C14.4885 10.6706 14.3932 10.7091 14.3225 10.7784C14.2518 10.8477 14.2113 10.9422 14.21 11.0413V13.8062C14.2113 13.9055 14.2519 14.0002 14.3229 14.0695C14.3939 14.1389 14.4895 14.1773 14.5887 14.1762H22.9175C23.0167 14.1773 23.1123 14.1389 23.1833 14.0695C23.2543 14.0002 23.2949 13.9055 23.2962 13.8062V11.0413C23.2949 10.942 23.2543 10.8473 23.1833 10.778C23.1123 10.7086 23.0167 10.6702 22.9175 10.6712H14.5875ZM19.695 1.87625C20.8475 1.93125 21.6763 2.15875 22.2013 2.64125C22.72 3.11875 22.9862 3.81 23.0387 4.725V7.34625C23.0361 7.56948 22.945 7.78254 22.7854 7.93863C22.6258 8.09472 22.4107 8.18108 22.1875 8.17875C22.0769 8.18007 21.967 8.15958 21.8643 8.11846C21.7616 8.07734 21.668 8.01638 21.5888 7.93908C21.5097 7.86177 21.4465 7.76963 21.4029 7.66791C21.3594 7.56619 21.3363 7.45689 21.335 7.34625L21.3363 4.7725C21.3088 4.2975 21.195 4.0025 21.0325 3.8525C20.875 3.7075 20.395 3.5775 19.6537 3.54H3.30875C2.6375 3.565 2.20125 3.6925 1.99 3.87375C1.8275 4.0125 1.705 4.395 1.70375 5.05625L1.7 19.7687C1.7625 20.4112 1.90375 20.84 2.085 21.0538C2.2225 21.2163 2.64875 21.3787 3.27625 21.4587H19.6713C20.4388 21.4737 20.8912 21.3588 21.0437 21.205C21.2125 21.0338 21.335 20.5837 21.335 19.8475V17.2913C21.335 16.8325 21.7162 16.4587 22.1875 16.4587C22.6575 16.4587 23.0387 16.8325 23.0387 17.2913V19.8475C23.0387 20.9725 22.8088 21.8138 22.27 22.36C21.715 22.9225 20.8325 23.1475 19.6537 23.1225L3.175 23.1188C2.05375 22.9888 1.25 22.6812 0.77125 22.115C0.3375 21.6025 0.09625 20.8713 0 19.8487V5.055C0.0025 3.96 0.265 3.13625 0.8675 2.62125C1.42 2.14625 2.2175 1.915 3.27625 1.875L19.695 1.87625ZM22.9175 9.00625C24.0675 9.00625 25 9.9175 25 11.0413V13.8062C25 14.93 24.0675 15.8413 22.9175 15.8413H14.5887C13.4387 15.8413 12.5063 14.9288 12.5063 13.8062V11.0413C12.5063 9.9175 13.4387 9.00625 14.5887 9.00625H22.9175ZM16.6712 11.4313C16.0963 11.4313 15.63 11.8813 15.63 12.435C15.63 12.9887 16.0963 13.4388 16.6712 13.4388C17.2463 13.4388 17.7125 12.9887 17.7125 12.435C17.7125 11.8813 17.2463 11.43 16.6712 11.43"
                      fill="white"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[#83DAFF] text-xs">ACCOUNT MANAGEMENT</p>
            <div className="flex flex-col gap-2 mt-2">
              <NavLink
                title="Account Settings"
                to="/dashboard"
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7293 13.1875C20.5623 12.9974 20.4702 12.753 20.4702 12.5C20.4702 12.247 20.5623 12.0026 20.7293 11.8125L22.0627 10.3125C22.2096 10.1486 22.3008 9.94239 22.3233 9.72344C22.3457 9.50448 22.2983 9.28404 22.1877 9.09374L20.1043 5.48958C19.9949 5.29949 19.8282 5.14882 19.628 5.05904C19.4279 4.96926 19.2045 4.94495 18.9898 4.98958L17.0314 5.38541C16.7822 5.4369 16.5228 5.3954 16.3021 5.26874C16.0815 5.14209 15.9148 4.93904 15.8335 4.69791L15.1981 2.79166C15.1282 2.58476 14.9951 2.40506 14.8175 2.27795C14.6399 2.15085 14.4269 2.08276 14.2085 2.08333H10.0418C9.81469 2.07147 9.5899 2.13429 9.40181 2.26219C9.21371 2.3901 9.07266 2.57605 9.00018 2.79166L8.41684 4.69791C8.33559 4.93904 8.1689 5.14209 7.94821 5.26874C7.72752 5.3954 7.46811 5.4369 7.21893 5.38541L5.20851 4.98958C5.00492 4.96081 4.79736 4.99293 4.612 5.08191C4.42663 5.17088 4.27174 5.31273 4.16684 5.48958L2.08351 9.09374C1.97014 9.28192 1.91916 9.50112 1.93787 9.72002C1.95658 9.93891 2.04401 10.1463 2.18768 10.3125L3.51059 11.8125C3.67759 12.0026 3.76969 12.247 3.76969 12.5C3.76969 12.753 3.67759 12.9974 3.51059 13.1875L2.18768 14.6875C2.04401 14.8537 1.95658 15.0611 1.93787 15.28C1.91916 15.4989 1.97014 15.7181 2.08351 15.9062L4.16684 19.5104C4.27632 19.7005 4.44301 19.8512 4.64315 19.9409C4.84329 20.0307 5.06666 20.055 5.28143 20.0104L7.23976 19.6146C7.48894 19.5631 7.74836 19.6046 7.96904 19.7312C8.18973 19.8579 8.35643 20.0609 8.43768 20.3021L9.07309 22.2083C9.14557 22.4239 9.28663 22.6099 9.47472 22.7378C9.66282 22.8657 9.88761 22.9285 10.1148 22.9167H14.2814C14.4998 22.9172 14.7128 22.8491 14.8904 22.722C15.068 22.5949 15.2011 22.4152 15.271 22.2083L15.9064 20.3021C15.9877 20.0609 16.1544 19.8579 16.3751 19.7312C16.5957 19.6046 16.8552 19.5631 17.1043 19.6146L19.0627 20.0104C19.2774 20.055 19.5008 20.0307 19.701 19.9409C19.9011 19.8512 20.0678 19.7005 20.1773 19.5104L22.2606 15.9062C22.3712 15.7159 22.4187 15.4955 22.3962 15.2765C22.3738 15.0576 22.2825 14.8514 22.1356 14.6875L20.7293 13.1875ZM19.1773 14.5833L20.0106 15.5208L18.6773 17.8333L17.4481 17.5833C16.6979 17.43 15.9174 17.5574 15.255 17.9415C14.5925 18.3255 14.0941 18.9394 13.8543 19.6667L13.4585 20.8333H10.7918L10.4168 19.6458C10.1771 18.9186 9.6787 18.3047 9.01622 17.9206C8.35375 17.5366 7.57332 17.4091 6.82309 17.5625L5.59393 17.8125L4.23976 15.5104L5.07309 14.5729C5.58555 14 5.86886 13.2583 5.86886 12.4896C5.86886 11.7209 5.58555 10.9792 5.07309 10.4062L4.23976 9.46874L5.57309 7.17708L6.80226 7.42708C7.55249 7.58043 8.33291 7.45299 8.99539 7.06895C9.65787 6.68491 10.1563 6.07099 10.396 5.34374L10.7918 4.16666H13.4585L13.8543 5.35416C14.0941 6.08141 14.5925 6.69532 15.255 7.07937C15.9174 7.46341 16.6979 7.59085 17.4481 7.43749L18.6773 7.18749L20.0106 9.49999L19.1773 10.4375C18.6706 11.0091 18.3908 11.7465 18.3908 12.5104C18.3908 13.2743 18.6706 14.0117 19.1773 14.5833ZM12.1252 8.33333C11.3011 8.33333 10.4955 8.5777 9.8103 9.03554C9.1251 9.49337 8.59104 10.1441 8.27568 10.9055C7.96031 11.6668 7.8778 12.5046 8.03857 13.3129C8.19934 14.1211 8.59618 14.8636 9.1789 15.4463C9.76162 16.029 10.504 16.4258 11.3123 16.5866C12.1206 16.7474 12.9583 16.6649 13.7197 16.3495C14.481 16.0341 15.1318 15.5001 15.5896 14.8149C16.0475 14.1297 16.2918 13.3241 16.2918 12.5C16.2918 11.3949 15.8529 10.3351 15.0715 9.55371C14.2901 8.77231 13.2302 8.33333 12.1252 8.33333ZM12.1252 14.5833C11.7131 14.5833 11.3103 14.4611 10.9677 14.2322C10.6251 14.0033 10.3581 13.6779 10.2004 13.2972C10.0427 12.9166 10.0015 12.4977 10.0819 12.0936C10.1623 11.6894 10.3607 11.3182 10.652 11.0269C10.9434 10.7355 11.3146 10.5371 11.7187 10.4567C12.1229 10.3763 12.5418 10.4176 12.9224 10.5752C13.3031 10.7329 13.6285 11 13.8574 11.3426C14.0863 11.6852 14.2085 12.0879 14.2085 12.5C14.2085 13.0525 13.989 13.5824 13.5983 13.9731C13.2076 14.3638 12.6777 14.5833 12.1252 14.5833Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[#83DAFF] text-xs">PROFILE</p>
            <div className="flex items-center gap-2 text-white font-normal mt-2">
              <div className="bg-gray-400 rounded-full p-5" />
              <div>
                <p className="text-sm">Username</p>
                <p className="text-xs">Email address</p>
              </div>
            </div>

            <button className="mt-10 bg-white font-semibold h-[40px] text-primary rounded-xl flex items-center justify-center w-full">
              LOG OUT
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white w-[75%] p-5">
        <div className="flex justify-between items-center">
          {headerPrefix}

          <div className="flex gap-5 items-center">
            <button className="bg-primary rounded-full w-[60px] h-[60px] flex items-center justify-center">
              <svg
                width="20"
                height="28"
                viewBox="0 0 29 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.33333 29.3333V14.3333C4.33333 11.6811 5.3869 9.13755 7.26227 7.26218C9.13763 5.38682 11.6812 4.33325 14.3333 4.33325C16.9855 4.33325 19.529 5.38682 21.4044 7.26218C23.2798 9.13755 24.3333 11.6811 24.3333 14.3333V29.3333M4.33333 29.3333H24.3333M4.33333 29.3333H1M24.3333 29.3333H27.6667M12.6667 34.3333H16"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3332 4.33333C15.2536 4.33333 15.9998 3.58714 15.9998 2.66667C15.9998 1.74619 15.2536 1 14.3332 1C13.4127 1 12.6665 1.74619 12.6665 2.66667C12.6665 3.58714 13.4127 4.33333 14.3332 4.33333Z"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </button>

            <button className="bg-[#6BBADC21] rounded-full w-[60px] h-[60px] flex items-center justify-center">
              <svg
                width="46"
                height="39"
                viewBox="0 0 66 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.9171 26.5381C26.9171 26.1237 27.0817 25.7263 27.3747 25.4333C27.6678 25.1403 28.0652 24.9756 28.4796 24.9756H37.8546C38.269 24.9756 38.6664 25.1403 38.9594 25.4333C39.2525 25.7263 39.4171 26.1237 39.4171 26.5381C39.4171 26.9525 39.2525 27.35 38.9594 27.643C38.6664 27.936 38.269 28.1006 37.8546 28.1006H28.4796C28.0652 28.1006 27.6678 27.936 27.3747 27.643C27.0817 27.35 26.9171 26.9525 26.9171 26.5381ZM28.4796 31.2256C28.0652 31.2256 27.6678 31.3903 27.3747 31.6833C27.0817 31.9763 26.9171 32.3737 26.9171 32.7881C26.9171 33.2025 27.0817 33.6 27.3747 33.893C27.6678 34.186 28.0652 34.3506 28.4796 34.3506H34.7296C35.144 34.3506 35.5414 34.186 35.8344 33.893C36.1275 33.6 36.2921 33.2025 36.2921 32.7881C36.2921 32.3737 36.1275 31.9763 35.8344 31.6833C35.5414 31.3903 35.144 31.2256 34.7296 31.2256H28.4796ZM14.4171 29.6631C14.4179 25.5352 15.7809 21.5228 18.2947 18.2485C20.8086 14.9743 24.3327 12.6211 28.3203 11.554C32.308 10.487 36.5364 10.7657 40.3495 12.347C44.1626 13.9282 47.3473 16.7236 49.4096 20.2996C51.4719 23.8755 52.2964 28.032 51.7553 32.1244C51.2143 36.2168 49.3378 40.0162 46.417 42.9333C43.4963 45.8504 39.6945 47.7221 35.6015 48.2581C31.5084 48.794 27.3529 47.9643 23.7796 45.8975L16.4733 48.335C16.2034 48.4251 15.914 48.4398 15.6363 48.3775C15.3587 48.3152 15.1033 48.1782 14.8978 47.9814C14.6922 47.7845 14.5444 47.5353 14.4701 47.2606C14.3959 46.9859 14.3981 46.6961 14.4765 46.4225L16.7015 38.6381C15.2015 35.8845 14.4161 32.7987 14.4171 29.6631ZM33.1671 14.0381C30.4083 14.038 27.6986 14.7682 25.3135 16.1547C22.9284 17.5412 20.9529 19.5345 19.5879 21.9319C18.2228 24.3293 17.5169 27.0454 17.5417 29.8041C17.5666 32.5628 18.3215 35.2657 19.7296 37.6381C19.8379 37.8214 19.9077 38.0249 19.9345 38.2361C19.9614 38.4473 19.9448 38.6617 19.8858 38.8663L18.2952 44.4288L23.4765 42.7038C23.6965 42.6303 23.9302 42.6068 24.1604 42.6349C24.3907 42.663 24.6118 42.7421 24.8077 42.8663C26.8554 44.1622 29.1765 44.964 31.5875 45.2085C33.9985 45.4529 36.4333 45.1332 38.6994 44.2746C40.9655 43.416 43.0009 42.0421 44.6446 40.2614C46.2883 38.4807 47.4954 36.3422 48.1703 34.0147C48.8452 31.6872 48.9694 29.2347 48.5333 26.8509C48.0971 24.4672 47.1125 22.2175 45.6572 20.2798C44.2019 18.3421 42.3159 16.7695 40.1481 15.6862C37.9804 14.6029 35.5904 14.0387 33.1671 14.0381Z"
                  fill="#022440"
                />
              </svg>
            </button>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

interface INavLinkProps {
  title: string;
  to: string;
  icon: ReactNode;
  active?: boolean;
}

const NavLink = ({ title, to, active, icon }: INavLinkProps) => {
  return (
    <Link
      to={to}
      className={`${
        active && "bg-[#213481]"
      } py-3 px-5 rounded-r-full flex items-center gap-5 text-white text-sm font-semibold`}
    >
      {icon}
      {title}
    </Link>
  );
};
