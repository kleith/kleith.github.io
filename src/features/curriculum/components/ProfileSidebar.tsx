import { useTranslation } from "react-i18next";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

import { GithubIcon, Linkedin } from "@coolicons/react/duotone";
import {
  CakeIcon,
  EnvelopeIcon,
  IdentificationIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";

import photoProfile from "@/assets/sergio_martinez.jpg";
import {
  ADDRESS,
  BIRTHDAY,
  COMPETENCIES,
  DNI,
  EMAIL,
  FULL_NAME,
  PHONE,
  SKILLS,
  SOCIAL_MEDIA,
} from "@/constants/personal";
import { diffYears } from "@/utils/date";

import {
  Chip,
  ChipContainer,
  Container,
  Divider,
  Fullaname,
  Image,
  Information,
  SectionContainer,
  SectionTitle,
  Socials,
  Work,
} from "./ProfileSidebar.styles";

const today = new Date();

export function ProfileSidebar() {
  const { t } = useTranslation();

  const years = diffYears(parseISO(BIRTHDAY), today);

  return (
    <Container>
      <header>
        <Image src={photoProfile} title={FULL_NAME} />
        <Fullaname>{FULL_NAME}</Fullaname>
        <Work>{t("web_developer")}</Work>
      </header>

      <Divider />

      <Information>
        <Section title={t("personalInfo")} aria-label='Personal Information'>
          <ul>
            <li>{t("lastName")}: Martínez Tala</li>
            <li>{t("firstName")}: Sergio</li>
            <li>
              {t("age")}: {years} {t("years")}
            </li>
            <li>
              {t("nationality")}: {t("argentinian")}
            </li>
            <li>
              {t("status")}: {t("single")}
            </li>
          </ul>
          <ul>
            <li>
              <CakeIcon title={t("birthday")} width='16' height='16' />
              {format(parseISO(BIRTHDAY), "PPP", { locale: es })}
            </li>
            <li>
              <MapPinIcon title={t("address")} width='16' height='16' />
              <a href={ADDRESS.mapLink} target='_blank' rel='noreferrer'>
                {ADDRESS.city}, {ADDRESS.country}
              </a>
            </li>
            <li>
              <PhoneIcon title={t("phone")} width='16' height='16' />
              <a href={PHONE.link}>{PHONE.number}</a>
            </li>
            <li>
              <IdentificationIcon title={t("id")} width='16' height='16' />
              {DNI}
            </li>
            <li></li>
            <li>
              <EnvelopeIcon title={t("email")} width='16' height='16' />
              <a href={EMAIL.link}>{EMAIL.address}</a>
            </li>
          </ul>
        </Section>

        <Section title={t("skills")} aria-label='Skills'>
          <ChipContainer>
            {SKILLS.map((skill, index) => (
              <Chip key={index}>{skill}</Chip>
            ))}
          </ChipContainer>
        </Section>

        <Section title={t("competencies")} aria-label='Competencies'>
          <ChipContainer>
            {COMPETENCIES.map((competency, index) => (
              <Chip key={index}>{competency}</Chip>
            ))}
          </ChipContainer>
        </Section>

        <Section title={t("languages")} aria-label='Languages'>
          <ul>
            <li>{t("english")}</li>
            <li>{t("spanish")}</li>
          </ul>
        </Section>

        <Section title={t("socials")} aria-label='Social Media'>
          <Socials>
            <li>
              <a
                href={`https://${SOCIAL_MEDIA.github}`}
                aria-label={SOCIAL_MEDIA.github}
                target='_blank'
                rel='noreferrer'
                title='Github'
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href={`https://${SOCIAL_MEDIA.linkedIn}`}
                aria-label={SOCIAL_MEDIA.linkedIn}
                target='_blank'
                rel='noreferrer'
                title='LinkedIn'
              >
                <Linkedin />
              </a>
            </li>
          </Socials>
        </Section>
      </Information>
    </Container>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children, ...props }: SectionProps) {
  return (
    <SectionContainer {...props}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
}
