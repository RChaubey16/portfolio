import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TitleDescription from "./ui/TitleDescription";

export default function Experience() {
  return (
    <div className="mt-20">
      <TitleDescription
        title="Experience"
        description="Gained valuable experience in translating vague ideas into working miracles."
        classes="mb-10"
      />
      <div className="space-y-6">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="border border-white/30 rounded-lg px-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-white text-base">
              Full Stack Engineer @ QED42
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-base">
              <p className="mb-4 text-sm text-white/80">➤ Duration: 2023 - Present</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Led EdTech platform development using Next.js and Drupal for a
                  major non-profit.
                </li>
                <li>
                  Built a scalable Next.js + Drupal system, boosting user
                  growth.
                </li>
                <li>
                  Explored AI tools like RAG, MCP and agent frameworks for
                  future use.
                </li>
                <li>
                  Mentored interns in full-stack development and best practices.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="border border-white/30 rounded-lg px-4"
        >
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white text-base">
              Associate Engineer - Full Stack @ QED42
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-base">
              <p className="mb-4 text-sm text-white/80">➤ Duration: 2022 - 2023</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Boosted E-commerce site speed by 25% by optimizing Gatsby and
                  Drupal Commerce.
                </li>
                <li>
                  Built efficient Gatsby-Drupal integration for smooth product
                  data syncing.
                </li>
                <li>
                  Conducted hands-on training in React and Headless Drupal
                  development.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="border border-white/30 rounded-lg px-4"
        >
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white text-base">
              Intern @ QED42
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-base">
              <p className="mb-4 text-sm text-white/80">➤ Duration: 2021 - 2022</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Developed expertise in Drupal CMS, Headless Drupal, REST and
                  JSON APIs.
                </li>
                <li>
                  Integrated React with Drupal CMS to improve content workflows
                  and website interactivity.
                </li>
                <li>
                  Contributed patches to Drupal Open Source Community and
                  participated in strategic initiatives.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
