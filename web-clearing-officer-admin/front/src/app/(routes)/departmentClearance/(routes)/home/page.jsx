"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  ClipboardList,
  User,
  Calendar,
  CheckCircle,
  GraduationCap,
  User2,
} from "lucide-react";

const requirements = [
  {
    title: "CC107",
    details: "Submit a 3-page proposal outlining the project scope.",
    instructor: "Dr. Smith",
    dueDate: "March 20, 2025",
    completed: false,
  },
  {
    title: "SE101",
    details: "Analyze the efficiency of sorting algorithms.",
    instructor: "Prof. Johnson",
    dueDate: "March 25, 2025",
    completed: true,
  },
  {
    title: "IS102",
    details: "Create a detailed software architecture document.",
    instructor: "Dr. Williams",
    dueDate: "April 5, 2025",
    completed: false,
  },
  {
    title: "CS elct 3",
    details: "Optimize database queries for faster performance.",
    instructor: "Dr. Adams",
    dueDate: "April 10, 2025",
    completed: true,
  },
  {
    title: "IAS101",
    details: "Write a report on modern network security protocols.",
    instructor: "Prof. Brown",
    dueDate: "April 15, 2025",
    completed: false,
  },
  {
    title: "Programming 1",
    details: "Evaluate machine learning models for accuracy.",
    instructor: "Dr. Green",
    dueDate: "April 20, 2025",
    completed: true,
  },
  {
    title: "CC106",
    details: "Develop a basic mobile app prototype.",
    instructor: "Prof. White",
    dueDate: "April 25, 2025",
    completed: false,
  },
  {
    title: "THS101",
    details: "Perform a security audit on a given system.",
    instructor: "Dr. Black",
    dueDate: "April 30, 2025",
    completed: true,
  },
  {
    title: "MS101",
    details: "Analyze cloud service providers and their benefits.",
    instructor: "Prof. Gray",
    dueDate: "May 5, 2025",
    completed: false,
  },
];

const MyHome = () => {
  const [search, setSearch] = useState("");

  const filteredRequirements = requirements.filter(
    (req) =>
      req.title.toLowerCase().includes(search.toLowerCase()) ||
      req.instructor.toLowerCase().includes(search.toLowerCase()) ||
      req.details.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5 m space-y-6">
      <div className="inline-flex justify-center">
        <GraduationCap /> <h1 className="text-2xl font-semibold"> Courses</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-100 space-x-2 border-b border-gray-300 pb-2">
        <Search className="w-5 h-5 text-gray-500" />
        <Input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 focus:outline-none"
        />
      </div>

      {/* Requirement Cards (3 Columns x 3 Rows) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredRequirements.slice(0, 9).map((req, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-2xl transition rounded-xl bg-white border border-gray-200"
          >
            <CardContent className="p-5 space-y-4">
              {/* Title */}
              <div className="flex items-center space-x-3">
                <ClipboardList className="w-6 h-6 text-blue-600" />
                <h2 className="text-lg font-semibold">{req.title}</h2>
              </div>

              {/* Details */}
              <p className="text-sm text-gray-700">{req.details}</p>

              {/* Instructor */}
              <div className="flex items-center space-x-3 text-gray-600">
                <User className="w-5 h-5 text-green-500" />
                <span className="text-sm">{req.instructor}</span>
              </div>

              {/* Due Date */}
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="w-5 h-5 text-red-500" />
                <span className="text-sm">{req.dueDate}</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <User2 className="w-5 h-5 text-red-500" />
                <span className="text-sm">30 students</span>
              </div>

              {/* Completion Status */}
              <div className="flex items-center space-x-3">
                {req.completed ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <CheckCircle className="w-6 h-6 text-gray-400" />
                )}
                <span
                  className={`text-sm font-semibold ${
                    req.completed ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {req.completed ? "Completed" : "Pending"}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyHome;
