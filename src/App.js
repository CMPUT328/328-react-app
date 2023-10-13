import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { View, withAuthenticator } from "@aws-amplify/ui-react";

const App = ({ signOut }) => {
  return (
    <View className="App">
      <h1>Hello!</h1>
    </View>
  );
};

export default withAuthenticator(App);
