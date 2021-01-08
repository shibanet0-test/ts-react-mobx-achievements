import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PopupContentGetGift from "../../Components/GroupPopupContent/PopupContentGetGift";
import { AchievementItemI18n } from "../../ui-kit/AchievementItem";
import AchievementList from "../../ui-kit/AchievementList";
import Layout from "../../ui-kit/Layout";
import Popup from "../../ui-kit/Popup";
import AchievementStore from "../../store/Achievements";
import { observer } from "mobx-react";

AchievementStore.setItemlist([
  { id: 1, i18nKey: "1", isAwardReceived: false, current: 5, max: 5 },
  { id: 2, i18nKey: "2", isAwardReceived: false, current: 0, max: 10 },
  { id: 3, i18nKey: "3", isAwardReceived: false, current: 0, max: 100 },
  { id: 4, i18nKey: "4", isAwardReceived: false, current: 500, max: 1000 },
  { id: 5, i18nKey: "5", isAwardReceived: false, current: 0, max: 10 },
]);

function AchievementPage() {
  const [popupState, setPopupState] = useState({
    isVisible: false,
    i18nKey: "",
    itemId: 0,
  });
  const { t } = useTranslation(["pages", "achievements"]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      AchievementStore.updateStatus();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleOpenPopup = useCallback((itemId: number, i18nKey: string) => {
    setPopupState({ isVisible: true, itemId, i18nKey });
  }, []);

  const handleClosePopup = useCallback(() => {
    setPopupState({ isVisible: false, itemId: 0, i18nKey: "" });
  }, []);

  return (
    <Layout>
      <Popup
        onClose={handleClosePopup}
        isVisible={popupState.isVisible}
        content={(props) => (
          <PopupContentGetGift
            gift={{
              img: `${process.env.PUBLIC_URL}/static/skill.png`,
              title: t(`achievements:${popupState.i18nKey}.popup.title`),
              type: t(`achievements:${popupState.i18nKey}.popup.type`),
              description: t(
                `achievements:${popupState.i18nKey}.popup.description`
              ),
            }}
            onGetGift={() =>
              AchievementStore.markItemPrizeGetted(popupState.itemId)
            }
            {...props}
          />
        )}
      />
      <AchievementList>
        {AchievementStore.list.map(
          ({ isAwardReceived, current, max, i18nKey, id }) => (
            <AchievementItemI18n
              onAwardReceive={() => handleOpenPopup(id, i18nKey)}
              key={id}
              awardReceiveText={t("pages:achievements.checkPrizes")}
              isAwardReceived={isAwardReceived}
              current={current}
              max={max}
              doneText={t("pages:achievements.doneText")}
              i18nKey={i18nKey}
            />
          )
        )}
      </AchievementList>
    </Layout>
  );
}

export default observer(AchievementPage);
