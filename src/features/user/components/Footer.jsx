import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 text-primary text-sm drop-shadow-xl">
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        {/* Social Media */}
        <div className="mb-6">
          <p className="font-bold mb-2">FOLLOW US ON</p>
          <div className="flex justify-center gap-4 text-2xl">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Copyright & Policies */}
        <div className="text-xs sm:text-sm mt-4">
          <p className="mb-2 font-semibold">©2025 MBC | All Right Reserved.</p>
          <p className="font-semibold space-x-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Return & Refund Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
