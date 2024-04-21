"use server"

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  User,
} from "@nextui-org/react";


export default async function Navbar11() {
  return (
    <Navbar position="static" className="navi">
      <NavbarBrand>
        <p className="font-bold text-inherit text-white ">CourseMate+</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button as={Link} color="primary" href="/" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        
      </NavbarContent>
    </Navbar>
  );
}
