"use client"

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Settings2, Users, CalendarDays, ShieldCheck } from "lucide-react";

export default function AdminSettings() {
  const [deadline, setDeadline] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  

  const handleSaveDeadline = () => {
    setMessage(`Deadline set to ${deadline}`);
  };

  const handleChangePassword = () => {
    if (password === confirmPassword) {
      setMessage("Password changed successfully!");
    } else {
      setMessage("Passwords do not match!");
    }
  };

  return (
    <div className="p-6 w-full bg-white rounded-2xl shadow-lg">
      <div className="max-w-3xl p-6">

        {/* Settings Section */}
        <div className="inline-flex justify-center gap-3 mb-7">
          <Settings2 /> <h1 className="text-2xl font-semibold"> Settings</h1>
        </div>
        <Tabs defaultValue="clearance" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="clearance">Clearance Deadline</TabsTrigger>
            <TabsTrigger value="password">Change Password</TabsTrigger>
          </TabsList>

          {/* Clearance Deadline Tab */}
          <TabsContent value="clearance">
            <Card>
              <CardHeader>
                <CardTitle>Set Clearance Deadline</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="mb-4"
                />
                <Button onClick={handleSaveDeadline}>Save</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Change Password Tab */}
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Change Admin Password</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mb-4"
                />
                <Input
                  type="password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-4"
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mb-4"
                />
                <Button onClick={handleChangePassword}>Save</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        {message && (
          <div className="mt-4 p-3 bg-blue-100 text-blue-800 rounded-lg text-center">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
