// src/routes.js

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";

import DashboardK from "layouts/dashboardk";




// @mui icons
import Icon from "@mui/material/Icon";


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboardx",
    component: <Dashboard />,
    sidebar: false, // Do not show in sidebar
  },
 


  {
    type: "collapse",
    name: "Dashboardk",
    key: "dashboardk",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboardk",
    component: <DashboardK />,
    noCollapse: true,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Certifications",
    key: "konnected-certifications",
    icon: <Icon fontSize="small">card_membership</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Exam Preparation",
        key: "konnected-exam-preparation",
        route: "/konnected/certifications/exam-preparation",
        component: <div>Exam Preparation</div>,
      },
      {
        type: "collapse",
        name: "Exam Registration",
        key: "konnected-exam-registration",
        route: "/konnected/certifications/exam-registration",
        component: <div>Exam Registration</div>,
      },
      {
        type: "collapse",
        name: "Exam Dashboard & Results",
        key: "konnected-exam-dashboard-results",
        route: "/konnected/certifications/exam-dashboard-results",
        component: <div>Exam Dashboard & Results</div>,
      },
      {
        type: "collapse",
        name: "Certification Programs",
        key: "konnected-certification-programs",
        route: "/konnected/certifications/certification-programs",
        component: <div>Certification Programs</div>,
      },
    ],
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Learning Library",
    key: "konnected-learning-library",
    icon: <Icon fontSize="small">menu_book</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Browse Resources",
        key: "konnected-browse-resources",
        route: "/konnected/learning-library/browse-resources",
        component: <div>Browse Resources</div>,
      },
      {
        type: "collapse",
        name: "Recommended Resources",
        key: "konnected-recommended-resources",
        route: "/konnected/learning-library/recommended-resources",
        component: <div>Recommended Resources</div>,
      },
      {
        type: "collapse",
        name: "Search & Filters",
        key: "konnected-search-filters",
        route: "/konnected/learning-library/search-filters",
        component: <div>Search & Filters</div>,
      },
      {
        type: "collapse",
        name: "Offline Content",
        key: "konnected-offline-content",
        route: "/konnected/learning-library/offline-content",
        component: <div>Offline Content</div>,
      },
    ],
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Learning Paths",
    key: "konnected-learning-paths",
    icon: <Icon fontSize="small">timeline</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "My Learning Path",
        key: "konnected-my-learning-path",
        route: "/konnected/learning-paths/my-learning-path",
        component: <div>My Learning Path</div>,
      },
      {
        type: "collapse",
        name: "Create Learning Path",
        key: "konnected-create-learning-path",
        route: "/konnected/learning-paths/create",
        component: <div>Create Learning Path</div>,
      },
      {
        type: "collapse",
        name: "Manage Existing Paths",
        key: "konnected-manage-existing-paths",
        route: "/konnected/learning-paths/manage",
        component: <div>Manage Existing Paths</div>,
      },
    ],
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Teams & Collaboration",
    key: "konnected-teams-collaboration",
    icon: <Icon fontSize="small">groups</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "My Teams",
        key: "konnected-my-teams",
        route: "/konnected/teams-collaboration/my-teams",
        component: <div>My Teams</div>,
      },
      {
        type: "collapse",
        name: "Team Builder",
        key: "konnected-team-builder",
        route: "/konnected/teams-collaboration/team-builder",
        component: <div>Team Builder</div>,
      },
      {
        type: "collapse",
        name: "Activity Planner",
        key: "konnected-activity-planner",
        route: "/konnected/teams-collaboration/activity-planner",
        component: <div>Activity Planner</div>,
      },
      {
        type: "collapse",
        name: "Project Workspaces",
        key: "konnected-project-workspaces",
        route: "/konnected/teams-collaboration/project-workspaces",
        component: <div>Project Workspaces</div>,
      },
    ],
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Community Discussions",
    key: "konnected-community-discussions",
    icon: <Icon fontSize="small">forum</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Active Threads",
        key: "konnected-active-threads",
        route: "/konnected/community-discussions/active-threads",
        component: <div>Active Threads</div>,
      },
      {
        type: "collapse",
        name: "Start New Discussion",
        key: "konnected-start-new-discussion",
        route: "/konnected/community-discussions/start-new",
        component: <div>Start New Discussion</div>,
      },
      {
        type: "collapse",
        name: "Moderation",
        key: "konnected-moderation",
        route: "/konnected/community-discussions/moderation",
        component: <div>Moderation</div>,
      },
    ],
    sidebar: true,
  },
];


export default routes;
