import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Plus } from "lucide-react";

const userData = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  profileImageUrl: `https://i.pravatar.cc/150?u=${i}`,
  name: `User Name ${i}`,
  initials: "UN",
  email: `user${i}@example.com`,
  lastSeen: `Last seen ${i} minutes ago`,
}));

const ROW_HEIGHT = 88; // match real row height

const UserItem = React.memo(({ user }) => (
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
        <sub className="ml-2 text-muted-foreground">{user.email}</sub>
      </ItemTitle>
      <ItemDescription>{user.lastSeen}</ItemDescription>
    </ItemContent>

    <ItemActions>
      <Button size="icon-sm" variant="outline" className="rounded-full">
        <Plus />
      </Button>
    </ItemActions>
  </Item>
));

export default function ListingProblemSolution() {
  const parentRef = React.useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: userData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 8,
    measureElement: (el) => el.getBoundingClientRect().height,
  });

  return (
    <div ref={parentRef} className="h-[600px] overflow-auto">
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
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
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <div className="px-2 py-1">
              <UserItem user={userData[virtualRow.index]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
