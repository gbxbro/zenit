import React, {FC} from 'react';

interface Props {
    date: Date,
    teams: {
        first: {
            name: string,
            count: number,
            time: Date
        },
        second: {
            name: string,
            count: number,
            time: Date
        }
    },
    matchEvents: [{
        numbers: {
            first: number,
            second: number
        },
        text: string
    }]
}

const LiveMatchCard: FC<Props> = ({date, teams, matchEvents}) => {
    return (
        <div className="live-match-card">
            
        </div>
    );
};

export default LiveMatchCard;