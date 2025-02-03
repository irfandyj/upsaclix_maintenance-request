'use client'

import { FunctionComponent } from 'react';
import withParams from '@/components/hoc/withParams';
import Link from 'next/link';
import UpdateMaintenanceTicketForm from '@/components/organisms/UpdateMaintenanceTicketForm';

type EditMaintenanceTicketPageProps = {
  ticketId: string;
}

const EditMaintenanceTicketPage: FunctionComponent<EditMaintenanceTicketPageProps> = (props) => {
  return (
    <div className="EditMaintenanceTicketPage mx-auto flex flex-col p-6 max-w-4xl ">
      <div className='flex mt-[68px] mb-[22px] items-center gap-[33px] mx-auto'>
        {/* Back Arrow Icons */}
        <Link href="/">Back</Link>
        <h1 className="text-xl font-semibold ">Maintenance Request</h1>
      </div>

      {/* Create Maintenance Ticket Form */}
      <div className='w-full max-w-[447px] mx-auto'>
        <UpdateMaintenanceTicketForm ticketId={props.ticketId} />
      </div>

    </div>
  );
};

export default withParams(EditMaintenanceTicketPage);
