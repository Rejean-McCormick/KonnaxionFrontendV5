// src/routesKonnected.js

import React from "react";
import Icon from "@mui/material/Icon";

// Dashboard
import Dashboard from "layouts/konnected/dashboard";

// Certifications components
import ExamPreparation from "layouts/konnected/certifications/exam-preparation";
import ExamRegistration from "layouts/konnected/certifications/exam-registration";
import ExamDashboardResults from "layouts/konnected/certifications/exam-dashboard-results";
import CertificationPrograms from "layouts/konnected/certifications/certification-programs";

// Learning Library components
import BrowseResources from "layouts/konnected/learning-library/browse-resources";
import RecommendedResources from "layouts/konnected/learning-library/recommended-resources";
import SearchFilters from "layouts/konnected/learning-library/search-filters";
import OfflineContent from "layouts/konnected/learning-library/offline-content";

// Learning Paths components
import MyLearningPath from "layouts/konnected/learning-paths/my-learning-path";
import CreateLearningPath from "layouts/konnected/learning-paths/create-learning-path";
import ManageExistingPaths from "layouts/konnected/learning-paths/manage-existing-paths";

// Teams & Collaboration components
import MyTeams from "layouts/konnected/teams-collaboration/my-teams";
import TeamBuilder from "layouts/konnected/teams-collaboration/team-builder";
import ActivityPlanner from "layouts/konnected/teams-collaboration/activity-planner";
import ProjectWorkspaces from "layouts/konnected/teams-collaboration/project-workspaces";

// Community Discussions components
import ActiveThreads from "layouts/konnected/community-discussions/active-threads";
import StartNewDiscussion from "layouts/konnected/community-discussions/start-new-discussion";
import Moderation from "layouts/konnected/community-discussions/moderation";

const routes = [
  // Direct link to Dashboard
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/konnected/dashboard",
    component: <Dashboard />,
    sidebar: true,
    noCollapse: true,
  },
  // Certifications – parent serves as label for the actual links
  {
    type: "collapse",
    name: "Certifications",
    key: "certifications",
    icon: <Icon fontSize="small">card_membership</Icon>,
   // route: "#", // Not navigable; used for toggling collapse
    collapse: [
      {
        type: "collapse",
        name: "Exam Preparation",
        key: "exam-preparation",
        route: "/konnected/certifications/exam-preparation",
        component: <ExamPreparation />,
      },
      {
        type: "collapse",
        name: "Exam Registration",
        key: "exam-registration",
        route: "/konnected/certifications/exam-registration",
        component: <ExamRegistration />,
      },
      {
        type: "collapse",
        name: "Exam Dashboard & Results",
        key: "exam-dashboard-results",
        route: "/konnected/certifications/exam-dashboard-results",
        component: <ExamDashboardResults />,
      },
      {
        type: "collapse",
        name: "Certification Programs",
        key: "certification-programs",
        route: "/konnected/certifications/certification-programs",
        component: <CertificationPrograms />,
      },
    ],
    sidebar: true,
  },
  // Learning Library – parent serves as label
  {
    type: "collapse",
    name: "Learning Library",
    key: "learning-library",
    icon: <Icon fontSize="small">menu_book</Icon>,
   // route: "#", // Label only
    collapse: [
      {
        type: "collapse",
        name: "Browse Resources",
        key: "browse-resources",
        route: "/konnected/learning-library/browse-resources",
        component: <BrowseResources />,
      },
      {
        type: "collapse",
        name: "Recommended Resources",
        key: "recommended-resources",
        route: "/konnected/learning-library/recommended-resources",
        component: <RecommendedResources />,
      },
      {
        type: "collapse",
        name: "Search & Filters",
        key: "search-filters",
        route: "/konnected/learning-library/search-filters",
        component: <SearchFilters />,
      },
      {
        type: "collapse",
        name: "Offline Content",
        key: "offline-content",
        route: "/konnected/learning-library/offline-content",
        component: <OfflineContent />,
      },
    ],
    sidebar: true,
  },
  // Learning Paths – parent serves as label
  {
    type: "collapse",
    name: "Learning Paths",
    key: "learning-paths",
    icon: <Icon fontSize="small">timeline</Icon>,
  //  route: "#", // Label only
    collapse: [
      {
        type: "collapse",
        name: "My Learning Path",
        key: "my-learning-path",
        route: "/konnected/learning-paths/my-learning-path",
        component: <MyLearningPath />,
      },
      {
        type: "collapse",
        name: "Create Learning Path",
        key: "create-learning-path",
        route: "/konnected/learning-paths/create-learning-path",
        component: <CreateLearningPath />,
      },
      {
        type: "collapse",
        name: "Manage Existing Paths",
        key: "manage-existing-paths",
        route: "/konnected/learning-paths/manage-existing-paths",
        component: <ManageExistingPaths />,
      },
    ],
    sidebar: true,
  },
  // Teams & Collaboration – parent serves as label
  {
    type: "collapse",
    name: "Teams & Collaboration",
    key: "teams-collaboration",
    icon: <Icon fontSize="small">groups</Icon>,
   // route: "#", // Label only
    collapse: [
      {
        type: "collapse",
        name: "My Teams",
        key: "my-teams",
        route: "/konnected/teams-collaboration/my-teams",
        component: <MyTeams />,
      },
      {
        type: "collapse",
        name: "Team Builder",
        key: "team-builder",
        route: "/konnected/teams-collaboration/team-builder",
        component: <TeamBuilder />,
      },
      {
        type: "collapse",
        name: "Activity Planner",
        key: "activity-planner",
        route: "/konnected/teams-collaboration/activity-planner",
        component: <ActivityPlanner />,
      },
      {
        type: "collapse",
        name: "Project Workspaces",
        key: "project-workspaces",
        route: "/konnected/teams-collaboration/project-workspaces",
        component: <ProjectWorkspaces />,
      },
    ],
    sidebar: true,
  },
  // Community Discussions – parent serves as label
  {
    type: "collapse",
    name: "Community Discussions",
    key: "community-discussions",
    icon: <Icon fontSize="small">forum</Icon>,
  //  route: "#", // Label only
    collapse: [
      {
        type: "collapse",
        name: "Active Threads",
        key: "active-threads",
        route: "/konnected/community-discussions/active-threads",
        component: <ActiveThreads />,
      },
      {
        type: "collapse",
        name: "Start New Discussion",
        key: "start-new-discussion",
        route: "/konnected/community-discussions/start-new-discussion",
        component: <StartNewDiscussion />,
      },
      {
        type: "collapse",
        name: "Moderation",
        key: "moderation",
        route: "/konnected/community-discussions/moderation",
        component: <Moderation />,
      },
    ],
    sidebar: true,
  },
];

export default routes;
