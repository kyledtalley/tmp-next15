import {

    SidebarGroup,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { SidebarContent, Sidebar, SidebarHeader, SidebarFooter } from "./ui/layout/sidebar";

export function AppSidebar() {
    return (
        <Sidebar>
            {/* Header */}
            <SidebarHeader>
                {/* Dedicated space for the toggle button */}
                <div className="flex items-center justify-start p-2">
                    <SidebarTrigger className="ml-2" />
                </div>
            </SidebarHeader>

            {/* Sidebar Content */}
            <SidebarContent>
                <SidebarGroup>
                    {/* Add your sidebar content here */}
                </SidebarGroup>
            </SidebarContent>

            {/* Footer */}
            <SidebarFooter>
                {/* Add any footer content here */}
            </SidebarFooter>
        </Sidebar>
    );
}
