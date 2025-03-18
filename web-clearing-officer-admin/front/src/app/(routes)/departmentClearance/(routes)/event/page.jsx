"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EventsPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [eventData, setEventData] = useState({
    title: "",
    venue: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Submitted: ", eventData, startDate, endDate);
  };

  return (
    <div className="p-6 w-full border bg-white rounded-2xl shadow-lg">
      <div className="container w-200 p-4">
        <h1 className="text-2xl font-semibold mb-4">Create Event</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block font-medium">
              Event Title
            </label>
            <Input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleInputChange}
              className="mt-2 border-gray-800 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="venue" className="block font-medium">
              Venue
            </label>
            <Input
              type="text"
              name="venue"
              value={eventData.venue}
              onChange={handleInputChange}
              className="mt-2 border-gray-800 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block font-medium">
              Description
            </label>
            <Textarea
              name="description"
              value={eventData.description}
              onChange={handleInputChange}
              className="mt-2 border-gray-800 focus:border-blue-500"
              rows="4"
              required
            />
          </div>

          <div>
            <label
              htmlFor="startDate"
              className="block font-medium text-lg mb-2"
            >
              Start Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full mt-2 px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              dateFormat="MMMM d, yyyy h:mm aa"
              showTimeSelect
              timeFormat="hh:mm aa"
              timeIntervals={15}
              timeCaption="Time"
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block font-medium text-lg mb-2">
              End Date
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="w-full mt-2 px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              dateFormat="MMMM d, yyyy h:mm aa"
              showTimeSelect
              timeFormat="hh:mm aa"
              timeIntervals={15}
              timeCaption="Time"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              Submit Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
