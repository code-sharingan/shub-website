import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

const SkillBadge = ({ name, icon }: SkillBadgeProps) => {
  return (
    <Badge 
      variant="outline" 
      className="px-4 py-2 text-sm border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {name}
    </Badge>
  );
};

export default SkillBadge;
