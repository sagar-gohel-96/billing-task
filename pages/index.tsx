import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { useEffect } from "react";

export interface SidebarItemType {
  icon: React.ReactNode;
  title: string;
  path: string;
}

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/billing");
  }, [router]);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <main>Hello</main>
    </Box>
  );
}
