import { useSidebar } from "./sidebar";
import { Button } from "@/components/ui/buttons/button";
import { PanelLeft } from "lucide-react";

export function SidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      onClick={toggleSidebar}
      variant="ghost"
      size="icon"
      className="absolute top-4 left-4"
    >
      <PanelLeft />
    </Button>
  );
}
