// src/routesKreative.js

import React from "react";
import Icon from "@mui/material/Icon";

// Dashboard
import Dashboard from "layouts/kreative/dashboard";

// Creative Hub components
import ExploreIdeas from "layouts/kreative/creative-hub/explore-ideas";
import InspirationGallery from "layouts/kreative/creative-hub/inspiration-gallery";
import SubmitCreativeWork from "layouts/kreative/creative-hub/submit-creative-work";

// Idea Incubator components
import MyIdeas from "layouts/kreative/idea-incubator/my-ideas";
import CreateNewIdea from "layouts/kreative/idea-incubator/create-new-idea";
import CollaborateOnIdeas from "layouts/kreative/idea-incubator/collaborate-on-ideas";

// Collaborative Spaces components
import MySpaces from "layouts/kreative/collaborative-spaces/my-spaces";
import FindSpaces from "layouts/kreative/collaborative-spaces/find-spaces";
import StartNewSpace from "layouts/kreative/collaborative-spaces/start-new-space";

// Community Showcases components
import FeaturedProjects from "layouts/kreative/community-showcases/featured-projects";
import TopCreators from "layouts/kreative/community-showcases/top-creators";
import SubmitToShowcase from "layouts/kreative/community-showcases/submit-to-showcase";

const routes = [
  // Direct link to Dashboard
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/kreative/dashboard",
    component: <Dashboard />,
    sidebar: true,
    noCollapse: true,
  },
  // Creative Hub Group Label
  {
    type: "title",
    title: "Creative Hub",
    key: "creative-hub-title",
  },
  // Creative Hub Items
  {
    type: "collapse",
    name: "Explore Ideas",
    key: "explore-ideas",
    route: "/kreative/creative-hub/explore-ideas",
    component: <ExploreIdeas />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Inspiration Gallery",
    key: "inspiration-gallery",
    route: "/kreative/creative-hub/inspiration-gallery",
    component: <InspirationGallery />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Submit Creative Work",
    key: "submit-creative-work",
    route: "/kreative/creative-hub/submit-creative-work",
    component: <SubmitCreativeWork />,
    sidebar: true,
  },
  // Idea Incubator Group Label
  {
    type: "title",
    title: "Idea Incubator",
    key: "idea-incubator-title",
  },
  // Idea Incubator Items
  {
    type: "collapse",
    name: "My Ideas",
    key: "my-ideas",
    route: "/kreative/idea-incubator/my-ideas",
    component: <MyIdeas />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Create New Idea",
    key: "create-new-idea",
    route: "/kreative/idea-incubator/create-new-idea",
    component: <CreateNewIdea />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Collaborate on Ideas",
    key: "collaborate-on-ideas",
    route: "/kreative/idea-incubator/collaborate-on-ideas",
    component: <CollaborateOnIdeas />,
    sidebar: true,
  },
  // Collaborative Spaces Group Label
  {
    type: "title",
    title: "Collaborative Spaces",
    key: "collaborative-spaces-title",
  },
  // Collaborative Spaces Items
  {
    type: "collapse",
    name: "My Spaces",
    key: "my-spaces",
    route: "/kreative/collaborative-spaces/my-spaces",
    component: <MySpaces />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Find Spaces",
    key: "find-spaces",
    route: "/kreative/collaborative-spaces/find-spaces",
    component: <FindSpaces />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Start a New Space",
    key: "start-new-space",
    route: "/kreative/collaborative-spaces/start-new-space",
    component: <StartNewSpace />,
    sidebar: true,
  },
  // Community Showcases Group Label
  {
    type: "title",
    title: "Community Showcases",
    key: "community-showcases-title",
  },
  // Community Showcases Items
  {
    type: "collapse",
    name: "Featured Projects",
    key: "featured-projects",
    route: "/kreative/community-showcases/featured-projects",
    component: <FeaturedProjects />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Top Creators",
    key: "top-creators",
    route: "/kreative/community-showcases/top-creators",
    component: <TopCreators />,
    sidebar: true,
  },
  {
    type: "collapse",
    name: "Submit to Showcase",
    key: "submit-to-showcase",
    route: "/kreative/community-showcases/submit-to-showcase",
    component: <SubmitToShowcase />,
    sidebar: true,
  },
];

export default routes;
