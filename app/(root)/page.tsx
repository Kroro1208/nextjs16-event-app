import ExploreButton from "../components/ExploreButton";

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
          {[1, 2, 3, 4, 5].map((event) => (
            <li key={event}>Event {event}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
