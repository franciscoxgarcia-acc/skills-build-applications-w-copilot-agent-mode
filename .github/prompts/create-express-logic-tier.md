# Create Express Logic Tier

## Objective
Build a comprehensive Express.js API layer for the OctoFit Tracker application with proper business logic, data validation, error handling, and middleware configuration.

## Requirements

### 1. Project Structure
Create the following directory structure in `octofit-tracker/backend/src`:
```
src/
├── index.ts                    # Main server entry point
├── config/
│   └── database.ts            # MongoDB/Mongoose configuration
├── middleware/
│   ├── errorHandler.ts        # Global error handling
│   ├── validation.ts          # Request validation middleware
│   └── auth.ts                # Authentication/Authorization
├── models/
│   ├── User.ts                # User data model
│   ├── Workout.ts             # Workout tracking model
│   └── Goal.ts                # Fitness goals model
├── controllers/
│   ├── userController.ts      # User business logic
│   ├── workoutController.ts   # Workout CRUD operations
│   └── goalController.ts      # Goal management logic
├── routes/
│   ├── userRoutes.ts          # User endpoints
│   ├── workoutRoutes.ts       # Workout endpoints
│   ├── goalRoutes.ts          # Goal endpoints
│   └── index.ts               # Route aggregation
├── services/
│   ├── userService.ts         # User business logic layer
│   ├── workoutService.ts      # Workout calculations
│   └── goalService.ts         # Goal tracking logic
├── utils/
│   ├── logger.ts              # Logging utility
│   ├── validators.ts          # Data validation functions
│   └── constants.ts           # Application constants
└── types/
    ├── index.ts               # TypeScript type definitions
    └── models.ts              # Data model interfaces
```

### 2. Database Models (Mongoose Schemas)

#### User Model
- `_id`: ObjectId (auto)
- `username`: String (unique, required)
- `email`: String (unique, required)
- `password`: String (hashed, required)
- `firstName`: String
- `lastName`: String
- `age`: Number
- `weight`: Number (kg)
- `height`: Number (cm)
- `fitnessLevel`: Enum (beginner, intermediate, advanced)
- `goals`: Array of ObjectIds (references Goal model)
- `createdAt`: Date (auto)
- `updatedAt`: Date (auto)

#### Workout Model
- `_id`: ObjectId (auto)
- `userId`: ObjectId (reference to User, required)
- `type`: Enum (cardio, strength, flexibility, sports)
- `name`: String (required)
- `duration`: Number (minutes, required)
- `caloriesBurned`: Number
- `intensity`: Enum (low, moderate, high)
- `date`: Date (required)
- `notes`: String
- `exercises`: Array of objects
  - `name`: String
  - `sets`: Number
  - `reps`: Number
  - `weight`: Number
- `createdAt`: Date (auto)
- `updatedAt`: Date (auto)

#### Goal Model
- `_id`: ObjectId (auto)
- `userId`: ObjectId (reference to User, required)
- `type`: Enum (weight, strength, endurance, flexibility)
- `title`: String (required)
- `description`: String
- `targetValue`: Number (required)
- `currentValue`: Number
- `unit`: String (kg, lbs, minutes, reps, etc.)
- `deadline`: Date
- `status`: Enum (active, achieved, abandoned)
- `createdAt`: Date (auto)
- `updatedAt`: Date (auto)

### 3. API Endpoints

#### User Endpoints
- `POST /api/users` - Create new user
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `DELETE /api/users/:id` - Delete user account
- `POST /api/users/login` - User login
- `POST /api/users/logout` - User logout

#### Workout Endpoints
- `POST /api/workouts` - Log new workout
- `GET /api/workouts` - Get all workouts (paginated)
- `GET /api/workouts/:id` - Get specific workout
- `PUT /api/workouts/:id` - Update workout
- `DELETE /api/workouts/:id` - Delete workout
- `GET /api/workouts/stats` - Get workout statistics

#### Goal Endpoints
- `POST /api/goals` - Create new goal
- `GET /api/goals` - Get all user goals
- `GET /api/goals/:id` - Get specific goal
- `PUT /api/goals/:id` - Update goal
- `DELETE /api/goals/:id` - Delete goal
- `PATCH /api/goals/:id/progress` - Update goal progress

### 4. Middleware Requirements

- **Error Handler**: Catch and format all errors consistently
- **Request Validation**: Validate all incoming request payloads
- **CORS**: Allow frontend at http://localhost:5173
- **Logging**: Log all requests and responses
- **Authentication**: JWT-based authentication for protected routes
- **Rate Limiting**: Prevent abuse with rate limiting

### 5. Error Handling

Implement standardized error responses:
```typescript
{
  success: false,
  error: {
    code: "ERROR_CODE",
    message: "Human readable message",
    statusCode: 400
  }
}
```

### 6. Validation

- Validate all required fields
- Type checking for all inputs
- Email format validation
- Password strength requirements
- Numeric field bounds checking
- Date format validation

### 7. Development Scripts

Add to `backend/package.json`:
- `npm run dev` - Start with hot reload
- `npm run build` - Compile TypeScript
- `npm run start` - Run production build
- `npm run lint` - Run linter

### 8. Environment Variables

Ensure `.env` includes:
```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit
NODE_ENV=development
JWT_SECRET=your-secret-key-here
LOG_LEVEL=debug
```

### 9. Response Format

All successful responses should follow:
```typescript
{
  success: true,
  data: { /* response data */ },
  message: "Operation successful"
}
```

### 10. Testing Endpoints

After implementation, test with:
- Health check: `GET /health`
- Status: `GET /api/status`
- Create user: `POST /api/users`
- All CRUD operations for models

## Success Criteria

✅ All models defined with proper validation
✅ All endpoints implemented and functional
✅ Proper error handling throughout
✅ TypeScript types defined
✅ Middleware properly configured
✅ Environment configuration setup
✅ Logging implemented
✅ Code follows best practices
✅ RESTful API conventions followed
✅ Backend ready for frontend integration

## Notes

- Use Mongoose for all database operations
- Implement proper async/await patterns
- Use TypeScript strict mode
- Follow separation of concerns
- Keep controllers thin, logic in services
- Implement proper transaction handling for critical operations
