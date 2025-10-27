export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/apple-event.png",
    title: "イベント1",
    slug: "event-1",
    location: "Tokyo",
    date: "2024-09-01",
    time: "18:00",
  },
  {
    image: "/tech-event.png",
    title: "イベント2",
    slug: "event-2",
    location: "Osaka",
    date: "2024-09-02",
    time: "19:00",
  },
  {
    image: "/tech-event2.png",
    title: "イベント3",
    slug: "event-3",
    location: "Nagoya",
    date: "2024-09-03",
    time: "20:00",
  },
  {
    image: "/tech-event3.png",
    title: "イベント4",
    slug: "event-4",
    location: "Fukuoka",
    date: "2024-09-04",
    time: "17:00",
  },
];
