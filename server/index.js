const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

require('./routes/dialogFlowRoutes')(app);

app.listen(5001);
