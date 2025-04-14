import React from 'react';
import { IoTriangleSharp } from 'react-icons/io5';

interface TeamProps {
  team: string;
  record: string;
  score: number;
  winning: boolean;
  teamID?: number; // Optional prop with default value
}

const Team = ({ team, record, score, winning, teamID = 0 }: TeamProps) => {
  const winningArrow = () => {
    if (winning) {
      return <IoTriangleSharp className="rotate-90" />;
    } else {
      return <IoTriangleSharp className="rotate-90 invisible" />;
    }
  };
  return (
    /* TEAM SCORES w/ season record   */
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {/* Winning Arrow */}
        {/* {winningArrow()} */}
        <IoTriangleSharp className={`rotate-90 ${!winning && 'invisible'}`} />
        {/* Team Image */}
        <img
          className="h-10 cursor-pointer"
          src={`https://cdn.nba.com/logos/nba/${teamID}/primary/D/logo.svg`}
          alt=""
        />
      </div>

      {/* Team ABR w/ Season Record */}
      <div className="flex flex-col items-center">
        <p className="font-bold text-xl">{team}</p>
        <p className="text-xs font-bold opacity-50">{record}</p>
      </div>
      {/* Score */}
      <p className="font-bold text-xl">{score}</p>
    </div>
  );
};

export default Team;
