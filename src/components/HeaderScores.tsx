import { Box } from 'lucide-react';
import React from 'react';
import { useEffect, useState } from 'react';
import BoxScore from './Header/GameScores/BoxScore';

const BoxScoreTemp = ({ game }) => {
  console.log('BoxScore game:', game);
  return (
    <div>
      {/* Example rendering */}
      {game.awayTeam.profile.displayAbbr} {game.boxscore.awayScore} @{' '}
      {game.homeTeam.profile.displayAbbr} {game.boxscore.homeScore} -{' '}
      {game.boxscore.statusDesc}
    </div>
  );
};

const HeaderScores = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  /* 
  const apiUrl =
    '/api/stats2/scores/miniscoreboardlive.json?locale=en&tz=-5&countryCode=CA&state=ON';
  const fetchTodaysGames = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch scores');
      }
      const data = await response.json();
      const gameData = data.payload.today.games;
      setGames(gameData);
      console.log(gameData);
      console.log(data);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTodaysGames();
  }, []);
  console.log(games);
*/
  if (loading) return <div>Loading scores...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div className="border-b-2 p-5 flex items-center w-fit">
        <div className="flex justify-center items-center p-2 max-w-40">
          <p className="text-center font-bold text-4xl">April 13th 2025</p>
        </div>
        <div className="flex justify-evenly">
          <BoxScore />
          <BoxScore />
          <BoxScore />
          <BoxScore />
          <BoxScore />
        </div>
      </div>
    </>
  );
};

export default HeaderScores;
