import { LibraryIconProps, StyledSVG } from '.'

export const LibraryIcon: LibraryIconProps = {
  ChevronLeft: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        className={props.className}
        onClick={props.onClick}
      >
        <path
          d="M10 12L6 8L10 4"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  AlertCircle: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8V12"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16H12.01"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  Trash: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3 6H5H21"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 11V17"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 11V17"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  Menu: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.28516 11H18.7137"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="1.71429"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.28516 5.85742H18.7137"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="1.71429"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.28516 16.1426H18.7137"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="1.71429"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  MinPlus: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8 3.33203V12.6654"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33203 8H12.6654"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  Plus: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M12.5 5V19"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 12H19.5"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  Copy: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={props.className}
        onClick={props.onClick}
      >
        <path
          d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  FileText: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M14.5 2H6.5C5.96957 2 5.46086 2.21071 5.08579 2.58579C4.71071 2.96086 4.5 3.46957 4.5 4V20C4.5 20.5304 4.71071 21.0391 5.08579 21.4142C5.46086 21.7893 5.96957 22 6.5 22H18.5C19.0304 22 19.5391 21.7893 19.9142 21.4142C20.2893 21.0391 20.5 20.5304 20.5 20V8L14.5 2Z"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 2V8H20.5"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 13H8.5"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 17H8.5"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 9H9.5H8.5"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  HelpCircle: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clipPath="url(#clip0_443_33397)">
          <path
            d="M7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6818 1.33325 7.99992 1.33325C4.31802 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666Z"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.06006 5.99989C6.21679 5.55434 6.52616 5.17863 6.93336 4.93931C7.34056 4.7 7.81932 4.61252 8.28484 4.69237C8.75036 4.77222 9.1726 5.01424 9.47678 5.37558C9.78095 5.73691 9.94743 6.19424 9.94673 6.66656C9.94673 7.99989 7.94673 8.66656 7.94673 8.66656"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 11.3333H8.00667"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_443_33397">
            <rect width="16" height="16" fill={props.color ?? '#ffffff'} />
          </clipPath>
        </defs>
      </StyledSVG>
    )
  },
  ArrowLeft: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
          fill={props.color ?? '#ffffff'}
        />
      </StyledSVG>
    )
  },
  Person: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#f3f5f7" />
        <path
          d="M21.3327 20.6657C21.3327 19.9584 21.0517 19.2802 20.5516 18.7801C20.0515 18.28 19.3733 17.999 18.666 17.999H13.3327C12.6254 17.999 11.9472 18.28 11.4471 18.7801C10.947 19.2802 10.666 19.9584 10.666 20.6657"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.9992 15.3324C17.4719 15.3324 18.6659 14.1384 18.6659 12.6657C18.6659 11.1929 17.4719 9.99902 15.9992 9.99902C14.5264 9.99902 13.3325 11.1929 13.3325 12.6657C13.3325 14.1384 14.5264 15.3324 15.9992 15.3324Z"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  Support: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 7.66669C14.0023 8.5466 13.7967 9.41461 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4168 13.0396 9.3855 13.3329 8.33333 13.3334C7.45342 13.3356 6.58541 13.1301 5.8 12.7334L2 14L3.26667 10.2C2.86995 9.41461 2.66437 8.5466 2.66667 7.66669C2.66707 6.61452 2.96041 5.58325 3.51381 4.68839C4.06722 3.79352 4.85884 3.0704 5.8 2.60002C6.58541 2.20331 7.45342 1.99772 8.33333 2.00002H8.66667C10.0562 2.07668 11.3687 2.66319 12.3528 3.64726C13.3368 4.63132 13.9233 5.94379 14 7.33335V7.66669Z"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  GridCross: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M12 4L4 12"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 4L12 12"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  Download: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={props.className}
        onClick={props.onClick}
      >
        <path
          d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 10L12 15L17 10"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15V3"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  Delete: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        className={props.className}
        onClick={props.onClick}
      >
        <path
          d="M12 4L4 12"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 4L12 12"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  Edit: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  Globe: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1573_3668)">
          <path
            d="M7.9987 14.6668C11.6806 14.6668 14.6654 11.6821 14.6654 8.00016C14.6654 4.31826 11.6806 1.3335 7.9987 1.3335C4.3168 1.3335 1.33203 4.31826 1.33203 8.00016C1.33203 11.6821 4.3168 14.6668 7.9987 14.6668Z"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33203 8H14.6654"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.9987 1.3335C9.66622 3.15906 10.6139 5.52819 10.6654 8.00016C10.6139 10.4721 9.66622 12.8413 7.9987 14.6668C6.33118 12.8413 5.38353 10.4721 5.33203 8.00016C5.38353 5.52819 6.33118 3.15906 7.9987 1.3335Z"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1573_3668">
            <rect width="16" height="16" fill={props.color ?? '#ffffff'} />
          </clipPath>
        </defs>
      </StyledSVG>
    )
  },
  Phone: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1573_3674)">
          <path
            d="M14.6669 11.2802V13.2802C14.6677 13.4659 14.6297 13.6497 14.5553 13.8198C14.4809 13.9899 14.3718 14.1426 14.235 14.2681C14.0982 14.3937 13.9367 14.4892 13.7608 14.5487C13.5849 14.6082 13.3985 14.6303 13.2136 14.6136C11.1622 14.3907 9.19161 13.6897 7.46028 12.5669C5.8495 11.5433 4.48384 10.1777 3.46028 8.56689C2.3336 6.8277 1.63244 4.84756 1.41361 2.78689C1.39695 2.60254 1.41886 2.41673 1.47795 2.24131C1.53703 2.06589 1.63199 1.90469 1.75679 1.76797C1.88159 1.63126 2.03348 1.52203 2.20281 1.44724C2.37213 1.37245 2.55517 1.33374 2.74028 1.33356H4.74028C5.06382 1.33038 5.37748 1.44495 5.62279 1.65592C5.8681 1.86689 6.02833 2.15986 6.07361 2.48023C6.15803 3.12027 6.31458 3.74871 6.54028 4.35356C6.62998 4.59218 6.64939 4.8515 6.59622 5.10081C6.54305 5.35012 6.41952 5.57897 6.24028 5.76023L5.39361 6.60689C6.34265 8.27592 7.72458 9.65786 9.39361 10.6069L10.2403 9.76023C10.4215 9.58099 10.6504 9.45746 10.8997 9.40429C11.149 9.35112 11.4083 9.37053 11.6469 9.46023C12.2518 9.68593 12.8802 9.84248 13.5203 9.92689C13.8441 9.97258 14.1399 10.1357 14.3513 10.3852C14.5627 10.6348 14.6751 10.9533 14.6669 11.2802Z"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1573_3674">
            <rect width="16" height="16" fill={props.color ?? '#ffffff'} />
          </clipPath>
        </defs>
      </StyledSVG>
    )
  },
  WiFi: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33203 8.36655C4.64974 7.269 6.31044 6.66797 8.02536 6.66797C9.74029 6.66797 11.401 7.269 12.7187 8.36655"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.945312 6.00279C2.89359 4.28543 5.40151 3.33789 7.99865 3.33789C10.5958 3.33789 13.1037 4.28543 15.052 6.00279"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.68359 10.7411C6.3604 10.2603 7.17004 10.002 8.00026 10.002C8.83048 10.002 9.64013 10.2603 10.3169 10.7411"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 13.334H8.00667"
          stroke={props.color ?? '#ffffff'}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    )
  },
  Coffee: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1573_3687)">
          <path
            d="M12 5.33398H12.6667C13.3739 5.33398 14.0522 5.61494 14.5523 6.11503C15.0524 6.61513 15.3333 7.29341 15.3333 8.00065C15.3333 8.7079 15.0524 9.38617 14.5523 9.88627C14.0522 10.3864 13.3739 10.6673 12.6667 10.6673H12"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33203 5.33398H11.9987V11.334C11.9987 12.0412 11.7177 12.7195 11.2176 13.2196C10.7176 13.7197 10.0393 14.0007 9.33203 14.0007H3.9987C3.29145 14.0007 2.61318 13.7197 2.11308 13.2196C1.61298 12.7195 1.33203 12.0412 1.33203 11.334V5.33398Z"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 0.666016V2.66602"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66797 0.666016V2.66602"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.33203 0.666016V2.66602"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1573_3687">
            <rect width="16" height="16" fill={props.color ?? '#ffffff'} />
          </clipPath>
        </defs>
      </StyledSVG>
    )
  },
  CreditCard: function (props) {
    return (
      <StyledSVG
        $size={props.size}
        {...props.styles}
        className={props.className}
        onClick={props.onClick}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1573_3695)">
          <path
            d="M14.0013 2.66602H2.0013C1.26492 2.66602 0.667969 3.26297 0.667969 3.99935V11.9993C0.667969 12.7357 1.26492 13.3327 2.0013 13.3327H14.0013C14.7377 13.3327 15.3346 12.7357 15.3346 11.9993V3.99935C15.3346 3.26297 14.7377 2.66602 14.0013 2.66602Z"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.667969 6.66602H15.3346"
            stroke={props.color ?? '#ffffff'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1573_3695">
            <rect width="16" height="16" fill={props.color ?? '#ffffff'} />
          </clipPath>
        </defs>
      </StyledSVG>
    )
  },
}
