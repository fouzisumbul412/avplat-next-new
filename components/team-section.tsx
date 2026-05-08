import { AnimatedTeamSection } from "@/components/ui/team-section";

interface TeamMember {
  id?: string;
  name: string;
  role: string;
  image: string;
}

interface TeamProps {
  title: string;
  description: string;
  members: TeamMember[];
}

export default function Team({ title, description, members }: TeamProps) {
  if (!members || members.length === 0) return null;

  return (
    <section className="bg-background">
      <AnimatedTeamSection
        title={title}
        description={description}
        members={members}
      />
    </section>
  );
}