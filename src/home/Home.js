import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="home-page"
        style={{ backgroundImage: "url(/begbie-large.jpg)" }}
      >
        <div className="big-title">
          <h1>the Iditos' Adventure</h1>
          <span>The stupidest adventure you'll have all year...</span>
        </div>
      </div>
      <h2>What is this?</h2>
      <br />
      <p>
        This year, for my birthday, I had a bad idea, I want to host a silly
        race that all my friends can attend for fun. I hope it'll be ridiculous,
        and I hope I'll see you there.
      </p>
      <p>Some more info: </p>
      <br />
      <ul>
        <li>
          When: <strong>Wednesday, September 1</strong>
          <sup>st</sup>,
        </li>
        <li>
          Where: <strong>Revelstoke</strong>,
        </li>
        <li>Who: The first 25 people to register.</li>
        <li>
          Registration: <Link to="/registration">Click Here.</Link>
        </li>
        <li>
          More About the Race: <Link to="/course">Click Here.</Link>
        </li>
        <li>
          Everything Else: <Link to="/about">Click Here.</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
