import React from "react";
import { motion } from "framer-motion";
import { FaM } from "react-icons/fa6";
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import ContactButton from "./ContactButton";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_75z3jut', 'template_0ud9hci', form.current, {
        publicKey: 'UO8RqwuhwtzGRKnIy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="font-semibold text-3xl text-center mb-4 text-black">
          Get in <span className="text-main">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mx-w-2xl mx-auto mb-16">
          Let’s create something amazing together ,feel free to reach out!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* contact form  */}
          <div>
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <div>
                <label className="block text-black mb-2" htmlFor="name" >
                  your Name
                </label>
                <input
                  className="w-full bg-dark-300 border border-black rounded-lg px-4 py-3 "
                  type="text"
                  name="name"
                />
              </div>
              <div>
                <label className="block text-black mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full bg-dark-300 border border-black rounded-lg px-4 py-3"
                  type="email"
                   name="email"
                />
              </div>

              <div>
                <label className="block text-black mb-2" htmlFor="message" >
                  Message
                </label>
                <textarea
                  className="w-full h-40 bg-dark-300 border border-black rounded-lg px-4 py-3"
                  type="text"
                  name="message"
                />
              </div>

              <ContactButton />
            </form>
          </div>
          {/* contact info */}
          <div className="space-y-8 ml-20">
            <div className="flex items-start">
              <div className="text-main text-2xl mr-4">
                <FaMapMarkedAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black">Location</h3>
                <p className="text-gray-400">Jadavpur,Kolkata</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-main text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black">Email</h3>
                <p className="text-gray-400">ankushsamanta2019@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-main text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black">Phone No.</h3>
                <p className="text-gray-400">9091808088</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="mb-4 text-lg font-semibold">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/MrFantastico007"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-2xl text-main hover:bg-main hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/ankush-samanta-804403295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-2xl text-main hover:bg-main hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.instagram.com/mr.fantastico_/"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-2xl text-main hover:bg-main hover:text-white transition duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/share/1MAU77qzsF/"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-2xl text-main hover:bg-main hover:text-white transition duration-300"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
