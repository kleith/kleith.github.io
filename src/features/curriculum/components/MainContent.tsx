import { Trans, useTranslation } from "react-i18next";
import type { ParseKeys } from "i18next";

import { Badge } from "@/components/ui/Badge/Badge";
import { Timeline } from "@/components/ui/Timeline/Timeline";

import {
  Container,
  EducationEntryHeader,
  EducationItem,
  EducationList,
  Heading,
  Section,
  Text,
  TimelineDescription,
  TimelineTitle,
} from "./MainContent.styles";

export function MainContent() {
  const { t } = useTranslation();

  const jobs = t("jobs", { returnObjects: true });
  const educations = t("educations", { returnObjects: true });

  return (
    <Container>
      <Section aria-label='Profile'>
        <Heading>{t("profile")}</Heading>
        <Text>
          <Trans i18nKey='aboutMe' />
        </Text>
      </Section>

      <Section aria-label='Experience'>
        <Heading>{t("experience")}</Heading>
        <Timeline
          items={jobs.map((job, index) => ({
            id: job.date,
            title: (
              <>
                <TimelineTitle>
                  <Trans i18nKey={`jobs.${index}.position` as ParseKeys} />
                </TimelineTitle>
                <Badge color={index === 0 ? "secondary" : "primary"}>{job.date}</Badge>
              </>
            ),
            description: (
              <TimelineDescription>
                <p>
                  <Trans i18nKey={`jobs.${index}.description` as ParseKeys} />
                </p>
                <p>
                  <Trans i18nKey={`jobs.${index}.stack` as ParseKeys} />
                </p>
                <p>
                  <Trans i18nKey={`jobs.${index}.focus` as ParseKeys} />
                </p>
              </TimelineDescription>
            ),
          }))}
        />
      </Section>

      <Section aria-label='Education'>
        <Heading>{t("education")}</Heading>
        <EducationList>
          {educations.map((education, index) => (
            <EducationItem key={index}>
              <EducationEntryHeader>
                <TimelineTitle>{education.title}</TimelineTitle>
                <Badge color='primary'>{education.date}</Badge>
              </EducationEntryHeader>
              <Text>{education.from}</Text>
            </EducationItem>
          ))}
        </EducationList>
      </Section>
    </Container>
  );
}
