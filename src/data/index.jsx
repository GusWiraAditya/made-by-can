import cat1 from "../assets/categories/cat1.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"
import cat2 from "../assets/categories/cat2.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"
import cat3 from "../assets/categories/cat3.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"
import bag1 from "../assets/products/BAG1.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"
import bag2 from "../assets/products/BAG2.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"
import bag3 from "../assets/products/BAG3.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"
import bag4 from "../assets/products/BAG4.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"

export const categories = [
  { img: cat1, label: "Shoulder Bag" },
  { img: cat2, label: "Massanger Bag" },
  { img: cat3, label: "Waist Bag" },
];

export const productsData = [
  { img: bag1, name: "Spartan Backpack", price: 777000 },
  { img: bag2, name: "Pepz Backpack", price: 999000 },
  { img: bag3, name: "Zarwo Slingbag", price: 550000 },
  { img: bag4, name: "Petod Leather Bag", price: 696900 },
  { img: bag1, name: "Spartan Backpack", price: 777000 },
  { img: bag2, name: "Pepz Backpack", price: 999000 },
  { img: bag3, name: "Zarwo Slingbag", price: 550000 },
  { img: bag4, name: "Petod Leather Bag", price: 696900 },
  { img: bag4, name: "Petod Leather Bag", price: 696900 },
  { img: bag4, name: "Petod Leather Bag", price: 696900 },
  { img: bag4, name: "Petod Leather Bag", price: 696900 },
  { img: bag4, name: "Petod Leather Bag", price: 696900 },
];
export const reviews = [
  { img: bag1, name: "Gus Wira", email: "guswiraaditya@gmail.com" },
  { img: bag2, name: "Hendra Dinata", email: "hendradinata17@gmail.com" },
  { img: bag3, name: "Tjok Turah Alit", email: "cokoerdaykey99@gmail.com" },
];

export const questions = [
  {
    id: 1,
    question: "Apa itu MadeByCan?",
    answer:
      "MadeByCan adalah platform e-commerce yang memberdayakan pelaku UMKM untuk memasarkan produk kerajinan tangan secara online kepada pasar lokal maupun internasional.",
  },
  {
    id: 2,
    question: "Bagaimana cara mendaftar sebagai penjual?",
    answer:
      "Kamu dapat mendaftar sebagai penjual dengan mengisi formulir pendaftaran di halaman 'Daftar UMKM', lalu tim kami akan memverifikasi datamu dalam waktu maksimal 2x24 jam.",
  },
  {
    id: 3,
    question: "Apakah produk yang dijual dijamin keasliannya?",
    answer:
      "Ya, kami bekerjasama langsung dengan pengrajin lokal dan melakukan kurasi produk sebelum ditampilkan di platform.",
  },
  {
    id: 4,
    question: "Bagaimana metode pembayarannya?",
    answer:
      "Kami menyediakan berbagai metode pembayaran seperti transfer bank, e-wallet (OVO, DANA, GoPay), dan kartu kredit.",
  },
];