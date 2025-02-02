import TicketListCard from "@/components/molecules/TicketListCard";

const HomePageTicketList = () => {
  const tickets = [
    {
      id: 1,
      title: "Front Door Lock broken",
      description: "The door to the main entrance is broken.",
      urgency: "urgent",
      status: "open",
      date: "2021-09-01",
    },
    {
      id: 2,
      title: "Tile Cracked",
      description: "The faucet in the kitchen is leaking.",
      urgency: "non_urgent",
      status: "open",
      date: "2021-09-01",
    },
    {
      id: 3,
      title: "Water Pipe Leaking",
      description: "The window in the living room is broken.",
      urgency: "emergency",
      status: "resolved",
      date: "2021-09-01",
    },
    {
      id: 4,
      title: "Cornice Cracked",
      description: "The window in the living room is broken.",
      urgency: "less_urgent",
      status: "resolved",
      date: "2021-09-01",
    },
    {
      id: 5,
      title: "Front Door Lock broken",
      description: "The window in the living room is broken.",
      urgency: "urgent",
      status: "resolved",
      date: "2021-09-01",
    },
  ]
  return (
    <ul className="HomePageTicketList pt-5 px-[30.5px] flex flex-col gap-5">
      {tickets.map((ticket) => (
        <TicketListCard key={ticket.id} {...ticket} />
      ))}
    </ul>
  );
}

export default HomePageTicketList;
