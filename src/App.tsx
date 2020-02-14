import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MissionItem, { Mission } from './Components/Mission';


const App = () => {
  const [missionList, setMissionList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api.spacexdata.com/v3/missions')
      const { data } = response

      setMissionList(data)
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      {
        missionList.map((mission: Mission, index: number) => {
          return(
            <MissionItem
              key={index}
              mission={mission}
            />
          )
        })
      }
    </div>
  );
}

export default App;
