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

import { AcmeLogo } from "./AcmeLogo.jsx";

export default function Navbar11() {
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
        <NavbarItem>
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            className="text-white"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}