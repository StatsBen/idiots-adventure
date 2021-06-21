import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div>
      <h1>Registration</h1>
      <br />
      <p>
        Limit: 25 participants (just to keep things from getting too insane).
      </p>
      <h2 id="dates">Dates</h2>
      <p>
        <strong>Priority Registration:</strong> Opens June 21<sup>st</sup>,
        2021.
      </p>
      <p>
        <strong>General Registration:</strong> Opens June 28<sup>th</sup>, 2021.
      </p>
      <p>
        <strong>Event Date:</strong> Saturday, September 4<sup>th</sup>, 2021
      </p>
      <h2 id="volunteering">Volunteering</h2>
      <p>
        Volunteers who are willing to work on the day of the event will be
        conpensated with a reduced registration fee.
      </p>
      <br />
      <p>
        <strong>Co-organizers</strong> will get 100% of their registration fee
        waived, but they probably won't be able to participate in the race (so
        it's basically just a free dinner/beers at the after-party). Anyone get
        hurt mountain biking yet? I need 2 co-organizer volunteers:
      </p>
      <ul>
        <li>
          One to occupy the second aid-station. This will involve guarding the
          bikes during the race, and handing out shots/canap&eacute;s when
          racers arrive at the aid station.
        </li>
        <li>
          A second to pick up the cake and keg and bring them to the finish
          line/after-party (this will have to happen during the race).
        </li>
      </ul>
      <br />
      <p>
        <strong>Just Regular Volunteers</strong> will get a 20% discount on
        their registration fee in exchange for a little bit of pitching in
        before or after the event. I'll need 5 of these volunteers:{" "}
      </p>
      <ul>
        <li>one to help the day prior with some flagging and food prep,</li>
        <li>one to run the barbecue at the after-party,</li>
        <li>
          and 3 to stick around and do whatever cleanup shit is left outstanding
          the following morning.
        </li>
      </ul>
      <br />
      <p>
        If you're a cheap-ass, or if you just want to feel helpful, enquire
        about volunteering when you send in your registration email.
      </p>
      <h2 id="cost">Cost</h2>
      <p>
        The cost of registration will be <strong>$65 CAD</strong>, and it is due
        at registration.{" "}
        <strong>
          You will not have your spot saved until you've sent in an eTransfer or
          paid in cash.
        </strong>
      </p>
      <br />
      <p>Your registration fee is paying for:</p>
      <ul>
        <li>Attendance in the stupidest birthday party of the year,</li>
        <li>
          A chance to win the grand prize (a big piece of cheese valued at
          ~$30),
        </li>
        <li>
          Participation medal (which is actually a cookie shaped like a medal),
        </li>
        <li>Aid-station supplies (water, Nuun, and canap&eacute;s TBD),</li>
        <li>Your Pipe-Coaster ticket,</li>
        <li>
          Dinner at the after-party (various weiner-shaped foods and side salads
          of various sorts),
        </li>
        <li>
          Beer at the after-party (one keg split between 20 people, so there
          should be enough for a few pints each),
        </li>
        <li>A cake of Ben's choosing,</li>
        <li>Pool access (there's a pool at the house, how cool is that???),</li>
      </ul>
      <br />
      <p>
        Your registration fee{" "}
        <strong>does not cover the following costs</strong>:
      </p>
      <ul>
        <li>
          Your floaty toy for the river segment (hopefully many folks can borrow
          one),
        </li>
        <li>Your accomodation (if you need it),</li>
        <li>Your breakfast the following morning (if you choose to join),</li>
        <li>
          Bike rental (if you need it - you can also just run the bike segment
          if you're that cheap...),
        </li>
        <li>Car-transport to/from the bike drop-off and starting line,</li>
      </ul>
      <br />
      <p>
        I will also consider interesting trades in place of your registration
        fee. If you have a trade to propose, enquire when you send in your
        registration form.
      </p>
      <h2 id="accommodation">Accommodation</h2>
      <p>
        There's space on couches here at the house for 3 people. Additionally,
        part of the back yard is separated from the pool-area by a fence, and
        there's room for 3 or 4 tents. If you'd like to crash here the night
        before or after the event, please enquire when you send your
        registration email. These will be offered on a first-come-first-served
        basis. And if we run out of space for you to crash here, you're still
        invited to go out for breakfast the following morning :)
      </p>
      <h2 id="how-to">How to Register</h2>
      <p>
        To register, please fill out the registration form, and email it to Ben
        at "<code>ben.clark456@gmail.com</code>".
      </p>
      <br />
      <p>
        You can download the registration form{" "}
        <Link to="/RegistrationForm.pdf" target="_blank" download>
          here
        </Link>
        .
      </p>
      <br />
      <p>
        If you have any questions, also just email me... Or message me or
        whatever...Yep, this thing is suuuuper professional.
      </p>
    </div>
  );
};

export default Registration;
