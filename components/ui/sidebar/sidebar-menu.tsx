import { cn } from "@/lib/utils";

export function SidebarMenu({
  items,
}: {
  items: { title: string; url: string; icon: React.ElementType }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.url}
          className={cn(
            "flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-accent"
          )}
        >
          <item.icon className="w-5 h-5" />
          <span>{item.title}</span>
        </a>
      ))}
    </div>
  );
}
