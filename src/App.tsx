import React from "react";
import { useTranslation } from "react-i18next";
import ChangeLanguageButton from "./Components/ChangeLanguageButton";
import PopupContentGetGift from "./Components/GroupPopupContent/PopupContentGetGift";
import AchievementItem, { AchievementItemI18n } from "./ui-kit/AchievementItem";
import AchievementList from "./ui-kit/AchievementList";
import Layout from "./ui-kit/Layout";
import MainLayout from "./ui-kit/MainLayout";
import Popup from "./ui-kit/Popup";

function App() {
  const { t } = useTranslation(["pages", "achievements"]);
  return (
    <MainLayout>
      <Layout>
        <ChangeLanguageButton />
        <Popup
          isVisible
          content={(props) => (
            <PopupContentGetGift
              gift={{
                img: `${process.env.PUBLIC_URL}/static/skill.png`,
                title: t("achievements:1.popup.title"),
                type: t("achievements:1.popup.type"),
                description: t("achievements:1.popup.description"),
              }}
              onGetGift={() => console.log("onGetGift")}
              {...props}
            />
          )}
        />
        <AchievementList>
          <AchievementItemI18n
            awardReceiveText={t("pages:achievements.checkPrizes")}
            isAwardReceived={false}
            current={10}
            max={10}
            doneText={t("pages:achievements.doneText")}
            i18nKey="1"
          />
          <AchievementItemI18n
            awardReceiveText={t("pages:achievements.checkPrizes")}
            isAwardReceived={true}
            current={10}
            max={10}
            doneText={t("pages:achievements.doneText")}
            i18nKey="2"
          />
          <AchievementItemI18n
            awardReceiveText={t("pages:achievements.checkPrizes")}
            isAwardReceived={false}
            current={10}
            max={10}
            doneText={t("pages:achievements.doneText")}
            i18nKey="3"
          />
          <AchievementItemI18n
            awardReceiveText={t("pages:achievements.checkPrizes")}
            isAwardReceived={false}
            current={5}
            max={10}
            doneText={t("pages:achievements.doneText")}
            i18nKey="4"
          />
          <AchievementItemI18n
            awardReceiveText={t("pages:achievements.checkPrizes")}
            isAwardReceived={false}
            current={2}
            max={10}
            doneText={t("pages:achievements.doneText")}
            i18nKey="5"
          />
        </AchievementList>
      </Layout>
    </MainLayout>
  );
}

export default App;
