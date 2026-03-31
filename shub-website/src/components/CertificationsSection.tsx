import { motion } from "framer-motion";
import { Award } from "lucide-react";
import cyberBg from "@/assets/cyber-bg.png";
import ociBadge from "@/assets/OCI25DOPOCP.jpg";
import googleMlBadge from "@/assets/Badge.png";

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
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Professional Certifications
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* OCI Certification */}
            <motion.div
              className="bg-card border border-border rounded-lg p-8 md:p-10 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(248, 113, 113, 0.3)" }}
            >
              <motion.div
                className="flex-shrink-0 mb-5"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-lg opacity-30 blur-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <img
                    src={ociBadge}
                    alt="Oracle Cloud Infrastructure Professional DevOps Certification Badge"
                    className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-lg object-contain shadow-2xl"
                    style={{ mixBlendMode: 'lighten', filter: 'brightness(1.1) contrast(1.1)' }}
                  />
                </div>
              </motion.div>
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-5 h-5 text-orange-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Oracle Cloud Infrastructure</h3>
              </div>
              <p className="text-lg text-primary mb-1">DevOps Professional</p>
              <p className="text-sm text-muted-foreground mb-3">
                ID: <span className="font-mono text-orange-400">OCI25DOPOCP</span>
              </p>
              <p className="text-base text-foreground/80 leading-relaxed mb-5">
                Demonstrated expertise in designing and managing DevOps workflows on Oracle Cloud Infrastructure,
                including building CI/CD pipelines with OCI DevOps, provisioning infrastructure as code with
                Terraform, containerizing applications with OKE, and automating deployments across cloud environments.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1.5 bg-red-500/10 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">OCI DevOps</span>
                <span className="px-3 py-1.5 bg-orange-500/10 text-orange-300 rounded-full text-sm font-semibold border border-orange-500/30">CI/CD</span>
                <span className="px-3 py-1.5 bg-red-500/10 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">Terraform</span>
                <span className="px-3 py-1.5 bg-orange-500/10 text-orange-300 rounded-full text-sm font-semibold border border-orange-500/30">Kubernetes</span>
                <span className="px-3 py-1.5 bg-red-500/10 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">Cloud Automation</span>
              </div>
            </motion.div>

            {/* Google ML Certification */}
            <motion.div
              className="bg-card border border-border rounded-lg p-8 md:p-10 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
            >
              <motion.div
                className="flex-shrink-0 mb-5"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href="https://www.credly.com/badges/5f47a9a8-6c7b-4fd3-a988-4a88084030a3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative">
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 rounded-lg opacity-30 blur-lg"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.img
                      src={googleMlBadge}
                      alt="Google Professional Machine Learning Engineer Certification Badge"
                      className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-lg object-contain shadow-2xl cursor-pointer"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                </a>
              </motion.div>
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Google Cloud</h3>
              </div>
              <p className="text-lg text-primary mb-1">Professional Machine Learning Engineer</p>
              <p className="text-sm text-muted-foreground mb-3">Issued via Credly</p>
              <p className="text-base text-foreground/80 leading-relaxed mb-5">
                Proven proficiency in designing, building, and productionizing ML models on Google Cloud,
                including data preparation with BigQuery, model training with Vertex AI, building end-to-end
                ML pipelines, and implementing MLOps practices for model monitoring, versioning, and automated retraining.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">Vertex AI</span>
                <span className="px-3 py-1.5 bg-green-500/10 text-green-300 rounded-full text-sm font-semibold border border-green-500/30">BigQuery</span>
                <span className="px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">MLOps</span>
                <span className="px-3 py-1.5 bg-green-500/10 text-green-300 rounded-full text-sm font-semibold border border-green-500/30">TensorFlow</span>
                <span className="px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">ML Pipelines</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CertificationsSection;
