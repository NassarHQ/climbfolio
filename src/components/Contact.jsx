import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  Contact,
} from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvgqdplw";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", msg: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: "error", msg: "Please fill out all fields." });
      setTimeout(() => setSubmitStatus({ type: "", msg: "" }), 3000);
      return;
    }
    if (formData.honeypot) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: "", msg: "" });

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const errMsg =
          data?.errors?.[0]?.message || "Could not send. Please try again.";
        throw new Error(errMsg);
      }

      setSubmitStatus({ type: "success", msg: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } catch (err) {
      setSubmitStatus({
        type: "error",
        msg: err.message || "Could not send. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus({ type: "", msg: "" }), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mnassar.personal@gmail.com",
      href: "mailto:mnassar.personal@gmail.com",
      color: "blue",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "https://maps.google.com/?q=San%20Francisco%2C%20CA",
      color: "purple",
      target: "_blank",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/NassarHQ",
      href: "https://github.com/NassarHQ",
      color: "cyan",
      target: "_blank",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/monassardev",
      href: "https://www.linkedin.com/in/monassardev",
      color: "blue",
      target: "_blank",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "text-blue-400 bg-blue-500/20 border-blue-400/40 hover:bg-blue-500/30",
      green:
        "text-green-400 bg-green-500/20 border-green-400/40 hover:bg-green-500/30",
      purple:
        "text-purple-400 bg-purple-500/20 border-purple-400/40 hover:bg-purple-500/30",
      cyan: "text-cyan-400 bg-cyan-500/20 border-cyan-400/40 hover:bg-cyan-500/30",
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      /* scroll-mt offsets anchor scroll when you have a sticky header */
      className="relative w-full py-20 px-4 text-white overflow-hidden scroll-mt-24 md:scroll-mt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <motion.div
          className="inline-flex items-center space-x-2 mb-4"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          aria-hidden="true"
        >
          <Contact className="text-blue-400" size={32} />
          <MessageCircle className="text-yellow-500" size={24} />
        </motion.div>

        <h2 className="font-winky text-4xl md:text-5xl font-bold bg-blue-500 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Ready to launch your next project? Let's connect across the digital
          universe
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          /* make columns same height */
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="h-full">
            <div className="relative h-full p-8 rounded-3xl backdrop-blur-md border border-white/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex flex-col">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-winky text-2xl font-bold text-blue-400 mb-6 flex items-center">
                  <Mail className="mr-3" size={24} />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target={item.target || "_self"}
                        rel={
                          item.target === "_blank"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`group flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${getColorClasses(
                          item.color
                        )}`}
                        aria-label={`${item.label}: ${item.value}`}
                      >
                        <div className="flex-shrink-0">
                          <IconComponent size={80} />
                        </div>
                        <div className="flex-1">
                          <p className="text-white/60 text-sm">{item.label}</p>
                          <p className="text-white font-medium break-all">
                            {item.value}
                          </p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Send size={16} />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="h-full">
            <div className="relative h-full p-8 rounded-3xl backdrop-blur-md border border-white/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex flex-col">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-50"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-winky text-2xl font-bold text-purple-400 mb-6 flex items-center">
                  <MessageCircle className="mr-3" size={24} />
                  Send Message
                </h3>

                <form
                  className="space-y-6 flex-1 flex flex-col"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* hidden honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="Your Name"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                      autoComplete="email"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      /* keep a reasonable height without making the card much taller */
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-y min-h-[110px] md:min-h-[140px] max-h-[220px]"
                      placeholder="Tell me about your project..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-purple-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            aria-hidden="true"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>

                    <div
                      className={`text-center font-medium min-h-[1.25rem] mt-3 ${
                        submitStatus.type === "success"
                          ? "text-green-400"
                          : submitStatus.type === "error"
                          ? "text-red-400"
                          : "text-white/70"
                      }`}
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      {submitStatus.msg}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
