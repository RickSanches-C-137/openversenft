import { useState } from "react";
import { requestClient } from "../../utils/request-client";
import DashNav from "../layout/DashNav";

export default function Help() {
  const [name, setName] = useState("");
  const [email] = useState("");
  const [message, setMessage] = useState("");
  async function saveParcel(e) {
    e.preventDefault();

    try {
      const messageData = {
        name,
        email,
        message,
      };
      await requestClient.post("/message/", messageData, {
        withCredentials: true,
      });
      alert("Message has been sent!");
     
    } catch (err) {
      console.error(err);
      alert("Error Sending Message. Try again!");
    }
  }
  return (
    <div class="grid md:grid-cols-5 bg-gray-900 text-gray-800 h-fit">
      {/* Content */}
     <DashNav/>
      {/* End Nav */}
      <main class="px-16 py-6 md:col-span-4">
        <h2 className="text-5xl font-bold text-center text-white">Let's hear from you</h2>
        
        <hr />
        <div className="md:grid grid-cols-2 mt-10">
        <img
          src={require("../../images/feedback.png").default}
          alt="img"
          className="w-96 h-96 mt-10"
        />
          <div>
            <h2 className="text-3xl text-white">Kindly drop Us a message</h2>
            <div>
              <form onSubmit={saveParcel} className="">
                <br />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                  placeholder="Name"
                  className="text-gray-900 w-4/5 rounded-sm shadow-md p-2 mt-1 mb-3"
                />
                <br />

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="number"
                  rows={6}
                  required
                  placeholder="Message..."
                  className="text-gray-900 w-4/5 rounded-sm shadow-md p-2 mt-1 mb-3 italic"
                />
                <br />
                <input
                  type="submit"
                  value="Send"
                  className="p-2 mb-10 rounded-sm w-fit md:w-4/5 cursor-pointer text-white bg-blue-600 opacity-75 hover:opacity-50"
                />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
