import MeetupDetail from "../../components/meetups/MeetupDetail.js";

function MeetupDetails(props) {
  const { image, title, address, description } = props.meetupData;
  return (
    <MeetupDetail
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://live.staticflickr.com/4423/36745430904_114da4a4cb_b.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some street 5, Some city",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
