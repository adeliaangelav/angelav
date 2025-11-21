const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

  <body style="
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #fce4ec, #f8bbd0, #f48fb1);
    font-family: 'Poppins', sans-serif;
  ">

    <div style="
      max-width: 650px;
      padding: 35px;
      border-radius: 65px;
      background: white;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      border-image: linear-gradient(to right, #ff9a9e, #fecfef, #feada6) 1;
      text-align: center;
    ">

      <h1 style="margin-bottom: 15px; font-weight: 600; font-size: 30px; color: #333;">IT 412 | Personal Details</h1>
      
      <p style="font-size: 19px; margin-bottom: 10px;">
        <strong>Full name:</strong> Villanueva, Angela A.
      </p>
      
      <p style="font-size: 19px; margin-bottom: 20px;">
        <strong>Class section:</strong> BA 4102
      </p>
      
      <p style="font-size: 17px; font-style: italic; color: #555;">
         “In order to write about life, first, you must live it.” — Ernest Hemingway 

      </p>
    </div>
  </body>
`);


});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
