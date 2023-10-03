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
        <PageHeaderHeading>Resume.</PageHeaderHeading>
        <PageHeaderDescription>
          Work experience, skills, and past education.
        </PageHeaderDescription>
      </PageHeader>
      <Separator />
      <ResumeTitleSection>Summary</ResumeTitleSection>
      <ResumeSummarySection>
        Results-driven Full Stack Software Engineer with a strong background in
        mathematics and music. Specialized in designing and implementing
        scalable solutions using serverless architecture, geolocation services,
        and mapping tools. Proficient in complex systems engineering and data
        modeling. Collaborated on the development of 16 applications across
        mobile platforms, websites, SaaS products, and video games, alongside my
        sibling, Daniel. Contributed to a research paper that has been utilized
        by Oak Ridge National Laboratory for advancements in e-learning through
        user interface and user experience analysis.
      </ResumeSummarySection>
      <Separator />
      <ResumeTitleSection>Experience</ResumeTitleSection>
      <ResumeWorkSection
        title="Tekomic, LLC."
        position="Co-Founder & Developer"
        startDate="September 2023"
        endDate="Present"
      >
        <ul className="ml-4 list-disc">
          <li>BusBuddy (2023)</li>
          <ul className="ml-4 list-disc">
            <li>
              Built the bus tracking software using ReactJS, NextJS,
              PlanetScale, and Mapbox.
            </li>
            <li>
              Bus tracking software developed for school systems to keep track
              of their school bus routes.
            </li>
            <li>
              School administrators can create routes with an unlimited* number
              of steps, and mark pickup and dropoff locations.
            </li>
            <li>
              School administrators and parents can search a location and school
              to find the closest bus stop.
            </li>
            <li>Created the mapping tool using Mapbox.</li>
            <li>Created the backend using MySQL hosted by PlanetScale.</li>
            <li>
              Created the frontend using ReactJS and NextJS hosted by Vercel.
            </li>
            <li>
              $15,000 in revenue (with active customers) with 1,000x growth
              potential.
            </li>
          </ul>
        </ul>
      </ResumeWorkSection>
      <ResumeWorkSection
        title="Thrive Lot, Inc."
        position="VP of Engineering"
        startDate="April 2020"
        endDate="September 2023"
      >
        <ul className="ml-4 list-disc">
          <li>Thrive Lot (2020)</li>
          <ul className="ml-4 list-disc">
            <li>
              Built the project management app using ReactJS and AWS serverless
              architecture for landscapers specializing in creating edible
              landscapes to manage their projects.
            </li>
            <li>
              Developed multiple apps: including a CMS for our customer service
              team, project management app for providers, and a customer app for
              viewing their projects and proposals.
            </li>
            <li>Created mapping tools using google maps and mapbox.</li>
            <li>
              Created a novel auto-syncing module that managed our data models
              and our GraphQL calls.
            </li>
            <li>
              Setup a Stripe invoicing system and tied it to our data models,
              also developed a subscription service using this.
            </li>
            <li>
              Connected our data models with HubSpot for easy management by our
              sales team.
            </li>
            <li>
              Set up a plant database with over 350,000 plants, and added search
              capabilities using AWS OpenSearch (formerly ElasticSearch).
            </li>
            <li>
              Solo developed the entire MVP and led development on all
              subsequent iterations.
            </li>
          </ul>
        </ul>
      </ResumeWorkSection>
      <ResumeWorkSection
        title="Magnolia Blooms, LLC."
        position="Co-Founder & Developer"
        startDate="January 2017"
        endDate="April 2020"
      >
        <ul className="ml-4 list-disc">
          <li>Light TRVLER (2017)</li>
          <ul className="ml-4 list-disc">
            <li>Game similar to flappy bird.</li>
            <li>Used google adsense to generate revenue.</li>
            <li>Developed using Swift as an iOS app.</li>
            <li>Organic user growth.</li>
          </ul>
          <li>SeatsOpen (2019)</li>
          <ul className="ml-4 list-disc">
            <li>
              Co-working platform that connected hosts with under-utilized
              space, like bars and restaurants, with freelance workers looking
              for a place to work with other people.
            </li>
            <li>
              Developed using React Native as the frontend and AWS as the
              backend.
            </li>
            <li>
              Generated revenue and rapid supply user adoption. Halted due to
              COVID.
            </li>
          </ul>
          <li>FleetRevolution (2020)</li>
          <ul className="ml-4 list-disc">
            <li>
              School bus management software for bus contractors that tracked
              trips (the route, driver, bus, notes, etc.), inspection reporting,
              bus maintenance, and preventing double booking of buses and
              drivers. It contained multiple apps for managers, drivers, and
              maintenance workers.
            </li>
            <li>
              Developed separate apps for the administrators, maintenance
              workers, and drivers.
            </li>
            <li>
              Originally developed using Swift as a pure iOS app. Later rebuilt
              using React Native. Used an AWS backend.
            </li>
            <li>
              $40,000 in revenue (with active customers) with 1,000x growth
              potential.
            </li>
            <li>
              Paused to focus on Thrive Lot because of the impact and vision.
            </li>
          </ul>
        </ul>
      </ResumeWorkSection>
      <ResumeWorkSection
        title="Oak Ridge National Laboratory"
        position="Internal Consultant"
        startDate="May 2016"
        endDate="August 2016"
      >
        <ul className="ml-4 list-disc">
          <li>
            Nuclear Engineering internship with a focus on developing e-learning
            platforms for nuclear reactor maintenance workers.
          </li>
          <li>
            Co-wrote 40+ page whitepaper for internal usage by ORNL on
            e-learning styles and how humans process information through UI/UX.
          </li>
          <li>
            As a result, was offered a job developing lasers to vibrate UF6
            which could detect weapons-grade Uranium, but turned it down.
          </li>
        </ul>
      </ResumeWorkSection>
      <Separator className="mt-8" />
      <ResumeTitleSection>Education</ResumeTitleSection>
      <ResumeEducationSection
        title="University of Tennessee, Knoxville"
        startDate="August 2013"
        endDate="May 2016"
      >
        <ul className="ml-4 list-disc">
          <li>Physics & Mathematics.</li>
          <li>Finished my Junior year.</li>
          <li>Left to pursue a career in software engineering.</li>
          <li>Going back to finish school in 2024.</li>
        </ul>
      </ResumeEducationSection>
      <Separator />
      <ResumeTitleSection>Skills</ResumeTitleSection>
      <ResumeSkillsSection
        skills={[
          "TypeScript",
          "JavaScript",
          "React",
          "React Native",
          "Next.js",
          "HTML",
          "CSS",
          "iOS",
          "Swift",
          "Express.js",
          "AWS",
          "GraphQL",
          "SQL",
        ]}
      />
    </main>
  );
}
