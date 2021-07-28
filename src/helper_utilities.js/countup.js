import React from 'react'
import CountUp, {useCountUp } from "react-countup";


const Counter = () => {
    const { countUp, start, pauseResume, reset, update } = useCountUp({
      duration: 5,
      end: 10000,
      startOnMount: false,
    });
    return (
      <div>
        <div>
          <h1>{countUp}</h1>
          <button onClick={start}>start</button>
          <button onClick={reset}>reset</button>
          <button onClick={pauseResume}>pause</button>
          <button onClick={() => update(2000)}>update to 2000</button>
        </div>

        <CountUp end={200} />
        <br />
        <CountUp end={200} duration={5} />
        <br />
        <CountUp start={500} end={1000} duration={10} />
        <br />
        <CountUp start={0} end={1000} prefix="$" decimals={2} duration={10} />
        <br />
        <CountUp
          start={0}
          end={1000}
          suffix=" USD"
          decimals={2}
          duration={10}
        />
      </div>
    );
}

export default Counter
