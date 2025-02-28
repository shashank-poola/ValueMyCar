 "use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, User, Menu, X } from "lucide-react"
import { Logo } from "./logo"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { GradientButton } from "./gradient-button"
import { Input } from "@/components/ui/input"

interface NavbarProps {
  isLoggedIn: boolean
  userDetails: {
    name: string
    email: string
    profilePicture?: string
  } | null
  onLogout: () => void
}

export function Navbar({ isLoggedIn, userDetails, onLogout }: NavbarProps) {
  const router = useRouter()
  const [showSearch, setShowSearch] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const searchTerm = new FormData(form).get("search")
    window.open(`https://www.google.com/search?q=${searchTerm}+cars`, "_blank")
    form.reset()
    setShowSearch(false)
  }

  const navItems = [
    { name: "Search cars", href: "#" },
    { name: "Sell", href: "/cars" },
    { name: "Predict", href: "https://kzmq32usk026vhfh8k0o.lite.vusercontent.net/" },
    { name: "Market Insights", href: "/market-insights" },
    { name: "About us", href: "/about" },
  ]

  return (
    <header className="w-full border-b border-gray-800 bg-black">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Logo />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 lg:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-sm font-medium text-gray-300 hover:text-white"
                onClick={(e) => {
                  if (item.name === "Search cars") {
                    e.preventDefault()
                    setShowSearch(!showSearch)
                  } else if (item.href.startsWith("http")) {
                    e.preventDefault()
                    window.open(item.href, "_blank")
                  }
                }}
              >
                <div className="flex items-center space-x-1">
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.name}</span>
                </div>
                <div className="absolute -bottom-[1.5rem] left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-red-500 to-red-600 transition-transform group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-gray-800">
              {isLoggedIn ? (
                <>
                  <div className="p-2">
                    <p className="font-medium text-white">{userDetails?.name}</p>
                    <p className="text-sm text-gray-400">{userDetails?.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => router.push("/user-dashboard")}
                    className="text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    User Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => router.push("/settings")}
                    className="text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => router.push("/feedback")}
                    className="text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    Feedback
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => router.push("/contact-us")}
                    className="text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    Contact Us
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => router.push("/logout")}
                    className="text-red-400 hover:text-red-300 hover:bg-gray-800"
                  >
                    Logout
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem
                    onClick={() => router.push("/signup")}
                    className="text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    Sign Up
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => router.push("/login")}
                    className="text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    Login
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden bg-gray-900 py-4">
          <div className="container px-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-gray-300 hover:text-white"
                onClick={(e) => {
                  if (item.name === "Search cars") {
                    e.preventDefault()
                    setShowSearch(!showSearch)
                    setShowMobileMenu(false)
                  } else if (item.href.startsWith("http")) {
                    e.preventDefault()
                    window.open(item.href, "_blank")
                  } else {
                    setShowMobileMenu(false)
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {showSearch && (
        <div className="border-t border-gray-800 bg-black p-4">
          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <Input
              type="search"
              name="search"
              placeholder="Search for cars..."
              className="w-full px-4 py-2 bg-gray-800 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </form>
        </div>
      )}
    </header>
  )
}

