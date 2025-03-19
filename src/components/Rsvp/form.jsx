import React, { useState } from "react";
import { Button, Input, Textarea } from "@/components/ui";

const form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: 1,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your RSVP has been submitted.`);
  };

  return (
    <div className="bg-white p-6 max-w-md mx-auto my-8">
      <h5 className="text-lg font-bold text-lime-700/80 tracking-wider text-center mb-4 uppercase">
        Attendance Form
      </h5>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={formData.guests}
          min="1"
          onChange={handleChange}
          required
        />

        <Textarea
          name="message"
          placeholder="Any special requests or notes..."
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />

        <Button
          type="submit"
          className="w-full bg-lime-700 text-white py-2 rounded-lg hover:bg-lime-900 transition"
        >
          Confirm Attendance
        </Button>
      </form>
      <p className="text-lime-700/80 text-sm text-center italic mt-6">
        We can't wait to celebrate with you!
      </p>
    </div>
  );
};

export default form;
