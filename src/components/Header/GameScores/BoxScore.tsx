import React from 'react';
import { IoTriangleSharp } from 'react-icons/io5';
import Team from './Team';
import { p } from 'node_modules/react-router/dist/development/fog-of-war-BjgPfDmv.d.mts';
import TeamTopScorer from './TeamTopScorer';

const BoxScore = ({ game = 'Hello' }) => {
  const TeamBox = () => {
    return (
      /* TEAM SCORES w/ season record   */
      <>
        <Team
          team={'IND'}
          record={'54-12'}
          score={118}
          winning={true}
          teamID={1610612754}
        />

        <Team
          team={'CAVS'}
          record={'23-34'}
          score={102}
          winning={false}
          teamID={1610612739}
        />
      </>
    );
  };

  const TopScorers = () => {
    return (
      <div className="font-medium">
        <p className="text-center text-sm font-medium mb-3">TOP SCORERS</p>
        <div className="flex items-center gap-10">
          <TeamTopScorer />
          <div className="border-l-2 h-16"> </div>
          <TeamTopScorer />
        </div>
      </div>
    );
  };
  return (
    <div className="">
      <div className="border-l-2 border-opacity-50 px-5 flex flex-col gap-4">
        {/* Quarter Length / Time Remaining / Final*/}
        <div className="flex dark:text-red-500 gap-3 text-sm">
          <p>Q4</p>
          <p>2:05</p>
        </div>
        {/* TEAMS & TOP SCORERS */}
        <div className="flex flex-col gap-3">
          {/* TEAMS */}
          <div className="flex flex-col gap-3">
            {/* <TeamBox /> */}
            <Team
              team={'IND'}
              record={'54-12'}
              score={118}
              winning={true}
              teamID={1610612754}
            />
            <Team
              team={'CAVS'}
              record={'23-34'}
              score={102}
              winning={false}
              teamID={1610612739}
            />
          </div>

          {/* Top Scorers */}
          <TopScorers />
        </div>
      </div>
    </div>
  );
};

export default BoxScore;
