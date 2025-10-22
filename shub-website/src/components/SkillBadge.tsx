import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

const SkillBadge = ({ name, icon }: SkillBadgeProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: [0, -2, 2, -2, 0],
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge
        variant="outline"
        className="px-4 py-2 text-sm border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default"
      >
        {icon && <span className="mr-2">{icon}</span>}
        {name}
      </Badge>
    </motion.div>
  );
};

export default SkillBadge;
