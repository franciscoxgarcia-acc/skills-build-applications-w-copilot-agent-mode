# Initialize and Populate OctoFit Database

## Objective
Create a comprehensive MongoDB database initialization and seeding script for the OctoFit Tracker application with sample data for users, workouts, and fitness goals.

## Requirements

### 1. Database Setup Script

Create `octofit-tracker/backend/scripts/initDb.ts`:

**Features:**
- Connect to MongoDB
- Drop existing collections (for development)
- Create all indexes
- Seed initial sample data
- Verify data integrity
- Log initialization progress

### 2. Sample Data Structure

#### 5 Sample Users
```
User 1: John Doe
- Email: john.doe@octofit.com
- Username: johndoe
- Age: 28
- Weight: 85 kg
- Height: 180 cm
- Fitness Level: intermediate

User 2: Jane Smith
- Email: jane.smith@octofit.com
- Username: janesmith
- Age: 26
- Weight: 62 kg
- Height: 168 cm
- Fitness Level: advanced

User 3: Mike Johnson
- Email: mike.johnson@octofit.com
- Username: mikejohnson
- Age: 35
- Weight: 92 kg
- Height: 188 cm
- Fitness Level: beginner

User 4: Sarah Wilson
- Email: sarah.wilson@octofit.com
- Username: sarahwilson
- Age: 31
- Weight: 68 kg
- Height: 172 cm
- Fitness Level: intermediate

User 5: David Brown
- Email: david.brown@octofit.com
- Username: davidbrown
- Age: 42
- Weight: 88 kg
- Height: 185 cm
- Fitness Level: intermediate
```

#### 15+ Sample Workouts (3 per user)
For each user, create workouts of different types:
- **Cardio**: Running, Cycling, Swimming
  - Duration: 30-60 minutes
  - Calories: 300-500 cal
  - Intensity: moderate-high

- **Strength**: Weight training, Resistance exercises
  - Duration: 45-90 minutes
  - Calories: 200-400 cal
  - Intensity: moderate-high
  - Include exercises with sets/reps

- **Flexibility**: Yoga, Stretching
  - Duration: 30-45 minutes
  - Calories: 100-200 cal
  - Intensity: low-moderate

**Sample Workout Data:**
```
{
  userId: ObjectId,
  type: "cardio",
  name: "Morning Run",
  duration: 45,
  caloriesBurned: 450,
  intensity: "high",
  date: ISODate,
  notes: "Great morning run at the park",
  exercises: []
}

{
  userId: ObjectId,
  type: "strength",
  name: "Chest & Triceps",
  duration: 60,
  caloriesBurned: 350,
  intensity: "high",
  date: ISODate,
  exercises: [
    { name: "Bench Press", sets: 4, reps: 8, weight: 100 },
    { name: "Dumbbell Flyes", sets: 3, reps: 12, weight: 30 },
    { name: "Tricep Dips", sets: 3, reps: 10 }
  ]
}

{
  userId: ObjectId,
  type: "flexibility",
  name: "Evening Yoga",
  duration: 40,
  caloriesBurned: 150,
  intensity: "low",
  date: ISODate,
  notes: "Relaxing evening yoga session"
}
```

#### 10+ Sample Goals (2 per user)
For each user, create various goal types:

**Weight Loss Goals:**
```
{
  userId: ObjectId,
  type: "weight",
  title: "Lose 10 kg",
  description: "Reduce weight from 85kg to 75kg",
  targetValue: 75,
  currentValue: 85,
  unit: "kg",
  deadline: ISODate (3-6 months from now),
  status: "active"
}
```

**Strength Goals:**
```
{
  userId: ObjectId,
  type: "strength",
  title: "Bench Press 100kg",
  description: "Increase bench press strength",
  targetValue: 100,
  currentValue: 60,
  unit: "kg",
  deadline: ISODate (6 months from now),
  status: "active"
}
```

**Endurance Goals:**
```
{
  userId: ObjectId,
  type: "endurance",
  title: "Run 10k in 50 minutes",
  description: "Improve running speed",
  targetValue: 50,
  currentValue: 65,
  unit: "minutes",
  deadline: ISODate (3 months from now),
  status: "active"
}
```

**Flexibility Goals:**
```
{
  userId: ObjectId,
  type: "flexibility",
  title: "Daily Yoga Practice",
  description: "Practice yoga 5 days per week",
  targetValue: 5,
  currentValue: 2,
  unit: "sessions/week",
  deadline: ISODate (ongoing),
  status: "active"
}
```

### 3. Script Structure

```typescript
// initDb.ts
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Models
import User from '../src/models/User'
import Workout from '../src/models/Workout'
import Goal from '../src/models/Goal'

// Data
import { SAMPLE_USERS, SAMPLE_WORKOUTS, SAMPLE_GOALS } from './seedData'

async function initializeDatabase() {
  // 1. Connect to MongoDB
  // 2. Clear existing collections
  // 3. Create indexes
  // 4. Seed user data
  // 5. Seed workout data (with user references)
  // 6. Seed goal data (with user references)
  // 7. Verify data counts
  // 8. Log summary
  // 9. Disconnect
}

initializeDatabase()
  .then(() => console.log('✅ Database initialized successfully'))
  .catch((error) => console.error('❌ Database initialization failed:', error))
```

### 4. Seed Data File

Create `octofit-tracker/backend/scripts/seedData.ts`:
- Export `SAMPLE_USERS` array with 5 users
- Export `SAMPLE_WORKOUTS` array with 15+ workouts
- Export `SAMPLE_GOALS` array with 10+ goals
- Ensure dates are realistic (distributed across last 30 days for workouts)
- Password hashing preparation (if applicable)

### 5. Index Creation

Create indexes for:
- User: `email` (unique), `username` (unique)
- Workout: `userId`, `date`, `type`
- Goal: `userId`, `status`, `type`

### 6. Package.json Script

Add to `backend/package.json`:
```json
{
  "scripts": {
    "db:init": "tsx scripts/initDb.ts",
    "db:seed": "tsx scripts/seedData.ts",
    "db:reset": "tsx scripts/initDb.ts && echo '✅ Database reset complete'"
  }
}
```

### 7. Data Validation

- Verify all users created with correct count
- Verify all workouts linked to correct users
- Verify all goals linked to correct users
- Check that all required fields are populated
- Validate data types and formats
- Ensure referential integrity

### 8. Utility Functions

Create `octofit-tracker/backend/scripts/utils.ts`:
- `generateObjectId()` - Create MongoDB ObjectIds
- `getRandomDate(daysBack)` - Generate random dates in past N days
- `hashPassword(password)` - Hash user passwords
- `generateSampleWorkout(userId, type)` - Factory for workout creation
- `generateSampleGoal(userId, type)` - Factory for goal creation

### 9. Logging & Output

Script should output:
```
========================================
🚀 OctoFit Database Initialization
========================================

📝 Connecting to MongoDB...
✅ Connected to: mongodb://localhost:27017/octofit

🗑️  Clearing existing collections...
✅ Users cleared
✅ Workouts cleared
✅ Goals cleared

📊 Creating indexes...
✅ User indexes created
✅ Workout indexes created
✅ Goal indexes created

🌱 Seeding data...
✅ 5 users created
✅ 15 workouts created
✅ 10 goals created

✅ All data relationships verified
✅ Database initialization complete!

📈 Summary:
- Users: 5
- Workouts: 15
- Goals: 10
- Total Documents: 30

========================================
```

### 10. Error Handling

- Handle connection errors gracefully
- Validate all data before insertion
- Rollback on critical failures
- Log detailed error messages
- Provide recovery suggestions

## Success Criteria

✅ Database script created and executable
✅ 5 realistic sample users with complete profiles
✅ 15+ workouts distributed across users
✅ 10+ goals with various types
✅ All data properly linked with ObjectIds
✅ Indexes created for performance
✅ Seed data factory functions implemented
✅ Comprehensive logging output
✅ Error handling for all operations
✅ Script can be run multiple times safely

## Usage

```bash
# Initialize and seed database
npm run db:init

# Verify with MongoDB client
mongosh

# Check collections
use octofit
db.users.find()
db.workouts.find()
db.goals.find()
```

## Notes

- Use realistic data for all samples
- Distribute workout dates across different times
- Create goals at different completion stages (some active, some achieved)
- Ensure proper TypeScript typing throughout
- Make script idempotent (safe to run multiple times)
- Consider adding an optional "reset" mode to clear all data
- Log all operations for debugging
