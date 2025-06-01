import bgImage from "../../../../assets/background/background.jpeg"; // ganti sesuai gambar kamu

export default function HeroSection() {
  return (
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
          This elegant camera bag is crafted from high-quality genuine leather,
          offering durability, style, and practical organization.
        </p>
        <Button classname="bg-secondary text-white px-6 py-3 rounded font-bold hover:opacity-90">
          Shop Now
        </Button>
      </motion.div>
    </section>
  );
}
