import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col p-2">
      <section className="prose m-auto">
        <Image src="/codelab.png" alt="event-photo" width={775} height={450} />
        <h1>Programming Meetup</h1>
        <h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 inline-block pb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>{" "}
          October 30th
        </h2>
        <h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 inline-block pb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>{" "}
          Barcelona
        </h2>
        <button className="btn btn-primary">RSVP</button>
      </section>
      <section className="prose m-auto">
        <h2>What we&apos;ll be doing</h2>
        <p>
          As usual, we will meet up at Cafe NoNose and enjoy casual socializing,
          the cafe menu, and programming.
        </p>
        <hr></hr>
      </section>

      <section className="prose m-auto pt-6">
        <h2>Event Chat</h2>
        <form id="leave-message">
          <label>Leave a message: </label>
          <input type="text" id="message"></input>
          <button className="btn btn-primary" type="submit">
            SEND
          </button>
        </form>
      </section>
    </main>
  );
}
