# CRUD Node.js MongoDB - Modernized

A modern Node.js CRUD application using Express and MongoDB with current best practices.

## What's Changed (Modernization Branch)

This branch (`modernize/update-patterns`) updates the application from outdated patterns to modern JavaScript and Node.js best practices.

### 🔄 Key Updates

#### 1. **Dependencies** (package.json)
- ✅ Removed deprecated `body-parser` package (Express 4.16.0+ includes `express.json()` and `express.urlencoded()`)
- ✅ Removed unused `serve-favicon` 
- ✅ Updated all dependencies to latest stable versions:
  - `express`: 4.18.2
  - `mongoose`: 7.5.0
  - `debug`: 4.3.4
  - Added `dotenv`: 16.3.1 for environment configuration
- ✅ Added `engines` field to specify minimum Node.js version (14+)
- ✅ Added `description` field

#### 2. **Application Setup** (app.js)
- ✅ Removed deprecated `body-parser` middleware
- ✅ Replaced with native `express.json()` and `express.urlencoded()`
- ✅ Cleaned up code comments and unused imports
- ✅ Added proper middleware configuration

#### 3. **Database Connection** (libs/connect_db.js)
- ✅ Converted from callback-based to async/await pattern
- ✅ Added proper error handling
- ✅ Implemented environment variable support via `.env` file
- ✅ Added Mongoose connection options for latest versions
- ✅ Proper database connection logging

#### 4. **Data Model** (model/tasks.js)
- ✅ Converted from factory function to direct model export
- ✅ Added schema validation with proper field constraints
- ✅ Added timestamps (`createdAt`, `updatedAt`) automatically
- ✅ Implemented field length limits
- ✅ Added required field validation with custom messages
- ✅ Uses standard Mongoose methods (`create`, `findById`, `findByIdAndDelete`)

#### 5. **Routes & Controllers** (routes/index.js)
- ✅ Converted from callback-based to async/await
- ✅ Fixed bugs:
  - Parameter name typo (`act` → `req`)
  - Wrong method name (`creat` → `create`)
  - Wrong method name (`findbyID` → `findById`)
  - Fixed loop syntax errors in template
- ✅ Proper error handling with try/catch blocks
- ✅ Added validation (title required check)
- ✅ Added new `/delete/:id` route
- ✅ Renamed `/turn/:id` to `/toggle/:id` (more semantic)
- ✅ Added sorting (newest tasks first)
- ✅ Proper HTTP status codes
- ✅ Better error messages

#### 6. **Server Configuration** (bin/www)
- ✅ Async/await server initialization
- ✅ Database connection before server starts
- ✅ Improved error handling with graceful startup
- ✅ Fixed scope issues with error handlers

#### 7. **View Templates** (views/)
- ✅ Removed outdated Jade/Pug templates (`error.jade`, `layout.jade`)
- ✅ Converted all to modern EJS
- ✅ Fixed index.ejs:
  - Corrected loop syntax
  - Fixed typos (`lenght` → `length`)
  - Improved HTML structure
  - Added proper table headers
  - Added status badge styling
  - Added delete action
  - Added empty state handling
- ✅ Created new error.ejs with proper error display
- ✅ Added responsive meta tags
- ✅ Added form validation attributes
- ✅ Improved accessibility

#### 8. **Configuration**
- ✅ Created `.env.example` with all required environment variables
- ✅ Added support for MongoDB Atlas connection strings
- ✅ Added configurable port and environment settings

#### 9. **Removed Files**
- ✅ Deleted `server.js` - was bypassing Express, causing conflicts
- ✅ Deleted Jade template files - standardized on EJS

## Getting Started

### Prerequisites
- Node.js 14+ 
- MongoDB (local or MongoDB Atlas)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB connection:
```env
MONGO_URI=mongodb://localhost:27017/crud
PORT=3000
NODE_ENV=development
```

### Running the Application

**Development Mode** (with debug output):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

The application will start on `http://localhost:3000`

## Project Structure

```
├── app.js                 # Express app configuration
├── package.json          # Dependencies and scripts
├── .env.example          # Environment variables template
├── bin/
│   └── www              # Server entry point
├── libs/
│   └── connect_db.js    # MongoDB connection (async)
├── model/
│   └── tasks.js         # Task model with validation
├── routes/
│   ├── index.js         # Task CRUD routes
│   └── users.js         # Placeholder users routes
├── views/
│   ├── index.ejs        # Task list view
│   └── error.ejs        # Error page
└── public/
    ├── index.html
    └── stylesheets/
        └── style.css
```

## API Endpoints

### Task Management
- **GET** `/` - List all tasks
- **POST** `/add` - Create a new task
- **GET** `/toggle/:id` - Toggle task status
- **GET** `/delete/:id` - Delete a task

## Modern Patterns Implemented

✅ **Async/Await** - Replaced all callbacks  
✅ **Environment Configuration** - `.env` file support  
✅ **Error Handling** - Try/catch blocks in routes  
✅ **Input Validation** - Schema and route-level validation  
✅ **Timestamps** - Automatic `createdAt`, `updatedAt`  
✅ **Consistent Templating** - All EJS (no Jade)  
✅ **Proper HTTP Methods** - GET for reading, POST for creating  
✅ **Semantic Naming** - Clear route and variable names  
✅ **Dependency Management** - Up-to-date packages  
✅ **Configuration Management** - Environment-based config  

## Development Tips

### Enable Debug Output
```bash
DEBUG=crud:* npm start
```

### Common Issues

**MongoDB Connection Error**
- Ensure MongoDB is running: `brew services start mongodb-community` (macOS)
- Check `MONGO_URI` in `.env`

**Port Already in Use**
- Change `PORT` in `.env` to an available port
- Or kill process: `lsof -ti:3000 | xargs kill -9`

## Future Improvements

- [ ] Input sanitization and XSS prevention
- [ ] API routes with JSON responses
- [ ] Authentication and authorization
- [ ] Unit and integration tests
- [ ] Docker support
- [ ] CI/CD pipeline
- [ ] API documentation (Swagger)
- [ ] Pagination for task list
- [ ] Task filtering and search

## License

MIT

---

**Branch**: `modernize/update-patterns`  
**Status**: Ready for review and testing
