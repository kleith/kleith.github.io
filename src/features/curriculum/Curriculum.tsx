import { useLayoutEffect, useState } from "react";

import { MainContent } from "./components/MainContent";
import { ProfileSidebar } from "./components/ProfileSidebar";
import { TopToolbar } from "./components/TopToolbar";
import { Container, Scroller } from "./Curriculum.styles";

export function Curriculum() {
  const [scrollWidth, setScrollWidth] = useState<number>(0);

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

      <TopToolbar />

      <Container>
        <ProfileSidebar />
        <MainContent />
      </Container>
    </>
  );
}
