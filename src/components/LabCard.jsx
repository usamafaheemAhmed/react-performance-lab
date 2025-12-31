import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const LabCard = ({ lab }) => {
  return (
    <Card className="flex flex-col md:flex-row gap-4 items-center p-4 hover:shadow-lg transition-shadow rounded-md border border-gray-200">
      {/* Avatar / Lab Image - Square */}
      <Avatar className="w-24 h-24 md:w-32 md:h-32 rounded-none">
        <AvatarImage src={lab.image} alt={lab.title} className="object-cover" />
        <AvatarFallback className="bg-gray-100 text-gray-600">
          {lab.title[0]}
        </AvatarFallback>
      </Avatar>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-2">
        <CardHeader className="p-0">
          <CardTitle className="text-lg md:text-xl">{lab.title}</CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <p className="text-sm text-muted-foreground">{lab.description}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {lab.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-0 mt-3">
          <Button asChild size="sm" variant="outline">
            <Link to={lab.route}>View Lab →</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default LabCard;
