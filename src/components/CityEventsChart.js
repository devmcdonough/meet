import { useState, useEffect } from "react";
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {

    const [data, setData] = useState([]);

    // Updates data every time the city or number of events is changed
    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = allLocations.map((location) => {
            const count = events.filter((event) => event.location === location).length
            // .split divides the City and Country at the ', ' and takes the first half of the split (using the [0])
            const city = location.split((/, | - /))[0]
            return { count, city };
        })
        return data;
    };

    return (
        <ResponsiveContainer width="99%" height={400}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 60,
              left: -30,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="City"
            angle={60} interval={0} tick={{ dx: 20, dy: 40, fontSize: 14 }} 
            />
            <YAxis type="number" dataKey="count" name="Number of Events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={data} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      );
}

export default CityEventsChart;

