// src/routesEkoh.js

import React from "react";
import Icon from "@mui/material/Icon";

// Import real Ekoh components based on your directory structure
import EkohDashboard from "layouts/ekoh/dashboard";
import CurrentEkohScore from "layouts/ekoh/overview-analytics/current-ekoh-score";
import CurrentVotingWeight from "layouts/ekoh/voting-influence/current-voting-weight";
import ViewCurrentExpertise from "layouts/ekoh/expertise-areas/view-current-expertise";
import EarnedBadgesDisplay from "layouts/ekoh/achievements-badges/earned-badges-display";

const routes = [
  {
    type: "collapse",
    name: "Ekoh",
    key: "ekoh",
    icon: <Icon fontSize="small">star</Icon>,
    // Optional: you can set a parent route here if needed
    route: "/ekoh",
    collapse: [
      {
        type: "collapse",
        name: "Dashboard",
        key: "ekoh-dashboard",
        route: "/ekoh/dashboard",
        component: <EkohDashboard />,
      },
      {
        type: "collapse",
        name: "Overview & Analytics",
        key: "ekoh-overview",
        route: "/ekoh/overview-analytics/current-ekoh-score",
        component: <CurrentEkohScore />,
      },
      {
        type: "collapse",
        name: "Voting Influence",
        key: "ekoh-voting",
        route: "/ekoh/voting-influence/current-voting-weight",
        component: <CurrentVotingWeight />,
      },
      {
        type: "collapse",
        name: "Expertise Areas",
        key: "ekoh-expertise",
        route: "/ekoh/expertise-areas/view-current-expertise",
        component: <ViewCurrentExpertise />,
      },
      {
        type: "collapse",
        name: "Achievements & Badges",
        key: "ekoh-achievements",
        route: "/ekoh/achievements-badges/earned-badges-display",
        component: <EarnedBadgesDisplay />,
      },
    ],
    sidebar: true,
  },
];

export default routes;
