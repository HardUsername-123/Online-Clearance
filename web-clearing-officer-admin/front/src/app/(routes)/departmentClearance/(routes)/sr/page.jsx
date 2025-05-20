'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Search, Mail, CheckCircle, XCircle, ScrollText, CircleAlert } from 'lucide-react';
import Link from 'next/link';

const students = [
  {
    id: 1,
    id_no: '24-0334',
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    status: 'Signed',
  },
  {
    id: 2,
    id_no: '20-0842',
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    status: 'Not Cleared',
  },
  {
    id: 3,
    id_no: '24-0334',
    name: 'Alice Johnson',
    email: 'alicejohnson@example.com',
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
    status: 'Signed',
  },
  {
    id: 4,
    id_no: '24-0334',
    name: 'Bob Brown',
    email: 'bobbrown@example.com',
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg',
    status: 'Missing',
  },
  {
    id: 5,
    id_no: '24-0334',
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    status: 'Signed',
  },
  {
    id: 6,
    id_no: '24-0334',
    name: 'Alice Johnson',
    email: 'alicejohnson@example.com',
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
    status: 'Signed',
  },
  {
    id: 7,
    id_no: '24-0334',
    name: 'Bob Brown',
    email: 'bobbrown@example.com',
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg',
    status: 'Not Cleared',
  },
  {
    id: 8,
    id_no: '24-0334',
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    status: 'Missing',
  },
  {
    id: 9,
    id_no: '24-0334',
    name: 'Alice Johnson',
    email: 'alicejohnson@example.com',
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
    status: 'Signed',
  },
  {
    id: 10,
    id_no: '24-0334',
    name: 'Bob Brown',
    email: 'bobbrown@example.com',
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg',
    status: 'Missing',
  },
];

const StudentRecord = () => {
  const [search, setSearch] = useState('');

  const filteredStudents = students
    .filter(
      student =>
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="p-6 space-y-6">
      <div className="inline-flex justify-center">
        <ScrollText /> <h1 className="text-2xl font-semibold"> Student's Record </h1>
      </div>

      {/* Student Table */}
      <Card className="shadow-xs overflow-hidden p-5">
        {/* Search Bar */}
        <div className="flex items-center space-x-2 w-100 border-gray-300 pb-2 p-2 ml-auto">
          <Search className="w-5 h-5 text-gray-500" />
          <Input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full p-2 focus:outline-none"
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead className="text-left">ID Number</TableHead>
              <TableHead className="text-left">Student</TableHead>
              <TableHead className="text-left">Email</TableHead>
              <TableHead className="text-left">Status</TableHead>
              <TableHead className="text-left">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map(student => (
              <TableRow key={student.id} className="hover:bg-gray-50 transition">
                {/* ID Number */}
                <TableCell>
                  <span className="text-gray-800 font-medium">{student.id_no}</span>
                </TableCell>
                {/* Profile */}
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img
                      src={student.profilePic}
                      alt={student.name}
                      className="w-10 h-10 rounded-full border"
                    />
                    <span className="text-gray-800 font-medium">{student.name}</span>
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span>{student.email}</span>
                  </div>
                </TableCell>

                {/* Status */}
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {student.status === 'Signed' ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : student.status === 'Not Cleared' ? (
                      <CircleAlert className="w-6 h-6 text-yellow-500" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                    <span
                      className={`font-semibold ${
                        student.status === 'Signed'
                          ? 'text-green-600'
                          : student.status === 'Not Cleared'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}
                    >
                      {student.status}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    // onClick={() => {
                    //   setEditUser(user);
                    //   setOpen(true);
                    // }}
                    className="mr-2 bg-green-500 hover:bg-green-600"
                  >
                    Sign
                  </Button>
                  <Link href={'/institutionalClearance'}>
                    <Button
                      // onClick={() => deleteUser(user.id)}
                      className="mr-2 bg-yellow-500 hover:bg-yellow-600"
                    >
                      View
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default StudentRecord;
