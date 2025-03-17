"user client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Calendar, Library } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      <Card className="flex flex-row items-center p-4">
        <Library className="w-12 h-15 text-green-500" />
        <div className="ml-4">
          <CardTitle>Courses</CardTitle>
          <CardContent className="text-2xl font-bold">15</CardContent>
        </div>
      </Card>

      <Card className="flex flex-row items-center p-4">
        <Users className="w-12 h-15 text-blue-500" />
        <div className="ml-4">
          <CardTitle>Students</CardTitle>
          <CardContent className="text-2xl font-bold">43</CardContent>
        </div>
      </Card>
      
      <Card className="flex flex-row items-center p-4">
        <Calendar className="w-12 h-15 text-red-500" />
        <div className="ml-4">
          <CardTitle>Clearance Deadline</CardTitle>
          <CardContent className="text-2xl font-bold">March 31, 2025</CardContent>
        </div>
      </Card>
    </div>
  );
}
