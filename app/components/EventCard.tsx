import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
}

const EventCard = ({ title, image }: Props) => {
  return (
    <div>
      <Link href={`/events`}>
        <Image
          src={image}
          alt={title}
          width={410}
          height={300}
          className="poster"
        />
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default EventCard;
