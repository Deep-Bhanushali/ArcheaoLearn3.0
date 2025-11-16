import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Stripe from 'stripe';
import multer from 'multer'; // Make sure multer is imported
import axios from 'axios';   // Make sure axios is imported
import fs from 'fs';    
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Civilization Schema for detailed tracking
const CivilizationSchema = new mongoose.Schema({
    civilizationId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    region: { type: String, required: true },
    timePeriod: { type: String, required: true },
    description: { type: String, required: true },
    coordinates: {
        lat: { type: Number },
        lng: { type: Number }
    },
    isActive: { type: Boolean, default: true }
});

// Artifact Schema for detailed artifact tracking
const ArtifactSchema = new mongoose.Schema({
    artifactId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    civilization: { type: String, required: true },
    timePeriod: { type: String, required: true },
    materials: [String],
    regionOfOrigin: { type: String, required: true },
    description: { type: String, required: true },
    funFact: { type: String },
    imageUrl: { type: String },
    aiAnalysis: {
        confidence: { type: Number },
        analysisDate: { type: Date },
        details: { type: mongoose.Schema.Types.Mixed }
    },
    isVerified: { type: Boolean, default: false }
});

// Quiz Schema for detailed quiz tracking
const QuizSchema = new mongoose.Schema({
    quizId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
    questions: [{
        question: { type: String, required: true },
        options: [String],
        correctAnswer: { type: String, required: true },
        explanation: { type: String }
    }],
    isActive: { type: Boolean, default: true }
});

// Activity Schema for comprehensive activity tracking
const ActivitySchema = new mongoose.Schema({
    activityId: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: {
        type: String,
        enum: ['artifact_analysis', 'quiz_completion', 'video_watching', 'civilization_exploration', 'badge_earned', 'level_up', 'artifact_collection', 'social_interaction'],
        required: true
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },

    // Activity-specific data
    metadata: {
        // For artifact analysis
        artifactId: { type: String },
        artifactName: { type: String },
        confidence: { type: Number },
        aiAnalysis: { type: mongoose.Schema.Types.Mixed },

        // For quiz completion
        quizId: { type: String },
        quizTitle: { type: String },
        score: { type: Number },
        timeSpent: { type: Number }, // in minutes
        totalQuestions: { type: Number },
        correctAnswers: { type: Number },

        // For video watching
        videoId: { type: String },
        videoTitle: { type: String },
        duration: { type: Number }, // in minutes
        completionPercentage: { type: Number },

        // For civilization exploration
        civilizationId: { type: String },
        civilizationName: { type: String },
        region: { type: String },
        coordinates: {
            lat: { type: Number },
            lng: { type: Number }
        },

        // For badge earning
        badgeId: { type: String },
        badgeName: { type: String },
        badgeRarity: { type: String },

        // For level progression
        newLevel: { type: Number },
        experienceGained: { type: Number },
        totalExperience: { type: Number },

        // For social interactions
        targetUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        interactionType: { type: String, enum: ['follow', 'like', 'comment', 'share'] }
    },

    // Activity categorization and tagging
    category: { type: String, enum: ['learning', 'exploration', 'analysis', 'social', 'achievement'], default: 'learning' },
    tags: [String],

    // Activity visibility and privacy
    isPublic: { type: Boolean, default: true },
    visibility: { type: String, enum: ['public', 'friends', 'private'], default: 'public' },

    // Activity engagement metrics
    engagement: {
        views: { type: Number, default: 0 },
        likes: { type: Number, default: 0 },
        comments: { type: Number, default: 0 },
        shares: { type: Number, default: 0 }
    },

    // Geographic and contextual data
    location: {
        region: { type: String },
        country: { type: String },
        coordinates: {
            lat: { type: Number },
            lng: { type: Number }
        },
        ipAddress: { type: String }
    },

    // Session and context tracking
    sessionId: { type: String },
    userAgent: { type: String },
    platform: { type: String, enum: ['web', 'mobile', 'tablet'], default: 'web' },

    // Activity relationships (for threading, replies, etc.)
    parentActivityId: { type: String },
    relatedActivityIds: [String],

    // Activity status and lifecycle
    status: { type: String, enum: ['active', 'archived', 'deleted'], default: 'active' },
    expiresAt: { type: Date },

    // Additional data for extensibility
    customData: { type: mongoose.Schema.Types.Mixed }
});

// Indexes for performance optimization
ActivitySchema.index({ userId: 1, timestamp: -1 });
ActivitySchema.index({ type: 1, timestamp: -1 });
ActivitySchema.index({ civilizationId: 1, timestamp: -1 });
ActivitySchema.index({ 'metadata.artifactId': 1 });
ActivitySchema.index({ 'metadata.quizId': 1 });
ActivitySchema.index({ isPublic: 1, timestamp: -1 });

// User Schema - Expanded for comprehensive profile data
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {type: String, enum: ['explorer','archaeologist','curator'],default:'explorer'},

    // Enhanced profile fields
    name: { type: String, default: '' },
    avatar: { type: String, default: '' },
    bio: { type: String, default: '' },
    joinDate: { type: Date, default: Date.now },
    lastActive: { type: Date, default: Date.now },

    // Comprehensive user statistics
    stats: {
        artifactsAnalyzed: { type: Number, default: 0 },
        aiIdentifications: { type: Number, default: 0 },
        quizzesCompleted: { type: Number, default: 0 },
        averageQuizScore: { type: Number, default: 0 },
        documentariesWatched: { type: Number, default: 0 },
        regionsExplored: { type: Number, default: 0 },
        mythsStudied: { type: Number, default: 0 },
        civilizationsStudied: { type: Number, default: 0 },
        totalStudyTime: { type: Number, default: 0 }, // in minutes
        streakDays: { type: Number, default: 0 },
        longestStreak: { type: Number, default: 0 }
    },

    // Detailed activity tracking
    activities: [{
        type: { type: String, enum: ['artifact', 'quiz', 'video', 'exploration', 'civilization'], required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
        metadata: {
            score: { type: Number },
            timeSpent: { type: Number }, // in minutes
            artifactId: { type: String },
            civilizationId: { type: String },
            quizId: { type: String },
            region: { type: String },
            coordinates: {
                lat: { type: Number },
                lng: { type: Number }
            }
        }
    }],

    // Comprehensive badge/achievement system
    badges: [{
        badgeId: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, default: '🏆' },
        category: { type: String, enum: ['exploration', 'analysis', 'learning', 'social', 'special'], default: 'exploration' },
        earnedDate: { type: Date, default: Date.now },
        isVisible: { type: Boolean, default: true },
        progress: { type: Number, default: 0 },
        maxProgress: { type: Number, default: 100 },
        rarity: { type: String, enum: ['common', 'rare', 'epic', 'legendary'], default: 'common' }
    }],

    // Detailed civilization exploration tracking
    civilizationsExplored: [{
        civilizationId: { type: String, required: true },
        name: { type: String, required: true },
        firstExplored: { type: Date, default: Date.now },
        lastVisited: { type: Date, default: Date.now },
        visitCount: { type: Number, default: 1 },
        artifactsFound: { type: Number, default: 0 },
        quizzesCompleted: { type: Number, default: 0 },
        timeSpent: { type: Number, default: 0 }, // in minutes
        isFavorite: { type: Boolean, default: false }
    }],

    // Artifact collection and analysis history
    artifactCollection: [{
        artifactId: { type: String, required: true },
        name: { type: String, required: true },
        analysisDate: { type: Date, default: Date.now },
        confidence: { type: Number },
        userNotes: { type: String },
        isCorrect: { type: Boolean },
        aiAnalysis: { type: mongoose.Schema.Types.Mixed }
    }],

    // Quiz history and performance tracking
    quizHistory: [{
        quizId: { type: String, required: true },
        title: { type: String, required: true },
        completedDate: { type: Date, default: Date.now },
        score: { type: Number, required: true },
        timeSpent: { type: Number }, // in minutes
        answers: [{
            questionIndex: { type: Number },
            userAnswer: { type: String },
            correctAnswer: { type: String },
            isCorrect: { type: Boolean }
        }]
    }],

    // Geographic exploration tracking
    explorationMap: {
        regions: [{
            regionId: { type: String, required: true },
            name: { type: String, required: true },
            coordinates: {
                lat: { type: Number },
                lng: { type: Number }
            },
            firstVisited: { type: Date, default: Date.now },
            lastVisited: { type: Date, default: Date.now },
            visitCount: { type: Number, default: 1 },
            discoveries: { type: Number, default: 0 }
        }],
        totalDistance: { type: Number, default: 0 }, // in kilometers
        countriesVisited: { type: Number, default: 0 }
    },

    // Learning progress tracking
    learningProgress: {
        currentLevel: { type: Number, default: 1 },
        experiencePoints: { type: Number, default: 0 },
        nextLevelXP: { type: Number, default: 100 },
        skillTree: {
            analysis: { type: Number, default: 0 },
            identification: { type: Number, default: 0 },
            research: { type: Number, default: 0 },
            exploration: { type: Number, default: 0 }
        }
    },

    // User preferences and settings
    preferences: {
        theme: { type: String, enum: ['light', 'dark'], default: 'light' },
        notifications: { type: Boolean, default: true },
        language: { type: String, default: 'en' },
        privacy: {
            showProfile: { type: Boolean, default: true },
            showStats: { type: Boolean, default: true },
            showActivities: { type: Boolean, default: true },
            showBadges: { type: Boolean, default: true }
        }
    },

    // Social features (for future expansion)
    social: {
        followers: { type: Number, default: 0 },
        following: { type: Number, default: 0 },
        isPublicProfile: { type: Boolean, default: true }
    }
});

// Create models
const User = mongoose.model('User', UserSchema);
const Civilization = mongoose.model('Civilization', CivilizationSchema);
const Artifact = mongoose.model('Artifact', ArtifactSchema);
const Quiz = mongoose.model('Quiz', QuizSchema);
const Activity = mongoose.model('Activity', ActivitySchema);

// Signup Route
app.post('/signup', async (req, res) => {
    const { username, email, password, role = 'explorer' } = req.body;
    
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ username, email, password: hashedPassword, role });

        await user.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});


// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

app.post('/create-subscription-checkout-session', async (req, res) => {
  const { planTitle, isAnnual } = req.body;

  // Debug logging
  console.log('Request received:', { planTitle, isAnnual });
  console.log('Environment variables:', {
    STRIPE_PRICE_ID_ARCHAEOLOGIST_ANNUAL: process.env.STRIPE_PRICE_ID_ARCHAEOLOGIST_ANNUAL,
    STRIPE_PRICE_ID_ARCHAEOLOGIST_MONTHLY: process.env.STRIPE_PRICE_ID_ARCHAEOLOGIST_MONTHLY,
    STRIPE_PRICE_ID_CURATOR_ANNUAL: process.env.STRIPE_PRICE_ID_CURATOR_ANNUAL,
    STRIPE_PRICE_ID_CURATOR_MONTHLY: process.env.STRIPE_PRICE_ID_CURATOR_MONTHLY,
    STRIPE_PRIVATE_KEY: process.env.STRIPE_PRIVATE_KEY ? 'Set' : 'Not set'
  });

  const priceMap = {
    "Archaeologist": isAnnual 
        ? process.env.STRIPE_PRICE_ID_ARCHAEOLOGIST_ANNUAL 
        : process.env.STRIPE_PRICE_ID_ARCHAEOLOGIST_MONTHLY,
    "Curator": isAnnual
        ? process.env.STRIPE_PRICE_ID_CURATOR_ANNUAL
        : process.env.STRIPE_PRICE_ID_CURATOR_MONTHLY
    };

  const priceId = priceMap[planTitle];
  console.log('Price ID selected:', priceId);
  
  if (!priceId) {
    console.log('Invalid plan - no price ID found');
    return res.status(400).json({ error: { message: "Invalid plan" } });
  }

  try {
    // Get user from token to associate with subscription
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: { message: "Authentication required" } });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(404).json({ error: { message: "User not found" } });
    }

    // Create or get Stripe customer
    let customer;
    if (user.subscription?.stripeCustomerId) {
      customer = await stripe.customers.retrieve(user.subscription.stripeCustomerId);
    } else {
      customer = await stripe.customers.create({
        email: user.email,
        name: user.username,
        metadata: {
          userId: user._id.toString()
        }
      });
      
      // Initialize subscription object if it doesn't exist
      if (!user.subscription) {
        user.subscription = {
          status: 'inactive',
          plan: null,
          stripeCustomerId: null,
          stripeSubscriptionId: null,
          currentPeriodEnd: null
        };
      }
      
      // Update user with Stripe customer ID
      user.subscription.stripeCustomerId = customer.id;
      await user.save();
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer: customer.id,
      line_items: [
        { price: priceId, quantity: 1 }
      ],
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/success?session_id={CHECKOUT_SESSION_ID}&plan=${encodeURIComponent(planTitle)}&annual=${isAnnual}`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/cancel`,
      metadata: {
        userId: user._id.toString(),
        planTitle: planTitle,
        isAnnual: isAnnual.toString()
      }
    });

    console.log('Stripe session created successfully:', session.id);
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating subscription session:", error);
    console.error("Error details:", {
      message: error.message,
      type: error.type,
      code: error.code,
      statusCode: error.statusCode,
      raw: error.raw
    });
    res.status(500).json({ error: { message: error.message } });
  }
});


app.post('/create-checkout-session', async (req, res) => {
    const { amount, dedication } = req.body;

    const amountInPaise = Math.round(parseFloat(amount) * 100);

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: 'Legacy Donation',
                            description: dedication ? `In dedication to: ${dedication}` : 'A generous contribution to preserve our heritage.',
                        },
                        unit_amount: amountInPaise,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/cancel`,
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating Stripe session:", error);
        res.status(500).json({ error: { message: error.message } });
    }
});

// Get user profile route
app.get('/profile', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
});

// Update user profile route
app.put('/profile', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { name, bio, avatar, preferences } = req.body;

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update profile fields if provided
    if (name !== undefined) user.name = name;
    if (bio !== undefined) user.bio = bio;
    if (avatar !== undefined) user.avatar = avatar;
    if (preferences) {
      if (preferences.theme !== undefined) user.preferences.theme = preferences.theme;
      if (preferences.notifications !== undefined) user.preferences.notifications = preferences.notifications;
      if (preferences.language !== undefined) user.preferences.language = preferences.language;
    }

    // Update last active timestamp
    user.lastActive = new Date();

    await user.save();
    res.json({ message: "Profile updated successfully", user: user.select('-password') });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get user activities route
app.get('/profile/activities', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('activities');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ activities: user.activities });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add user activity route
app.post('/profile/activities', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { type, title, description, metadata } = req.body;

    if (!type || !title || !description) {
      return res.status(400).json({ message: "Type, title, and description are required" });
    }

    if (!['artifact', 'quiz', 'video', 'exploration'].includes(type)) {
      return res.status(400).json({ message: "Invalid activity type" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add new activity
    const newActivity = {
      type,
      title,
      description,
      timestamp: new Date(),
      metadata: metadata || {}
    };

    user.activities.unshift(newActivity); // Add to beginning of array

    // Update statistics based on activity type
    switch (type) {
      case 'artifact':
        user.stats.artifactsAnalyzed += 1;
        break;
      case 'quiz':
        user.stats.quizzesCompleted += 1;
        if (metadata && metadata.score) {
          // Update average quiz score
          const currentAvg = user.stats.averageQuizScore || 0;
          const currentCount = user.stats.quizzesCompleted - 1;
          user.stats.averageQuizScore = ((currentAvg * currentCount) + metadata.score) / user.stats.quizzesCompleted;
        }
        break;
      case 'video':
        user.stats.documentariesWatched += 1;
        break;
      case 'exploration':
        user.stats.regionsExplored += 1;
        break;
    }

    // Update last active timestamp
    user.lastActive = new Date();

    await user.save();
    res.json({ message: "Activity added successfully", activity: newActivity });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get user badges route
app.get('/profile/badges', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('badges');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ badges: user.badges });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Award badge route
app.post('/profile/badges', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { badgeId, name, description, icon } = req.body;

    if (!badgeId || !name || !description) {
      return res.status(400).json({ message: "Badge ID, name, and description are required" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if user already has this badge
    const existingBadge = user.badges.find(badge => badge.badgeId === badgeId);
    if (existingBadge) {
      return res.status(400).json({ message: "Badge already earned" });
    }

    // Add new badge
    const newBadge = {
      badgeId,
      name,
      description,
      icon: icon || '🏆',
      earnedDate: new Date(),
      isVisible: true
    };

    user.badges.push(newBadge);

    // Update last active timestamp
    user.lastActive = new Date();

    await user.save();
    res.json({ message: "Badge awarded successfully", badge: newBadge });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Update user statistics route
app.put('/profile/stats', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const stats = req.body;

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update statistics
    if (stats.artifactsAnalyzed !== undefined) user.stats.artifactsAnalyzed = stats.artifactsAnalyzed;
    if (stats.aiIdentifications !== undefined) user.stats.aiIdentifications = stats.aiIdentifications;
    if (stats.quizzesCompleted !== undefined) user.stats.quizzesCompleted = stats.quizzesCompleted;
    if (stats.averageQuizScore !== undefined) user.stats.averageQuizScore = stats.averageQuizScore;
    if (stats.documentariesWatched !== undefined) user.stats.documentariesWatched = stats.documentariesWatched;
    if (stats.regionsExplored !== undefined) user.stats.regionsExplored = stats.regionsExplored;
    if (stats.mythsStudied !== undefined) user.stats.mythsStudied = stats.mythsStudied;
    if (stats.civilizationsStudied !== undefined) user.stats.civilizationsStudied = stats.civilizationsStudied;

    // Update last active timestamp
    user.lastActive = new Date();

    await user.save();
    res.json({ message: "Statistics updated successfully", stats: user.stats });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get user statistics route
app.get('/profile/stats', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('stats');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ stats: user.stats });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ===== EXPANDED PROFILE ENDPOINTS =====

// Get comprehensive user profile data
app.get('/profile/complete', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      profile: {
        id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        bio: user.bio,
        role: user.role,
        joinDate: user.joinDate,
        lastActive: user.lastActive
      },
      stats: user.stats,
      preferences: user.preferences,
      social: user.social,
      learningProgress: user.learningProgress
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Update learning progress
app.put('/profile/learning-progress', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { experiencePoints, skillTree } = req.body;

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update experience points and level
    if (experiencePoints !== undefined) {
      user.learningProgress.experiencePoints = experiencePoints;

      // Calculate level based on XP (simple formula: level = floor(sqrt(XP/10)))
      const newLevel = Math.floor(Math.sqrt(experiencePoints / 10)) + 1;
      if (newLevel > user.learningProgress.currentLevel) {
        user.learningProgress.currentLevel = newLevel;
        user.learningProgress.nextLevelXP = newLevel * newLevel * 10;
      }
    }

    // Update skill tree if provided
    if (skillTree) {
      if (skillTree.analysis !== undefined) user.learningProgress.skillTree.analysis = skillTree.analysis;
      if (skillTree.identification !== undefined) user.learningProgress.skillTree.identification = skillTree.identification;
      if (skillTree.research !== undefined) user.learningProgress.skillTree.research = skillTree.research;
      if (skillTree.exploration !== undefined) user.learningProgress.skillTree.exploration = skillTree.exploration;
    }

    user.lastActive = new Date();
    await user.save();

    res.json({
      message: "Learning progress updated successfully",
      learningProgress: user.learningProgress
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get user's civilization exploration data
app.get('/profile/civilizations', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('civilizationsExplored');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ civilizationsExplored: user.civilizationsExplored });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Update civilization exploration
app.post('/profile/civilizations/:civilizationId', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { civilizationId } = req.params;
    const { action, metadata } = req.body; // action: 'visit', 'favorite', 'update'

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find existing civilization entry
    let civilizationEntry = user.civilizationsExplored.find(
      civ => civ.civilizationId === civilizationId
    );

    if (action === 'visit') {
      if (civilizationEntry) {
        civilizationEntry.lastVisited = new Date();
        civilizationEntry.visitCount += 1;
        if (metadata?.timeSpent) civilizationEntry.timeSpent += metadata.timeSpent;
      } else {
        civilizationEntry = {
          civilizationId,
          name: metadata?.name || civilizationId,
          firstExplored: new Date(),
          lastVisited: new Date(),
          visitCount: 1,
          artifactsFound: 0,
          quizzesCompleted: 0,
          timeSpent: metadata?.timeSpent || 0,
          isFavorite: false
        };
        user.civilizationsExplored.push(civilizationEntry);
      }

      // Update global stats
      user.stats.civilizationsStudied = user.civilizationsExplored.length;
      user.stats.totalStudyTime += metadata?.timeSpent || 0;
    }

    else if (action === 'favorite' && civilizationEntry) {
      civilizationEntry.isFavorite = !civilizationEntry.isFavorite;
    }

    user.lastActive = new Date();
    await user.save();

    res.json({
      message: "Civilization exploration updated successfully",
      civilization: civilizationEntry
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get user's artifact collection
app.get('/profile/artifacts', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('artifactCollection');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ artifactCollection: user.artifactCollection });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add artifact to collection
app.post('/profile/artifacts', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { artifactId, name, confidence, userNotes, aiAnalysis } = req.body;

    if (!artifactId || !name) {
      return res.status(400).json({ message: "Artifact ID and name are required" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if artifact already exists in collection
    const existingArtifact = user.artifactCollection.find(
      artifact => artifact.artifactId === artifactId
    );

    if (existingArtifact) {
      return res.status(400).json({ message: "Artifact already in collection" });
    }

    // Add new artifact
    const newArtifact = {
      artifactId,
      name,
      analysisDate: new Date(),
      confidence,
      userNotes,
      aiAnalysis
    };

    user.artifactCollection.push(newArtifact);
    user.stats.artifactsAnalyzed += 1;
    user.stats.aiIdentifications += 1;

    // Add activity
    const activity = {
      type: 'artifact',
      title: `Analyzed ${name}`,
      description: `Successfully analyzed ${name} using AI technology`,
      timestamp: new Date(),
      metadata: { artifactId, confidence }
    };
    user.activities.unshift(activity);

    user.lastActive = new Date();
    await user.save();

    res.json({
      message: "Artifact added to collection successfully",
      artifact: newArtifact
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get user's quiz history
app.get('/profile/quiz-history', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('quizHistory');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ quizHistory: user.quizHistory });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add quiz result to history
app.post('/profile/quiz-history', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { quizId, title, score, timeSpent, answers } = req.body;

    if (!quizId || !title || score === undefined) {
      return res.status(400).json({ message: "Quiz ID, title, and score are required" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add quiz result to history
    const quizResult = {
      quizId,
      title,
      completedDate: new Date(),
      score,
      timeSpent,
      answers: answers || []
    };

    user.quizHistory.unshift(quizResult);

    // Update statistics
    user.stats.quizzesCompleted += 1;
    const currentAvg = user.stats.averageQuizScore || 0;
    const currentCount = user.stats.quizzesCompleted - 1;
    user.stats.averageQuizScore = ((currentAvg * currentCount) + score) / user.stats.quizzesCompleted;

    // Add activity
    const activity = {
      type: 'quiz',
      title: `Completed ${title}`,
      description: `Achieved ${score}% score on ${title}`,
      timestamp: new Date(),
      metadata: { quizId, score, timeSpent }
    };
    user.activities.unshift(activity);

    user.lastActive = new Date();
    await user.save();

    res.json({
      message: "Quiz result added successfully",
      quizResult
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get user's exploration map data
app.get('/profile/exploration-map', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('explorationMap');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ explorationMap: user.explorationMap });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Update exploration map
app.post('/profile/exploration-map', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { regionId, name, coordinates, discoveries } = req.body;

    if (!regionId || !name) {
      return res.status(400).json({ message: "Region ID and name are required" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find existing region or create new one
    let region = user.explorationMap.regions.find(r => r.regionId === regionId);

    if (region) {
      region.lastVisited = new Date();
      region.visitCount += 1;
      if (discoveries) region.discoveries += discoveries;
    } else {
      region = {
        regionId,
        name,
        coordinates,
        firstVisited: new Date(),
        lastVisited: new Date(),
        visitCount: 1,
        discoveries: discoveries || 0
      };
      user.explorationMap.regions.push(region);
    }

    // Update global exploration stats
    user.explorationMap.countriesVisited = user.explorationMap.regions.length;
    user.stats.regionsExplored = user.explorationMap.regions.length;

    // Add activity
    const activity = {
      type: 'exploration',
      title: `Explored ${name}`,
      description: `Discovered new archaeological sites in ${name}`,
      timestamp: new Date(),
      metadata: { regionId, discoveries, coordinates }
    };
    user.activities.unshift(activity);

    user.lastActive = new Date();
    await user.save();

    res.json({
      message: "Exploration map updated successfully",
      region
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ===== CIVILIZATION MANAGEMENT ENDPOINTS =====

// Get all civilizations
app.get('/civilizations', async (req, res) => {
  try {
    const civilizations = await Civilization.find({ isActive: true });
    res.json({ civilizations });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get civilization by ID
app.get('/civilizations/:civilizationId', async (req, res) => {
  try {
    const { civilizationId } = req.params;
    const civilization = await Civilization.findOne({ civilizationId, isActive: true });

    if (!civilization) {
      return res.status(404).json({ message: "Civilization not found" });
    }

    res.json({ civilization });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add new civilization (admin/curator only)
app.post('/civilizations', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || !['curator', 'archaeologist'].includes(user.role)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }

    const { civilizationId, name, region, timePeriod, description, coordinates } = req.body;

    if (!civilizationId || !name || !region || !timePeriod || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const civilization = new Civilization({
      civilizationId,
      name,
      region,
      timePeriod,
      description,
      coordinates
    });

    await civilization.save();
    res.status(201).json({ message: "Civilization added successfully", civilization });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ===== ARTIFACT MANAGEMENT ENDPOINTS =====

// Get all artifacts
app.get('/artifacts', async (req, res) => {
  try {
    const artifacts = await Artifact.find({ isVerified: true });
    res.json({ artifacts });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get artifact by ID
app.get('/artifacts/:artifactId', async (req, res) => {
  try {
    const { artifactId } = req.params;
    const artifact = await Artifact.findOne({ artifactId, isVerified: true });

    if (!artifact) {
      return res.status(404).json({ message: "Artifact not found" });
    }

    res.json({ artifact });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add new artifact (curator only)
app.post('/artifacts', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (user.role !== 'curator') {
      return res.status(403).json({ message: "Curator access required" });
    }

    const { artifactId, name, civilization, timePeriod, materials, regionOfOrigin, description, funFact, imageUrl } = req.body;

    if (!artifactId || !name || !civilization || !timePeriod || !regionOfOrigin || !description) {
      return res.status(400).json({ message: "Required fields: artifactId, name, civilization, timePeriod, regionOfOrigin, description" });
    }

    const artifact = new Artifact({
      artifactId,
      name,
      civilization,
      timePeriod,
      materials,
      regionOfOrigin,
      description,
      funFact,
      imageUrl,
      isVerified: true
    });

    await artifact.save();
    res.status(201).json({ message: "Artifact added successfully", artifact });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ===== QUIZ MANAGEMENT ENDPOINTS =====

// Get all quizzes
app.get('/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find({ isActive: true });
    res.json({ quizzes });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get quiz by ID
app.get('/quizzes/:quizId', async (req, res) => {
  try {
    const { quizId } = req.params;
    const quiz = await Quiz.findOne({ quizId, isActive: true });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.json({ quiz });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Submit quiz answers and get results
app.post('/quizzes/:quizId/submit', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { quizId } = req.params;
    const { answers, timeSpent } = req.body; // answers should be array of {questionIndex, selectedAnswer}

    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: "Answers array is required" });
    }

    const quiz = await Quiz.findOne({ quizId, isActive: true });
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // Calculate score
    let correctAnswers = 0;
    const detailedAnswers = answers.map(answer => {
      const question = quiz.questions[answer.questionIndex];
      const isCorrect = question && question.correctAnswer === answer.selectedAnswer;

      if (isCorrect) correctAnswers++;

      return {
        questionIndex: answer.questionIndex,
        userAnswer: answer.selectedAnswer,
        correctAnswer: question ? question.correctAnswer : null,
        isCorrect
      };
    });

    const score = Math.round((correctAnswers / quiz.questions.length) * 100);

    // Save quiz result to user history
    const user = await User.findById(decoded.id);
    if (user) {
      const quizResult = {
        quizId,
        title: quiz.title,
        completedDate: new Date(),
        score,
        timeSpent,
        answers: detailedAnswers
      };

      user.quizHistory.unshift(quizResult);
      user.stats.quizzesCompleted += 1;

      // Update average score
      const currentAvg = user.stats.averageQuizScore || 0;
      const currentCount = user.stats.quizzesCompleted - 1;
      user.stats.averageQuizScore = ((currentAvg * currentCount) + score) / user.stats.quizzesCompleted;

      // Add activity
      const activity = {
        type: 'quiz',
        title: `Completed ${quiz.title}`,
        description: `Achieved ${score}% score on ${quiz.title}`,
        timestamp: new Date(),
        metadata: { quizId, score, timeSpent }
      };
      user.activities.unshift(activity);

      user.lastActive = new Date();
      await user.save();
    }

    res.json({
      message: "Quiz submitted successfully",
      result: {
        quizId,
        title: quiz.title,
        score,
        correctAnswers,
        totalQuestions: quiz.questions.length,
        timeSpent,
        answers: detailedAnswers
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ===== ANALYTICS AND PROGRESS ENDPOINTS =====

// Get user analytics dashboard
app.get('/profile/analytics', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('stats activities badges learningProgress');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Calculate additional analytics
    const totalActivities = user.activities.length;
    const recentActivities = user.activities.filter(activity => {
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      return activity.timestamp > weekAgo;
    }).length;

    const badgeProgress = user.badges.map(badge => ({
      name: badge.name,
      progress: badge.progress,
      maxProgress: badge.maxProgress,
      percentage: Math.round((badge.progress / badge.maxProgress) * 100)
    }));

    res.json({
      analytics: {
        overview: {
          totalActivities,
          recentActivities,
          currentStreak: user.stats.streakDays,
          longestStreak: user.stats.longestStreak,
          joinDate: user.joinDate,
          lastActive: user.lastActive
        },
        stats: user.stats,
        learningProgress: user.learningProgress,
        badgeProgress,
        activityBreakdown: {
          artifacts: user.activities.filter(a => a.type === 'artifact').length,
          quizzes: user.activities.filter(a => a.type === 'quiz').length,
          videos: user.activities.filter(a => a.type === 'video').length,
          explorations: user.activities.filter(a => a.type === 'exploration').length
        }
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Update badge progress
app.put('/profile/badges/:badgeId/progress', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { badgeId } = req.params;
    const { progress } = req.body;

    if (progress === undefined) {
      return res.status(400).json({ message: "Progress value is required" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find badge
    const badge = user.badges.find(b => b.badgeId === badgeId);
    if (!badge) {
      return res.status(404).json({ message: "Badge not found" });
    }

    // Update progress
    badge.progress = Math.min(progress, badge.maxProgress);

    // Check if badge should be awarded
    if (badge.progress >= badge.maxProgress && !badge.earnedDate) {
      badge.earnedDate = new Date();

      // Add activity for badge earning
      const activity = {
        type: 'badge',
        title: `Earned ${badge.name} Badge`,
        description: `Unlocked the ${badge.name} achievement!`,
        timestamp: new Date(),
        metadata: { badgeId: badge.badgeId }
      };
      user.activities.unshift(activity);
    }

    user.lastActive = new Date();
    await user.save();

    res.json({
      message: "Badge progress updated successfully",
      badge: {
        badgeId: badge.badgeId,
        name: badge.name,
        progress: badge.progress,
        maxProgress: badge.maxProgress,
        isEarned: !!badge.earnedDate,
        earnedDate: badge.earnedDate
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get subscription information route
app.get('/subscription-info', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get subscription details from Stripe if active
    let subscriptionDetails = null;
    if (user.subscription?.stripeSubscriptionId && user.subscription.status === 'active') {
      try {
        const stripeSubscription = await stripe.subscriptions.retrieve(user.subscription.stripeSubscriptionId);
        subscriptionDetails = {
          id: stripeSubscription.id,
          status: stripeSubscription.status,
          currentPeriodStart: new Date(stripeSubscription.current_period_start * 1000),
          currentPeriodEnd: new Date(stripeSubscription.current_period_end * 1000),
          cancelAtPeriodEnd: stripeSubscription.cancel_at_period_end
        };
      } catch (stripeError) {
        console.error('Error fetching Stripe subscription:', stripeError);
      }
    }

    res.json({ 
      user: {
        ...user.toObject(),
        subscription: {
          ...user.subscription,
          details: subscriptionDetails
        }
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Stripe webhook endpoint to handle subscription events
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  console.log('🔔 WEBHOOK RECEIVED!');
  console.log('Headers:', req.headers);
  console.log('Body length:', req.body?.length);
  
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  console.log('Signature present:', !!sig);
  console.log('Endpoint secret present:', !!endpointSecret);

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    console.log('✅ Webhook signature verified successfully');
    console.log('Event type:', event.type);
    console.log('Event data:', JSON.stringify(event.data, null, 2));
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        console.log('🔄 Processing checkout.session.completed event');
        const session = event.data.object;
        await handleSubscriptionActivated(session);
        break;
      case 'customer.subscription.updated':
        console.log('🔄 Processing customer.subscription.updated event');
        const subscription = event.data.object;
        await handleSubscriptionUpdated(subscription);
        break;
      case 'customer.subscription.deleted':
        console.log('🔄 Processing customer.subscription.deleted event');
        const deletedSubscription = event.data.object;
        await handleSubscriptionCancelled(deletedSubscription);
        break;
      default:
        console.log(`⚠️ Unhandled event type: ${event.type}`);
    }
  } catch (error) {
    console.error('❌ Error processing webhook event:', error);
  }

  console.log('✅ Webhook processed successfully');
  res.json({ received: true });
});

// Handle subscription activation
async function handleSubscriptionActivated(session) {
  try {
    console.log('🎯 handleSubscriptionActivated called with session:', JSON.stringify(session, null, 2));
    
    const { userId, planTitle } = session.metadata;
    console.log('📋 Extracted metadata - userId:', userId, 'planTitle:', planTitle);
    
    if (!userId || !planTitle) {
      console.error('❌ Missing metadata in session:', session.metadata);
      return;
    }

    const user = await User.findById(userId);
    if (!user) {
      console.error('❌ User not found:', userId);
      return;
    }
    
    console.log('👤 Found user:', user.email, 'Current role:', user.role);

    // Initialize subscription object if it doesn't exist
    if (!user.subscription) {
      console.log('🔧 Initializing subscription object for user');
      user.subscription = {
        status: 'inactive',
        plan: null,
        stripeCustomerId: null,
        stripeSubscriptionId: null,
        currentPeriodEnd: null
      };
    }

    // Update user role based on plan
    let newRole = 'explorer';
    if (planTitle === 'Archaeologist') {
      newRole = 'archaeologist';
    } else if (planTitle === 'Curator') {
      newRole = 'curator';
    }
    
    console.log('🔄 Updating role from', user.role, 'to', newRole);

    // Update user subscription details
    user.role = newRole;
    user.subscription.status = 'active';
    user.subscription.plan = planTitle;
    user.subscription.stripeSubscriptionId = session.subscription;
    
    console.log('💳 Setting subscription ID:', session.subscription);
    
    // Get subscription details to set period end
    if (session.subscription) {
      console.log('📅 Retrieving subscription details from Stripe...');
      const subscription = await stripe.subscriptions.retrieve(session.subscription);
      user.subscription.currentPeriodEnd = new Date(subscription.current_period_end * 1000);
      console.log('📅 Period end set to:', user.subscription.currentPeriodEnd);
    }

    console.log('💾 Saving user to database...');
    await user.save();
    console.log(`✅ User ${user.email} role updated to ${newRole} via subscription`);
  } catch (error) {
    console.error('❌ Error handling subscription activation:', error);
  }
}

// Handle subscription updates
async function handleSubscriptionUpdated(subscription) {
  try {
    const user = await User.findOne({ 'subscription.stripeSubscriptionId': subscription.id });
    if (!user) return;

    if (subscription.status === 'active') {
      user.subscription.status = 'active';
      user.subscription.currentPeriodEnd = new Date(subscription.current_period_end * 1000);
    } else if (subscription.status === 'past_due' || subscription.status === 'unpaid') {
      user.subscription.status = 'inactive';
    }

    await user.save();
  } catch (error) {
    console.error('Error handling subscription update:', error);
  }
}

// Handle subscription cancellation
async function handleSubscriptionCancelled(subscription) {
  try {
    const user = await User.findOne({ 'subscription.stripeSubscriptionId': subscription.id });
    if (!user) return;

    user.subscription.status = 'canceled';
    user.role = 'explorer'; // Revert to basic role
    await user.save();
    
    console.log(`User ${user.email} subscription cancelled, role reverted to explorer`);
  } catch (error) {
    console.error('Error handling subscription cancellation:', error);
  }
}

// Cancel subscription route
app.post('/cancel-subscription', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.subscription?.stripeSubscriptionId) {
      return res.status(400).json({ message: "No active subscription found" });
    }

    // Cancel the subscription at period end
    const subscription = await stripe.subscriptions.update(
      user.subscription.stripeSubscriptionId,
      { cancel_at_period_end: true }
    );

    res.json({ 
      message: "Subscription will be cancelled at the end of the current period",
      cancelAt: new Date(subscription.current_period_end * 1000)
    });
  } catch (error) {
    console.error('Error cancelling subscription:', error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Reactivate subscription route
app.post('/reactivate-subscription', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.subscription?.stripeSubscriptionId) {
      return res.status(400).json({ message: "No subscription found" });
    }

    // Reactivate the subscription by removing the cancel_at_period_end flag
    const subscription = await stripe.subscriptions.update(
      user.subscription.stripeSubscriptionId,
      { cancel_at_period_end: false }
    );

    // Update user subscription status
    user.subscription.status = 'active';
    await user.save();

    res.json({ 
      message: "Subscription reactivated successfully",
      status: 'active'
    });
  } catch (error) {
    console.error('Error reactivating subscription:', error);
    res.status(500).json({ message: "Server Error" });
  }
});

// // Update user role route (for testing purposes - can be removed later)
// app.put('/update-role', async (req, res) => {
//   try {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const { role } = req.body;
    
//     if (!['explorer', 'archaeologist', 'curator'].includes(role)) {
//       return res.status(400).json({ message: "Invalid role" });
//     }

//     const user = await User.findByIdAndUpdate(
//       decoded.id, 
//       { role }, 
//       { new: true }
//     ).select('-password');

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json({ message: "Role updated successfully", user });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });




// Test endpoint to simulate webhook (for development only)
app.post('/test-webhook', async (req, res) => {
  try {
    const { email, planTitle } = req.body;
    console.log('🧪 Test webhook called with:', { email, planTitle });
    
    if (!email || !planTitle) {
      return res.status(400).json({ error: "Missing email or planTitle" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    console.log('👤 Found user:', user.email, 'Current role:', user.role);
    console.log('📋 Current subscription:', user.subscription);

    // Initialize subscription object if it doesn't exist
    if (!user.subscription) {
      console.log('🔧 Initializing subscription object');
      user.subscription = {
        status: 'inactive',
        plan: null,
        stripeCustomerId: null,
        stripeSubscriptionId: null,
        currentPeriodEnd: null
      };
    }

    // Update user role based on plan
    let newRole = 'explorer';
    if (planTitle === 'Archaeologist') {
      newRole = 'archaeologist';
    } else if (planTitle === 'Curator') {
      newRole = 'curator';
    }
    
    console.log('🔄 Updating role from', user.role, 'to', newRole);

    // Update user subscription details
    user.role = newRole;
    user.subscription.status = 'active';
    user.subscription.plan = planTitle;
    user.subscription.stripeSubscriptionId = 'sub_test_123'; // Mock subscription ID
    
    console.log('💾 Subscription object after update:', user.subscription);
    console.log('💾 About to save user...');
    
    // Save the user
    const savedUser = await user.save();
    console.log('✅ User saved successfully');
    console.log('💾 Saved user subscription:', savedUser.subscription);
    
    console.log(`User ${user.email} role updated to ${newRole} via test webhook`);
    
    res.json({ 
      message: "Test webhook processed successfully",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        subscription: user.subscription
      }
    });
  } catch (error) {
    console.error("❌ Test webhook error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Debug endpoint to check user status by email
app.get('/debug-user-email/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email: email });
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    res.json({ 
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        subscription: user.subscription
      }
    });
  } catch (error) {
    console.error("Debug user error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Debug endpoint to check user status by ID
app.get('/debug-user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    res.json({ 
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        subscription: user.subscription
      }
    });
  } catch (error) {
    console.error("Debug user error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Use environment variables for the Generative API key and model name.
// Set GENERATIVE_API_KEY and GENERATIVE_MODEL in your .env (recommended).
const GENERATIVE_API_KEY = process.env.GENERATIVE_API_KEY || process.env.GEMINI_API_KEY || 'AIzaSyBJb_8lIv3L2BAmXWX9GuSQtBp7DAfcbDQ';
const GENERATIVE_MODEL = process.env.GENERATIVE_MODEL;

const API_ENDPOINT = (modelName = GENERATIVE_MODEL) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GENERATIVE_API_KEY}`;

// Helper to list available models from the Generative API
const listAvailableModels = async () => {
  try {
    const listUrl = `https://generativelanguage.googleapis.com/v1/models?key=${GENERATIVE_API_KEY}`;
    const resp = await axios.get(listUrl);
    return resp.data;
  } catch (err) {
    console.error('Failed to list models:', err.response ? err.response.data : err.message);
    return null;
  }
};

// Warn at startup if API key is missing
if (!GENERATIVE_API_KEY) {
  console.warn('⚠️  GENERATIVE_API_KEY is not set. Calls to the Generative API will fail with PERMISSION_DENIED.\nPlease set GENERATIVE_API_KEY in your .env or environment and restart the server.');
}

// Route to list available models (helps debugging API key / permissions issues)
app.get('/list-models', async (req, res) => {
  if (!GENERATIVE_API_KEY) {
    return res.status(400).json({ error: 'GENERATIVE_API_KEY not set. Please add your API key to the backend environment.' });
  }

  const models = await listAvailableModels();
  if (!models) {
    return res.status(500).json({ error: 'Failed to retrieve models. Check GENERATIVE_API_KEY permissions and that the Generative API is enabled in the Google Cloud project.' });
  }

  return res.json(models);
});

// Configure Multer to handle file uploads in memory
const upload = multer({ storage: multer.memoryStorage() });

app.post('/recognize-artifact', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No image file was provided.' });
    }

    console.log('Received image for artifact recognition...');

    try {
        // Convert the image buffer to a Base64 string
        const imageBase64 = req.file.buffer.toString('base64');
        const mimeType = req.file.mimetype;

        const prompt = `
            You are a world-class archaeologist and historian. Your task is to analyze the provided artifact image and provide a detailed, engaging description for a museum visitor.

            TASK: Analyze the image and return the following information. Be as specific and accurate as your knowledge allows. If a field cannot be determined, write "Unknown".

            - artifact_name: The specific, common name of the artifact.
            - culture_or_civilization: The civilization, culture, or empire.
            - time_period: The date or century of creation.
            - materials: The primary material(s).
            - region_of_origin: The geographical area where it was made or found.
            - description: A detailed paragraph describing the artifact, its use, its iconography, and historical significance.
            - fun_fact: A single, interesting and engaging fact about the artifact or its context.

            Return your response as a single, clean JSON object and nothing else.
        `;

        const payload = {
            "contents": [
                {
                    "parts": [
                        { "text": prompt },
                        { "inline_data": { "mime_type": mimeType, "data": imageBase64 } }
                    ]
                }
            ],
            "safetySettings": [
                {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
                {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE"},
                {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE"},
                {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE"}
            ]
        };

    // Call the configured model endpoint
    const apiResponse = await axios.post(API_ENDPOINT(), payload, {
      headers: { 'Content-Type': 'application/json' }
    });

        const rawText = apiResponse.data.candidates[0].content.parts[0].text;
        const jsonMatch = rawText.match(/\{[\s\S]*\}/);
        
        if (!jsonMatch) {
            throw new Error("AI did not return a valid JSON object.");
        }
        
        const jsonData = JSON.parse(jsonMatch[0]);
        console.log('Successfully received and parsed AI response.');
        res.status(200).json(jsonData);

  } catch (error) {
    // If model not found (404 from the API), try to return available models to help debugging
    const apiErr = error.response?.data;
    console.error("Error processing artifact recognition:", apiErr || error.message);

    if (apiErr?.error?.code === 404 || apiErr?.error?.status === 'NOT_FOUND') {
      const models = await listAvailableModels();
      const modelList = models?.models?.map(m => m.name).slice(0,50) || [];
      return res.status(404).json({
        error: {
          code: 404,
          message: apiErr.error.message || 'Model not found',
          availableModels: modelList
        }
      });
    }

    res.status(500).json({ error: 'Failed to get a response from the AI model.' });
  }
});

// ===== DATA INITIALIZATION ENDPOINTS =====

// Initialize sample civilizations
app.post('/init/civilizations', async (req, res) => {
  try {
    const sampleCivilizations = [
      {
        civilizationId: 'ancient_egypt',
        name: 'Ancient Egypt',
        region: 'North Africa',
        timePeriod: '3100 BCE - 30 BCE',
        description: 'One of the most influential civilizations in human history, known for its monumental architecture, complex religious beliefs, and advanced knowledge in medicine, mathematics, and engineering.',
        coordinates: { lat: 26.0975, lng: 30.9767 }
      },
      {
        civilizationId: 'ancient_greece',
        name: 'Ancient Greece',
        region: 'Mediterranean',
        timePeriod: '800 BCE - 146 BCE',
        description: 'The cradle of Western civilization, famous for philosophy, democracy, theater, and the Olympic Games.',
        coordinates: { lat: 37.9838, lng: 23.7275 }
      },
      {
        civilizationId: 'roman_empire',
        name: 'Roman Empire',
        region: 'Mediterranean Basin',
        timePeriod: '27 BCE - 476 CE',
        description: 'One of the largest empires in world history, known for its military prowess, engineering marvels, and lasting contributions to law, government, and language.',
        coordinates: { lat: 41.9028, lng: 12.4964 }
      },
      {
        civilizationId: 'maya',
        name: 'Maya Civilization',
        region: 'Mesoamerica',
        timePeriod: '2000 BCE - 1500 CE',
        description: 'A sophisticated Mesoamerican civilization known for its advanced writing system, mathematics, astronomy, and impressive architectural achievements.',
        coordinates: { lat: 17.7439, lng: -92.0428 }
      },
      {
        civilizationId: 'mesopotamia',
        name: 'Mesopotamia',
        region: 'Middle East',
        timePeriod: '3500 BCE - 539 BCE',
        description: 'Often called the "Cradle of Civilization," Mesopotamia was home to the Sumerians, Akkadians, Babylonians, and Assyrians.',
        coordinates: { lat: 33.3406, lng: 44.4009 }
      }
    ];

    // Insert sample civilizations
    for (const civData of sampleCivilizations) {
      const existing = await Civilization.findOne({ civilizationId: civData.civilizationId });
      if (!existing) {
        const civilization = new Civilization(civData);
        await civilization.save();
        console.log(`✅ Added civilization: ${civData.name}`);
      } else {
        console.log(`⚠️ Civilization already exists: ${civData.name}`);
      }
    }

    res.json({ message: "Sample civilizations initialized successfully" });
  } catch (error) {
    console.error('Error initializing civilizations:', error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Initialize sample artifacts
app.post('/init/artifacts', async (req, res) => {
  try {
    const sampleArtifacts = [
      {
        artifactId: 'tutankhamun_mask',
        name: 'Tutankhamun\'s Golden Mask',
        civilization: 'Ancient Egypt',
        timePeriod: '1323 BCE',
        materials: ['Gold', 'Lapis Lazuli', 'Carnelian', 'Turquoise'],
        regionOfOrigin: 'Valley of the Kings, Egypt',
        description: 'The iconic golden funerary mask of the young Pharaoh Tutankhamun, discovered in 1922 by Howard Carter. This masterpiece of ancient Egyptian artistry represents the god-like status of the pharaoh and showcases incredible craftsmanship in precious metals and stones.',
        funFact: 'The mask contains approximately 11 kg (24 lbs) of solid gold and was designed to protect the pharaoh\'s soul in the afterlife.',
        imageUrl: '/images/tutankhamun_mask.jpg'
      },
      {
        artifactId: 'greek_amphora',
        name: 'Greek Black-Figure Amphora',
        civilization: 'Ancient Greece',
        timePeriod: '550 BCE',
        materials: ['Terracotta', 'Clay'],
        regionOfOrigin: 'Attica, Greece',
        description: 'A beautifully preserved black-figure amphora depicting scenes from Greek mythology. These vessels were used for storing wine and olive oil, and served as both functional objects and artistic masterpieces.',
        funFact: 'The black-figure technique involved painting figures in black silhouette against the natural red clay background, allowing for intricate detail work.',
        imageUrl: '/images/greek_amphora.jpg'
      },
      {
        artifactId: 'roman_mosaic',
        name: 'Roman Floor Mosaic',
        civilization: 'Roman Empire',
        timePeriod: '2nd Century CE',
        materials: ['Stone', 'Glass', 'Marble'],
        regionOfOrigin: 'Pompeii, Italy',
        description: 'An intricate floor mosaic depicting mythological scenes and geometric patterns. Roman mosaics were created using thousands of tiny tesserae (small pieces of stone, glass, or ceramic) arranged to form detailed images.',
        funFact: 'This mosaic survived the catastrophic eruption of Mount Vesuvius in 79 CE, preserved under layers of volcanic ash for nearly 2,000 years.',
        imageUrl: '/images/roman_mosaic.jpg'
      }
    ];

    // Insert sample artifacts
    for (const artifactData of sampleArtifacts) {
      const existing = await Artifact.findOne({ artifactId: artifactData.artifactId });
      if (!existing) {
        const artifact = new Artifact({ ...artifactData, isVerified: true });
        await artifact.save();
        console.log(`✅ Added artifact: ${artifactData.name}`);
      } else {
        console.log(`⚠️ Artifact already exists: ${artifactData.name}`);
      }
    }

    res.json({ message: "Sample artifacts initialized successfully" });
  } catch (error) {
    console.error('Error initializing artifacts:', error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Initialize sample quizzes
app.post('/init/quizzes', async (req, res) => {
  try {
    const sampleQuizzes = [
      {
        quizId: 'ancient_egypt_basics',
        title: 'Ancient Egypt Basics',
        category: 'History',
        difficulty: 'easy',
        questions: [
          {
            question: 'What was the capital city of Ancient Egypt during the Old Kingdom?',
            options: ['Memphis', 'Thebes', 'Alexandria', 'Cairo'],
            correctAnswer: 'Memphis',
            explanation: 'Memphis served as the capital of Ancient Egypt during the Old Kingdom period and was a major political and religious center.'
          },
          {
            question: 'Which pharaoh is famous for building the Great Pyramid of Giza?',
            options: ['Tutankhamun', 'Ramses II', 'Khufu', 'Akhenaten'],
            correctAnswer: 'Khufu',
            explanation: 'Khufu (Cheops) was the pharaoh who commissioned the Great Pyramid of Giza, the largest of the three pyramids in the Giza complex.'
          },
          {
            question: 'What writing system did the Ancient Egyptians use?',
            options: ['Cuneiform', 'Hieroglyphics', 'Latin Alphabet', 'Phoenician Script'],
            correctAnswer: 'Hieroglyphics',
            explanation: 'Hieroglyphics was the formal writing system used in Ancient Egypt for religious texts, monumental inscriptions, and official documents.'
          }
        ]
      },
      {
        quizId: 'greek_mythology',
        title: 'Greek Mythology Heroes',
        category: 'Mythology',
        difficulty: 'medium',
        questions: [
          {
            question: 'Who was the greatest Greek warrior in the Trojan War?',
            options: ['Odysseus', 'Agamemnon', 'Achilles', 'Hector'],
            correctAnswer: 'Achilles',
            explanation: 'Achilles was the greatest Greek warrior, known for his strength and bravery, though he was ultimately killed by an arrow to his heel.'
          },
          {
            question: 'Which hero completed 12 labors as penance to the gods?',
            options: ['Theseus', 'Jason', 'Perseus', 'Heracles'],
            correctAnswer: 'Heracles',
            explanation: 'Heracles (Hercules) was assigned 12 labors by King Eurystheus as punishment for killing his wife and children in a fit of madness sent by Hera.'
          }
        ]
      }
    ];

    // Insert sample quizzes
    for (const quizData of sampleQuizzes) {
      const existing = await Quiz.findOne({ quizId: quizData.quizId });
      if (!existing) {
        const quiz = new Quiz(quizData);
        await quiz.save();
        console.log(`✅ Added quiz: ${quizData.title}`);
      } else {
        console.log(`⚠️ Quiz already exists: ${quizData.title}`);
      }
    }

    res.json({ message: "Sample quizzes initialized successfully" });
  } catch (error) {
    console.error('Error initializing quizzes:', error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Initialize sample badges
app.post('/init/badges', async (req, res) => {
  try {
    const sampleBadges = [
      {
        badgeId: 'first_discovery',
        name: 'First Discovery',
        description: 'Completed your first artifact identification',
        icon: '🥇',
        category: 'exploration',
        rarity: 'common'
      },
      {
        badgeId: 'knowledge_seeker',
        name: 'Knowledge Seeker',
        description: 'Completed 15+ historical quizzes',
        icon: '🧠',
        category: 'learning',
        rarity: 'common'
      },
      {
        badgeId: 'world_explorer',
        name: 'World Explorer',
        description: 'Explored 10+ ancient civilizations',
        icon: '🌍',
        category: 'exploration',
        rarity: 'rare'
      },
      {
        badgeId: 'myth_collector',
        name: 'Myth Collector',
        description: 'Studied 20+ legendary tales',
        icon: '📚',
        category: 'learning',
        rarity: 'common'
      },
      {
        badgeId: 'documentary_master',
        name: 'Documentary Master',
        description: 'Watched 50+ hours of educational content',
        icon: '🎬',
        category: 'learning',
        rarity: 'rare'
      },
      {
        badgeId: 'civilization_expert',
        name: 'Civilization Expert',
        description: 'Master 100+ artifacts to unlock',
        icon: '👑',
        category: 'analysis',
        rarity: 'legendary'
      }
    ];

    // Add badges to all users (as badge templates)
    const users = await User.find({});
    for (const user of users) {
      for (const badgeTemplate of sampleBadges) {
        const existingBadge = user.badges.find(badge => badge.badgeId === badgeTemplate.badgeId);
        if (!existingBadge) {
          // Add badge template with 0 progress
          const newBadge = {
            ...badgeTemplate,
            progress: 0,
            maxProgress: badgeTemplate.badgeId === 'civilization_expert' ? 100 : 15,
            earnedDate: null,
            isVisible: true
          };
          user.badges.push(newBadge);
        }
      }
      await user.save();
      console.log(`✅ Added badge templates for user: ${user.username}`);
    }

    res.json({ message: "Sample badges initialized successfully" });
  } catch (error) {
    console.error('Error initializing badges:', error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Complete data initialization (run all initializations)
app.post('/init/all', async (req, res) => {
  try {
    console.log('🚀 Starting complete data initialization...');

    // Initialize civilizations
    await fetch('http://localhost:4242/init/civilizations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    // Initialize artifacts
    await fetch('http://localhost:4242/init/artifacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    // Initialize quizzes
    await fetch('http://localhost:4242/init/quizzes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    // Initialize badges for all users
    await fetch('http://localhost:4242/init/badges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    console.log('✅ Complete data initialization finished!');
    res.json({ message: "Complete data initialization finished successfully" });
  } catch (error) {
    console.error('Error during complete initialization:', error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get initialization status
app.get('/init/status', async (req, res) => {
  try {
    const civilizationsCount = await Civilization.countDocuments();
    const artifactsCount = await Artifact.countDocuments();
    const quizzesCount = await Quiz.countDocuments();
    const usersCount = await User.countDocuments();

    res.json({
      status: {
        civilizations: civilizationsCount,
        artifacts: artifactsCount,
        quizzes: quizzesCount,
        users: usersCount,
        isInitialized: civilizationsCount > 0 && artifactsCount > 0 && quizzesCount > 0
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ===== ADDITIONAL PROFILE FEATURES =====

// Get user's detailed civilization exploration
app.get('/profile/civilizations/:civilizationId/details', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { civilizationId } = req.params;

    const user = await User.findById(decoded.id).select('civilizationsExplored artifactCollection quizHistory');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get civilization exploration data
    const civilizationData = user.civilizationsExplored.find(
      civ => civ.civilizationId === civilizationId
    );

    // Get artifacts from this civilization
    const civilizationArtifacts = user.artifactCollection.filter(
      artifact => artifact.civilizationId === civilizationId
    );

    // Get quizzes from this civilization
    const civilizationQuizzes = user.quizHistory.filter(
      quiz => quiz.civilizationId === civilizationId
    );

    res.json({
      civilizationId,
      exploration: civilizationData || { civilizationId, visitCount: 0 },
      artifacts: civilizationArtifacts,
      quizzes: civilizationQuizzes,
      summary: {
        artifactsAnalyzed: civilizationArtifacts.length,
        quizzesCompleted: civilizationQuizzes.length,
        averageScore: civilizationQuizzes.length > 0
          ? Math.round(civilizationQuizzes.reduce((sum, quiz) => sum + quiz.score, 0) / civilizationQuizzes.length)
          : 0
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Award experience points and check for level up
app.post('/profile/experience', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { points, reason } = req.body;

    if (!points || points <= 0) {
      return res.status(400).json({ message: "Valid experience points are required" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const oldLevel = user.learningProgress.currentLevel;
    user.learningProgress.experiencePoints += points;

    // Calculate new level (level = floor(sqrt(XP/10)) + 1)
    const newLevel = Math.floor(Math.sqrt(user.learningProgress.experiencePoints / 10)) + 1;

    if (newLevel > oldLevel) {
      user.learningProgress.currentLevel = newLevel;
      user.learningProgress.nextLevelXP = newLevel * newLevel * 10;

      // Add level up activity
      const activity = {
        type: 'level',
        title: `Reached Level ${newLevel}!`,
        description: `Congratulations! You've advanced to Level ${newLevel} through your dedication to archaeological learning.`,
        timestamp: new Date(),
        metadata: { newLevel, experiencePoints: user.learningProgress.experiencePoints }
      };
      user.activities.unshift(activity);
    }

    // Add experience gain activity
    const expActivity = {
      type: 'experience',
      title: `Gained ${points} XP`,
      description: reason || `Earned ${points} experience points`,
      timestamp: new Date(),
      metadata: { points, reason, totalXP: user.learningProgress.experiencePoints }
    };
    user.activities.unshift(expActivity);

    user.lastActive = new Date();
    await user.save();

    res.json({
      message: "Experience points awarded successfully",
      experienceGained: points,
      newTotal: user.learningProgress.experiencePoints,
      levelUp: newLevel > oldLevel,
      currentLevel: user.learningProgress.currentLevel,
      nextLevelXP: user.learningProgress.nextLevelXP
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get user's learning analytics
app.get('/profile/learning-analytics', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('learningProgress activities stats');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Calculate learning analytics
    const recentActivities = user.activities.filter(activity => {
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      return activity.timestamp > weekAgo;
    });

    const learningStreak = calculateLearningStreak(user.activities);
    const skillDistribution = calculateSkillDistribution(user.activities);

    res.json({
      learningAnalytics: {
        currentLevel: user.learningProgress.currentLevel,
        experiencePoints: user.learningProgress.experiencePoints,
        nextLevelXP: user.learningProgress.nextLevelXP,
        skillTree: user.learningProgress.skillTree,
        recentActivity: recentActivities.length,
        learningStreak,
        skillDistribution,
        timeSpentThisWeek: recentActivities.reduce((total, activity) =>
          total + (activity.metadata?.timeSpent || 0), 0
        ),
        averageSessionTime: recentActivities.length > 0
          ? Math.round(recentActivities.reduce((total, activity) =>
              total + (activity.metadata?.timeSpent || 0), 0) / recentActivities.length)
          : 0
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Helper function to calculate learning streak
function calculateLearningStreak(activities) {
  if (!activities || activities.length === 0) return 0;

  // Sort activities by date (newest first)
  const sortedActivities = activities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  let streak = 0;
  let currentDate = new Date();

  for (const activity of sortedActivities) {
    const activityDate = new Date(activity.timestamp);
    const daysDiff = Math.floor((currentDate - activityDate) / (1000 * 60 * 60 * 24));

    if (daysDiff === streak) {
      streak++;
      currentDate = activityDate;
    } else if (daysDiff > streak) {
      break;
    }
  }

  return streak;
}

// Helper function to calculate skill distribution
function calculateSkillDistribution(activities) {
  const skills = {
    analysis: 0,
    identification: 0,
    research: 0,
    exploration: 0
  };

  activities.forEach(activity => {
    switch (activity.type) {
      case 'artifact':
        skills.analysis += 1;
        skills.identification += 1;
        break;
      case 'quiz':
        skills.research += 1;
        break;
      case 'exploration':
      case 'civilization':
        skills.exploration += 1;
        break;
      case 'video':
        skills.research += 1;
        break;
    }
  });

  return skills;
}

// ===== COMPREHENSIVE ACTIVITY MANAGEMENT ENDPOINTS =====

// Create new activity (both in User collection and Activity collection)
app.post('/activities', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const {
      type,
      title,
      description,
      metadata,
      category,
      tags,
      isPublic,
      location,
      sessionId,
      platform
    } = req.body;

    if (!type || !title || !description) {
      return res.status(400).json({ message: "Type, title, and description are required" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate unique activity ID
    const activityId = `activity_${Date.now()}_${decoded.id}`;

    // Create activity in dedicated collection
    const activity = new Activity({
      activityId,
      userId: decoded.id,
      type,
      title,
      description,
      metadata: metadata || {},
      category: category || 'learning',
      tags: tags || [],
      isPublic: isPublic !== undefined ? isPublic : true,
      location: location || {},
      sessionId: sessionId || null,
      platform: platform || 'web',
      status: 'active'
    });

    await activity.save();

    // Also add to user's activity array (for backward compatibility)
    const userActivity = {
      type,
      title,
      description,
      timestamp: new Date(),
      metadata: metadata || {}
    };

    user.activities.unshift(userActivity);

    // Update user statistics based on activity type
    switch (type) {
      case 'artifact_analysis':
        user.stats.artifactsAnalyzed += 1;
        user.stats.aiIdentifications += 1;
        break;
      case 'quiz_completion':
        user.stats.quizzesCompleted += 1;
        if (metadata?.score) {
          const currentAvg = user.stats.averageQuizScore || 0;
          const currentCount = user.stats.quizzesCompleted - 1;
          user.stats.averageQuizScore = ((currentAvg * currentCount) + metadata.score) / user.stats.quizzesCompleted;
        }
        break;
      case 'video_watching':
        user.stats.documentariesWatched += 1;
        break;
      case 'civilization_exploration':
        user.stats.regionsExplored += 1;
        break;
    }

    user.lastActive = new Date();
    await user.save();

    res.json({
      message: "Activity created successfully",
      activity: {
        id: activity._id,
        activityId: activity.activityId,
        type: activity.type,
        title: activity.title,
        description: activity.description,
        timestamp: activity.timestamp,
        metadata: activity.metadata
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get activity feed (public activities from all users)
app.get('/activities/feed', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, category, civilizationId } = req.query;
    const skip = (page - 1) * limit;

    // Build filter object
    const filter = {
      isPublic: true,
      status: 'active'
    };

    if (type) filter.type = type;
    if (category) filter.category = category;
    if (civilizationId) filter['metadata.civilizationId'] = civilizationId;

    const activities = await Activity.find(filter)
      .populate('userId', 'username name avatar role')
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-__v');

    const total = await Activity.countDocuments(filter);

    res.json({
      activities,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalActivities: total,
        hasNext: page * limit < total,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get user's activities with advanced filtering
app.get('/profile/activities/detailed', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const {
      page = 1,
      limit = 20,
      type,
      category,
      startDate,
      endDate,
      tags
    } = req.query;

    const skip = (page - 1) * limit;

    // Build filter for user's activities
    const filter = { userId: decoded.id, status: 'active' };
    if (type) filter.type = type;
    if (category) filter.category = category;
    if (startDate || endDate) {
      filter.timestamp = {};
      if (startDate) filter.timestamp.$gte = new Date(startDate);
      if (endDate) filter.timestamp.$lte = new Date(endDate);
    }
    if (tags) filter.tags = { $in: tags.split(',') };

    const activities = await Activity.find(filter)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-__v');

    const total = await Activity.countDocuments(filter);

    res.json({
      activities,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalActivities: total,
        hasNext: page * limit < total,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get activity by ID
app.get('/activities/:activityId', async (req, res) => {
  try {
    const { activityId } = req.params;

    const activity = await Activity.findOne({ activityId })
      .populate('userId', 'username name avatar role')
      .select('-__v');

    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    // Check if user can view this activity (public or owner)
    const token = req.headers.authorization?.split(' ')[1];
    if (!activity.isPublic && (!token || activity.userId._id.toString() !== jwt.verify(token, process.env.JWT_SECRET).id)) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Increment view count
    activity.engagement.views += 1;
    await activity.save();

    res.json({ activity });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Update activity
app.put('/activities/:activityId', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { activityId } = req.params;
    const updates = req.body;

    const activity = await Activity.findOne({ activityId });
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    // Check if user owns this activity
    if (activity.userId.toString() !== decoded.id) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Update allowed fields
    const allowedUpdates = ['title', 'description', 'isPublic', 'visibility', 'tags'];
    allowedUpdates.forEach(field => {
      if (updates[field] !== undefined) {
        activity[field] = updates[field];
      }
    });

    await activity.save();
    res.json({ message: "Activity updated successfully", activity });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Delete activity
app.delete('/activities/:activityId', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { activityId } = req.params;

    const activity = await Activity.findOne({ activityId });
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    // Check if user owns this activity
    if (activity.userId.toString() !== decoded.id) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Soft delete by changing status
    activity.status = 'deleted';
    await activity.save();

    res.json({ message: "Activity deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Activity engagement endpoints
app.post('/activities/:activityId/engage', async (req, res) => {
  try {
    const { activityId } = req.params;
    const { action } = req.body; // like, unlike, share

    const token = req.headers.authorization?.split(' ')[1];
    if (!token && action !== 'view') {
      return res.status(401).json({ message: "Authentication required" });
    }

    const activity = await Activity.findOne({ activityId, status: 'active' });
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    let decoded = null;
    if (token) {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    }

    switch (action) {
      case 'like':
        if (!activity.engagement.likedBy?.includes(decoded.id)) {
          activity.engagement.likes += 1;
          activity.engagement.likedBy = activity.engagement.likedBy || [];
          activity.engagement.likedBy.push(decoded.id);
        }
        break;
      case 'unlike':
        if (activity.engagement.likedBy?.includes(decoded.id)) {
          activity.engagement.likes -= 1;
          activity.engagement.likedBy = activity.engagement.likedBy.filter(id => id !== decoded.id);
        }
        break;
      case 'share':
        activity.engagement.shares += 1;
        break;
      case 'view':
        activity.engagement.views += 1;
        break;
    }

    await activity.save();
    res.json({
      message: "Engagement updated successfully",
      engagement: activity.engagement
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get activity analytics
app.get('/activities/analytics', async (req, res) => {
  try {
    const { timeframe = '30d', type, category } = req.query;

    // Calculate date range
    const now = new Date();
    const daysBack = timeframe === '7d' ? 7 : timeframe === '30d' ? 30 : 90;
    const startDate = new Date(now.getTime() - (daysBack * 24 * 60 * 60 * 1000));

    // Build filter
    const filter = {
      timestamp: { $gte: startDate },
      status: 'active'
    };

    if (type) filter.type = type;
    if (category) filter.category = category;

    const activities = await Activity.find(filter);

    // Calculate analytics
    const analytics = {
      totalActivities: activities.length,
      timeframe,
      dateRange: { start: startDate, end: now },
      breakdown: {
        byType: {},
        byCategory: {},
        byDay: {},
        engagement: {
          totalViews: activities.reduce((sum, a) => sum + a.engagement.views, 0),
          totalLikes: activities.reduce((sum, a) => sum + a.engagement.likes, 0),
          totalShares: activities.reduce((sum, a) => sum + a.engagement.shares, 0),
          averageEngagement: activities.length > 0
            ? Math.round((activities.reduce((sum, a) => sum + a.engagement.likes + a.engagement.shares, 0) / activities.length) * 100) / 100
            : 0
        }
      }
    };

    // Group by type and category
    activities.forEach(activity => {
      // By type
      analytics.breakdown.byType[activity.type] = (analytics.breakdown.byType[activity.type] || 0) + 1;

      // By category
      analytics.breakdown.byCategory[activity.category] = (analytics.breakdown.byCategory[activity.category] || 0) + 1;

      // By day
      const day = activity.timestamp.toISOString().split('T')[0];
      analytics.breakdown.byDay[day] = (analytics.breakdown.byDay[day] || 0) + 1;
    });

    res.json({ analytics });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get user's activity statistics
app.get('/profile/activity-stats', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user's activities from both collections
    const userActivities = await Activity.find({
      userId: decoded.id,
      status: 'active'
    }).sort({ timestamp: -1 });

    const user = await User.findById(decoded.id).select('stats activities');

    // Calculate comprehensive activity statistics
    const stats = {
      totalActivities: userActivities.length,
      userCollectionActivities: user.activities.length,
      activityBreakdown: {
        artifact_analysis: userActivities.filter(a => a.type === 'artifact_analysis').length,
        quiz_completion: userActivities.filter(a => a.type === 'quiz_completion').length,
        video_watching: userActivities.filter(a => a.type === 'video_watching').length,
        civilization_exploration: userActivities.filter(a => a.type === 'civilization_exploration').length,
        badge_earned: userActivities.filter(a => a.type === 'badge_earned').length,
        level_up: userActivities.filter(a => a.type === 'level_up').length
      },
      engagementStats: {
        totalViews: userActivities.reduce((sum, a) => sum + a.engagement.views, 0),
        totalLikes: userActivities.reduce((sum, a) => sum + a.engagement.likes, 0),
        totalShares: userActivities.reduce((sum, a) => sum + a.engagement.shares, 0),
        averageEngagement: userActivities.length > 0
          ? Math.round((userActivities.reduce((sum, a) => sum + a.engagement.likes + a.engagement.shares, 0) / userActivities.length) * 100) / 100
          : 0
      },
      recentActivity: {
        last7Days: userActivities.filter(a => {
          const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          return a.timestamp > weekAgo;
        }).length,
        last30Days: userActivities.filter(a => {
          const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          return a.timestamp > monthAgo;
        }).length
      },
      userStats: user.stats
    };

    res.json({ activityStats: stats });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Search activities
app.get('/activities/search', async (req, res) => {
  try {
    const { q, type, category, page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;

    if (!q) {
      return res.status(400).json({ message: "Search query is required" });
    }

    // Build search filter
    const filter = {
      status: 'active',
      isPublic: true,
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { tags: { $in: [new RegExp(q, 'i')] } }
      ]
    };

    if (type) filter.type = type;
    if (category) filter.category = category;

    const activities = await Activity.find(filter)
      .populate('userId', 'username name avatar role')
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-__v');

    const total = await Activity.countDocuments(filter);

    res.json({
      activities,
      search: {
        query: q,
        totalResults: total
      },
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get trending activities
app.get('/activities/trending', async (req, res) => {
  try {
    const { timeframe = '7d', limit = 10 } = req.query;

    // Calculate date range
    const now = new Date();
    const daysBack = timeframe === '7d' ? 7 : timeframe === '30d' ? 30 : 90;
    const startDate = new Date(now.getTime() - (daysBack * 24 * 60 * 60 * 1000));

    // Get activities with high engagement
    const trendingActivities = await Activity.find({
      timestamp: { $gte: startDate },
      status: 'active',
      isPublic: true
    })
    .populate('userId', 'username name avatar role')
    .sort({
      // Sort by combination of likes, shares, and recency
      engagementScore: -1,
      timestamp: -1
    })
    .limit(parseInt(limit))
    .select('-__v');

    // Calculate engagement scores for activities without them
    const activitiesWithScores = trendingActivities.map(activity => {
      const engagementScore = (activity.engagement.likes * 2) + (activity.engagement.shares * 3) + (activity.engagement.views * 0.1);
      return {
        ...activity.toObject(),
        engagementScore
      };
    });

    res.json({
      trending: activitiesWithScores,
      timeframe,
      count: activitiesWithScores.length
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get civilization-specific activity feed
app.get('/civilizations/:civilizationId/activities', async (req, res) => {
  try {
    const { civilizationId } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;

    const activities = await Activity.find({
      'metadata.civilizationId': civilizationId,
      status: 'active',
      isPublic: true
    })
    .populate('userId', 'username name avatar role')
    .sort({ timestamp: -1 })
    .skip(skip)
    .limit(parseInt(limit))
    .select('-__v');

    const total = await Activity.countDocuments({
      'metadata.civilizationId': civilizationId,
      status: 'active',
      isPublic: true
    });

    res.json({
      activities,
      civilizationId,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalActivities: total,
        hasNext: page * limit < total,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Bulk activity operations
app.post('/activities/bulk', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { action, activityIds } = req.body;

    if (!action || !activityIds || !Array.isArray(activityIds)) {
      return res.status(400).json({ message: "Action and activity IDs array are required" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let result;
    switch (action) {
      case 'archive':
        result = await Activity.updateMany(
          { activityId: { $in: activityIds }, userId: decoded.id },
          { status: 'archived' }
        );
        break;
      case 'delete':
        result = await Activity.updateMany(
          { activityId: { $in: activityIds }, userId: decoded.id },
          { status: 'deleted' }
        );
        break;
      case 'make_private':
        result = await Activity.updateMany(
          { activityId: { $in: activityIds }, userId: decoded.id },
          { isPublic: false, visibility: 'private' }
        );
        break;
      case 'make_public':
        result = await Activity.updateMany(
          { activityId: { $in: activityIds }, userId: decoded.id },
          { isPublic: true, visibility: 'public' }
        );
        break;
      default:
        return res.status(400).json({ message: "Invalid action" });
    }

    res.json({
      message: `Bulk ${action} completed successfully`,
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Start Server
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
