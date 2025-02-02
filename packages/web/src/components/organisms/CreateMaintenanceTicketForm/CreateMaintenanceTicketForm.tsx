"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

function CreateMaintenanceTicketForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  function onSubmit(data: any) {
    setData(JSON.stringify(data));
  }

  return (
    <form className="flex flex-col gap-[27px]" onSubmit={handleSubmit(onSubmit)}>

      {/* Urgency* */}
      <div>
        <label className="block text-sm text-gray-500 mb-1">
          Urgency <span className="text-red-500">*</span>
        </label>
        <select
          {...register("urgency", { required: true })}
          className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Emergency</option>
          <option value="non_urgent">Non Urgent</option>
          <option value="less_urgent">Less Urgent</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm text-gray-500 mb-1">
          Status
        </label>
        <select
          {...register("status")}
          className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      {/* Title* */}
      <div>
        <label className="block text-sm text-gray-500 mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          {...register("title", { required: true })}
          type="text"
          placeholder="Bedroom window has cracked"
          className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm text-gray-500 mb-1">
          Description
        </label>
        <textarea
          {...register("description")}
          rows={6}
          className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
        />
      </div>
      <p>{data}</p>
      <button
        type="submit"
        className="w-full max-w-[268px] mx-auto bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Save
      </button>
    </form>
  );
}

export default CreateMaintenanceTicketForm;
