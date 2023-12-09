import { useState } from "react";
import PropTypes from "prop-types";

const Event = ({ event }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const isoDateString = event.created;
  const isoDate = new Date(isoDateString);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const readableDate = isoDate.toLocaleString(undefined, options);

  return (
    <li className="event">
      <div className="event-title">{event.summary}</div>
      <div className="event-infos">
        <div>{readableDate}</div>
        <div>{event.location}</div>
      </div>
      {/* details are hidden bu default */}
      {isDetailsOpen ? (
        <details open={true} className="detailsOpened">
          <summary> </summary>
          <p> {event.description} </p>
        </details>
      ) : (
        <details open={false} className="detailsClosed">
          <summary> </summary>
          <p> {event.description}</p>
        </details>
      )}

      <div className="details-btn">
        {isDetailsOpen ? (
          <button
            className="hide-details"
            onClick={() => {
              setIsDetailsOpen(false);
            }}
          >
            hide details
          </button>
        ) : (
          <button
            className="show-details"
            onClick={() => {
              setIsDetailsOpen(true);
            }}
          >
            show details
          </button>
        )}
      </div>
    </li>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired
};
export default Event;

