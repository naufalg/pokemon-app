import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarWrapper, ULists, List, Anchor, Badge } from "./navbar.style";

export default function Navbar({ tabs, activeTab }) {
  return (
    <NavbarWrapper>
      <ULists>
        {tabs &&
          tabs.map((item, index) => (
            <List key={index}>
              <NavLink to={item.link}>
                <Anchor
                // className={item[index].tabName === activeTab ? "active" : ""}
                >
                  {item.tabName}
                  {item.badge && <Badge>{item.badge}</Badge>}
                </Anchor>
              </NavLink>
            </List>
          ))}
      </ULists>
    </NavbarWrapper>
  );
}
