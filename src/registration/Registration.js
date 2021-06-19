import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div>
      <h1>Registration</h1>
      <h2 id="dates">Dates</h2>
      <p>
        <strong>Priority Registration:</strong> Opens June 25<sup>th</sup>,
        2021.
      </p>
      <p>
        <strong>General Registration:</strong> Opens June 30<sup>th</sup>, 2021.
      </p>
      <p>
        <strong>Event Date:</strong> September 1<sup>st</sup>, 2021
      </p>
      <h2 id="volunteering">Volunteering</h2>
      <p>
        Volunteers who are willing to work on the day of the event will be
        conpensated with a reduced registration fee.
      </p>
      <br />
      <p>
        <strong>Tier A Volunteers</strong> will get 100% of their registration
        fee waived, but they probably won't be able to participate in the race.
        I need 3 of them - one to occupy the first aid-station at the river
        exit, one to occupy the second aid-station at the bike pickup at the
        bottom of the Pipe Coaster, and a third to photograph the event.
        Basically these folks will be trading some work for free dinner and
        beer.
      </p>
      <br />
      <p>
        <strong>Tier B Volunteers</strong> will get a 20% discount on their
        registration fee in exchange for a little bit of pitching in before or
        after the event. I'll need 5 of these volunteers, one to help the day
        prior with some flagging and food prep, one to run the barbecue at the
        after-party, and 3 to stick around and do whatever cleanup stuff is left
        outstanding the following morning.
      </p>
      <br />
      <p>
        If you're a cheap-ass or just want to feel helpful, enquire about
        volunteering when you send in your registration email.
      </p>
      <h2 id="cost">Cost</h2>
      <p>
        The cost of registration will be <strong>$90 CAD</strong>, and it is due
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
        <li>Pool access,</li>
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
      <h2 id="how-to">How to Register</h2>
      <p>
        To register, please fill out the registration form and email it to Ben
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
