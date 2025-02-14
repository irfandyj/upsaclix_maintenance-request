import CreateMaintenanceTicketForm from '@/components/organisms/CreateMaintenanceTicketForm';
import Link from 'next/link';
import React from 'react';

async function CreateMaintenanceTicketPage() {

  return (
    <div className="CreateMaintenanceTicketPage mx-auto flex flex-col p-6 max-w-4xl ">
      <div className='flex mt-[68px] mb-[22px] items-center gap-[33px] mx-auto'>
        {/* Back Arrow Icons */}
        <Link href="/">Back</Link>
        <h1 className="text-xl font-semibold ">Maintenance Request</h1>
      </div>

      {/* Create Maintenance Ticket Form */}
      <div className='w-full max-w-[447px] mx-auto'>
        <CreateMaintenanceTicketForm />
      </div>

    </div>
  );
};

export default CreateMaintenanceTicketPage;
