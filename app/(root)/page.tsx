import { Event } from "@/database/event.model";
import EventCard from "../components/EventCard";
import ExploreButton from "../components/ExploreButton";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Home = async () => {
  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();

  return (
    <section>
      <h1 className="text-center">
        Event Booking Hub <br />
        everything you need
      </h1>
      <p className="text-center mt-5">あなたの好きなイベントが見つかる</p>
      <ExploreButton />
      <div className="mt-20 space-y-7">
        <h3>Feature Events</h3>
        <ul className="events">
          {events &&
            events.length > 0 &&
            events.map((event: Event) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
