import EventCard from "../components/EventCard";
import ExploreButton from "../components/ExploreButton";

const events = [
  {
    image: "/apple-event.png",
    title: "イベント1",
  },
  {
    image: "/teck-event.png",
    title: "イベント2",
  },
];

const Home = () => {
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
        <ul>
          {events.map((event) => (
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
