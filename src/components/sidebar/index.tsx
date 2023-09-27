import React, { useMemo } from "react";
import { SidebarItem } from "..";
import Box from "@mui/material/Box";
import { SidebarItemType } from "@/pages";
import Stack from "@mui/material/Stack";
interface SidebarProps {
  sidebarItems: SidebarItemType[];
  sidebarBottomItmes: SidebarItemType[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  sidebarItems,
  sidebarBottomItmes,
}) => {
  return (
    <Box
      sx={{
        padding: "30px",
        backgroundColor: "#312E81",
        boxShadow:
          "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
      }}
    >
      <Box
        sx={{
          color: "#fff",
          fontFamily: "Helvetica Rounded",
          fontSize: "30px",
          fontWeight: 700,
          fontStyle: "normal",
        }}
      >
        LOGO
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack sx={{ margin: "20px", marginLeft: 0 }}>
          {sidebarItems &&
            sidebarItems?.map((sidebarItem: SidebarItemType, index: number) => (
              <SidebarItem
                key={index}
                icon={sidebarItem.icon}
                title={sidebarItem.title}
                path={sidebarItem.path}
              />
            ))}
        </Stack>
        <Stack sx={{ margin: "20px" }}>
          {sidebarBottomItmes &&
            sidebarBottomItmes?.map(
              (sidebarBottomItem: SidebarItemType, index: number) => (
                <SidebarItem
                  key={index}
                  icon={sidebarBottomItem.icon}
                  title={sidebarBottomItem.title}
                  path={sidebarBottomItem.path}
                />
              )
            )}
        </Stack>
      </Stack>
    </Box>
  );
};
