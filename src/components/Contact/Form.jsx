import { Send } from "lucide-react";
import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false)

  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const { name, email, subject, message } = formdata;

    if (!name || !email || !subject || !message) {
      return toast.error("All Fields are Mandatory");
    }

    try {
      const formData = new FormData();

      formData.append(
        "access_key",
        "459ee65e-16c7-4211-85df-d08c725a27ee"
      );

      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent Successfully!");

        setFormdata({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally{
        setLoading(false)
    }
  };

  return (
    <section className="w-full">
      <div className="max-w-2xl mx-auto">
          <SectionTitle title="Send Me a Message" />

        <form onSubmit={formSubmit} className="space-y-2">
          <div className="flex gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formdata.name}
              onChange={(e) =>
                setFormdata({ ...formdata, name: e.target.value })
              }
              className="w-full rounded px-5 py-2 outline-none border-2 border-primary focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formdata.email}
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
              className="w-full rounded px-5 py-2 outline-none border-2 border-primary focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formdata.subject}
            onChange={(e) =>
              setFormdata({ ...formdata, subject: e.target.value })
            }
            className="w-full rounded px-5 py-2 outline-none border-2 border-primary focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />

          <textarea
            rows="2"
            name="message"
            placeholder="Write your message..."
            value={formdata.message}
            onChange={(e) =>
              setFormdata({ ...formdata, message: e.target.value })
            }
            className="w-full rounded px-5 py-3 outline-none border-2 border-primary resize focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />

      <button type="submit" className="bg-white text-dark-blue hover:bg-[#413ac9] hover:text-white font-medium py-3 px-3 text-sm rounded transition-all duration-300 flex items-center gap-2" > Send Message <Send size={15}/> </button>
        </form>
      </div>
    </section> 
  );
};

export default Form