import React from 'react';
import { FaCrown, FaAward, FaMedal, FaStar } from 'react-icons/fa';
import '../styles/Quiz.css';

const Leaderboard = () => {
  const leaderboardData = [
    {
      rank: 1,
      user: 'ArchaeoExplorer',
      completed: '42 Quizzes',
      score: 9845,
      badge: 'Master Explorer',
      icon: <FaCrown className="w-4 h-4" />
    },
    {
      rank: 2,
      user: 'HistoryBuff22',
      completed: '38 Quizzes',
      score: 8720,
      badge: 'Expert Archaeologist',
      icon: <FaAward className="w-4 h-4" />
    },
    {
      rank: 3,
      user: 'AncientWanderer',
      completed: '35 Quizzes',
      score: 7890,
      badge: 'History Scholar',
      icon: <FaMedal className="w-4 h-4" />
    },
    {
      rank: 4,
      user: 'PyramidPioneer',
      completed: '29 Quizzes',
      score: 6450,
      badge: 'Artifact Hunter',
      icon: <FaStar className="w-4 h-4" />
    }
  ];

  return (
    <div className="border border-gold rounded-lg bg-sand p-8 shadow-lg animate-fade-up relative overflow-hidden m-4">
      <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-gold opacity-5 rounded-full"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold opacity-5 rounded-full"></div>
      
      <h2 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide text-night relative">
        <div className="absolute -top-1 -left-1 w-8 h-8 bg-gold opacity-10 rounded-full blur-md"></div>
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-gold opacity-10 rounded-full blur-md"></div>
        Leaderboard
        <div className="w-24 h-1 bg-gold mx-auto mt-2 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gold-dark opacity-0 animate-pulse-slow"></div>
        </div>
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gold-light">
              <th className="pb-3 font-semibold text-night-light">Rank</th>
              <th className="pb-3 font-semibold text-night-light">User</th>
              <th className="pb-3 font-semibold text-night-light">Completed</th>
              <th className="pb-3 font-semibold text-night-light">Score</th>
              <th className="pb-3 font-semibold text-night-light">Badges</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map(entry => (
              <tr key={entry.rank} className="border-b border-gold-light hover:bg-sand-dark transition-colors duration-200">
                <td className="py-4">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    entry.rank === 1 ? 'bg-gold text-night' : 'bg-gold-light text-gold-dark'
                  } font-semibold`}>
                    {entry.rank}
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${
                      entry.rank === 1 ? 'bg-gold' : 'bg-gold-light'
                    } mr-2 flex items-center justify-center text-xs text-night`}>
                      👤
                    </div>
                    <span className="font-medium">{entry.user}</span>
                  </div>
                </td>
                <td className="py-4">{entry.completed}</td>
                <td className="py-4 font-semibold text-gold-dark">
                  {entry.score.toLocaleString()}
                </td>
                <td className="py-4">
                  <span className="px-3 py-1 bg-gold-light text-gold-dark rounded-full text-sm flex items-center inline-flex">
                    {entry.icon}
                    <span className="ml-1">{entry.badge}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-night-light italic animate-fade-up">
          Will your name be next on the leaderboard? Take more quizzes to climb
          the ranks!
        </p>
      </div>
    </div>
  );
};

export default Leaderboard; 