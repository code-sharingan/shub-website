import { motion } from "framer-motion";
import { Award } from "lucide-react";
import cyberBg from "@/assets/cyber-bg.png";
import ociBadge from "@/assets/OCI25DOPOCP.jpg";

const CertificationsSection = () => {
  return (
    <motion.section
      id="certifications"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 20, 0.95), rgba(5, 5, 20, 0.95)), url(${cyberBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-orange-500/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Professional Certifications
          </motion.h2>

          <motion.div
            className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(248, 113, 113, 0.3)" }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Badge Image */}
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-lg opacity-30 blur-lg"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <img
                    src={ociBadge}
                    alt="Oracle Cloud Infrastructure Professional DevOps Certification Badge"
                    className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg object-contain shadow-2xl"
                    style={{
                      mixBlendMode: 'lighten',
                      filter: 'brightness(1.1) contrast(1.1)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Certification Details */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <Award className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Oracle Cloud Infrastructure Professional
                  </h3>
                </div>
                <p className="text-lg sm:text-xl text-primary mb-3">
                  DevOps Professional Certification
                </p>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Certification ID: <span className="font-mono text-orange-400">OCI25DOPOCP</span>
                </p>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  Demonstrated expertise in implementing and managing DevOps practices on Oracle Cloud Infrastructure,
                  including CI/CD pipelines, infrastructure as code, monitoring, and automated deployment strategies.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-red-500/10 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">
                    OCI DevOps
                  </span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-300 rounded-full text-sm font-semibold border border-orange-500/30">
                    CI/CD
                  </span>
                  <span className="px-3 py-1 bg-red-500/10 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">
                    Infrastructure as Code
                  </span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-300 rounded-full text-sm font-semibold border border-orange-500/30">
                    Cloud Automation
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CertificationsSection;
