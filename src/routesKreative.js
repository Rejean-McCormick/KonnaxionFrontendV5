// src/routesKreative.js

import React from "react";
import Icon from "@mui/material/Icon";
import Dashboard from "layouts/dashboard";

// Placeholder components for Creative Hub subsections
const CreativeHubExplore = () => (
  <div>
    <h2>Explore Ideas</h2>
    <p>This is the Explore Ideas section.</p>
  </div>
);

const CreativeHubInspiration = () => (
  <div>
    <h2>Inspiration Gallery</h2>
    <p>This is the Inspiration Gallery section.</p>
  </div>
);

const CreativeHubSubmit = () => (
  <div>
    <h2>Submit Creative Work</h2>
    <p>This is the Submit Creative Work section.</p>
  </div>
);

// Placeholder components for Idea Incubator subsections
const IdeaIncubatorMyIdeas = () => (
  <div>
    <h2>My Ideas</h2>
    <p>This is the My Ideas section.</p>
  </div>
);

const IdeaIncubatorCreateIdea = () => (
  <div>
    <h2>Create New Idea</h2>
    <p>This is the Create New Idea section.</p>
  </div>
);

const IdeaIncubatorCollaborate = () => (
  <div>
    <h2>Collaborate on Ideas</h2>
    <p>This is the Collaborate on Ideas section.</p>
  </div>
);

// Placeholder components for Collaborative Spaces subsections
const CollaborativeSpacesMySpaces = () => (
  <div>
    <h2>My Spaces</h2>
    <p>This is the My Spaces section.</p>
  </div>
);

const CollaborativeSpacesFind = () => (
  <div>
    <h2>Find Spaces</h2>
    <p>This is the Find Spaces section.</p>
  </div>
);

const CollaborativeSpacesNew = () => (
  <div>
    <h2>Start a New Space</h2>
    <p>This is the Start a New Space section.</p>
  </div>
);

// Placeholder components for Community Showcases subsections
const CommunityShowcasesFeatured = () => (
  <div>
    <h2>Featured Projects</h2>
    <p>This is the Featured Projects section.</p>
  </div>
);

const CommunityShowcasesTop = () => (
  <div>
    <h2>Top Creators</h2>
    <p>This is the Top Creators section.</p>
  </div>
);

const CommunityShowcasesSubmit = () => (
  <div>
    <h2>Submit to Showcase</h2>
    <p>This is the Submit to Showcase section.</p>
  </div>
);

const routes = [
  // Dashboard (direct link)
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
    sidebar: true,
    noCollapse: true,
  },
  // Creative Hub
  {
    type: "collapse",
    name: "Creative Hub",
    key: "creative-hub",
    icon: <Icon fontSize="small">lightbulb</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Explore Ideas",
        key: "explore-ideas",
        route: "/kreative/creative-hub/explore-ideas",
        component: <CreativeHubExplore />,
      },
      {
        type: "collapse",
        name: "Inspiration Gallery",
        key: "inspiration-gallery",
        route: "/kreative/creative-hub/inspiration-gallery",
        component: <CreativeHubInspiration />,
      },
      {
        type: "collapse",
        name: "Submit Creative Work",
        key: "submit-creative-work",
        route: "/kreative/creative-hub/submit-creative-work",
        component: <CreativeHubSubmit />,
      },
    ],
    sidebar: true,
  },
  // Idea Incubator
  {
    type: "collapse",
    name: "Idea Incubator",
    key: "idea-incubator",
    icon: <Icon fontSize="small">emoji_objects</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "My Ideas",
        key: "my-ideas",
        route: "/kreative/idea-incubator/my-ideas",
        component: <IdeaIncubatorMyIdeas />,
      },
      {
        type: "collapse",
        name: "Create New Idea",
        key: "create-new-idea",
        route: "/kreative/idea-incubator/create-new-idea",
        component: <IdeaIncubatorCreateIdea />,
      },
      {
        type: "collapse",
        name: "Collaborate on Ideas",
        key: "collaborate-on-ideas",
        route: "/kreative/idea-incubator/collaborate-on-ideas",
        component: <IdeaIncubatorCollaborate />,
      },
    ],
    sidebar: true,
  },
  // Collaborative Spaces
  {
    type: "collapse",
    name: "Collaborative Spaces",
    key: "collaborative-spaces",
    icon: <Icon fontSize="small">group_work</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "My Spaces",
        key: "my-spaces",
        route: "/kreative/collaborative-spaces/my-spaces",
        component: <CollaborativeSpacesMySpaces />,
      },
      {
        type: "collapse",
        name: "Find Spaces",
        key: "find-spaces",
        route: "/kreative/collaborative-spaces/find-spaces",
        component: <CollaborativeSpacesFind />,
      },
      {
        type: "collapse",
        name: "Start a New Space",
        key: "start-new-space",
        route: "/kreative/collaborative-spaces/start-new-space",
        component: <CollaborativeSpacesNew />,
      },
    ],
    sidebar: true,
  },
  // Community Showcases
  {
    type: "collapse",
    name: "Community Showcases",
    key: "community-showcases",
    icon: <Icon fontSize="small">collections</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Featured Projects",
        key: "featured-projects",
        route: "/kreative/community-showcases/featured-projects",
        component: <CommunityShowcasesFeatured />,
      },
      {
        type: "collapse",
        name: "Top Creators",
        key: "top-creators",
        route: "/kreative/community-showcases/top-creators",
        component: <CommunityShowcasesTop />,
      },
      {
        type: "collapse",
        name: "Submit to Showcase",
        key: "submit-to-showcase",
        route: "/kreative/community-showcases/submit-to-showcase",
        component: <CommunityShowcasesSubmit />,
      },
    ],
    sidebar: true,
  },
];

export default routes;
