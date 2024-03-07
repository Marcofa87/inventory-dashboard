import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header className="flex flex-col justify-center items-start py-1 pr-16 pl-5 mb-px w-full text-xs whitespace-nowrap bg-white border-t border-solid border-slate-100 text-neutral-400 max-md:pr-5 max-md:max-w-full">
        <nav className="flex gap-3">
          <img
            alt=""
            loading="lazy"
            src=""
            className="shrink-0 w-4 aspect-square"
          />
          <div className="flex gap-3 self-start">
            <NavLink to="/" className="flex-auto">
              Inventory
            </NavLink>
            <NavLink to="newinventory" className="flex-auto">
              New Inventory
            </NavLink>
            <NavLink to="viewinventory" className="flex-auto">
              View Inventory
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
