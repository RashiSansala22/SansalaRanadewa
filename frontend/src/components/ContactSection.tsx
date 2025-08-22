import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "your_service_id", // 🔹 Replace with EmailJS Service ID
        "your_template_id", // 🔹 Replace with EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "your_public_key" // 🔹 Replace with EmailJS Public Key
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus("success");
          setSubmitMessage(
            "✅ Thank you! Your message has been sent successfully."
          );
          setFormData({ name: "", email: "", subject: "", message: "" });

          setTimeout(() => {
            setSubmitStatus("");
            setSubmitMessage("");
          }, 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setIsSubmitting(false);
          setSubmitStatus("error");
          setSubmitMessage(
            "❌ Oops! Something went wrong. Please try again later."
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background decorations */}
      <div className="absolute w-32 h-32 bg-blue-200 rounded-full top-20 left-10 dark:bg-blue-800 mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute w-32 h-32 bg-indigo-200 rounded-full top-40 right-10 dark:bg-indigo-800 mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute w-32 h-32 bg-purple-200 rounded-full -bottom-8 left-20 dark:bg-purple-900 mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Have a project in mind or want to collaborate? Feel free to reach
            out to me using the form below or through my contact information.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="h-full p-8 transition-all duration-300 border shadow-xl bg-white/80 dark:bg-gray-800 backdrop-blur-sm rounded-2xl border-white/20 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1">
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                  <Mail size={28} className="text-white" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ready to start your project?
                </p>
              </div>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800">
                  <div className="p-3 mr-4 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-blue-600">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                      Email
                    </h4>
                    <a
                      href="mailto:rashisansala2002@gmail.com"
                      className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700"
                    >
                      rashisansala2002@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-800">
                  <div className="p-3 mr-4 rounded-full shadow-lg bg-gradient-to-r from-green-500 to-green-600">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                      Phone
                    </h4>
                    <a
                      href="tel:+94761874842"
                      className="font-medium text-green-600 dark:text-green-400 hover:text-green-700"
                    >
                      +94 76 187 4842
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800">
                  <div className="p-3 mr-4 rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-purple-600">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                      Location
                    </h4>
                    <p className="font-medium text-purple-600 dark:text-purple-400">
                      Puttalam, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="p-8 transition-all duration-300 border shadow-xl bg-white/80 dark:bg-gray-800 backdrop-blur-sm rounded-2xl border-white/20 dark:border-gray-700 hover:shadow-2xl">
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Send Me a Message
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I'd love to hear from you. Send me a message and I'll respond
                  as soon as possible.
                </p>
              </div>

              {/* Success / Error */}
              {submitStatus && (
                <div
                  className={`mb-6 p-4 rounded-xl border text-center ${
                    submitStatus === "success"
                      ? "bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700"
                      : "bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full px-4 py-3 text-gray-900 bg-white border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-xl"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 text-gray-900 bg-white border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-xl"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject *"
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-xl"
                />

                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message *"
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border-2 border-gray-200 resize-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-xl"
                ></textarea>

                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center px-8 py-4 mx-auto font-semibold text-white transition-all shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:scale-105 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send size={20} className="ml-2" />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
