const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json()); // required for req.body
app.use('/api/auth', require('./routes/auth'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB error:', err)); 

// ✅ Load auth routes
//app.use('/api/auth', require('./routes/auth'));
//app.use(express.json()); // ✅ MUST be here before routes
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
