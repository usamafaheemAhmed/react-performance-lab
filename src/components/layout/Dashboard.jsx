import React, { Suspense } from "react";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { SiteHeader } from "../site-header";
import { SectionCards } from "../section-cards";
import { ChartAreaInteractive } from "../chart-area-interactive";
import { DataTable } from "../data-table";
import data from "../../hooks/data.json";
import { Route, Routes } from "react-router-dom";
import { labRoutes } from "@/routes/Lab.routes";
import LoadingFallback from "./LoadingFallback";
import HOC from "./HOC";
import { problemRoutes } from "@/routes/Problems.routes";
import { pageRoutes } from "@/routes/Page.routes";
import ProblemHOC from "./ProblemHOC";

const Dashboard = () => {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 62)",
        "--header-height": "calc(var(--spacing) * 12)",
      }}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 pt-2 pb-3 md:gap-4 md:pt-2 md:pb-3">
              {/* <SectionCards /> */}
              {/* <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div> */}
              {/* <DataTable data={data} /> */}
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {labRoutes.map((route) => (
                    <Route
                      key={route.path}
                      path={"/lab" + route.path}
                      element={<HOC item={route} />}
                    />
                  ))}
                  {problemRoutes.map((route) => (
                    <Route
                      key={route.path}
                      path={"/Logic-&-Reasoning" + route.path}
                      element={<ProblemHOC item={route} />}
                    />
                  ))}
                  {pageRoutes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
