import React from "react";
import PopupContentGetGift from "./Components/GroupPopupContent/PopupContentGetGift";
import AchievementItem from "./ui-kit/AchievementItem";
import AchievementList from "./ui-kit/AchievementList";
import Layout from "./ui-kit/Layout";
import MainLayout from "./ui-kit/MainLayout";
import Popup from "./ui-kit/Popup";

function App() {
  return (
    <MainLayout>
      <Layout>
        <Popup
          isVisible
          content={(props) => (
            <PopupContentGetGift
              gift={{
                img: `${process.env.PUBLIC_URL}/static/skill.png`,
                title: "title",
                type: "type",
                description: "description",
              }}
              onGetGift={() => console.log("onGetGift")}
              {...props}
            />
          )}
        />
        <AchievementList>
          <AchievementItem
            awardReceiveText="Check prizes"
            isAwardReceived={false}
            current={10}
            max={10}
            doneText="Done"
            info={{
              title:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              description:
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            }}
          />
          <AchievementItem
            awardReceiveText="Check prizes"
            isAwardReceived={true}
            current={5}
            max={10}
            doneText="Done"
            info={{ title: "title", description: "desc" }}
          />
          <AchievementItem
            awardReceiveText="Check prizes"
            isAwardReceived={true}
            current={1}
            max={10}
            doneText="Done"
            info={{ title: "title", description: "desc" }}
          />
        </AchievementList>
      </Layout>
    </MainLayout>
  );
}

export default App;
