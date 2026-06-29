import { motion } from "framer-motion";
import ociBadge from "@/assets/OCI25DOPOCP.jpg";
import googleMlBadge from "@/assets/Badge.png";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Cert = {
  badge: string;
  issuer: string;
  title: string;
  meta: string;
  desc: string;
  tags: string[];
  href?: string;
};

const CERTS: Cert[] = [
  {
    badge: googleMlBadge,
    issuer: "Google Cloud",
    title: "Professional Machine Learning Engineer",
    meta: "2025 · Credly verified",
    desc: "Designing, building, and productionizing ML models on Google Cloud — data prep with BigQuery, training with Vertex AI, end-to-end ML pipelines, and MLOps for monitoring, versioning, and automated retraining.",
    tags: ["Vertex AI", "BigQuery", "MLOps", "ML Pipelines"],
    href: "https://www.credly.com/badges/5f47a9a8-6c7b-4fd3-a988-4a88084030a3",
  },
  {
    badge: ociBadge,
    issuer: "Oracle Cloud Infrastructure",
    title: "DevOps Professional",
    meta: "ID · OCI25DOPOCP",
    desc: "DevOps workflows on Oracle Cloud Infrastructure — CI/CD with OCI DevOps, infrastructure as code with Terraform, containerization with OKE, and automated deployments across cloud environments.",
    tags: ["CI/CD", "Terraform", "Kubernetes", "Cloud Automation"],
  },
];

const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="border-t border-foreground/10 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between border-b border-foreground/10 pb-6">
          <div>
            <p className="section-label mb-3">04 — Certifications</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-none tracking-[-0.02em] text-foreground">
              Credentials
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {CERTS.map((c, i) => {
            const inner = (
              <>
                <div className="flex items-center justify-center rounded-lg border border-foreground/10 bg-card/60 p-3">
                  <img
                    src={c.badge}
                    alt={`${c.issuer} ${c.title} badge`}
                    className="h-20 w-20 object-contain sm:h-24 sm:w-24"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {c.issuer}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{c.meta}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-foreground/12 px-3 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            const className =
              "flex flex-col gap-6 rounded-xl border border-foreground/10 bg-card/40 p-7 transition-colors duration-300 hover:border-accent/40 sm:flex-row sm:items-start";

            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              >
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={className}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
