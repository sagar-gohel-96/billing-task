import React from "react";
import { theme } from "../theme";

export const SettingIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.8851 7.67429L22.1079 6.32571C21.4505 5.18462 19.9934 4.79097 18.8508 5.44571C18.3069 5.76613 17.6578 5.85704 17.0468 5.69839C16.4358 5.53974 15.913 5.14456 15.5936 4.6C15.3882 4.25387 15.2778 3.85963 15.2736 3.45714C15.2922 2.81186 15.0487 2.18655 14.5988 1.72366C14.1488 1.26078 13.5306 0.999734 12.8851 1H11.3194C10.6869 1 10.0805 1.25201 9.63441 1.70029C9.18828 2.14856 8.93918 2.75614 8.94222 3.38857C8.92347 4.69433 7.85955 5.74299 6.55365 5.74286C6.15117 5.73868 5.75692 5.62829 5.41079 5.42286C4.26813 4.76811 2.81111 5.16176 2.15365 6.30286L1.31936 7.67429C0.662693 8.81396 1.05099 10.2701 2.18793 10.9314C2.92697 11.3581 3.38223 12.1466 3.38223 13C3.38223 13.8534 2.92697 14.6419 2.18793 15.0686C1.05243 15.7255 0.663713 17.1781 1.31936 18.3143L2.10793 19.6743C2.41598 20.2301 2.93284 20.6403 3.54412 20.814C4.15541 20.9878 4.81073 20.9107 5.36508 20.6C5.91003 20.282 6.55942 20.1949 7.16891 20.358C7.7784 20.5211 8.29749 20.9209 8.61079 21.4686C8.81622 21.8147 8.92661 22.2089 8.93079 22.6114C8.93079 23.9306 10.0002 25 11.3194 25H12.8851C14.1998 25 15.2674 23.9376 15.2736 22.6229C15.2706 21.9884 15.5213 21.3791 15.9699 20.9305C16.4185 20.4819 17.0278 20.2312 17.6622 20.2343C18.0637 20.245 18.4564 20.355 18.8051 20.5543C19.9447 21.211 21.4008 20.8227 22.0622 19.6857L22.8851 18.3143C23.2036 17.7676 23.291 17.1165 23.128 16.5051C22.9649 15.8938 22.5649 15.3727 22.0165 15.0571C21.4681 14.7416 21.0681 14.2205 20.905 13.6092C20.742 12.9978 20.8294 12.3467 21.1479 11.8C21.3551 11.4384 21.6549 11.1386 22.0165 10.9314C23.1466 10.2704 23.534 8.82282 22.8851 7.68571V7.67429Z"
        stroke={theme.iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.1079 16.2914C13.9256 16.2914 15.3991 14.8179 15.3991 13.0002C15.3991 11.1825 13.9256 9.70892 12.1079 9.70892C10.2902 9.70892 8.81662 11.1825 8.81662 13.0002C8.81662 14.8179 10.2902 16.2914 12.1079 16.2914Z"
        stroke={theme.iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};