import { MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const whatsappNumber = "919610892222";
  const message = encodeURIComponent("Hello! I am interested in admission information for institutes in Sikar.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <motion.a
        href="tel:+919610892222"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-indigo-600 text-white p-4 rounded-full shadow-2xl hover:bg-indigo-700 transition-colors flex items-center justify-center"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-colors flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
