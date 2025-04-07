// src/components/CustomSidenavCollapse.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Icon from "@mui/material/Icon";
import { NavLink } from "react-router-dom";
import MDBox from "components/MDBox";
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";

function CustomSidenavCollapse({ icon, name, collapse, activeKey }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <ListItem component="li" onClick={toggleOpen} style={{ cursor: "pointer" }}>
        <MDBox display="flex" alignItems="center" width="100%">
          {/* Render the parent label using the default SidenavCollapse styles */}
          <SidenavCollapse name={name} icon={icon} active={activeKey === name} />
          <Icon
            sx={{
              ml: "auto",
              transition: "transform 0.3s",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            expand_more
          </Icon>
        </MDBox>
      </ListItem>
      {open && (
        <List component="div" disablePadding>
          {collapse.map((child) => (
            <NavLink
              key={child.key}
              to={child.route}
              style={{ textDecoration: "none", display: "block" }}
            >
              <SidenavCollapse name={child.name} icon={child.icon} active={activeKey === child.key} />
            </NavLink>
          ))}
        </List>
      )}
    </>
  );
}

CustomSidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  collapse: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeKey: PropTypes.string,
};

export default CustomSidenavCollapse;
