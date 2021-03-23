import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper, ULists, List, Anchor, Badge } from "./navbar.style";

export default function Navbar({ tabs, activeTab }) {
  return (
    <NavbarWrapper>
      <ULists>
        {tabs &&
          tabs.map((item, index) => (
            <List key={index}>
              <Link to={item.link}>
                <Anchor>
                  {item.tabName}
                  {item.badge && <Badge>{item.badge}</Badge>}
                </Anchor>
              </Link>
            </List>
          ))}
      </ULists>
    </NavbarWrapper>
  );
}
