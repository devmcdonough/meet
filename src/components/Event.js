import { useState } from "react";

const Event = ({ event }) => {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <li className="event">
            <h4>{event.summary}</h4>
            <p>{event.created}</p>
            <p>{event.location}</p>
            <button className="show-more"
                onClick={() => setShowDetails(!showDetails)}>
                    {showDetails ? 'Show Less' : 'Show More'}
                </button>
                {showDetails ? (
                    <div className="details">
                        <h2>Description</h2>
                        <p>{event.description}</p>
                    </div>
                ) : null}
        </li>
    );
}

export default Event;