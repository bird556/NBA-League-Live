import { Box } from 'lucide-react';
import React from 'react';
import { useEffect, useState } from 'react';

const BoxScore = ({ game }) => {
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  if (loading) return <div>Loading scores...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div>{games.length} Games</div>
      <div className="flex justify-evenly">
        {games.slice(0, 2).map((game, index) => (
          <BoxScore key={game.profile.gameId} game={game} />
        ))}
      </div>
    </>
  );
};

export default HeaderScores;
