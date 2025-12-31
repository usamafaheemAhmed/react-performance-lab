// src/pages/HomePage.jsx
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // shadcn card import
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LabCard from "../LabCard";

const HomePage = () => {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    // dynamically import all files in Labs folder
    const labModules = import.meta.glob("/src/components/Labs/**/meta.js", {
      eager: true,
    });
    console.log(labModules);

    const labs = Object.values(labModules).map((mod) => mod.default);

    setLabs(labs);
  }, []);

  return (
    <div>
      <div className="p-10">
        <Card>
          <CardHeader>
            <CardTitle>All Labs</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {labs.map((lab) => (
              <LabCard key={lab.id} lab={lab} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
