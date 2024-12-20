export function SidebarGroup({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="mb-6">
        <h3 className="text-xs uppercase font-bold text-sidebar-foreground/70 mb-2">
          {label}
        </h3>
        {children}
      </div>
    );
  }
  