import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarWrapper, ULists, List, Anchor } from "./navbar.style";

export default function Navbar({ tabs, activeTab, textColor }) {
  console.log(tabs);
  console.log(activeTab);

  return (
    <NavbarWrapper>
      <ULists>
        {tabs[0].tabName !== undefined &&
          tabs.map((item, index) => (
            <List key={index}>
              <NavLink to={item.link}>
                <Anchor
                // className={item[index].tabName === activeTab ? "active" : ""}
                >
                  {item.tabName}
                </Anchor>
              </NavLink>
            </List>
          ))}
      </ULists>
    </NavbarWrapper>
  );
}

{
  /* <List>
          <Anchor>
            <NavLink to="/">Home</NavLink>
          </Anchor>
        </List>
        <List>
          <Anchor>
            <NavLink to="/pokedex">Pokedex</NavLink>
          </Anchor>
        </List>
        <List>
          <Anchor>
            <NavLink to="/">My Pokemon</NavLink>
          </Anchor>
        </List> */
}
