import Image from "next/image";
import { notFound } from "next/navigation";
import { IconType } from "react-icons";
import { CiMapPin } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { PiFinnTheHuman } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailItem = ({
  icon: Icon,
  alt,
  label,
}: {
  icon: IconType;
  alt: string;
  label: string;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <Icon size={17} aria-label={alt} />
      <span>{label}</span>
    </div>
  );
};

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => {
  return (
    <div>
      <h2>Agenda</h2>
      <ul>
        {agendaItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const EventTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-row gap-1.5 flex-wrap">
      {tags.map((tag) => (
        <div key={tag} className="pill">
          {tag}
        </div>
      ))}
    </div>
  );
};

const EventDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const request = await fetch(`${BASE_URL}/api/events/${slug}`);

  if (!request.ok) {
    return notFound();
  }

  const event = await request.json();

  if (!event) {
    return notFound();
  }

  const {
    description,
    image,
    overview,
    date,
    time,
    location,
    mode,
    audience,
    agenda,
    organizer,
    tags,
    createdAt,
    updatedAt,
  } = event;

  return (
    <section id="event">
      <div className="header">
        <h2>EventDetail</h2>
        <p>{description}</p>
      </div>
      <div className="details">
        <div className="content">
          <Image
            src={image}
            alt="event-detail-image"
            width={800}
            height={800}
            className="banner"
          />
          {createdAt !== updatedAt && (
            <p className="text-sm italic">
              Updated at: {new Date(updatedAt).toLocaleDateString()}
            </p>
          )}
          <section className="flex-col-gap-2">
            <EventDetailItem
              icon={SlCalender}
              alt="Calendar Icon"
              label={date}
            />
            <EventDetailItem icon={FaRegClock} alt="Clock Icon" label={time} />
            <EventDetailItem
              icon={CiMapPin}
              alt="Map Pin Icon"
              label={location}
            />
            <EventDetailItem
              icon={MdOutlineDeveloperMode}
              alt="Mode"
              label={mode}
            />
            <EventDetailItem
              icon={PiFinnTheHuman}
              alt="Finn The Human Icon"
              label={audience}
            />
          </section>
          <EventAgenda agendaItems={JSON.parse(agenda[0])} />
          <section className="flex-col-gap-2">
            <h2>About the Organizer</h2>
            <p>{organizer}</p>
          </section>
          <section className="flex-col-gap-2">
            <h2>Overview</h2>
            <p>{overview}</p>
          </section>
          <EventTags tags={JSON.parse(tags[0])} />
        </div>
        <aside className="booking">
          <p className="text-lg font-semibold">Book Event</p>
        </aside>
      </div>
    </section>
  );
};

export default EventDetailPage;
