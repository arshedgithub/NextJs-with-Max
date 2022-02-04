import MeetupList from "../components/meetups/MeetupList.js";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://live.staticflickr.com/4423/36745430904_114da4a4cb_b.jpg",
    address: "Some address 5, 1235 some city",
    description: "This is a First Meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://live.staticflickr.com/4423/36745430904_114da4a4cb_b.jpg",
    address: "Some address 10, 1235 some city",
    description: "This is a Second Meetup",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image: "https://live.staticflickr.com/4423/36745430904_114da4a4cb_b.jpg",
    address: "Some address 51, 1235 some city",
    description: "This is a Third Meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
