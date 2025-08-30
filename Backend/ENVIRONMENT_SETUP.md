# Environment Variables Setup

## Required Environment Variables

Create a `.env` file in the Backend directory with the following variables:

```env
# MongoDB Configuration
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here

# Google AI Configuration
GOOGLE_AI_API_KEY=your_google_ai_api_key_here

# Pinecone Configuration
PINECONE_API_KEY=your_pinecone_api_key_here

# Server Configuration
PORT=3000
NODE_ENV=production
```

## MongoDB Atlas Setup

1. **Create Atlas Account**: Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. **Create Cluster**: Choose M0 (free tier)
3. **Database Access**: Create a user with readWrite permissions
4. **Network Access**: Add `0.0.0.0/0` for all IPs (or specific IPs)
5. **Get Connection String**: 
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Replace `<username>`, `<password>`, `<cluster>`, and `<database>` with your values

## Render.com Deployment

1. **Environment Variables**: Add all the above variables in Render's dashboard
2. **Build Command**: `npm install`
3. **Start Command**: `npm run dev` (for development) or `node server.js` (for production)

## Security Notes

- Use strong, unique passwords for MongoDB Atlas
- Generate a secure JWT_SECRET (you can use: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`)
- Never commit `.env` files to version control
- Use environment-specific configurations for different deployment stages
