import { useEffect, useState } from "react";
import bgImage from "../../../assets/background/background.jpeg"; // ganti sesuai gambar kamu
import Button from "../../../components/ui/Button";
import InputForm from "../../../components/ui/Input";
import TextAreaForm from "../../../components/ui/TextArea";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { ChevronDown, ChevronUp } from "lucide-react";
import cat1 from "../../../assets/categories/cat1.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"
import cat2 from "../../../assets/categories/cat2.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"
import cat3 from "../../../assets/categories/cat3.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"
import bag1 from "../../../assets/products/BAG1.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"
import bag2 from "../../../assets/products/BAG2.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"
import bag3 from "../../../assets/products/BAG3.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"
import bag4 from "../../../assets/products/BAG4.jpeg"; // yang benar dari "framer-motion", bukan "motion/react"

const categories = [
  { img: cat1, label: "Shoulder Bag" },
  { img: cat2, label: "Massanger Bag" },
  { img: cat3, label: "Waist Bag" },
];

const products = [
  { img: bag1, name: "Spartan Backpack", price: 777000 },
  { img: bag2, name: "Pepz Backpack", price: 999000 },
  { img: bag3, name: "Zarwo Slingbag", price: 550000 },
  { img: bag4, name: "Petod Leather Bag", price: 696900 },
  { img: bag1, name: "Spartan Backpack", price: 777000 },
  { img: bag2, name: "Pepz Backpack", price: 999000 },
  { img: bag3, name: "Zarwo Slingbag", price: 550000 },
  { img: bag4, name: "Petod Leather Bag", price: 696900 },
];
const reviews = [
  { img: bag1, name: "Gus Wira", email: "guswiraaditya@gmail.com" },
  { img: bag2, name: "Hendra Dinata", email: "hendradinata17@gmail.com" },
  { img: bag3, name: "Tjok Turah Alit", email: "cokoerdaykey99@gmail.com" },
];

const questions = [
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
// Animation variant untuk setiap item
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "W6bVhPQqrnw"; // ambil dari URL video
  const [activeIndex, setActiveIndex] = useState(0); // pertama aktif

  const toggleQuestion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <>
      <section
        className="relative h-screen bg-fixed bg-cover bg-center flex items-center px-6 md:px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(109,78,46,0.8), rgba(109,78,46,0.8)), url(${bgImage})`,
        }}
      >
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl text-white space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Handcrafted Genuine <br /> Leather Camera.
          </h1>
          <p className="text-md md:text-lg text-gray-200">
            This elegant camera bag is crafted from high-quality genuine
            leather, offering durability, style, and practical organization.
          </p>
          <Button classname="bg-secondary text-white px-6 py-3 rounded font-bold hover:opacity-90">
            Shop Now
          </Button>
        </motion.div>
      </section>
      <section className="p-6 md:px-20 md:pt-20">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-8"
        >
          Our Top Categories
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category, idx) => (
            <motion.div
              custom={idx}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              key={idx}
              className="relative w-full h-full overflow-hidden rounded group cursor-pointer"
            >
              {/* Gambar dengan efek zoom saat hover */}
              <img
                src={category.img}
                alt={`Category ${idx}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Gradien */}
              <div className="absolute inset-0 bg-[rgba(109,78,46,0.5)] z-10"></div>

              {/* Teks di Tengah */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <p className="text-white text-xl sm:text-3xl font-semibold text-center px-2">
                  {category.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="p-6 md:px-20 md:py-10">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-8"
        >
          <div className="flex items-center justify-between">
            <h1>Our Top Collections</h1>
            <p className="text-sm font-normal">See More</p>
          </div>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((item, idx) => (
            <motion.div
              custom={idx}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              key={idx}
              className="w-full h-full overflow-hidden rounded group cursor-pointer"
            >
              <img
                src={item.img}
                alt={`Product ${idx}`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="flex flex-col items-start mt-2">
                <p className="text-black text-sm sm:text-lg font-semibold">
                  {item.name}
                </p>
                <p className="text-black text-sm sm:text-lg font-normal">
                  Rp.{" "}
                  {item.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="relative w-full h-[600px] mx-auto aspect-video overflow-hidden shadow-lg">
        {!isPlaying ? (
          <div
            className="relative w-full h-[600px] cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            {/* Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Thumbnail"
              className="w-full h-[600px] object-cover"
            />

            {/* Overlay coklat dengan opacity 60% */}
            <div className="absolute inset-0 bg-primary/60 h-[600px]"></div>

            {/* Tombol Play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-md p-5 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                <Play className="text-primary w-8 h-8" />
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-[600px]"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <section className="p-6 md:px-20 md:py-10">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-8"
        >
          <div className="flex items-center justify-between">
            <h1>Review Customer</h1>
          </div>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {reviews.map((review, idx) => (
            <motion.div
              custom={idx}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              key={idx}
              className="w-full h-full overflow-hidden rounded bg-secondary p-5"
            >
              <div className="flex items-center justify-center border-b-2 pb-3">
                <img
                  src={review.img}
                  alt={`review ${idx}`}
                  className="aspect-[4/4] w-28 object-cover rounded-full mr-5"
                />
                <div className="flex flex-col items-start mt-2 text-neutral-50">
                  <p className=" text-sm sm:text-lg font-semibold">
                    {review.name}
                  </p>
                  <p className=" text-sm sm:text-lg font-normal">
                    {review.email}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <FaStar className="text-primary" />
                    <FaStar className="text-primary" />
                    <FaStar className="text-primary" />
                    <FaRegStarHalfStroke className="text-primary" />
                    <FaRegStar className="text-primary" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-justify mt-2 text-neutral-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, nostrum unde, at natus doloremque distinctio aut,
                mollitia facilis in tempora ipsa veritatis fugiat atque
                perferendis quis porro provident! Voluptates, expedita.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-primary p-6 md:px-20 md:py-10">
        <div className="w-full mx-auto px-4">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl font-bold text-neutral-50 mb-4 sm:mb-8"
          >
            <div className="flex items-center justify-center">
              <h1>Question & Answer</h1>
            </div>
          </motion.h1>
          <div className="space-y-4">
            {questions.map((item, index) => (
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                key={item.id}
                className="bg-secondary text-white rounded-xl px-6 py-4 shadow-2xl"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-2xl font-bold">{item.question}</h3>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="mt-3 text-lg text-white transition-all duration-300 border-t-2 border-primary pt-2">
                    {item.answer}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className=" p-6 md:px-20 md:py-10">
        <div className="w-full mx-auto px-4">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-8"
          >
            <div className="flex items-center justify-between">
              <h1>Contact Us</h1>
            </div>
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full overflow-hidden rounded px-2"
            >
              <form action="/">
                <div className="mb-2">
                  <InputForm
                    label="Full Name"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Full name*"
                  />
                </div>
                <div className="mb-2">
                  <InputForm
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email*"
                  />
                </div>
                <div className="mb-2">
                  <TextAreaForm
                    label="Message"
                    value=""
                    placeholder="Write your message here...*"
                  />
                </div>
                <Button classname="bg-primary w-full font-bold text-white font-inter">
                  Submit
                </Button>
              </form>
            </motion.div>
            <motion.iframe
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.0198978836206!2d115.169173174821!3d-8.784197589762089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24511736ad3eb%3A0xe94b177e97228027!2sKost%20Yuen!5e0!3m2!1sid!2sid!4v1748297658875!5m2!1sid!2sid"
              width="100%"
              height="100%"
              className="border-0 rounded-lg shadow-md"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
