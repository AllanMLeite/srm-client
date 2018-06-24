const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join('/dist/srm-client'));
});

app.listen(process.env.PORT || 8080);