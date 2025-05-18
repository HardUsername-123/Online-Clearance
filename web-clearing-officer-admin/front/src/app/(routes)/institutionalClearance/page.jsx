'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function InstitutionalClearance() {
  const router = useRouter();

  const student = {
    name: 'Juan Dela Cruz',
    profileImage: 'https://i.pravatar.cc/100?img=3',
    subjects: [
      { name: 'CC107', status: 'Signed' },
      { name: 'SE10', status: 'Signed' },
      { name: 'CC101', status: 'Missing' },
      { name: 'CS Elect 3', status: 'Signed' },
      { name: 'GEC7', status: 'Missing' },
      { name: 'PE2', status: 'Signed' },
    ],
  };

  const hasMissing = student.subjects.some(subject => subject.status === 'Missing');

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <button onClick={() => router.back()} className="mr-auto px-10 flex cursor-pointer">
          <ChevronLeft />
          Go Back
        </button>
        <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-[700px]">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={student.profileImage}
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-blue-500"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800">{student.name}</h2>
              <p className="text-sm text-gray-500">Final Exam Clearance Status</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-700 mb-4">Subjects</h3>
          <ul className="space-y-3">
            {student.subjects.map((subject, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white border rounded-xl shadow p-3 hover:shadow-md transition"
              >
                <span className="text-gray-700 font-medium">{subject.name}</span>
                <span
                  className={`text-sm px-3 py-1 rounded-full font-semibold ${
                    subject.status === 'Signed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {subject.status === 'Signed' ? '✅ Signed' : '❌ Missing'}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <span
              className={`inline-block text-sm px-3 py-1 rounded-full font-medium ${
                hasMissing ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
              }`}
            >
              {hasMissing ? 'Not Cleared ❌' : 'Cleared ✅'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
