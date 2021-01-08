import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Button from "../../ui-kit/Button";

const dictionaryLanguages = [
  {
    key: "en",
    title: "English",
  },
  {
    key: "ru",
    title: "Русский",
  },
];

const StyledChangeLanguageButton = styled.div`
  display: flex;
`;
function ChangeLanguageButton() {
  const { i18n } = useTranslation();

  return (
    <StyledChangeLanguageButton>
      {dictionaryLanguages.map(({ key, title }) => (
        <Button onClick={() => i18n.changeLanguage(key)} key={key}>
          {title}
        </Button>
      ))}
    </StyledChangeLanguageButton>
  );
}

export default ChangeLanguageButton;
