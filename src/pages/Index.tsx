import { useLayoutEffect, useState } from "react";

import {
  ArrowDownTrayIcon,
  CakeIcon,
  EnvelopeIcon,
  IdentificationIcon,
  MapPinIcon,
  PhoneIcon,
  PrinterIcon,
} from "@heroicons/react/16/solid";

import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { Trans, useTranslation } from "react-i18next";

import {
  ButtonControl,
  Chip,
  ChipContainer,
  Container,
  Divider,
  Experience,
  Fullaname,
  Header,
  HeaderContainer,
  Image,
  Information,
  Left,
  Profile,
  Right,
  Scroller,
  Socials,
  Work,
} from "./Index.styles";
import photoProfile from "@/assets/sergio_martinez.jpg";
import { Description, Stack } from "@/components/Stack";
import { Toggle } from "@/components/ui/Toggle/Toggle";
import { diffYears } from "@/utils/date";
import { GithubIcon, Linkedin } from "@coolicons/react/duotone";
import { address, BIRTHDAY, competencies, FULL_NAME, skills } from "@/constants/personal";

const today = new Date();

export function Index() {
  const { t, i18n } = useTranslation();
  const [scrollWidth, setScrollWidth] = useState<number>(0);
  const years = diffYears(parseISO(BIRTHDAY), today);

  const handleScroll = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    const height = scrollHeight - clientHeight;

    setScrollWidth((scrollTop / height) * 100);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Scroller style={{ width: `${scrollWidth}%` }} />

      <Header>
        <HeaderContainer>
          <div>
            <Toggle
              aria-label='Language'
              options={[
                { label: "English", value: "en" },
                { label: "Español", value: "es" },
              ]}
              value={i18n.language}
              onChange={(language) => i18n.changeLanguage(language)}
            />
          </div>
          <ButtonControl>
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} download='Sergio-Martinez-CV.pdf'>
              <ArrowDownTrayIcon width='16' height='16' />
              {t("downloadCv")}
            </a>
            <button type='button' onClick={() => window.print()}>
              <PrinterIcon width='16' height='16' />
              {t("print")}
            </button>
          </ButtonControl>
        </HeaderContainer>
      </Header>

      <Container>
        <Left>
          <Image src={photoProfile} title={FULL_NAME} />
          <Fullaname>{FULL_NAME}</Fullaname>
          <Work>{t("web_developer")}</Work>

          <Divider />

          <Information>
            <h3>{t("personalInfo")}</h3>
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
                <a
                  href='https://maps.app.goo.gl/xX6ML4kJC5hi6erp9'
                  target='_blank'
                  rel='noreferrer'
                >
                  {address.CITY}, {address.COUNTRY}
                </a>
              </li>
              <li>
                <PhoneIcon title={t("phone")} width='16' height='16' />
                <a href='tel:+5491134094567'>11-3409-4567</a>
              </li>
              <li>
                <IdentificationIcon title={t("id")} width='16' height='16' />
                34.652.772
              </li>
              <li></li>
              <li>
                <EnvelopeIcon title={t("email")} width='16' height='16' />
                <a href='mailto:sergiomartinezt.89@gmail.com'>sergiomartinezt.89@gmail.com</a>
              </li>
            </ul>
            <h3>{t("skills")}</h3>
            <ChipContainer>
              {skills.map((skill, index) => (
                <Chip key={index}>{skill}</Chip>
              ))}
            </ChipContainer>
            <h3>{t("competencies")}</h3>
            <ChipContainer>
              {competencies.map((competency, index) => (
                <Chip key={index}>{competency}</Chip>
              ))}
            </ChipContainer>
            <h3>{t("languages")}</h3>
            <ul>
              <li>{t("english")}</li>
              <li>{t("spanish")}</li>
            </ul>
            {/* <h3>Extracurricular</h3>
            <ul>
              <li>{t("iac")}</li>
              <li>{t("utn")}</li>
              <li>{t("educationIt")}</li>
            </ul> */}
            <h3>{t("socials")}</h3>
            <Socials>
              <li>
                <a
                  href='https://github.com/kleith'
                  aria-label='github.com/kleith'
                  target='_blank'
                  rel='noreferrer'
                  title='Github'
                >
                  <GithubIcon />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/sergio-martinezt/'
                  aria-label='linkedin.com/in/sergio-martinezt'
                  target='_blank'
                  rel='noreferrer'
                  title='LinkedIn'
                >
                  <Linkedin />
                </a>
              </li>
            </Socials>
          </Information>
        </Left>
        <Right>
          <Experience>
            <Stack title={t("profile")}>
              <Profile>
                <Trans i18nKey='aboutMe' />
              </Profile>
            </Stack>

            <Stack title={t("experience")}>
              {t("jobs", { returnObjects: true }).map((job, index) => (
                <Description
                  key={index}
                  title={job.date}
                  subtitle={<Trans defaults={job.position} />}
                >
                  <Trans defaults={job.description} />
                </Description>
              ))}
            </Stack>

            <Stack title={t("education")}>
              {t("educations", { returnObjects: true }).map((education, index) => (
                <Description key={index} title={education.date} subtitle={education.title}>
                  {education.from}
                </Description>
              ))}
            </Stack>
          </Experience>
        </Right>
      </Container>
    </>
  );
}
