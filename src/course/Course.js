import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div>
      <h1>Course</h1>
      <p>
        Please download this KML file outlining the race course{" "}
        <Link to="/Idiots-Adventure-Course-Map.kml" target="_blank" download>
          here
        </Link>
        .
      </p>
      <br />
      <h2 id="description">Course Description</h2>
      <p>
        This is a rugged course full of hazards. You'll float, you'll walk with
        your flaoty, you'll run on road, you'll run on trails where you could be
        eaten by wildlife, you'll ride the Pipe Coaster, and you'll bike across
        rough decomissioned roads and singletrack on the floodplains. There will
        be hills. You should be scared.
      </p>
      <h2 id="aid-stations">Aid Stations</h2>
      <p>
        There will be 2 aid stations. The first will be at my house where you'll
        drop off your floaty toys. This one will not be staffed, so it is your
        responsibility to stash essential equipment here before the race for
        yourself if you want it. When you pass by to drop off your floaty toy
        you can pop into the washroom, grab some water from the tap, or warm up
        inside a bit if you're cold after the float.
      </p>
      <br />
      <p>
        The second aid station will be at the base village at RMR where you will
        pick up your bikes for the final segment. There's a public washroom
        here, and this aid station will be staffed by a volunteer who will guard
        the bikes and hand out canap&eacute;s and shots as desired.
      </p>
      <h2 id="support">Other Support</h2>
      <p>
        In an effort to reduce mortaility as much as possible during this event,
        I will run alongside you during the floaty segment with a throwbag to
        assist any participants who have issues during this portion of the
        event.
      </p>
      <h2 id="seg1">Segment 1 - the Float</h2>
      <p>
        The race will begin under the Illecilewaet car-bridge at 10AM sharp (you
        should have already dropped your bike at RMR and any self-assisted aid
        supplies you'll want at my house beforehand). You'll be floating 1.34km
        down the roaring Illecilewaet river on a floaty-toy of your choosing.
        You should be ready to kick and paddle. This segment ends on the South
        bank of the river at the Illecilewaet pedestrian bridge.
      </p>
      <h2 id="seg2">Segment 2 - Floaty-toy Run</h2>
      <p>
        This segment is basically just cobbled together to make the logistics
        work out nicely, but I think it'll be pretty funny... You'll have to run
        with your floaty-toys up the small hill to my house where you can drop
        off the toys and enjoy the washrooms and any supplies you stashed at the
        house in the morning.
      </p>
      <h2 id="seg3">Segment 3 - Crowbar</h2>
      <p>
        For this segment, you'll have to run through Arrow Height to a trail
        called Crowbar, which will take you steeply uphill before bending to the
        South en route to the Revelation Lodge at RMR. This segment is steep,
        and may have mountain bikers coming down it, so keep your heads up. It's
        about 7.5km.
      </p>
      <h2 id="seg4">Segment 4 - The Pipe Coaster</h2>
      <p>
        There will most likely be a queue at the Pipe Coaster when you arrive.
        You'll be expected to queue for the coaster like everyone else and
        maintain the order in which you arrived (race participants who cut in
        line will be disqualified). You will have been handed your ticket for
        the Coaster at the starting line during the orientation/gear-inspection.
        This segment ends at the RMR base village, where you'll find the second
        aid-station (where you stashed your bikes with the station attendant in
        the morning before the start time). This aid station is adjacent to a
        public washroom where you can get water, and the aid-station attendant
        will provide canap&eacute;s and shots to participants who want them.
      </p>
      <h2 id="seg5">Segment 5 - Across the Floodplains</h2>
      <p>
        This segment features a fast, 8km bikeride down a large hill, and then
        out across the floodplains (know locally as The Flats). You'll finish by
        turning up the hill that you ran with your floaty-toys previously, and
        then finish back at the house where the after-party and awards ceremony
        will take place.
      </p>
    </div>
  );
};

export default Course;
