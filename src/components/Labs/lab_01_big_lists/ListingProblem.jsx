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
import React from "react";

const ListingProblem = () => {
  const userData = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    profileImageUrl: `https://i.pravatar.cc/150?u=${i}`,
    name: `User Name ${i}`,
    initials: `UN`,
    email: `user${i}@example.com`,
    lastSeen: `Last seen ${i} minutes ago`,
  }));

  return (
    <div className="px-2 overflow-y-auto max-h-[calc(100vh-10rem)]">
      <div className="flex w-full flex-col gap-3">
        {userData.map((user) => (
          <Item variant="outline">
            <ItemMedia>
              <Avatar className="size-10">
                <AvatarImage
                  src={user.profileImageUrl}
                  className="rounded-full"
                />
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
        ))}
      </div>
    </div>
  );
};

export default ListingProblem;
