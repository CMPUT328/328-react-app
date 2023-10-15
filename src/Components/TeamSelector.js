import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listRegions } from "../graphql/queries";
import "./Styles.css";

const TeamSelector = () => {
  const [regions, setRegions] = useState([]);
  const [leagues, setLeagues] = useState([]);

  const fetchRegions = async () => {
    const regionData = await API.graphql(graphqlOperation(listRegions));
    setRegions(regionData.data.listRegions.items);
  };

  const fetchLeagues = async (region) => {
    const leagueByRegion = `
            query MyQuery {
        listLeagues(filter: {region_id: {eq: "${region}"}}) {
          items {
            league_name
            image_url
            id
            region_id
          }
        }
      }
        `;
    const leagueData = await API.graphql(graphqlOperation(leagueByRegion));
    console.log(leagueData.data.listLeagues.items);
    setLeagues(leagueData.data.listLeagues.items);
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  return <img url={"../images/france.png"} className="frame" />;
};

export default TeamSelector;

// <div className="frame">
//   <div className="container">
//     {regions.map((region) => (
//       <div key={region.id} className="region">
//         <p
//           onClick={() => {
//             fetchLeagues(region.id);
//           }}
//         >
//           {region.id}
//         </p>
//       </div>
//     ))}
//   </div>
// </div>