// src/routesEthikos.js

import React from "react";
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard & Insights",
    key: "dashboard-insights",
    icon: <Icon fontSize="small">analytics</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Real-time Overview",
        key: "real-time-overview",
        route: "/ethikos/dashboard/real-time-overview",
        component: <div>Real-time Overview</div>,
      },
      {
        type: "collapse",
        name: "Trends & Analytics",
        key: "trends-analytics",
        route: "/ethikos/dashboard/trends-analytics",
        component: <div>Trends & Analytics</div>,
      },
      {
        type: "collapse",
        name: "Participation Metrics",
        key: "participation-metrics",
        route: "/ethikos/dashboard/participation-metrics",
        component: <div>Participation Metrics</div>,
      },
    ],
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Debates & Forums",
    key: "debates-forums",
    icon: <Icon fontSize="small">forum</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Active Debates",
        key: "active-debates",
        route: "/ethikos/debates/active-debates",
        component: <div>Active Debates</div>,
      },
      {
        type: "collapse",
        name: "Start New Debate",
        key: "start-new-debate",
        route: "/ethikos/debates/start-new-debate",
        component: <div>Start New Debate</div>,
      },
      {
        type: "collapse",
        name: "Featured/Pinned Topics",
        key: "featured-topics",
        route: "/ethikos/debates/featured-topics",
        component: <div>Featured/Pinned Topics</div>,
      },
      {
        type: "collapse",
        name: "Community Guidelines",
        key: "community-guidelines",
        route: "/ethikos/debates/community-guidelines",
        component: <div>Community Guidelines</div>,
      },
    ],
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Smart Voting",
    key: "smart-voting",
    icon: <Icon fontSize="small">how_to_vote</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Active Votes",
        key: "active-votes",
        route: "/ethikos/voting/active-votes",
        component: <div>Active Votes</div>,
      },
      {
        type: "collapse",
        name: "Voting History",
        key: "voting-history",
        route: "/ethikos/voting/voting-history",
        component: <div>Voting History</div>,
      },
      {
        type: "collapse",
        name: "How Smart Vote Works",
        key: "how-smart-vote-works",
        route: "/ethikos/voting/how-it-works",
        component: <div>How Smart Vote Works</div>,
      },
    ],
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Reputation & Badges",
    key: "reputation-badges",
    icon: <Icon fontSize="small">verified_user</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "My Profile",
        key: "my-profile",
        route: "/ethikos/reputation/my-profile",
        component: <div>My Profile</div>,
      },
      {
        type: "collapse",
        name: "Manage Expertise",
        key: "manage-expertise",
        route: "/ethikos/reputation/manage-expertise",
        component: <div>Manage Expertise</div>,
      },
      {
        type: "collapse",
        name: "My Badges & Achievements",
        key: "my-badges-achievements",
        route: "/ethikos/reputation/my-badges",
        component: <div>My Badges & Achievements</div>,
      },
    ],
    sidebar: true,
  },
];

export default routes;
