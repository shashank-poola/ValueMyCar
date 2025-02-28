import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">
              The most trusted platform for buying and selling used cars.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">How It Works</Link></li>
              <li><Link href="#" className="hover:text-white">Car Valuation</Link></li>
              <li><Link href="#" className="hover:text-white">Sell Your Car</Link></li>
              <li><Link href="#" className="hover:text-white">Buy Used Cars</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">Contact Info</h3>
            <ul className="space-y-2">
              <li>1234 Jubilee Hills</li>
              <li>Hyderabad, India</li>
              <li>contact@valuemycar.com</li>
              <li>+1 234 567 890</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Value My Car. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

