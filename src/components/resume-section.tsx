interface ResumeTitleSectionProps {
  children: React.ReactNode;
}

interface ResumeSummarySectionProps {
  children: React.ReactNode;
}

interface ResumeWorkSectionProps {
  title: string;
  position: string;
  startDate: string;
  endDate: string;
  children: React.ReactNode;
}

interface ResumeSkillsSectionProps {
  skills: string[];
}

interface ResumeEducationSectionProps {
  title: string;
  startDate: string;
  endDate: string;
  children: React.ReactNode;
}

export function ResumeTitleSection({ children }: ResumeTitleSectionProps) {
  return <div className="px-4 pt-8 text-2xl font-bold">{children}</div>;
}

export function ResumeSummarySection({ children }: ResumeSummarySectionProps) {
  return <div className="px-4 py-8">{children}</div>;
}

export function ResumeWorkSection({
  title,
  position,
  startDate,
  endDate,
  children,
}: ResumeWorkSectionProps) {
  return (
    <div className="flex flex-col px-4 pt-8">
      <div className="flex flex-col">
        <h4 className="font-bold">{title}</h4>
        <div className="text-muted-foreground">
          {position} • {startDate} - {endDate}
        </div>
      </div>
      <div className="flex pt-2">{children}</div>
    </div>
  );
}

export function ResumeSkillsSection({ skills }: ResumeSkillsSectionProps) {
  return (
    <div className="flex flex-wrap gap-4 px-4 py-8">
      {skills.map((skill) => (
        <div
          key={skill}
          className="rounded-full border border-foreground px-4 py-2"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}

export function ResumeEducationSection({
  title,
  startDate,
  endDate,
  children,
}: ResumeEducationSectionProps) {
  return (
    <div className="flex flex-col px-4 py-8">
      <div className="flex flex-col">
        <h4 className="font-bold">{title}</h4>
        <div className="text-muted-foreground">
          {startDate} - {endDate}
        </div>
      </div>
      <div className="flex pt-2">{children}</div>
    </div>
  );
}
