# Role-Based Access Control System

This document explains how the role-based access control system works in ArchaeoLearn 2.0.

## User Roles

### 1. Explorer (Default Role)
- **Access Level**: Basic
- **Features Available**:
  - Basic learning features
  - Limited quiz access (first 3 categories only)
  - Limited era exploration (Prehistoric and Ancient eras only)
  - Myths and mysteries
  - Donation page
  - About page
- **Restricted Features**:
  - Gallery access
  - World tour (basic world tour)
  - Chatbot access
  - Video gallery
  - Advanced eras (Classical, Medieval, Renaissance, Modern)
  - Advanced quiz categories (World Heritage, Cultural Practices, Mythology, Discoveries, Art & Symbolism)

### 2. Archaeologist
- **Access Level**: Intermediate
- **Features Available**:
  - All Explorer features
  - Gallery access
  - World tour access
  - Full quiz access
  - AR experiences
- **Restricted Features**:
  - Video gallery (Curator only)

### 3. Curator
- **Access Level**: Full
- **Features Available**:
  - All features accessible
  - Video gallery access
  - Complete administrative access

## Route Protection

The system uses a `ProtectedRoute` component that wraps each route and checks:
1. If the user is authenticated
2. If the user has the required role for the specific route

## Implementation Details

### Backend Changes
- User schema updated to include `role` field
- Login endpoint returns user role information
- Added `/profile` endpoint to get user information
- Added `/update-role` endpoint for role management

### Frontend Changes
- `AuthContext` updated to handle user roles
- `ProtectedRoute` component for role-based access control
- Header shows current user role with role switching capability
- Signup form includes role selection

## Testing the System

1. **Create accounts with different roles**:
   - Use the signup form to create accounts with different roles
   - Default role is "explorer"

2. **Test role switching**:
   - Login with any account
   - Use the role dropdown in the header to switch roles
   - Test access to different routes

3. **Test route restrictions**:
   - Try accessing `/vidgallery` as an explorer (should be denied)
   - Try accessing `/worldExplore` as an explorer (should be denied)
   - Try accessing `/gallery` as an explorer (should be denied)
   - Try accessing `/classicalera`, `/medievalera`, `/renaissanceera`, `/modernera` as an explorer (should be denied)
   - Check that explorers only see 3 quiz categories while archaeologists and curators see all 8

## Route Access Matrix

| Route | Explorer | Archaeologist | Curator |
|-------|----------|---------------|---------|
| `/` (Home) | ✅ | ✅ | ✅ |
| `/gallery` | ❌ | ✅ | ✅ |
| `/vidgallery` | ❌ | ❌ | ✅ |
| `/worldExplore` | ❌ | ✅ | ✅ |
| `/quiz` | ✅ (Limited - 3 categories) | ✅ (All categories) | ✅ (All categories) |
| `/myths` | ✅ | ✅ | ✅ |
| `/about` | ✅ | ✅ | ✅ |
| `/donation` | ✅ | ✅ | ✅ |
| `/prehistoricera` | ✅ | ✅ | ✅ |
| `/ancientera` | ✅ | ✅ | ✅ |
| `/classicalera` | ❌ | ✅ | ✅ |
| `/medievalera` | ❌ | ✅ | ✅ |
| `/renaissanceera` | ❌ | ✅ | ✅ |
| `/modernera` | ❌ | ✅ | ✅ |

## Security Features

- JWT tokens include user role information
- Role verification happens on both frontend and backend
- Access denied pages show user's current role
- Automatic token validation and user profile fetching

## Future Enhancements

- Role-based content filtering
- Advanced permission management
- Audit logging for role changes
- Role-based UI customization

## Quiz Category Access

### Explorer Access (First 3 categories only)
1. **Ancient Civilizations** - Egyptian, Greek, Roman cultures
2. **Archaeological Methods** - Excavation techniques, dating methods
3. **Artifacts & Objects** - Archaeological discoveries and artifacts

### Archaeologist & Curator Access (All 8 categories)
1. **Ancient Civilizations** - Egyptian, Greek, Roman cultures
2. **Archaeological Methods** - Excavation techniques, dating methods
3. **Artifacts & Objects** - Archaeological discoveries and artifacts
4. **World Heritage Sites** - UNESCO World Heritage archaeological sites
5. **Cultural Practices & Traditions** - Ancient rituals and customs
6. **Mythology & Legends** - Ancient myths and religious beliefs
7. **Discoveries & Excavations** - Famous archaeological expeditions
8. **Art & Symbolism** - Ancient artistic traditions and symbolism

## Era Access

### Explorer Access (First 2 eras only)
1. **Prehistoric Era** - Early human civilizations and tools
2. **Ancient Era** - Ancient civilizations and early empires

### Archaeologist & Curator Access (All 6 eras)
1. **Prehistoric Era** - Early human civilizations and tools
2. **Ancient Era** - Ancient civilizations and early empires
3. **Classical Era** - Greek and Roman classical periods
4. **Medieval Era** - Middle Ages and medieval archaeology
5. **Renaissance Era** - Renaissance period discoveries
6. **Modern Era** - Modern archaeological methods and discoveries
