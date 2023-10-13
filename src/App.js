import React, { useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import { Text, View, withAuthenticator } from "@aws-amplify/ui-react";
import { createRegion } from "./graphql/mutations";

const App = ({ signOut }) => {
  async function pushRegion() {
    const region = {
      id: 1,
      leagues: [1, 2, 3, 4],
    };
    await API.graphql({
      query: createRegion,
      variables: { input: region },
    });
  }

  useEffect(() => {
    pushRegion();
  }, []);

  return (
    <View className="App">
      <Text>Yo</Text>
    </View>
  );
};

export default withAuthenticator(App);
