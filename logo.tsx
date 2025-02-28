import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/dialog/2000"
        className="text-red-500"
      >
        <path
          d="M26 10L24.17 16H7.83L6 10H26Z"
          fill="currentColor"
        />
        <path
          d="M6 20C6 21.1046 6.89543 22 8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20Z"
          fill="currentColor"
        />
        <path
          d="M22 20C22 21.1046 22.8954 22 24 22C25.1046 22 26 21.1046 26 20C26 18.8954 25.1046 18 24 18C22.8954 18 22 18.8954 22 20Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 8C4 7.44772 4.44772 7 5 7H27C27.5523 7 28 7.44772 28 8V22C28 22.5523 27.5523 23 27 23H5C4.44772 23 4 22.5523 4 22V8ZM6 9V21H26V9H6Z"
          fill="currentColor"
        />
      </svg>
      <span className="font-bold text-xl">
        <span className="text-white">Value</span>
        <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent"> My Car</span>
      </span>
    </Link>
  )
}

