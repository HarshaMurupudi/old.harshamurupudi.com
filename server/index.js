const express = require('express');
const app = express();

app.use(express.json());

require('./routes/dialogFlowRoutes')(app);

app.listen(5001);
