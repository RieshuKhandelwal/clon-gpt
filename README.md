# 🤖 ChatGPT Clone with AI Memory

A full-stack ChatGPT clone built with React, Node.js, and advanced AI capabilities including memory/context retention using vector embeddings.

**Live Demo:** [https://clongpt.onrender.com](https://clongpt.onrender.com)

## ✨ Features

### 🧠 Advanced AI Capabilities
- **Google Gemini AI Integration**: Powered by Gemini 2.0 Flash for intelligent responses
- **AI Memory System**: Vector-based memory using Pinecone for context retention
- **Personalized AI Assistant**: Custom AI persona named "Aurora" with specific personality traits
- **Context-Aware Conversations**: Combines short-term and long-term memory for better responses

### 💬 Real-time Chat Experience
- **Real-time Messaging**: WebSocket-based instant message delivery
- **Chat History**: Persistent chat sessions with message history
- **Multiple Conversations**: Create and manage multiple chat threads
- **Message Actions**: Copy, like/dislike, speech synthesis, and regenerate responses

### 🔐 Authentication & Security
- **JWT Authentication**: Secure token-based authentication
- **User Registration/Login**: Complete user management system
- **Protected Routes**: Secure API endpoints with middleware
- **Cookie-based Sessions**: HTTP-only cookies for enhanced security

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Dark Theme**: Modern, clean interface with dark mode
- **ChatGPT-like Interface**: Familiar and intuitive user experience
- **Real-time Typing Indicators**: Visual feedback during AI responses

### 🚀 Performance & Scalability
- **Vector Database**: Pinecone for efficient memory storage and retrieval
- **MongoDB Atlas**: Cloud database for scalability
- **Optimized Queries**: Efficient data retrieval and storage
- **Production Ready**: Deployed on Render.com with proper environment configuration

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Socket.IO Client** - Real-time communication
- **Axios** - HTTP client
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Socket.IO** - Real-time communication
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### AI & External Services
- **Google Gemini AI** - AI model for responses
- **Pinecone** - Vector database for memory
- **MongoDB Atlas** - Cloud database hosting

### Deployment
- **Render.com** - Backend and frontend hosting
- **MongoDB Atlas** - Database hosting

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Google AI API key
- Pinecone API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chatgpt-project
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd Frontend
   npm install
   ```

4. **Environment Configuration**
   
   Create `.env` file in the Backend directory:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
   JWT_SECRET=your_jwt_secret_key
   GOOGLE_AI_API_KEY=your_google_ai_api_key
   PINECONE_API_KEY=your_pinecone_api_key
   PORT=3000
   NODE_ENV=development
   ```

5. **Run Development Servers**
   
   Backend (Terminal 1):
   ```bash
   cd Backend
   npm run dev
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd Frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000

## 📁 Project Structure

```
chatgpt-project/
├── Backend/
│   ├── src/
│   │   ├── controllers/     # API controllers
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── services/       # AI and vector services
│   │   ├── middlewares/    # Authentication middleware
│   │   ├── sockets/        # WebSocket server
│   │   └── db/            # Database connection
│   ├── server.js          # Main server file
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux store
│   │   └── styles/        # CSS files
│   ├── index.html
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Chat Management
- `POST /api/chat` - Create new chat
- `GET /api/chat` - Get user's chats
- `GET /api/chat/messages/:id` - Get chat messages

### WebSocket Events
- `ai-message` - Send message to AI
- `ai-response` - Receive AI response

## 🧠 AI Memory System

The application features an advanced memory system that:

1. **Vector Embeddings**: Converts messages to vector embeddings using Gemini
2. **Pinecone Storage**: Stores vectors with metadata in Pinecone
3. **Context Retrieval**: Queries similar past conversations
4. **Hybrid Context**: Combines recent chat history with relevant memories
5. **Personalized Responses**: AI responses are contextualized based on user history

## 🚀 Deployment

### Backend Deployment (Render.com)
1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Build Command: `npm install`
4. Start Command: `npm start`

### Frontend Deployment (Render.com)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to Render
3. Update API URLs to point to your backend

### Environment Variables for Production
```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
JWT_SECRET=your_secure_jwt_secret
GOOGLE_AI_API_KEY=your_google_ai_api_key
PINECONE_API_KEY=your_pinecone_api_key
NODE_ENV=production
```

## 🔐 Security Features

- **JWT Authentication** with HTTP-only cookies
- **Password Hashing** using bcryptjs
- **Protected API Routes** with middleware
- **CORS Configuration** for secure cross-origin requests
- **Environment Variables** for sensitive data

## 🎯 Key Features Explained

### Real-time Communication
- WebSocket-based messaging for instant AI responses
- Typing indicators and real-time updates
- Persistent connections for seamless experience

### AI Memory System
- Stores conversation context in vector database
- Retrieves relevant past conversations
- Provides personalized and contextual responses

### User Experience
- Intuitive ChatGPT-like interface
- Mobile-responsive design
- Smooth animations and transitions
- Error handling and user feedback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- **Google Gemini AI** for providing the AI capabilities
- **Pinecone** for vector database services
- **MongoDB Atlas** for cloud database hosting
- **Render.com** for hosting services
- **Ankur Bhaiya** for guidance and mentorship

## 📞 Contact

- **Project Link**: [https://github.com/yourusername/chatgpt-project](https://github.com/yourusername/chatgpt-project)
- **Live Demo**: [https://clongpt.onrender.com](https://clongpt.onrender.com)

---

⭐ **Star this repository if you found it helpful!**
