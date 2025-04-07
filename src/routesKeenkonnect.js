// src/routesKeenkonnect.js

import React from "react";
import Icon from "@mui/material/Icon";
// KeenKonnect Dashboard
import Dashboard from "layouts/keenkonnect/dashboard";

// Projects & Collaboration components
import MyProjects from "layouts/keenkonnect/projects-collaboration/my-projects";
import BrowseProjects from "layouts/keenkonnect/projects-collaboration/browse-projects";
import CreateNewProject from "layouts/keenkonnect/projects-collaboration/create-new-project";
import ProjectWorkspace from "layouts/keenkonnect/projects-collaboration/project-workspace";

// Knowledge Repository components
import BrowseRepository from "layouts/keenkonnect/knowledge-repository/browse-repository";
import SearchFilterDocuments from "layouts/keenkonnect/knowledge-repository/search-filter-documents";
import UploadNewDocument from "layouts/keenkonnect/knowledge-repository/upload-new-document";
import DocumentManagement from "layouts/keenkonnect/knowledge-repository/document-management";

// AI Team Matching components
import FindTeams from "layouts/keenkonnect/ai-team-matching/find-teams";
import MyMatches from "layouts/keenkonnect/ai-team-matching/my-matches";
import MatchPreferences from "layouts/keenkonnect/ai-team-matching/match-preferences";

// Interactive Workspaces components
import MyWorkspaces from "layouts/keenkonnect/interactive-workspaces/my-workspaces";
import BrowseAvailableWorkspaces from "layouts/keenkonnect/interactive-workspaces/browse-available-workspaces";
import LaunchNewWorkspace from "layouts/keenkonnect/interactive-workspaces/launch-new-workspace";

// Sustainability & Impact components
import TrackProjectImpact from "layouts/keenkonnect/sustainability-impact/track-project-impact";
import SustainabilityDashboard from "layouts/keenkonnect/sustainability-impact/sustainability-dashboard";
import SubmitImpactReports from "layouts/keenkonnect/sustainability-impact/submit-impact-reports";

// User Reputation & Settings components
import ViewReputation from "layouts/keenkonnect/user-reputation-settings/view-reputation-ekoh";
import ManageExpertiseAreas from "layouts/keenkonnect/user-reputation-settings/manage-expertise-areas";
import AccountPreferences from "layouts/keenkonnect/user-reputation-settings/account-preferences";

const routes = [
  // Dashboard (direct link)
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/keenkonnect/dashboard",
    component: <Dashboard />,
    sidebar: true,
    noCollapse: true,
  },
  // Projects & Collaboration Group Label
  {
    type: "title",
    title: "Projects & Collaboration",
    key: "projects-collaboration-title",
  },
  // Projects & Collaboration Items
  {
    type: "collapse",
    name: "My Projects",
    key: "my-projects",
    route: "/keenkonnect/projects/my-projects",
    component: <MyProjects />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Browse Projects",
    key: "browse-projects",
    route: "/keenkonnect/projects/browse-projects",
    component: <BrowseProjects />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Create New Project",
    key: "create-new-project",
    route: "/keenkonnect/projects/create-new-project",
    component: <CreateNewProject />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Project Workspace",
    key: "project-workspace",
    route: "/keenkonnect/projects/project-workspace",
    component: <ProjectWorkspace />,
    sidebar: true,
  },
  // Knowledge Repository Group Label
  {
    type: "title",
    title: "Knowledge Repository",
    key: "knowledge-repository-title",
  },
  // Knowledge Repository Items
  {
    type: "collapse",
    name: "Browse Repository",
    key: "browse-repository",
    route: "/keenkonnect/knowledge/browse-repository",
    component: <BrowseRepository />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Search & Filter Documents",
    key: "search-filter-documents",
    route: "/keenkonnect/knowledge/search-filter-documents",
    component: <SearchFilterDocuments />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Upload New Document",
    key: "upload-new-document",
    route: "/keenkonnect/knowledge/upload-new-document",
    component: <UploadNewDocument />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Document Management",
    key: "document-management",
    route: "/keenkonnect/knowledge/document-management",
    component: <DocumentManagement />,
    sidebar: true,
  },
  // AI Team Matching Group Label
  {
    type: "title",
    title: "AI Team Matching",
    key: "ai-team-matching-title",
  },
  // AI Team Matching Items
  {
    type: "collapse",
    name: "Find Teams",
    key: "find-teams",
    route: "/keenkonnect/ai-team-matching/find-teams",
    component: <FindTeams />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "My Matches",
    key: "my-matches",
    route: "/keenkonnect/ai-team-matching/my-matches",
    component: <MyMatches />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Match Preferences",
    key: "match-preferences",
    route: "/keenkonnect/ai-team-matching/match-preferences",
    component: <MatchPreferences />,
    sidebar: true,
  },
  // Interactive Workspaces Group Label
  {
    type: "title",
    title: "Interactive Workspaces",
    key: "interactive-workspaces-title",
  },
  // Interactive Workspaces Items
  {
    type: "collapse",
    name: "My Workspaces",
    key: "my-workspaces",
    route: "/keenkonnect/workspaces/my-workspaces",
    component: <MyWorkspaces />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Browse Available Workspaces",
    key: "browse-workspaces",
    route: "/keenkonnect/workspaces/browse-available-workspaces",
    component: <BrowseAvailableWorkspaces />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Launch New Workspace",
    key: "launch-new-workspace",
    route: "/keenkonnect/workspaces/launch-new-workspace",
    component: <LaunchNewWorkspace />,
    sidebar: true,
  },
  // Sustainability & Impact Group Label
  {
    type: "title",
    title: "Sustainability & Impact",
    key: "sustainability-impact-title",
  },
  // Sustainability & Impact Items
  {
    type: "collapse",
    name: "Track Project Impact",
    key: "track-project-impact",
    route: "/keenkonnect/sustainability-impact/track-project-impact",
    component: <TrackProjectImpact />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Sustainability Dashboard",
    key: "sustainability-dashboard",
    route: "/keenkonnect/sustainability-impact/sustainability-dashboard",
    component: <SustainabilityDashboard />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Submit Impact Reports",
    key: "submit-impact-reports",
    route: "/keenkonnect/sustainability-impact/submit-impact-reports",
    component: <SubmitImpactReports />,
    sidebar: true,
  },
  // User Reputation & Settings Group Label
  {
    type: "title",
    title: "User Reputation & Settings",
    key: "user-reputation-settings-title",
  },
  // User Reputation & Settings Items
  {
    type: "collapse",
    name: "View Reputation (Ekoh)",
    key: "view-reputation",
    route: "/keenkonnect/user-reputation/view-reputation-ekoh",
    component: <ViewReputation />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Manage Expertise Areas",
    key: "manage-expertise",
    route: "/keenkonnect/user-reputation/manage-expertise-areas",
    component: <ManageExpertiseAreas />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Account & Preferences",
    key: "account-preferences",
    route: "/keenkonnect/user-reputation/account-preferences",
    component: <AccountPreferences />,
    sidebar: true,
  },
];

export default routes;
