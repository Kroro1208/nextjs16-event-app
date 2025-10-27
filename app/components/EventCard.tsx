import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <div>
      <Link href={`/events/${slug}`} id="event-card">
        <Image
          src={image}
          alt={title}
          width={410}
          height={300}
          className="poster"
        />
        <div className="flex flex-row items-center gap-2">
          <CiLocationOn size={16} />
          <p>{location}</p>
          <MdOutlineDateRange size={16} />
          <p>{date}</p>
          <IoMdTime size={16} />
          <p>{time}</p>
        </div>
        <p className="title">{title}</p>
      </Link>
    </div>
  );
};

export default EventCard;
