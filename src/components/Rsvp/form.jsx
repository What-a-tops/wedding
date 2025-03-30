import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input, Textarea } from "@/components/ui";
import Select from "../ui/Select";
import { FaSpinner } from "react-icons/fa";

const form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: 1,
    status: "Present",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const googleScriptURL = import.meta.env.VITE_GOOGLE_WEB_APP_URL;

    const payload = {
      name: formData.name,
      email: formData.email,
      guests: formData.guests,
      status: formData.status,
      message: formData.message,
    };

    try {
      const response = await fetch(googleScriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8", // Important for Google Apps Script
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.result === "Success") {
        toast.success(
          `Thank you, ${formData.name}! Your RSVP has been submitted.`
        );
        setFormData({
          name: "",
          email: "",
          guests: 1,
          status: "Present",
          message: "",
        });
      } else if (result.error === "Guest has already submitted RSVP!") {
        toast.warning("You have already submitted your RSVP. Thank you!");
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your RSVP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto my-8">
      <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-lime-700/80 tracking-wider text-center mb-4 uppercase">
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
        <Select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </Select>
        <Textarea
          name="message"
          placeholder="Any special requests or notes..."
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          type="submit"
          className="w-full bg-lime-700 text-white py-2 rounded-lg hover:bg-lime-900 transition flex items-center justify-center disabled:bg-gray-400"
          disabled={loading}
        >
          {loading && <FaSpinner className="animate-spin mr-2" />}
          {loading ? "Submitting..." : "Confirm Attendance"}
        </Button>
      </form>
      <p className="text-lime-700/80 text-sm text-center italic mt-6">
        We can't wait to celebrate with you!
      </p>
    </div>
  );
};

export default form;
