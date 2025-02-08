import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import logo from "./Serene MINDS.png"; // Adjust the path based on your project structure

export default function SitemarkIcon() {
  return (
    <SvgIcon sx={{ height: 1, width: 100, mr: 2 }} component="svg">
      <svg width={86} height={19} viewBox="0 0 86 19" xmlns="http://www.w3.org/2000/svg">
        <image href={logo} width="86" height="19" />
      </svg>
    </SvgIcon>
  );
}