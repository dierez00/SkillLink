import  Header  from "../../components/common/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden"
      style={{
        '--checkbox-tick-svg': 'url("data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(255,255,255)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e")',
        '--radio-dot-svg': 'url("data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(18,20,22)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e")',
        fontFamily: 'Lexend, "Noto Sans", sans-serif'
      } as React.CSSProperties}
    >
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};