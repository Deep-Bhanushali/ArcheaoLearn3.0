import React, { useState, useEffect, useMemo, useRef } from 'react';
import { myths as initialMythsData } from '../data/myth';
import '../styles/MythsMysteries.css';

// --- The Main Application Component (Single File Structure) ---
export default function MythsMysteriesApp() {
    // --- State Management ---
    const [myths, setMyths] = useState(initialMythsData);
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedMyth, setSelectedMyth] = useState(null);
    const [userReactions, setUserReactions] = useState({});
    const [userVotes, setUserVotes] = useState({});
    const [commentInput, setCommentInput] = useState(""); // State for the modal's comment input

    // --- Pagination State & Ref ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // You can adjust this value
    const gridRef = useRef(null); // Ref for the grid to enable smooth scrolling

    // --- Memoized Filtering & Pagination Logic ---
    const filteredMyths = useMemo(() =>
        activeCategory === 'all'
            ? myths
            : myths.filter(myth => myth.category === activeCategory),
        [activeCategory, myths]
    );

    const totalPages = Math.ceil(filteredMyths.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMyths = filteredMyths.slice(indexOfFirstItem, indexOfLastItem);

    // --- Advanced Pagination: Logic for displaying compact page numbers ---
    const pageNumbersToDisplay = useMemo(() => {
        if (totalPages <= 5) { // Show all pages if 5 or less
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        if (currentPage <= 3) { // Beginning
            return [1, 2, 3, '...', totalPages];
        }
        if (currentPage >= totalPages - 2) { // End
            return [1, '...', totalPages - 2, totalPages - 1, totalPages];
        }
        // Middle
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }, [currentPage, totalPages]);


    // --- Event Handlers ---
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            // Scroll to the top of the grid smoothly
            if (gridRef.current) {
                gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const handleTabClick = (category) => {
        setActiveCategory(category);
        setCurrentPage(1); // Reset to page 1 on category change
    };

    const handleOpenModal = (mythId) => {
        const mythToShow = myths.find(m => m.id === mythId);
        setSelectedMyth(mythToShow);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedMyth(null);
        document.body.style.overflow = 'auto';
    };

    const handleReaction = (event, mythId, reactionType) => {
        event.stopPropagation();
        setUserReactions(prev => ({
            ...prev,
            [mythId]: prev[mythId] === reactionType ? null : reactionType,
        }));
    };

    const handleVote = (mythId, voteType) => {
        const previousVote = userVotes[mythId];
        setUserVotes(prev => ({ ...prev, [mythId]: voteType }));

        const updatedMyths = myths.map(myth => {
            if (myth.id === mythId) {
                const newMyth = { ...myth };
                if (previousVote) {
                    newMyth[previousVote + 'Votes']--;
                }
                newMyth[voteType + 'Votes']++;
                return newMyth;
            }
            return myth;
        });
        setMyths(updatedMyths);

        // Also update the state for the currently open modal to see changes instantly
        setSelectedMyth(prev => ({...prev, [`${voteType}Votes`]: prev[`${voteType}Votes`] + 1}));
    };

    const handleAddComment = () => {
        if (!commentInput.trim() || !selectedMyth) return;
        
        const newComment = { author: "Anonymous Explorer", text: commentInput.trim() };
        
        const updatedMyths = myths.map(myth =>
            myth.id === selectedMyth.id
                ? { ...myth, comments: [...myth.comments, newComment] }
                : myth
        );
        setMyths(updatedMyths);
        
        // Update the modal's state directly as well
        setSelectedMyth(prev => ({ ...prev, comments: [...prev.comments, newComment] }));
        setCommentInput(""); // Clear the input field
    };

    // Effect for closing modal with Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleCloseModal();
            }
        };
        if (selectedMyth) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedMyth]);

    const categories = ['all', 'greek', 'indian', 'norse', 'egyptian', 'urban', 'archaeological'];

    return (
        <>
            <div className='myth-hero-content'>
                <div className="myth-header-hero">
                    <h1>Myths & Mysteries</h1>
                    <p className='myth-hero-subtitle'><i>Journey Through the Corridors of Time</i></p>
                    <p className="myth-hero-description">Discover the ancient wisdom hidden within timeless legends, uncover the truth behind mythical tales, and explore the mysteries that have captivated humanity for millennia.</p>
                </div>
            </div>
    
            <div className="nav-tabs">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`tab ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => handleTabClick(category)}
                        >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            
            <div className="myth-container">
                {/* --- The ref is attached to the grid myth-container --- */}
                <div ref={gridRef} className="myths-grid">
                    {/* --- Myth Card JSX is now directly inside the map --- */}
                    {currentMyths.map(myth => {
                        const totalVotes = myth.mythVotes + myth.factVotes + myth.unsolvedVotes;
                        const mythPercentage = totalVotes > 0 ? Math.round((myth.mythVotes / totalVotes) * 100) : 0;
                        const factPercentage = totalVotes > 0 ? Math.round((myth.factVotes / totalVotes) * 100) : 0;
                        const unsolvedPercentage = totalVotes > 0 ? Math.round((myth.unsolvedVotes / totalVotes) * 100) : 0;
                        const userReaction = userReactions[myth.id];
                        
                        return (
                            <div key={myth.id} className="myth-card" onClick={() => handleOpenModal(myth.id)}>
                                <div className="myth-header">
                                    <div className="myth-icon">{myth.icon}</div>
                                </div>
                                <div className="myth-content">
                                    <h3 className="myth-title">{myth.title}</h3>
                                    <div className="myth-origin">
                                        <span>📍</span>
                                        <span>{myth.origin} Origin</span>
                                    </div>
                                    <p className="myth-description">{myth.description}</p>
                                    <div className="myth-stats">
                                        <div className="stat"><div className="stat-label">Myth</div><div className="stat-value myth">{mythPercentage}%</div></div>
                                        <div className="stat"><div className="stat-label">Fact</div><div className="stat-value fact">{factPercentage}%</div></div>
                                        <div className="stat"><div className="stat-label">Unsolved</div><div className="stat-value unsolved">{unsolvedPercentage}%</div></div>
                                    </div>
                                    <div className="reactions">
                                        <button className={`reaction ${userReaction === 'interesting' ? 'active' : ''}`} onClick={(e) => handleReaction(e, myth.id, 'interesting')}>
                                            🔥 <span>Interesting</span>
                                        </button>
                                        <button className={`reaction ${userReaction === 'mindblowing' ? 'active' : ''}`} onClick={(e) => handleReaction(e, myth.id, 'mindblowing')}>
                                            🤯 <span>Mind-blowing</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* --- Pagination JSX is now directly here --- */}
                {totalPages > 1 && (
                    <nav className="pagination">
                        <button className="page-btn" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&laquo; Prev</button>
                        {pageNumbersToDisplay.map((number, index) =>
                            typeof number === 'string'
                            ? <span key={`ellipsis-${index}`} className="page-ellipsis">...</span>
                            : <button key={number} className={`page-btn ${currentPage === number ? 'active' : ''}`} onClick={() => handlePageChange(number)}>{number}</button>
                        )}
                        <button className="page-btn" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next &raquo;</button>
                    </nav>
                )}
            </div>
            
            {/* --- Modal JSX is now directly here, rendered conditionally --- */}
            {selectedMyth && (() => {
                const totalVotes = selectedMyth.mythVotes + selectedMyth.factVotes + selectedMyth.unsolvedVotes;
                const getPercentage = (votes) => totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
                const userVote = userVotes[selectedMyth.id];

                return (
                    <div className="modal active" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <div className="modal-header">
                                <button className="close-modal" onClick={handleCloseModal}>×</button>
                                <div className="myth-icon">{selectedMyth.icon}</div>
                            </div>
                            <div className="modal-body">
                                <h2 style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold-dark)', marginBottom: '1rem', fontSize: '2rem' }}>{selectedMyth.title}</h2>
                                <p style={{ color: 'var(--black-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                    <span style={{ marginRight: '1rem' }}>📍 {selectedMyth.origin} Origin</span>
                                    <span>📊 {totalVotes} Total Votes</span>
                                </p>
                                <div className="comparison">
                                    <div className="comparison-column myth-column"><h3>🔮 Myth & Legend</h3><p>{selectedMyth.mythVersion}</p></div>
                                    <div className="comparison-column fact-column"><h3>🔬 Facts & Evidence</h3><p>{selectedMyth.factVersion}</p></div>
                                </div>
                                <div className="poll">
                                    <h3>What do you think?</h3>
                                    <div className="poll-options">
                                        <div className="poll-option myth-option" onClick={() => handleVote(selectedMyth.id, 'myth')}><div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔮</div><div>It's a Myth</div></div>
                                        <div className="poll-option fact-option" onClick={() => handleVote(selectedMyth.id, 'fact')}><div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔬</div><div>Based on Facts</div></div>
                                        <div className="poll-option unsolved-option" onClick={() => handleVote(selectedMyth.id, 'unsolved')}><div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>❓</div><div>Unsolved Mystery</div></div>
                                    </div>
                                    <div className={`poll-results ${userVote ? 'show' : ''}`}>
                                        <div className="result-bar"><div className="result-label"><span>🔮 Myth</span><span>{selectedMyth.mythVotes} votes</span></div><div className="result-progress"><div className="result-fill myth-fill" style={{ width: `${getPercentage(selectedMyth.mythVotes)}%` }}>{getPercentage(selectedMyth.mythVotes)}%</div></div></div>
                                        <div className="result-bar"><div className="result-label"><span>🔬 Facts</span><span>{selectedMyth.factVotes} votes</span></div><div className="result-progress"><div className="result-fill fact-fill" style={{ width: `${getPercentage(selectedMyth.factVotes)}%` }}>{getPercentage(selectedMyth.factVotes)}%</div></div></div>
                                        <div className="result-bar"><div className="result-label"><span>❓ Unsolved</span><span>{selectedMyth.unsolvedVotes} votes</span></div><div className="result-progress"><div className="result-fill unsolved-fill" style={{ width: `${getPercentage(selectedMyth.unsolvedVotes)}%` }}>{getPercentage(selectedMyth.unsolvedVotes)}%</div></div></div>
                                    </div>
                                </div>
                                <div className="did-you-know"><h3>💡 Did You Know?</h3><p>{selectedMyth.didYouKnow}</p></div>
                                <div className="discussion">
                                    <h3>💬 Community Discussion</h3>
                                    <form className="comment-form" onSubmit={(e) => { e.preventDefault(); handleAddComment(); }}>
                                        <input type="text" className="comment-input" placeholder="Share your thoughts..." value={commentInput} onChange={e => setCommentInput(e.target.value)} />
                                        <button type="submit" className="btn">Post</button>
                                    </form>
                                    <div className="comments-list">
                                        {selectedMyth.comments.slice().reverse().map((c, index) => (
                                            <div className="comment" key={index}><div className="comment-author">{c.author}</div><div>{c.text}</div></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })()}
            
        </>
    );
}