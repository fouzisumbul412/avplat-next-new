import { AnimatedTeamSection } from "@/components/ui/team-section";

const teamMembers = [
  {
    name: "Johnathan Doe",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Jane Smith",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Peter Jones",
    role: "Head of Strategy",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Lead",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Michael Brown",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Emily Davis",
    role: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "David Garcia",
    role: "Operations Head",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
];

export default function Team() {
  return (
    <main className="min-h-screen bg-background">
      <AnimatedTeamSection
        title="Our commitment to integrity and innovation"
        description="At TopOpti, we believe in forging strong partnerships built on integrity and honesty. Our mission is to drive innovation and ensure our clients’ success through dedicated service and creative solutions."
        members={teamMembers}
      />
    </main>
  );
}