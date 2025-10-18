import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Important Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Important Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bedsheet
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-blue-500 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-pink-500 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white text-2xl">
              <FaXTwitter />
            </a>
            <a href="#" className="text-blue-400 text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-red-500 text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Informations */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Informations</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                F.A.Qs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Track Order
              </a>
            </li>
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
          <p>Noida Sector 15</p>
          <p>Uttar Pradesh 201301</p>
          <p className="mt-2">+91-9318393428</p>
          <p>help@ginnora.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
          <p className="mb-4">
            Subscribe to get notified about product launches, special offers and
            news.
          </p>
          <input
            type="email"
            placeholder="help@ginnora.com"
            className="w-full p-3 rounded text-black outline-none"
          />
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-5 py-3 rounded mt-3">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm">
        © 2025 ginnora All rights reserved.
      </div>
    </footer>
  );
}
