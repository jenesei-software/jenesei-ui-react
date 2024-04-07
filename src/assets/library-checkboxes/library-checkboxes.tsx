import { LibraryCheckboxesProps } from '.'

export const LibraryCheckboxes: LibraryCheckboxesProps = {
  Radio: function (props) {
    return (
      <svg
        className={props.className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
          fill="#5555E4"
          id="check"
        />
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
          fill="#5555E4"
          id="uncheck"
        />
      </svg>
    )
  },
  Square: function (props) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="1"
          strokeWidth="2"
          id="not-center"
        />
        <rect id="center" x="3" y="3" width="18" height="18" rx="2" />
        <path
          id="center-white"
          d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
        />
      </svg>
    )
  },
}
