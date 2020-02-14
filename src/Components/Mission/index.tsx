import React from 'react';

export interface Mission {
    mission_name: String,
    mission_id: String,
    manufactorers: Array<String>,
    payloads_ids: Array<String>,
    wikipedia: String,
    website: String,
    twitter: String,
    description: String,
}

const MissionItem = (props: any): JSX.Element => {
    return(
        <div>
            { props.mission.mission_name }
        </div>
    )
}

export default MissionItem