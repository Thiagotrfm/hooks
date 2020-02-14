import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MissionItem, { Mission } from './Components/Mission';

interface MissionList {
  data: Array<Mission>
}

const App = () => {
  const [missionList, setMissionList] = useState([])

  useEffect(() => {
    axios.request<Array<Mission>>({
      url: 'https://api.spacexdata.com/v3/missions',
    }).then((response) => {
      console.log(response)
    })
  }, [])

  return (
    <div className="App">
      {
        missionList.map((mission: Mission) => {
          return(
            <MissionItem
              mission={mission}
            />
          )
        })
      }
    </div>
  );
}

export default App;
