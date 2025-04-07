// src/routesEthikos.js

import React from "react";
import Icon from "@mui/material/Icon";

// Dashboard & Insights components
import RealTimeOverview from "layouts/ethikos/dashboard-insights/real-time-overview";
import TrendsAnalytics from "layouts/ethikos/dashboard-insights/trends-analytics";
import ParticipationMetrics from "layouts/ethikos/dashboard-insights/participation-metrics";

// Debates & Forums components
import ActiveDebates from "layouts/ethikos/debates-forums/active-debates";
import StartNewDebate from "layouts/ethikos/debates-forums/start-new-debate";
import FeaturedPinnedTopics from "layouts/ethikos/debates-forums/featured-pinned-topics";
import CommunityGuidelines from "layouts/ethikos/debates-forums/community-guidelines";

// Smart Voting components
import ActiveVotes from "layouts/ethikos/smart-voting/active-votes";
import VotingHistory from "layouts/ethikos/smart-voting/voting-history";
import HowSmartVoteWorks from "layouts/ethikos/smart-voting/how-smart-vote-works";

// Reputation & Badges components
import MyProfile from "layouts/ethikos/reputation-badges/my-profile";
import ManageExpertise from "layouts/ethikos/reputation-badges/manage-expertise";
import MyBadgesAchievements from "layouts/ethikos/reputation-badges/my-badges-achievements";

const routes = [
  // Dashboard & Insights Group Label
  {
    type: "title",
    title: "Dashboard & Insights",
    key: "dashboard-insights-title",
  },
  // Dashboard & Insights Items
  {
    type: "collapse",
    name: "Real-time Overview",
    key: "real-time-overview",
    route: "/ethikos/dashboard-insights/real-time-overview",
    component: <RealTimeOverview />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Trends & Analytics",
    key: "trends-analytics",
    route: "/ethikos/dashboard-insights/trends-analytics",
    component: <TrendsAnalytics />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Participation Metrics",
    key: "participation-metrics",
    route: "/ethikos/dashboard-insights/participation-metrics",
    component: <ParticipationMetrics />,
    sidebar: true,
  },
  // Debates & Forums Group Label
  {
    type: "title",
    title: "Debates & Forums",
    key: "debates-forums-title",
  },
  // Debates & Forums Items
  {
    type: "collapse",
    name: "Active Debates",
    key: "active-debates",
    route: "/ethikos/debates-forums/active-debates",
    component: <ActiveDebates />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Start New Debate",
    key: "start-new-debate",
    route: "/ethikos/debates-forums/start-new-debate",
    component: <StartNewDebate />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Featured/Pinned Topics",
    key: "featured-pinned-topics",
    route: "/ethikos/debates-forums/featured-pinned-topics",
    component: <FeaturedPinnedTopics />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Community Guidelines",
    key: "community-guidelines",
    route: "/ethikos/debates-forums/community-guidelines",
    component: <CommunityGuidelines />,
    sidebar: true,
  },
  // Smart Voting Group Label
  {
    type: "title",
    title: "Smart Voting",
    key: "smart-voting-title",
  },
  // Smart Voting Items
  {
    type: "collapse",
    name: "Active Votes",
    key: "active-votes",
    route: "/ethikos/smart-voting/active-votes",
    component: <ActiveVotes />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Voting History",
    key: "voting-history",
    route: "/ethikos/smart-voting/voting-history",
    component: <VotingHistory />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "How Smart Vote Works",
    key: "how-smart-vote-works",
    route: "/ethikos/smart-voting/how-smart-vote-works",
    component: <HowSmartVoteWorks />,
    sidebar: true,
  },
  // Reputation & Badges Group Label
  {
    type: "title",
    title: "Reputation & Badges",
    key: "reputation-badges-title",
  },
  // Reputation & Badges Items
  {
    type: "collapse",
    name: "My Profile",
    key: "my-profile",
    route: "/ethikos/reputation-badges/my-profile",
    component: <MyProfile />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Manage Expertise",
    key: "manage-expertise",
    route: "/ethikos/reputation-badges/manage-expertise",
    component: <ManageExpertise />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "My Badges & Achievements",
    key: "my-badges-achievements",
    route: "/ethikos/reputation-badges/my-badges-achievements",
    component: <MyBadgesAchievements />,
    sidebar: true,
  },
];

export default routes;
