import SectionWrapper from "../SectionWrapper.js";
import SectionIntro from "../SectionIntro.js";
import { contactSectionIntro } from "@/content/index.js";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image.js";
import contactIllustration from "../../assets/illustrations/message-sent.svg";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_29qoj39",
        "template_vfpvbac",
        {
          from_name: form.name,
          to_name: "Robin",
          from_email: form.email,
          to_email: "rlinden91@gmail.com",
          message: form.subject,
        },
        "Ln9TeMFt0mDbjdVSH"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your message! I will get back to you as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            subject: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert(
            "Sorry, there was an error sending your message. Please try again later."
          );
        }
      );
  }

  return (
    <div>
      <SectionWrapper
        bgColour="bg-primaryGreen"
        background="bg-contact"
        elementId="contact"
      >
        <SectionIntro
          subHeading="Contact"
          section="Send me a message!"
          introduction={contactSectionIntro.intro}
        />
        <div className="relative">
          <Image
            src={contactIllustration}
            width={400}
            height="auto"
            alt="Message sent illustration"
            className="illustration -top-[350px] right-12"
          />
          <form
            className="py-10 px-4 sm:px-6  bg-secondaryBlue items-center text-xl font-medium sm:font-semibold max-h-[520px] min-w-[200px] sm:min-w-[600px] max-w-[900px] mx-2 sm:mx-auto shadow-xl -mt-10  rounded-xl flex flex-col gap-6 "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="What's your name?"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="What's your email address?"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                rows="5"
                placeholder="What would you like to talk about?"
                value={form.subject}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="hover:text-highlightGreen  transform duration-1000
           ease-out bg-primaryBlue hover:bg-secondaryBlue text-white font-bold py-2 px-4 rounded-lg shadow-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default Contact;
