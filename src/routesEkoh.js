// src/routesEkoh.js

import React from "react";
import Icon from "@mui/material/Icon";

// Placeholder components for Ekoh subsections
const EkohOverview = () => (
  <div>
    <h2>Overview & Analytics</h2>
    <p>
      Displays the current Ekoh score, explanation of the calculation methods, and interactive analytics & trends.
    </p>
  </div>
);

const EkohVoting = () => (
  <div>
    <h2>Voting Influence</h2>
    <p>
      Shows the user's smart voting power, detailed voting history, and analytics on voting impact.
    </p>
  </div>
);

const EkohExpertise = () => (
  <div>
    <h2>Expertise Areas</h2>
    <p>
      Manage and view your expertise areas that influence your Ekoh score. Add or remove expertise as needed.
    </p>
  </div>
);

const EkohAchievements = () => (
  <div>
    <h2>Achievements & Badges</h2>
    <p>
      Displays earned badges with progress indicators and criteria for new achievements.
    </p>
  </div>
);

const routes = [
  {
    type: "collapse",
    name: "Ekoh",
    key: "ekoh",
    icon: <Icon fontSize="small">star</Icon>, // You may replace "star" with "diamond" or another reputation icon if available
    collapse: [
      {
        type: "collapse",
        name: "Overview & Analytics",
        key: "ekoh-overview",
        route: "/ekoh/overview",
        component: <EkohOverview />,
      },
      {
        type: "collapse",
        name: "Voting Influence",
        key: "ekoh-voting",
        route: "/ekoh/voting",
        component: <EkohVoting />,
      },
      {
        type: "collapse",
        name: "Expertise Areas",
        key: "ekoh-expertise",
        route: "/ekoh/expertise",
        component: <EkohExpertise />,
      },
      {
        type: "collapse",
        name: "Achievements & Badges",
        key: "ekoh-achievements",
        route: "/ekoh/achievements",
        component: <EkohAchievements />,
      },
    ],
    sidebar: true,
  },
];

export default routes;
