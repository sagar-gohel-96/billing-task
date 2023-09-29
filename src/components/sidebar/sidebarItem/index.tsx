import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  path: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const { icon, title, path } = props;
  const router = useRouter();

  return (
    <Box
      onClick={() => router.push(path)}
      sx={
        router.pathname !== path
          ? {
              display: "flex",
              height: "52px",
              width: "214px",
              alignItems: "center",
              ":hover": {
                cursor: "pointer",
              },
            }
          : {
              display: "flex",
              height: "52px",
              width: "214px",
              backgroundColor: "red",
            }
      }
    >
      <Box sx={{ marginRight: "25px", width: "22px", height: "22px" }}>
        {icon}
      </Box>
      <Box
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "150%",
          color: "white",
          fontStyle: "normal",
        }}
      >
        {title}
      </Box>
    </Box>
  );
};
