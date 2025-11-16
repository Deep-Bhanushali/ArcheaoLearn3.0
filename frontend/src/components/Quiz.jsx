// import React, { useState } from 'react';
import React, { useEffect, useRef } from 'react';
import QuizCategory from './QuizCategory';
import LeaderboardEntry from './LeaderBoardEntry';
import { useNavigate } from 'react-router-dom';
//import { useFocusManagement } from '../hooks/useFocusManagement';


const Quiz = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const quizSectionRef = useRef(null);

  // Use custom focus management hook
  // const containerRef = useFocusManagement();

  useEffect(() => {
    console.log('Quiz component mounted');
  }, []);

  const categories = [
    {
      icon: 'fa-landmark',
      title: 'Ancient Civilizations',
      description: 'Explore quizzes about Egyptian, Greek, Roman, and other major ancient cultures.',
    },
    {
      icon: 'fa-scroll',
      title: 'Archaeological Methods',
      description: 'Test your knowledge of excavation techniques, dating methods, and field practices.',
    },
    {
      icon: 'fa-gem',
      title: 'Artifacts & Objects',
      description: 'Identify and learn about significant archaeological discoveries and artifacts.',
    },
    {
      icon: 'fa-globe-americas',
      title: 'World Heritage Sites',
      description: 'Challenge yourself with questions about UNESCO World Heritage archaeological sites.',
    },
  ];

  const leaderboardData = [
    { rank: 1, username: 'ArchaeoExplorer', quizCount: 42, score: 9845, badge: 'Master Explorer' },
    { rank: 2, username: 'HistoryBuff22', quizCount: 38, score: 8720, badge: 'Expert Archaeologist' },
    { rank: 3, username: 'AncientWanderer', quizCount: 35, score: 7890, badge: 'History Scholar' },
    { rank: 4, username: 'PyramidPioneer', quizCount: 29, score: 6450, badge: 'Artifact Hunter' },
  ];

  const handleQuizClick = () => {
    console.log('Quiz category clicked, navigating to /quizpage');
    navigate('/quizpage');
  };

  return (
    // <div ref={containerRef} tabIndex="-1" style={{ outline: 'none' }}>
    <div tabIndex="-1" style={{ outline: 'none' }}>
      <section 
        className="quiz-section" 
        ref={quizSectionRef}
        tabIndex="-1"
        style={{ outline: 'none' }}
      >
        <div className="quiz-container">
          <h2 className="section-title">Test Your Knowledge</h2>
          <p className="section-subtitle">
            Challenge yourself with our diverse collection of archaeological quizzes and earn badges as you progress.
          </p>
          <span className="gold-line"></span>

          <div className="quiz-categories">
            {categories.map((category, index) => (
              <QuizCategory
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
                // onClick={() => setIsModalOpen(true)}
                onClick={handleQuizClick}
              />
            ))}
          </div>

          <div className="leaderboard">
            <h3>Leaderboard</h3>
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>User</th>
                  <th>Completed</th>
                  <th>Score</th>
                  <th>Badges</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((entry, index) => (
                  <LeaderboardEntry
                    key={index}
                    rank={entry.rank}
                    username={entry.username}
                    quizCount={entry.quizCount}
                    score={entry.score}
                    badge={entry.badge}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* {isModalOpen && <QuizModal onClose={() => setIsModalOpen(false)} />} */}
      </section>
    </div>
  );
};

export default Quiz;