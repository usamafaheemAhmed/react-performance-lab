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
    solution_Element: <ListingProblemSolution />,
    solution_code: ``,
  },
];
