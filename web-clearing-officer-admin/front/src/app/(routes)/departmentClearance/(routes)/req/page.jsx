'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Calendar,
  ClipboardList,
  User,
  Plus,
  FileText,
  User2,
  Mail,
  Calendar1,
  StickyNote,
} from 'lucide-react';

const StudentRecord = () => {
  const [title, setTitle] = useState('');
  const [requirements, setRequirements] = useState('');
  const [instructor, setInstructor] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Example: Logging form data (Replace this with an API call)
    console.log({
      title: title,
      details: requirements,
      instructor,
      dueDate,
    });

    // Reset form fields after submission
    setTitle('');
    setRequirements('');
    setInstructor('');
    setDueDate('');
  };

  return (
    <div className="p-6 flex items-start justify-start space-y-6">
      {/* Card for Form */}
      <Card className="p-6 shadow-lg space-y-4 w-[600px]">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center space-x-2">
          <StickyNote className="w-6 h-6 text-blue-500" />
          <span>Requirements</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Student Name */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Requirements Name</label>
            <Input
              type="text"
              placeholder="Enter your Requirements"
              value={requirements}
              onChange={e => setRequirements(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Due Date */}
          <div className="flex items-center space-x-3 text-gray-600">
            <Calendar1 className="w-5 h-5 text-red-500" />
            <Input
              type="date"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-600 font-medium">Description:</label>
            <Textarea
              placeholder="Enter details about the requirement..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
            Submit Requirement
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default StudentRecord;
