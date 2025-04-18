/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Example Sidenav components
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavRoot from "./SidenavRoot"; // Use relative import
// Custom styles for the Sidenav logo label
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "context";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  let textColor = "white";
  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  // State to track which parent menus are open (keyed by their unique key)
  const [openCollapse, setOpenCollapse] = useState({});

  const handleToggleCollapse = (key) => {
    setOpenCollapse((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }
    window.addEventListener("resize", handleMiniSidenav);
    handleMiniSidenav();
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, transparentSidenav, whiteSidenav, location]);

  const renderRoutes = (allRoutes) =>
    allRoutes.map((routeObj) => {
      const { type, name, icon, title, noCollapse, key, href, route, collapse } = routeObj;
      let returnValue;
      if (type === "collapse") {
        // If the item has children and its route is "#", treat it as a pure toggle
        if (collapse && route === "#") {
          returnValue = (
            <MDBox key={key}>
              <MDBox onClick={() => handleToggleCollapse(key)} sx={{ cursor: "pointer" }}>
                <SidenavCollapse name={name} icon={icon} active={key === collapseName} noCollapse={noCollapse} />
              </MDBox>
              {openCollapse[key] && (
                <List component="div" disablePadding>
                  {collapse.map((child) => (
                    <NavLink key={child.key} to={child.route} style={{ textDecoration: "none", display: "block" }}>
                      <SidenavCollapse name={child.name} icon={child.icon} active={child.key === collapseName} noCollapse={child.noCollapse} />
                    </NavLink>
                  ))}
                </List>
              )}
            </MDBox>
          );
        }
        // If the item has an external href, render it as a Link
        else if (href) {
          returnValue = (
            <Link href={href} key={key} target="_blank" rel="noreferrer" sx={{ textDecoration: "none" }}>
              <SidenavCollapse name={name} icon={icon} active={key === collapseName} noCollapse={noCollapse} />
            </Link>
          );
        }
        // Otherwise, wrap the item in a NavLink for direct navigation
        else {
          returnValue = (
            <NavLink key={key} to={route} style={{ textDecoration: "none" }}>
              <SidenavCollapse name={name} icon={icon} active={key === collapseName} noCollapse={noCollapse} />
            </NavLink>
          );
        }
      } else if (type === "title") {
        returnValue = (
          <MDTypography
            key={key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </MDTypography>
        );
      } else if (type === "divider") {
        returnValue = (
          <Divider
            key={key}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
          />
        );
      }
      return returnValue;
    });

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <MDTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </MDTypography>
        </MDBox>
        <MDBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && <MDBox component="img" src={brand} alt="Brand" width="2rem" />}
          <MDBox width={!brandName && "100%"} sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}>
            <MDTypography component="h6" variant="button" fontWeight="medium" color={textColor}>
              {brandName}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <Divider
        light={
          (!darkMode && !whiteSidenav && !transparentSidenav) ||
          (darkMode && !transparentSidenav && whiteSidenav)
        }
      />
      <List>{renderRoutes(routes)}</List>
      <MDBox p={2} mt="auto">
        <MDButton
          component="a"
          href="https://www.creative-tim.com/product/material-dashboard-pro-react"
          target="_blank"
          rel="noreferrer"
          variant="gradient"
          color={color}
          fullWidth
        >
          upgrade to pro
        </MDButton>
      </MDBox>
    </SidenavRoot>
  );
}

Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
