import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import {
  ResumeEducationSection,
  ResumeSkillsSection,
  ResumeSummarySection,
  ResumeTitleSection,
  ResumeWorkSection,
} from "@/components/resume-section";
import { Separator } from "@/components/ui/separator";

export default function ResumePage() {
  return (
    <main className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Resume</PageHeaderHeading>
        <PageHeaderDescription>
          Work experience, skills, and past education.
        </PageHeaderDescription>
      </PageHeader>
      <Separator />
      <ResumeTitleSection>Summary</ResumeTitleSection>
      <ResumeSummarySection>
        High performance full stack software developer, mathematician &
        musician. Expert in scalable development with serverless architecture,
        geolocation & mapping tools, complex systems engineering & data
        modeling. Developed 16 mobile apps, websites, SaaS tools & video games
        with his brother Daniel. Co-authored internal paper used by Oak Ridge
        National Laboratory to understand e-learning via UI/UX.
      </ResumeSummarySection>
      <Separator />
      <ResumeTitleSection>Experience</ResumeTitleSection>
      <ResumeWorkSection
        title="Thrive Lot, Inc."
        position="VP of Engineering"
        startDate="April 2020"
        endDate="Present"
      >
        Built the project management app using ReactJS and AWS serverless
        architecture for landscapers specializing in creating edible landscapes
        to manage their projects.
      </ResumeWorkSection>
      <ResumeWorkSection
        title="Magnolia Blooms, LLC."
        position="Co-Founder"
        startDate="January 2017"
        endDate="April 2020"
      >
        • Light TRVLR (2017): T2K game; used google adsense to generate revenue;
        achieved organic user growth.
        <br />• SeatsOpen (2019): Grassroots WeWork style app to connect
        freelancers with open spaces; generated revenue and rapid supply user
        adoption. Halted due to COVID.
        <br />• FleetRevolution / ACS Routes (2020): fleet management apps for
        tracking, inspection reporting, bus maintenance, and preventing double
        booking of buses and drivers; $40,000 in revenue (with active
        customers).
      </ResumeWorkSection>
      <ResumeWorkSection
        title="Oak Ridge National Laboratory"
        position="Internal Consultant"
        startDate="May 2016"
        endDate="August 2016"
      >
        Nuclear Engineering internship with a focus on developing e-learning
        platforms for nuclear reactor maintenance workers. Co-wrote 40+ page
        whitepaper for internal usage by ORNL on e-learning styles and how
        humans process information through UI/UX. As a result, was offered a job
        developing lasers to vibrate UF6 which could detect weapons-grade
        Uranium, but turned it down.
      </ResumeWorkSection>
      <Separator className="mt-8" />
      <ResumeTitleSection>Skills</ResumeTitleSection>
      <ResumeSkillsSection
        skills={[
          "TypeScript",
          "JavaScript",
          "React",
          "React Native",
          "Next.js",
          "CSS",
          "iOS",
          "Swift",
          "Express.js",
          "AWS",
          "GraphQL",
          "SQL",
        ]}
      />
      <Separator />
      <ResumeTitleSection>Education</ResumeTitleSection>
      <ResumeEducationSection
        title="University of Tennessee, Knoxville"
        startDate="August 2013"
        endDate="May 2016"
      >
        Physics & Mathematics. Finished my Junior year. Left to pursue a career
        in software engineering. Going back to finish school in 2024.
      </ResumeEducationSection>
    </main>
  );
}
