import { useEffect, useState } from "react";
import bgImage from "../../../assets/background/background.jpeg";
import { motion } from "framer-motion";
import logo from "../../../assets/logo/mbc-putih.png";
import imgBag from "../../../assets/products/BAG2.jpeg";
import { Play } from "lucide-react";

export default function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "W6bVhPQqrnw";

  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-fixed bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(109,78,46,0.8), rgba(109,78,46,0.8)), url(${bgImage}`,
        }}
      >
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <img src={logo} alt="mbc" className="mx-auto w-28 md:w-60 mt-12" />
        </motion.div>
      </section>

      {/* Konten utama sesuai desain */}
      <section className="grid place-items-center px-6 md:px-20 pt-12 pb-12 text-white">
        <motion.div
        animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7 }}
        className="bg-secondary grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 max-w-6xl w-full">
          {/* Kiri Atas: Deskripsi */}
          <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.7 }}
          className="p-6 text-center items-center justify-center flex flex-col">
            <p className="text-md leading-relaxed">
              Designed for photographers who value both function and aesthetics,
              this leather camera bag features a vintage look with modern
              protection. With adjustable dividers and secure closures, it keeps
              your gear safe while adding a timeless touch to your style.
            </p>
          </motion.div>

          {/* Kanan Atas: Video */}
          <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.7 }}
          className="w-full aspect-video relative overflow-hidden">
            {!isPlaying ? (
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-md hover:scale-110 transition-transform duration-300">
                    <Play className="text-[#6d4e2e] w-8 h-8" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </motion.div>

          {/* Kiri Bawah: Gambar */}
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.7 }}
          >
            <img
              src={imgBag}
              alt="bag"
              className="aspect-video h-full object-cover shadow-lg"
            />
          </motion.div>

          {/* Kanan Bawah: Teks Bold */}
          <motion.div
           whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.7 }}
          className="p-6 text-center items-center justify-center flex flex-col">
            <p className="text-md font-semibold leading-relaxed text-center">
              Welcome to MadebyCan, your go-to destination for high-quality,
              handcrafted products. We believe in timeless design, lasting
              durability, and honest craftsmanship. Every piece is thoughtfully
              made to elevate your everyday experience.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
