import React from "react";
import AchievementItem from "./ui-kit/AchievementItem";
import AchievementList from "./ui-kit/AchievementList";
import Layout from "./ui-kit/Layout";
import MainLayout from "./ui-kit/MainLayout";

function App() {
  return (
    <MainLayout>
      <Layout>
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
