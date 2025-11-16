import React, { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/ProfilePage.css'; // Import the CSS file

// Mock data (you'd fetch this from your backend API in a real app)
const mockActivities = [
    {
        type: 'artifacts',
        icon: '🏺',
        title: 'Roman Amphora Identified',
        description: 'Successfully identified a 2nd century Roman amphora using AI recognition technology.',
        time: '2 hours ago',
        category: 'artifacts'
    },
    {
        type: 'quizzes',
        icon: '🧠',
        title: 'Egyptian Mythology Quiz',
        description: 'Completed advanced Egyptian mythology assessment with 95% score.',
        time: '5 hours ago',
        category: 'quizzes'
    },
    {
        type: 'videos',
        icon: '🎬',
        title: 'Pompeii Documentary',
        description: 'Watched latest archaeological discoveries from Pompeii excavations.',
        time: '1 day ago',
        category: 'videos'
    },
    {
        type: 'exploration',
        icon: '🗺️',
        title: 'Ancient Greece Study',
        description: 'Explored Athens archaeological sites and completed regional assessment.',
        time: '2 days ago',
        category: 'exploration'
    },
    {
        type: 'artifacts',
        icon: '👑',
        title: 'Mayan Crown Analysis',
        description: 'Analyzed ceremonial headdress from Classic Maya period.',
        time: '4 days ago',
        category: 'artifacts'
    }
];

const mockBadgeInfo = {
    'First Discovery': 'You\'ve taken your first step into archaeological exploration. This achievement marks the beginning of your journey into understanding ancient civilizations.',
    'Knowledge Seeker': 'Your dedication to learning through interactive assessments demonstrates serious commitment to archaeological education.',
    'World Explorer': 'You\'ve demonstrated global curiosity by exploring multiple ancient civilizations across different continents.',
    'Myth Collector': 'Your study of legendary tales shows deep appreciation for the cultural narratives that shaped human history.',
    'Documentary Master': 'Extensive viewing of educational content shows your commitment to comprehensive learning.',
    'Civilization Expert': 'This prestigious achievement awaits those who demonstrate mastery across 100+ artifacts. Continue your exploration to unlock this honor.'
};

const ProfilePage = () => {
    const { user, isAuthenticated } = useContext(AuthContext);
    const [profileActiveFilter, setProfileActiveFilter] = useState('all');
    const [modalData, setModalData] = useState({ modalId: null, title: '', description: '' });
    const [showModal, setShowModal] = useState(false);
    const [showBadgeModal, setShowBadgeModal] = useState(false);
    const [badgeModalContent, setBadgeModalContent] = useState({ title: '', description: '' });
    const [profileUserStats, setProfileUserStats] = useState(null);
    const [profileUserActivities, setProfileUserActivities] = useState([]);
    const [profileUserBadges, setProfileUserBadges] = useState([]);
    const [profileFormData, setProfileFormData] = useState({
        name: '',
        role: '',
        bio: '',
        avatar: ''
    });
    const [profileFormErrors, setProfileFormErrors] = useState({});
    const [profileSaving, setProfileSaving] = useState(false);

    const statsSectionRef = useRef(null);

    // Get user display information
    const getUserDisplayInfo = () => {
        if (!user) {
            return {
                name: 'User',
                role: 'Explorer',
                avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cdefs%3E%3CradialGradient id='grad'%3E%3Cstop offset='0%25' stop-color='%23D4AF37'/%3E%3Cstop offset='100%25' stop-color='%23B8860B'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='60' cy='60' r='60' fill='url(%23grad)'/%3E%3Ctext x='60' y='75' text-anchor='middle' fill='white' font-size='40' font-family='serif'%3E👤%3C/text%3E%3C/svg%3E",
                bio: 'Welcome to your archaeological learning journey!'
            };
        }

        return {
            name: user.name || user.username || 'User',
            role: user.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Explorer',
            avatar: user.avatar || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cdefs%3E%3CradialGradient id='grad'%3E%3Cstop offset='0%25' stop-color='%23D4AF37'/%3E%3Cstop offset='100%25' stop-color='%23B8860B'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='60' cy='60' r='60' fill='url(%23grad)'/%3E%3Ctext x='60' y='75' text-anchor='middle' fill='white' font-size='40' font-family='serif'%3E👤%3C/text%3E%3C/svg%3E",
            bio: `Passionate ${user.role || 'explorer'} uncovering ancient mysteries through digital archaeology.`
        };
    };

    const userInfo = getUserDisplayInfo();

    // Fetch user data from backend
    useEffect(() => {
        const fetchUserData = async () => {
            if (!user || !isAuthenticated) {
                return;
            }

            try {
                const token = localStorage.getItem('token');

                // Fetch user statistics
                const statsResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4242'}/profile/stats`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (statsResponse.ok) {
                    const statsData = await statsResponse.json();
                    setProfileUserStats(statsData.stats);
                }

                // Fetch user activities
                const activitiesResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4242'}/profile/activities`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (activitiesResponse.ok) {
                    const activitiesData = await activitiesResponse.json();
                    setProfileUserActivities(activitiesData.activities || []);
                }

                // Fetch user badges
                const badgesResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4242'}/profile/badges`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (badgesResponse.ok) {
                    const badgesData = await badgesResponse.json();
                    setProfileUserBadges(badgesData.badges || []);
                }

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [user, isAuthenticated]);

    // --- Effects for Interactivity ---

    // Counter animation
    useEffect(() => {
        const counters = document.querySelectorAll('.profile-stat-number, .profile-exploration-number');
        const animateCounters = () => {
            counters.forEach(counter => {
                const target = counter.textContent.includes('k') ?
                    parseFloat(counter.textContent) * 1000 :
                    parseInt(counter.textContent);

                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = counter.textContent.includes('k') ?
                            (target / 1000).toFixed(1) + 'k' : target;
                        clearInterval(timer);
                    } else {
                        const displayValue = counter.textContent.includes('k') ?
                            (current / 1000).toFixed(1) + 'k' : Math.floor(current);
                        counter.textContent = displayValue;
                    }
                }, 30);
            });
        };

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const currentRef = statsSectionRef.current;
        if (currentRef) {
            statsObserver.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                statsObserver.unobserve(currentRef);
            }
        };
    }, []);

    // Fade-in animations for elements
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('profile-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.profile-stat-card, .profile-badge, .profile-exploration-stat, .profile-activity-item').forEach(el => {
            observer.observe(el);
        });

        return () => {
            document.querySelectorAll('.profile-stat-card, .profile-badge, .profile-exploration-stat, .profile-activity-item').forEach(el => {
                observer.unobserve(el);
            });
        };
    }, []);

    // --- Filter and Timeline Rendering ---
    // Use real user activities if available, otherwise fall back to mock data
    const profileActivitiesToShow = profileUserActivities.length > 0 ? profileUserActivities : mockActivities;

    const profileFilteredActivities = profileActiveFilter === 'all'
        ? profileActivitiesToShow
        : profileActivitiesToShow.filter(activity => activity.type === profileActiveFilter);

    // Render timeline using React state for updates
    const [timelineContent, setTimelineContent] = useState([]);

    useEffect(() => {
        const formatTimeAgo = (timestamp) => {
            if (!timestamp) return 'Recently';

            const now = new Date();
            const activityTime = new Date(timestamp);
            const diffInSeconds = Math.floor((now - activityTime) / 1000);

            if (diffInSeconds < 60) return 'Just now';
            if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
            if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
            if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
            return `${Math.floor(diffInSeconds / 2592000)} months ago`;
        };

        const getActivityIcon = (type) => {
            switch (type) {
                case 'artifact': return '🏺';
                case 'quiz': return '🧠';
                case 'video': return '🎬';
                case 'exploration': return '🗺️';
                default: return '📚';
            }
        };

        const items = profileFilteredActivities.map((activity, index) => (
            <div key={activity._id || index} className='profile-activity-item profile-fade-in' style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="profile-activity-icon">{getActivityIcon(activity.type)}</div>
                <div className="profile-activity-content">
                    <div className="profile-activity-title">{activity.title}</div>
                    <div className="profile-activity-description">{activity.description}</div>
                    <div className="profile-activity-time">{formatTimeAgo(activity.timestamp)}</div>
                </div>
            </div>
        ));
        setTimelineContent(items);
    }, [profileFilteredActivities]);

    const handleProfileFilterClick = (filter) => {
        setProfileActiveFilter(filter);
    };

    // Profile form validation and save
    const validateProfileForm = () => {
        const errors = {};

        if (!profileFormData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!profileFormData.bio.trim()) {
            errors.bio = 'Bio is required';
        } else if (profileFormData.bio.length < 10) {
            errors.bio = 'Bio must be at least 10 characters long';
        }

        if (profileFormData.avatar && !isValidUrl(profileFormData.avatar)) {
            errors.avatar = 'Please enter a valid URL';
        }

        setProfileFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch {
            return false;
        }
    };

    const handleProfileSave = async () => {
        if (!validateProfileForm()) {
            return;
        }

        setProfileSaving(true);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4242'}/profile`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profileFormData)
            });

            if (response.ok) {
                // Update the user context or trigger a refresh
                setShowModal(false);
                setProfileFormErrors({});
                // Optionally refresh the page or update user context
                window.location.reload();
            } else {
                const errorData = await response.json();
                setProfileFormErrors({ general: errorData.message || 'Failed to update profile' });
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            setProfileFormErrors({ general: 'Network error. Please try again.' });
        } finally {
            setProfileSaving(false);
        }
    };

    // --- Modal Handling ---
    const handleOpenModal = (modalId = '', title = '', description = '') => {
        setModalData({ modalId, title, description });

        // Populate form data with current user info when opening profile modal
        if (modalId === 'profile-modal') {
            setProfileFormData({
                name: userInfo.name,
                role: userInfo.role,
                bio: userInfo.bio,
                avatar: userInfo.avatar
            });
            setProfileFormErrors({}); // Clear any previous errors
        }

        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalData({ modalId: null, title: '', description: '' });
    };

    const handleOpenBadgeModal = (badgeTitle) => {
        const title = badgeTitle;
        const description = mockBadgeInfo[badgeTitle] || 'Achievement information not available.';
        setBadgeModalContent({ title, description });
        setShowBadgeModal(true);
    };

    const handleCloseBadgeModal = () => {
        setShowBadgeModal(false);
        setBadgeModalContent({ title: '', description: '' });
    };

    const handleOutsideClick = (e) => {
        // Check if the clicked element has a specific modal ID or if it's the background of the badge modal
        if (modalData.modalId && e.target.id === modalData.modalId) {
            handleCloseModal();
        }
        if (showBadgeModal && e.target.id === 'badge-modal') {
            handleCloseBadgeModal();
        }
    };

    // --- Smooth Scrolling ---
    const handleSmoothScroll = (targetId) => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            // No need to adjust for nav height as nav is removed
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    // Helper function to determine if badge should be locked
    const isBadgeLocked = (badgeType) => {
        switch (badgeType) {
            case 'Civilization Expert':
                return (profileUserStats?.artifactsAnalyzed || 0) < 100;
            default:
                return false; // Assume unlocked if not specifically handled
        }
    };

    // Calculate exploration stats based on user data
    const getExplorationStats = () => {
        if (!profileUserStats) {
            return {
                regionsExplored: 0,
                artifactsFound: 0,
                civilizations: 0,
                yearsOfHistory: 0
            };
        }

        return {
            regionsExplored: profileUserStats.regionsExplored || 0,
            artifactsFound: profileUserStats.artifactsAnalyzed || 0,
            civilizations: Math.min(profileUserStats.civilizationsStudied || 0, 12), // Cap at reasonable number
            yearsOfHistory: Math.max((profileUserStats.artifactsAnalyzed || 0) * 15, 100) // Estimate based on artifacts
        };
    };

    const explorationStats = getExplorationStats();

    return (
        <div>
            {/* Top padding to account for removed navigation */}
            <div style={{ paddingTop: '90px' }}></div>

            {/* Hero Section */}
            <section className="profile-hero" id="profile">
                <div className="profile-hero-container">
                    <div className="profile-profile-avatar">
                        <img src={userInfo.avatar} alt={userInfo.name} />
                    </div>
                    <h1>{userInfo.name}</h1>
                    <div className="profile-hero-subtitle">{userInfo.role}</div>
                    <p className="profile-hero-bio">
                        {userInfo.bio}
                    </p>
                    <div className="profile-cta-buttons">
                        <button className="profile-btn-primary" onClick={() => handleOpenModal('profile-modal')}>Edit Profile</button>
                        <a href="#stats" className="profile-btn-secondary" onClick={(e) => { e.preventDefault(); handleSmoothScroll('stats'); }}>View Statistics</a>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="profile-stats" id="stats" ref={statsSectionRef}>
                <div className="profile-stats-container">
                    <h2 className="profile-section-title">Academic Achievements</h2>
                    <div className="profile-stats-grid">
                        <div className="profile-stat-card">
                            <span className="profile-stat-icon">🏺</span>
                            <div className="profile-stat-number">{profileUserStats?.artifactsAnalyzed || 0}</div>
                            <div className="profile-stat-label">Artifacts Analyzed</div>
                            <div className="profile-stat-description">Historical pieces studied</div>
                        </div>

                        <div className="profile-stat-card">
                            <span className="profile-stat-icon">🔍</span>
                            <div className="profile-stat-number">{profileUserStats?.aiIdentifications || 0}</div>
                            <div className="profile-stat-label">AI Identifications</div>
                            <div className="profile-stat-description">Technology-assisted discoveries</div>
                        </div>

                        <div className="profile-stat-card">
                            <span className="profile-stat-icon">🧠</span>
                            <div className="profile-stat-number">{profileUserStats?.quizzesCompleted || 0}</div>
                            <div className="profile-stat-label">Quizzes Completed</div>
                            <div className="profile-stat-description">
                                {profileUserStats?.averageQuizScore ? `Average score: ${Math.round(profileUserStats.averageQuizScore)}%` : 'Complete quizzes to see average'}
                            </div>
                        </div>

                        <div className="profile-stat-card">
                            <span className="profile-stat-icon">🎬</span>
                            <div className="profile-stat-number">{profileUserStats?.documentariesWatched || 0}</div>
                            <div className="profile-stat-label">Documentaries</div>
                            <div className="profile-stat-description">Educational content viewed</div>
                        </div>

                        <div className="profile-stat-card">
                            <span className="profile-stat-icon">🌍</span>
                            <div className="profile-stat-number">{profileUserStats?.regionsExplored || 0}</div>
                            <div className="profile-stat-label">Regions Explored</div>
                            <div className="profile-stat-description">Global archaeological study</div>
                        </div>

                        <div className="profile-stat-card">
                            <span className="profile-stat-icon">📜</span>
                            <div className="profile-stat-number">{profileUserStats?.mythsStudied || 0}</div>
                            <div className="profile-stat-label">Myths Studied</div>
                            <div className="profile-stat-description">Cultural narratives analyzed</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activity Timeline */}
            <section className="profile-activity" id="activities">
                <div className="profile-activity-container">
                    <h2 className="profile-section-title">Recent Activity</h2>
                    <div className="profile-filter-buttons">
                        <button className={`profile-filter-btn ${profileActiveFilter === 'all' ? 'active' : ''}`} onClick={() => handleProfileFilterClick('all')}>All Activity</button>
                        <button className={`profile-filter-btn ${profileActiveFilter === 'artifacts' ? 'active' : ''}`} onClick={() => handleProfileFilterClick('artifacts')}>Artifacts</button>
                        <button className={`profile-filter-btn ${profileActiveFilter === 'quizzes' ? 'active' : ''}`} onClick={() => handleProfileFilterClick('quizzes')}>Quizzes</button>
                        <button className={`profile-filter-btn ${profileActiveFilter === 'videos' ? 'active' : ''}`} onClick={() => handleProfileFilterClick('videos')}>Videos</button>
                        <button className={`profile-filter-btn ${profileActiveFilter === 'exploration' ? 'active' : ''}`} onClick={() => handleProfileFilterClick('exploration')}>Exploration</button>
                    </div>
                    <div className="profile-activity-timeline" id="activityTimeline">
                        {timelineContent}
                    </div>
                </div>
            </section>

            {/* Badges Section */}
            <section className="profile-badges" id="badges">
                <div className="profile-badges-container">
                    <h2 className="profile-section-title">Achievements</h2>
                    <div className="profile-badges-grid">
                        {/* Default badges that all users can see */}
                        <div className="profile-badge" onClick={() => handleOpenBadgeModal('First Discovery')}>
                            <span className="profile-badge-icon">🥇</span>
                            <div className="profile-badge-title">First Discovery</div>
                            <div className="profile-badge-description">Completed your first artifact identification</div>
                        </div>

                        <div className="profile-badge" onClick={() => handleOpenBadgeModal('Knowledge Seeker')}>
                            <span className="profile-badge-icon">🧠</span>
                            <div className="profile-badge-title">Knowledge Seeker</div>
                            <div className="profile-badge-description">Completed 15+ historical quizzes</div>
                        </div>

                        <div className="profile-badge" onClick={() => handleOpenBadgeModal('World Explorer')}>
                            <span className="profile-badge-icon">🌍</span>
                            <div className="profile-badge-title">World Explorer</div>
                            <div className="profile-badge-description">Explored 10+ ancient civilizations</div>
                        </div>

                        <div className="profile-badge" onClick={() => handleOpenBadgeModal('Myth Collector')}>
                            <span className="profile-badge-icon">📚</span>
                            <div className="profile-badge-title">Myth Collector</div>
                            <div className="profile-badge-description">Studied 20+ legendary tales</div>
                        </div>

                        <div className="profile-badge" onClick={() => handleOpenBadgeModal('Documentary Master')}>
                            <span className="profile-badge-icon">🎬</span>
                            <div className="profile-badge-title">Documentary Master</div>
                            <div className="profile-badge-description">Watched 50+ hours of content</div>
                        </div>

                        <div className={`profile-badge ${isBadgeLocked('Civilization Expert') ? 'locked' : ''}`} onClick={() => handleOpenBadgeModal('Civilization Expert')}>
                            <div className="profile-locked-indicator">🔒</div>
                            <span className="profile-badge-icon">👑</span>
                            <div className="profile-badge-title">Civilization Expert</div>
                            <div className="profile-badge-description">Master 100+ artifacts to unlock</div>
                        </div>

                        {/* Render earned badges from user data */}
                        {profileUserBadges.map((badge, index) => (
                            <div key={badge._id || index} className="profile-badge earned" onClick={() => handleOpenBadgeModal(badge.name)}>
                                <span className="profile-badge-icon">{badge.icon}</span>
                                <div className="profile-badge-title">{badge.name}</div>
                                <div className="profile-badge-description">{badge.description}</div>
                                {badge.earnedDate && (
                                    <div className="profile-badge-earned-date">
                                        Earned: {new Date(badge.earnedDate).toLocaleDateString()}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* World Map */}
            <section className="profile-world-map" id="exploration">
                <div className="profile-map-container">
                    <h2 className="profile-section-title">Global Exploration</h2>
                    <div className="profile-interactive-map" onClick={() => handleOpenModal('map-modal')}>
                        <div className="profile-map-content">
                            <h3>Interactive World Map</h3>
                            <p className="profile-map-subtitle">Explore civilizations across history</p>
                        </div>
                    </div>

                    <div className="profile-exploration-stats">
                        <div className="profile-exploration-stat">
                            <div className="profile-exploration-number">{explorationStats.regionsExplored}</div>
                            <div className="profile-exploration-label">Regions Explored</div>
                        </div>

                        <div className="profile-exploration-stat">
                            <div className="profile-exploration-number">{explorationStats.artifactsFound}</div>
                            <div className="profile-exploration-label">Artifacts Found</div>
                        </div>

                        <div className="profile-exploration-stat">
                            <div className="profile-exploration-number">{explorationStats.civilizations}</div>
                            <div className="profile-exploration-label">Civilizations</div>
                        </div>

                        <div className="profile-exploration-stat">
                            <div className="profile-exploration-number">{explorationStats.yearsOfHistory > 1000 ? `${Math.floor(explorationStats.yearsOfHistory / 1000)}k` : explorationStats.yearsOfHistory}</div>
                            <div className="profile-exploration-label">Years of History</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modals */}
            {/* Profile Modal */}
            {showModal && modalData.modalId === 'profile-modal' && (
                <div className="profile-modal show" id="profile-modal" onClick={handleOutsideClick}>
                    <div className="profile-modal-content">
                        <h3>Edit Profile</h3>
                        <div className="profile-edit-form">
                            <div className="profile-form-group">
                                <label htmlFor="profile-name">Name</label>
                                <input
                                    type="text"
                                    id="profile-name"
                                    value={profileFormData.name}
                                    onChange={(e) => setProfileFormData({...profileFormData, name: e.target.value})}
                                    placeholder="Enter your name"
                                />
                                {profileFormErrors.name && <span className="profile-error">{profileFormErrors.name}</span>}
                            </div>

                            <div className="profile-form-group">
                                <label htmlFor="profile-role">Role</label>
                                <div className="profile-role-display">
                                    {profileFormData.role && profileFormData.role.charAt(0).toUpperCase() + profileFormData.role.slice(1)}
                                </div>
                                <small className="profile-role-hint">Role is assigned based on your subscription plan</small>
                            </div>

                            <div className="profile-form-group">
                                <label htmlFor="profile-bio">Bio</label>
                                <textarea
                                    id="profile-bio"
                                    value={profileFormData.bio}
                                    onChange={(e) => setProfileFormData({...profileFormData, bio: e.target.value})}
                                    placeholder="Tell us about your archaeological interests..."
                                    rows="4"
                                />
                                {profileFormErrors.bio && <span className="profile-error">{profileFormErrors.bio}</span>}
                            </div>

                            <div className="profile-form-group">
                                <label htmlFor="profile-avatar">Avatar URL</label>
                                <input
                                    type="url"
                                    id="profile-avatar"
                                    value={profileFormData.avatar}
                                    onChange={(e) => setProfileFormData({...profileFormData, avatar: e.target.value})}
                                    placeholder="https://example.com/avatar.jpg"
                                />
                                {profileFormErrors.avatar && <span className="profile-error">{profileFormErrors.avatar}</span>}
                            </div>
                        </div>

                        <div className="profile-modal-buttons">
                            <button
                                className="profile-btn-secondary"
                                onClick={() => {
                                    setShowModal(false);
                                    setProfileFormData({
                                        name: userInfo.name,
                                        role: userInfo.role,
                                        bio: userInfo.bio,
                                        avatar: userInfo.avatar
                                    });
                                    setProfileFormErrors({});
                                }}
                                disabled={profileSaving}
                            >
                                Cancel
                            </button>
                            <button
                                className="profile-btn-primary"
                                onClick={handleProfileSave}
                                disabled={profileSaving}
                            >
                                {profileSaving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Badge Modal */}
            {showBadgeModal && (
                <div className="profile-modal show" id="badge-modal" onClick={handleOutsideClick}>
                    <div className="profile-modal-content">
                        <h3 id="badge-modal-title">{badgeModalContent.title}</h3>
                        <p id="badge-modal-description">{badgeModalContent.description}</p>
                        <button className="profile-btn-primary" onClick={handleCloseBadgeModal}>Continue</button>
                    </div>
                </div>
            )}
            {/* Map Modal */}
            {showModal && modalData.modalId === 'map-modal' && (
                <div className="profile-modal show" id="map-modal" onClick={handleOutsideClick}>
                    <div className="profile-modal-content">
                        <h3>Global Archaeological Map</h3>
                        <p>Explore your discoveries across ancient civilizations. From Egypt to Greece, track your journey through history.</p>
                        <button className="profile-btn-primary" onClick={() => handleCloseModal()}>Explore</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
