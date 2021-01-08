import React from "react";
import ChangeLanguageButton from "./Components/ChangeLanguageButton";
import Layout from "./ui-kit/Layout";
import MainLayout from "./ui-kit/MainLayout";
import AchievementPage from "./Pages/AchievementPage";

function App() {
  return (
    <MainLayout>
      <Layout>
        <ChangeLanguageButton />

        <AchievementPage />
      </Layout>
    </MainLayout>
  );
}

export default App;
