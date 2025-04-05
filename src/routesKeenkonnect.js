// src/routesKeenkonnect.js

import React from "react";
import Icon from "@mui/material/Icon";
import Dashboard from "layouts/dashboard";

// Placeholder components for Projects & Collaboration
const MyProjects = () => (
  <div>
    <h2>My Projects</h2>
    <p>This section shows your projects.</p>
  </div>
);
const BrowseProjects = () => (
  <div>
    <h2>Browse Projects</h2>
    <p>This section allows you to browse available projects.</p>
  </div>
);
const CreateNewProject = () => (
  <div>
    <h2>Create New Project</h2>
    <p>This section lets you create a new project.</p>
  </div>
);
const ProjectWorkspace = () => (
  <div>
    <h2>Project Workspace</h2>
    <p>This section provides access to the project workspace.</p>
  </div>
);

// Placeholder components for Knowledge Repository
const BrowseRepository = () => (
  <div>
    <h2>Browse Repository</h2>
    <p>This section allows you to browse the repository.</p>
  </div>
);
const SearchFilterDocuments = () => (
  <div>
    <h2>Search & Filter Documents</h2>
    <p>This section helps you search and filter documents.</p>
  </div>
);
const UploadNewDocument = () => (
  <div>
    <h2>Upload New Document</h2>
    <p>This section lets you upload a new document.</p>
  </div>
);
const DocumentManagement = () => (
  <div>
    <h2>Document Management</h2>
    <p>This section provides tools for managing documents.</p>
  </div>
);

// Placeholder components for AI Team Matching
const FindTeams = () => (
  <div>
    <h2>Find Teams</h2>
    <p>This section helps you find teams.</p>
  </div>
);
const MyMatches = () => (
  <div>
    <h2>My Matches</h2>
    <p>This section shows your team matches.</p>
  </div>
);
const MatchPreferences = () => (
  <div>
    <h2>Match Preferences</h2>
    <p>This section lets you set your match preferences.</p>
  </div>
);

// Placeholder components for Interactive Workspaces
const MyWorkspaces = () => (
  <div>
    <h2>My Workspaces</h2>
    <p>This section shows your workspaces.</p>
  </div>
);
const BrowseAvailableWorkspaces = () => (
  <div>
    <h2>Browse Available Workspaces</h2>
    <p>This section allows you to browse available workspaces.</p>
  </div>
);
const LaunchNewWorkspace = () => (
  <div>
    <h2>Launch New Workspace</h2>
    <p>This section lets you launch a new workspace.</p>
  </div>
);

// Placeholder components for Sustainability & Impact
const TrackProjectImpact = () => (
  <div>
    <h2>Track Project Impact</h2>
    <p>This section tracks the impact of projects.</p>
  </div>
);
const SustainabilityDashboard = () => (
  <div>
    <h2>Sustainability Dashboard</h2>
    <p>This section displays sustainability metrics.</p>
  </div>
);
const SubmitImpactReports = () => (
  <div>
    <h2>Submit Impact Reports</h2>
    <p>This section allows you to submit impact reports.</p>
  </div>
);

// Placeholder components for User Reputation & Settings
const ViewReputation = () => (
  <div>
    <h2>View Reputation (Ekoh)</h2>
    <p>This section shows your reputation score.</p>
  </div>
);
const ManageExpertiseAreas = () => (
  <div>
    <h2>Manage Expertise Areas</h2>
    <p>This section lets you manage your expertise areas.</p>
  </div>
);
const AccountPreferences = () => (
  <div>
    <h2>Account & Preferences</h2>
    <p>This section allows you to manage your account settings.</p>
  </div>
);

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
  // Projects & Collaboration
  {
    type: "collapse",
    name: "Projects & Collaboration",
    key: "projects-collaboration",
    icon: <Icon fontSize="small">group</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "My Projects",
        key: "my-projects",
        route: "/keenkonnect/projects/my-projects",
        component: <MyProjects />,
      },
      {
        type: "collapse",
        name: "Browse Projects",
        key: "browse-projects",
        route: "/keenkonnect/projects/browse-projects",
        component: <BrowseProjects />,
      },
      {
        type: "collapse",
        name: "Create New Project",
        key: "create-new-project",
        route: "/keenkonnect/projects/create-new-project",
        component: <CreateNewProject />,
      },
      {
        type: "collapse",
        name: "Project Workspace",
        key: "project-workspace",
        route: "/keenkonnect/projects/project-workspace",
        component: <ProjectWorkspace />,
      },
    ],
    sidebar: true,
  },
  // Knowledge Repository
  {
    type: "collapse",
    name: "Knowledge Repository",
    key: "knowledge-repository",
    icon: <Icon fontSize="small">book</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Browse Repository",
        key: "browse-repository",
        route: "/keenkonnect/knowledge/browse-repository",
        component: <BrowseRepository />,
      },
      {
        type: "collapse",
        name: "Search & Filter Documents",
        key: "search-filter-documents",
        route: "/keenkonnect/knowledge/search-filter-documents",
        component: <SearchFilterDocuments />,
      },
      {
        type: "collapse",
        name: "Upload New Document",
        key: "upload-new-document",
        route: "/keenkonnect/knowledge/upload-new-document",
        component: <UploadNewDocument />,
      },
      {
        type: "collapse",
        name: "Document Management",
        key: "document-management",
        route: "/keenkonnect/knowledge/document-management",
        component: <DocumentManagement />,
      },
    ],
    sidebar: true,
  },
  // AI Team Matching
  {
    type: "collapse",
    name: "AI Team Matching",
    key: "ai-team-matching",
    icon: <Icon fontSize="small">memory</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Find Teams",
        key: "find-teams",
        route: "/keenkonnect/ai-team-matching/find-teams",
        component: <FindTeams />,
      },
      {
        type: "collapse",
        name: "My Matches",
        key: "my-matches",
        route: "/keenkonnect/ai-team-matching/my-matches",
        component: <MyMatches />,
      },
      {
        type: "collapse",
        name: "Match Preferences",
        key: "match-preferences",
        route: "/keenkonnect/ai-team-matching/match-preferences",
        component: <MatchPreferences />,
      },
    ],
    sidebar: true,
  },
  // Interactive Workspaces
  {
    type: "collapse",
    name: "Interactive Workspaces",
    key: "interactive-workspaces",
    icon: <Icon fontSize="small">desktop_windows</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "My Workspaces",
        key: "my-workspaces",
        route: "/keenkonnect/workspaces/my-workspaces",
        component: <MyWorkspaces />,
      },
      {
        type: "collapse",
        name: "Browse Available Workspaces",
        key: "browse-workspaces",
        route: "/keenkonnect/workspaces/browse-available",
        component: <BrowseAvailableWorkspaces />,
      },
      {
        type: "collapse",
        name: "Launch New Workspace",
        key: "launch-new-workspace",
        route: "/keenkonnect/workspaces/launch-new",
        component: <LaunchNewWorkspace />,
      },
    ],
    sidebar: true,
  },
  // Sustainability & Impact
  {
    type: "collapse",
    name: "Sustainability & Impact",
    key: "sustainability-impact",
    icon: <Icon fontSize="small">eco</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Track Project Impact",
        key: "track-project-impact",
        route: "/keenkonnect/sustainability/track-impact",
        component: <TrackProjectImpact />,
      },
      {
        type: "collapse",
        name: "Sustainability Dashboard",
        key: "sustainability-dashboard",
        route: "/keenkonnect/sustainability/dashboard",
        component: <SustainabilityDashboard />,
      },
      {
        type: "collapse",
        name: "Submit Impact Reports",
        key: "submit-impact-reports",
        route: "/keenkonnect/sustainability/submit-reports",
        component: <SubmitImpactReports />,
      },
    ],
    sidebar: true,
  },
  // User Reputation & Settings
  {
    type: "collapse",
    name: "User Reputation & Settings",
    key: "user-reputation-settings",
    icon: <Icon fontSize="small">settings</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "View Reputation (Ekoh)",
        key: "view-reputation",
        route: "/keenkonnect/user-reputation/view-reputation",
        component: <ViewReputation />,
      },
      {
        type: "collapse",
        name: "Manage Expertise Areas",
        key: "manage-expertise",
        route: "/keenkonnect/user-reputation/manage-expertise",
        component: <ManageExpertiseAreas />,
      },
      {
        type: "collapse",
        name: "Account & Preferences",
        key: "account-preferences",
        route: "/keenkonnect/user-reputation/account-preferences",
        component: <AccountPreferences />,
      },
    ],
    sidebar: true,
  },
];

export default routes;
