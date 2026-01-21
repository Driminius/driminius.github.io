import { useState } from "react";
const Contact = () => {
  /* NOTE: since we're handling the form thru Formspree
    we do not need to store state for React, since we're
    not passing the prop anywhere
  */
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="grid gap-6 md:grid-cols-[35%_45%] h-auto">
        <div className="outline px-6 py-2">
          <h2 className="text-3xl font-extrabold mb-4">Let's Work Together!</h2>
          <p>Send me an email/proposal.</p>
          <ul>
            <li>Front End Development</li>
            <li>Back End Development</li>
            <li>Fullstack Development</li>
            <li>Web Design</li>
            <li>SEO</li>
            <li>Content Strategy</li>
            <li>Email Design</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <form
          action="https://formspree.io/f/xzzyepnk"
          method="POST"
          className=" px-5 py-4"
        >
          <label htmlFor="fname" className="text-xl">
            First Name
            {fname == "" ? (
              <span className="text-sm italic text-red-500 pl-5">Required</span>
            ) : (
              ""
            )}
          </label>
          <input
            className="block outline w-full border p-1 mb-5 bg-white"
            placeholder="First name"
            type="text"
            name="fname"
            id="fname"
            autoComplete="off"
            required
            onChange={(e) => setFName(e.target.value)}
          />

          <label htmlFor="lname" className="text-xl">
            Last Name
          </label>
          <input
            className="block outline border p-1 mb-5 w-full bg-white"
            placeholder="Last name"
            type="text"
            name="lname"
            id="lname"
            autoComplete="off"
            onChange={(e) => setLName(e.target.value)}
          />

          <label htmlFor="email" className="text-xl">
            Email
            {email == "" ? (
              <span className="text-sm italic text-red-500 pl-5">Required</span>
            ) : (
              ""
            )}
          </label>
          <input
            className="block outline border p-1 mb-5 w-full bg-white"
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message" className="text-xl">
            Message
            {message == "" ? (
              <span className="text-sm italic text-red-500 pl-5">Required</span>
            ) : (
              ""
            )}
          </label>
          <textarea
            className="block outline border p-1 w-full bg-white"
            placeholder="Message"
            type="text"
            name="message"
            id="message"
            autoComplete="off"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black text-white px-7 py-2 cursor-pointer my-4 hover:bg-gray-600"
          >
            Submit
          </button>
        </form>
      </div>
      <p className="italic text-sm py-3">
        By submitting an email, you'll bounce to Formspree, but don't worry
        there's a back button.
      </p>
    </>
  );
};

export default Contact;
