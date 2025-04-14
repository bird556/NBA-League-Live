import React from 'react';

const TeamTopScorer = () => {
  return (
    <>
      <div className="flex flex-col ">
        {/* Player Name & Points */}
        <div className="flex flex-col justify-center items-center gap-2">
          {/* IMAGE */}
          <img
            className="h-12 w-16 rounded-full cursor-pointer"
            src="https://cdn.nba.com/headshots/nba/latest/1040x760/1630169.png"
            alt=""
          />
          <div>
            <p className="text-center text-xs">T.Haliburton</p>
            <p className="text-center text-xs">37 PTS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamTopScorer;
