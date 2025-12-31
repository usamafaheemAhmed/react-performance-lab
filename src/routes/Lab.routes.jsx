import HomePage from "@/components/Pages/HomePage";
import { lazy } from "react";

const ListingProblem = lazy(() =>
  import("@/components/Labs/lab_01_big_lists/ListingProblem")
);
const ListingProblemSolution = lazy(() =>
  import("@/components/Labs/lab_01_big_lists/ListingProblemSolution")
);

export const labRoutes = [
  {
    path: "/big-lists",
    element: <ListingProblem />, // <-- FIXED
    title: "Big Lists",
    showInMenu: true,
    code: `{userData.map((user) => (
              <Item variant="outline">
                <ItemMedia>
                  <Avatar className="size-10">
                    <AvatarImage src={user.profileImageUrl} />
                    <AvatarFallback>{user.initials}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    {user.name}
                    <sub>{user.email}</sub>
                  </ItemTitle>
                  <ItemDescription>{user.lastSeen}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button
                    size="icon-sm"
                    variant="outline"
                    className="rounded-full"
                    aria-label="Invite"
                  >
                    <Plus />
                  </Button>
                </ItemActions>
              </Item>
            ))}`,
    hocLayout: true,
    solution_code: `
import { useVirtualizer } from "@tanstack/react-virtual";

      const parentRef = React.useRef(null);
    
      const rowVirtualizer = useVirtualizer({
        count: userData.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => ROW_HEIGHT,
        overscan: 8,
        measureElement: (el) => el.getBoundingClientRect().height,
      });
    
    <div ref={parentRef} className="h-[600px] overflow-auto">
      <div
        style={{
          height: {rowVirtualizer.getTotalSize()}px,
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: translateY({virtualRow.start}px),
            }}
          >
            <div className="px-2 py-1">
              <UserItem user={userData[virtualRow.index]} />
            </div>
          </div>
        ))}
      </div>
    </div>
    `,
    solution_Element: <ListingProblemSolution />,
  },
  {
    path: "/",
    element: <HomePage />, // <-- FIXED
    title: "Home",
    showInMenu: false,
  },
];
