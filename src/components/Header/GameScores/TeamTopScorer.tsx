import React from 'react';

interface PlayerProps {
  firstName: string;
  lastName: string;
  points: number;
  playerID: number;
  // teamID?: number; // Optional prop with default value
}

const TeamTopScorer = ({
  firstName,
  lastName,
  points,
  playerID,
}: PlayerProps) => {
  let first = firstName;
  console.log(first[0]);
  return (
    <>
      <div className="flex flex-col ">
        {/* Player Name & Points */}
        <div className="flex flex-col justify-center items-center gap-2">
          {/* IMAGE */}
          <img
            className="h-12 w-16 rounded-full cursor-pointer"
            src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${playerID}.png`}
            alt=""
          />
          <div>
            <p className="text-center text-xs">{`${firstName[0].toUpperCase()}.${lastName}`}</p>
            <p className="text-center text-xs">{points} PTS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamTopScorer;
