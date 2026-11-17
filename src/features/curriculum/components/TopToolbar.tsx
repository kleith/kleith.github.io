import { useTranslation } from "react-i18next";

import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/16/solid";

import { Button } from "@/components/ui/Button/Button";
import { Toggle } from "@/components/ui/Toggle/Toggle";

import { ButtonControl, Header, HeaderContainer } from "./TopToolbar.styles";

export function TopToolbar() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Header>
      <HeaderContainer>
        <Toggle
          aria-label='Language'
          options={[
            { label: "English", value: "en" },
            { label: "Español", value: "es" },
          ]}
          value={i18n.language}
          onChange={handleChangeLanguage}
        />

        <ButtonControl>
          <Button
            as='a'
            color='secondary'
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download='Sergio-Martinez-CV.pdf'
          >
            <ArrowDownTrayIcon width='16' height='16' />
            {t("downloadCv")}
          </Button>
          <Button type='button' color='primary' onClick={handlePrint}>
            <PrinterIcon width='16' height='16' />
            {t("print")}
          </Button>
        </ButtonControl>
      </HeaderContainer>
    </Header>
  );
}
