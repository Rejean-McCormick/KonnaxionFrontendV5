// src/routesEkoh.js

import React from "react";
import Icon from "@mui/material/Icon";

// Ekoh components
import EkohDashboard from "layouts/ekoh/dashboard";
import CurrentEkohScore from "layouts/ekoh/overview-analytics/current-ekoh-score";
import CurrentVotingWeight from "layouts/ekoh/voting-influence/current-voting-weight";
import ViewCurrentExpertise from "layouts/ekoh/expertise-areas/view-current-expertise";
import EarnedBadgesDisplay from "layouts/ekoh/achievements-badges/earned-badges-display";

const routes = [
  // Ekoh Group Label (non-clickable title)
  {
    type: "title",
    title: "Ekoh",
    key: "ekoh-title",
  },
  // Ekoh Items
  {
    type: "collapse",
    name: "Dashboard",
    key: "ekoh-dashboard",
    route: "/ekoh/dashboard",
    component: <EkohDashboard />,
    sidebar: true,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Overview & Analytics",
    key: "ekoh-overview",
    route: "/ekoh/overview-analytics/current-ekoh-score",
    component: <CurrentEkohScore />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Voting Influence",
    key: "ekoh-voting",
    route: "/ekoh/voting-influence/current-voting-weight",
    component: <CurrentVotingWeight />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Expertise Areas",
    key: "ekoh-expertise",
    route: "/ekoh/expertise-areas/view-current-expertise",
    component: <ViewCurrentExpertise />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Achievements & Badges",
    key: "ekoh-achievements",
    route: "/ekoh/achievements-badges/earned-badges-display",
    component: <EarnedBadgesDisplay />,
    sidebar: true,
  },
];

export default routes;
