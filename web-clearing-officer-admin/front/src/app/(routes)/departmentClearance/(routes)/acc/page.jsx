"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Lock, FileText, Shield, Camera } from "lucide-react";

const AccSettings = () => {
  const [name, setName] = useState("Dr. John Doe");
  const [bio, setBio] = useState(
    "Experienced software engineer and professor."
  );
  const [professorType, setProfessorType] = useState("Computer Science");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(
    "https://randomuser.me/api/portraits/men/1.jpg"
  );

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log({ name, bio, professorType, password });
    alert("Settings Saved!");
  };

  return (
    <div className="flex items-start justify-start p-5">
      <Card className="p-5 shadow-lg space-y-6 w-[600px]">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center space-x-2">
          <User className="w-6 h-6 text-blue-500" />
          <span>Account Settings</span>
        </h2>

        <form onSubmit={handleSave} className="space-y-6">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src={profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full border"
            />
            <label className="flex items-center space-x-2 cursor-pointer bg-gray-200 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-300">
              <Camera className="w-5 h-5 text-gray-600" />
              <span>Change Profile Picture</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePicChange}
              />
            </label>
          </div>

          {/* Name */}
          <div>
            <label className="text-gray-700 font-medium flex items-center space-x-2">
              <User className="w-5 h-5 text-blue-500" />
              <span>Full Name</span>
            </label>
            <Input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="text-gray-700 font-medium flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-500" />
              <span>Bio</span>
            </label>
            <Textarea
              placeholder="Write a short bio..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
              rows={3}
            />
          </div>

          {/* Professor Type */}
          <div>
            <label className="text-gray-700 font-medium flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span>Professor Type</span>
            </label>
            <Input
              type="text"
              placeholder="Enter your field of expertise..."
              value={professorType}
              onChange={(e) => setProfessorType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Change Password */}
          <div>
            <label className="text-gray-700 font-medium flex items-center space-x-2">
              <Lock className="w-5 h-5 text-red-500" />
              <span>New Password</span>
            </label>
            <Input
              type="password"
              placeholder="Enter a new password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Save Button */}
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
            Save Changes
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AccSettings;
