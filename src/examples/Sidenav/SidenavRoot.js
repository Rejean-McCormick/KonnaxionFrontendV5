// In your Sidenav rendering (e.g., in SidenavRoot.js)

import CustomSidenavCollapse from "components/CustomSidenavCollapse"; // adjust the path as needed

const renderRoutes = routes.map((routeObj) => {
  const { type, name, icon, title, noCollapse, key, href, route, collapse } = routeObj;
  let returnValue;

  if (type === "collapse") {
    if (collapse) {
      // Use the custom collapsible component if the route has children
      returnValue = (
        <CustomSidenavCollapse key={key} icon={icon} name={name} collapse={collapse} activeKey={key} />
      );
    } else if (href) {
      returnValue = (
        <Link href={href} key={key} target="_blank" rel="noreferrer" sx={{ textDecoration: "none" }}>
          <SidenavCollapse name={name} icon={icon} active={key === collapseName} noCollapse={noCollapse} />
        </Link>
      );
    } else {
      returnValue = (
        <NavLink key={key} to={route}>
          <SidenavCollapse name={name} icon={icon} active={key === collapseName} noCollapse={noCollapse} />
        </NavLink>
      );
    }
  } else if (type === "title") {
    // Render title items
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
