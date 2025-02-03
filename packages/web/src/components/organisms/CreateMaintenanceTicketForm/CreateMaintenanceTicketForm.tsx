"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { createMaintenanceTicket } from '@/lib/graphql/api';
import { MaintenanceTicketStatus, MaintenanceTicketUrgency } from "@/lib/graphql/sdk";

function CreateMaintenanceTicketForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  // Fix this data type later
  async function onSubmit(data: any) {
    setData(JSON.stringify(data));
    console.log(data);
    await createMaintenanceTicket({ input: data });
  }

  return (
    <form className="flex flex-col gap-[27px]" onSubmit={handleSubmit(onSubmit)}>

      {/* Urgency* */}
      <div>
        <label className="block text-sm text-[#A1AFC3] mb-2">
          Urgency <span className="">*</span>
        </label>
        <select
          {...register("urgency", { required: true })}
          className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value={MaintenanceTicketUrgency.NonUrgent}>Non Urgent</option>
          <option value={MaintenanceTicketUrgency.LessUrgent}>Less Urgent</option>
          <option value={MaintenanceTicketUrgency.Urgent}>Urgent</option>
          {/* <option value="">Emergency</option> */}
        </select>
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm text-[#A1AFC3] mb-2">
          Status
        </label>
        <select
          {...register("status")}
          className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value={MaintenanceTicketStatus.Open}>Open</option>
          <option value={MaintenanceTicketStatus.Resolved}>Resolved</option>
        </select>
      </div>

      {/* Title* */}
      <div>
        <label className="block text-sm text-[#A1AFC3] mb-2">
          Title <span className="">*</span>
        </label>
        <input
          {...register("title", { required: true })}
          type="text"
          placeholder="Bedroom window has cracked"
          className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm text-[#A1AFC3] mb-2">
          Description
        </label>
        <textarea
          {...register("description")}
          rows={6}
          className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </div>
      <p>{data}</p>
      <button
        type="submit"
        className="w-full max-w-[268px] mx-auto bg-primary text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Save
      </button>
    </form>
  );
}

export default CreateMaintenanceTicketForm;
