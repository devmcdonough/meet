import { useState } from "react";
import { genres, genreImages } from './constants';


const Event = ({ event }) => {

    const [showDetails, setShowDetails] = useState(false); 

    const eventCategory = genres.find((genre) => event.summary.includes(genre));
    const eventImage = genreImages[eventCategory];

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