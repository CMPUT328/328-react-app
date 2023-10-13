import React, { useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import { createRegion } from "./graphql/mutations";
import { listRegions } from "./graphql/queries";

// todo: push data to database by reading the json file

const DataPush = () => {
  // list regions
  async function fetchRegion() {
    const apiData = await API.graphql({ query: listRegions });
    console.log(apiData);
  }
  // pushing region
  async function pushRegion() {
    try {
      const region = {
        id: "test",
      };
      const result = await API.graphql({
        query: createRegion,
        variables: { input: region },
      });
      console.log("Region pushed:", result);
      fetchRegion();
    } catch (error) {
      console.error("Error pushing region:", error);
    }
  }

  useEffect(() => {
    pushRegion();
  });

  return <></>;
};

export default DataPush;
