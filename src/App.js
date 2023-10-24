import React from "react";
import "@aws-amplify/ui-react/styles.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import HomeScreen from "./Screens/HomeScreen";
import TournamentRankingScreen from "./Screens/TournamentRankingScreen";
import TeamRankingScreen from "./Screens/TeamRankingScreen";
import GlobalRankingScreen from "./Screens/GlobalRankingScreen";
import PredictRankingScreen from "./Screens/PredictRankingScreen";
import DataPush from "./DataPush";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/tournament-ranking"
          element={<TournamentRankingScreen />}
        />
        <Route path="/team-ranking" element={<TeamRankingScreen />} />
        <Route path="/global-ranking" element={<GlobalRankingScreen />} />
        <Route path="/predict-ranking" element={<PredictRankingScreen />} />
      </Routes>
      {/* <DataPush /> */}
    </Router>
  );
};

export default App;
