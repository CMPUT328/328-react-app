import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { View } from "@aws-amplify/ui-react";
import DataPush from "./DataPush";

const App = () => {
  return (
    <View className="App">
      {/* add this if we need to push data otherwise comment it out */}
      {/* <DataPush /> */}
    </View>
  );
};

export default App;
