import Button from "../../../components/ui/Button";
import InputForm from "../../../components/ui/Input";
import {motion} from "framer-motion";
import TextAreaForm from "../../../components/ui/TextArea";
import bgImage from "../../../assets/background/bg-collections.jpeg";


export default function ContactPage() {
    return (
        <>
        {/* HERO */}
              <section
                className="relative h-[250px] bg-fixed bg-cover bg-center flex items-center justify-center px-6 md:px-20"
                style={{
                  backgroundImage: `linear-gradient(rgba(109,78,46,0.8), rgba(109,78,46,0.8)), url(${bgImage})`,
                }}
              >
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  animation={{ duration: 0.7 }}
                  className="max-w-xl text-white text-center mt-20"
                >
                  <h1 className="text-3xl md:text-5xl font-bold">
                    <span className="block">Contact Us</span>
                  </h1>
                </motion.div>
              </section>
              <section className=" p-6 md:px-20 md:py-10">
        <div className="w-full mx-auto px-4">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animation={{ duration: 0.7 }}
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
              animation={{ duration: 0.7 }}
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
              animation={{ duration: 0.7 }}
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
        

    )
}