import React from 'react';

const LeaderboardEntry = ({ rank, username, quizCount, score, badge }) => {
  return (
    <tr>
      <td>
        <div className="rank-icon">{rank}</div>
      </td>
      <td>
        <div className="user-rank">
          <img src="/images/user.png" alt="User Avatar" className="user-avatar" />
          <span>{username}</span>
        </div>
      </td>
      <td>{quizCount} Quizzes</td>
      <td>
        <span className="score">{score.toLocaleString()}</span>
      </td>
      <td>
        <span className="badge">{badge}</span>
      </td>
    </tr>
  );
};

export default LeaderboardEntry;