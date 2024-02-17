const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const socketIO = require('socket.io');
const http = require('http');
const session = require("express-session");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
//for connection

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
); // Use the cors middleware
//app.use(bodyParser.json());

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
//connection to the database mysql
dotenv.config();
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MYSQL Connected");
  }
});

app.post("/login", (req, res) => {
  const sqlQuery = "SELECT * FROM Investor WHERE `username` = ?";
  const username = req.body.username;
  //const providedPassword = req.body.password;
  connection.query(sqlQuery, [username], (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      return res.status(500).send("An error occured");
    }

    if (results.length === 0) {
      console.log("User not found");
      return res.status(404).send("User not found");
    }

    /*const password = results[0].password;
    if (password === req.body.password) {
      console.log('success');
      return res.send('Login successful');
    }*/
    /*else {
      console.log('Incorrect password');
      return res.status(401).send('Incorrect password');
    }*/
    console.log("Success");
    return res.send("Login successful");
  });
});

app.post("/signup", (req, res) => {
  const sqlQuery =
    "INSERT INTO `Investor` (`username`, `password`) VALUES (?, ?)";
  //const name = req.body.name;
  //const contact = req.body.contact;
  //const address = req.body.address;
  //const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  connection.query(sqlQuery, [username, password], (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      return res.status(500).send("An error occured");
    }

    console.log("User registered successfully");
    return res.send("Signup successful");
  });
});

app.get("/companies", (req, res) => {
  //code for fetching companies
  const sql = "SELECT * FROM Company";

  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching companies:", err);
      res.status(500).json({ message: "Error fetching companies" });
    } else {
      res.status(200).json(results);
    }
  });
});

// Import necessary dependencies (e.g., Express and MySQL connection)

// Define an endpoint to fetch all stocks
app.get("/stocks", (req, res) => {
  const sql = "SELECT * FROM Stocks";

  // Execute the SQL query to retrieve data from the Stocks table
  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Error fetching stocks:", error);
      res.status(500).json({ message: "Error fetching stocks" });
    } else {
      res.status(200).json(results);
    }
  });
});


//new code
/*app.post('/stocks', (req, res) => {
  const newStockData = req.body; // Replace with the actual data you want to add

  // Insert the new stock data into the database
  const sqlQuery = 'INSERT INTO Stocks SET ?';

  connection.query(sqlQuery, newStockData, (error, results, fields) => {
    if (error) {
      console.error('Error adding new stock:', error);
      return res.status(500).send('An error occurred');
    }

    console.log('New stock added successfully');
    return res.status(201).json({ message: 'New stock added successfully' });
  });
});

app.get('/stocks/:idOrSymbol', (req, res) => {
  const idOrSymbol = req.params.idOrSymbol;

  // Use idOrSymbol to query the stock details from your database
  const sqlQuery = 'SELECT * FROM Stocks WHERE Stock_id = ? OR Symbol = ?';

  connection.query(sqlQuery, [idOrSymbol, idOrSymbol], (error, results, fields) => {
    if (error) {
      console.error('Error fetching stock details:', error);
      return res.status(500).send('An error occurred');
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Stock not found' });
    }

    const stockDetails = results[0];
    return res.status(200).json(stockDetails);
  });
});



app.put('/stocks/:stockId', (req, res) => {
  const stockId = req.params.stockId;
  const updatedStockData = req.body; // Replace with the actual data you want to update

  // Update the stock information in the database
  const sqlQuery = 'UPDATE Stocks SET ? WHERE Stock_id = ?';

  connection.query(sqlQuery, [updatedStockData, stockId], (error, results, fields) => {
    if (error) {
      console.error('Error updating stock information:', error);
      return res.status(500).send('An error occurred');
    }

    console.log('Stock information updated successfully');
    return res.status(200).json({ message: 'Stock information updated successfully' });
  });
});

app.delete('/stocks/:stockId', (req, res) => {
  const stockId = req.params.stockId;

  // Delete the stock from the database
  const sqlQuery = 'DELETE FROM Stocks WHERE Stock_id = ?';

  connection.query(sqlQuery, [stockId], (error, results, fields) => {
    if (error) {
      console.error('Error deleting stock:', error);
      return res.status(500).send('An error occurred');
    }

    console.log('Stock deleted successfully');
    return res.status(200).json({ message: 'Stock deleted successfully' });
  });
});
*/

app.get("/trade/:price", (req, res) => {
  console.log("Client connected");
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");

  let lastPrice = parseFloat(req.params.price);
  console.log(lastPrice);

  const intervalId = setInterval(() => {
    let live = 0;
    live = (
      lastPrice +
      ((Math.random() * lastPrice) % (0.01 * lastPrice))
    ).toFixed(2);
    res.write(`data: ${live}\n\n`);
    console.log(live);
  }, 800);

  res.on("close", () => {
    console.log("Client closed connection");
    clearInterval(intervalId);
    res.end();
  });
});

// Endpoint for handling buy transactions
/*app.post('/buy', (req, res) => {
  if (req.session.loggedin) {
    let username = req.session.username;
    let equityName = req.body.equityName;
      //console.log(equityName);
    let Stock_id = req.body.Stock_id;
    let equitySymbol = req.body.equitySymbol;
      //console.log(equitySymbol);
    //let sellPrice = req.body.sellPrice;
    let buyPrice = req.body.buyPrice;
      //console.log(buyPrice);
    let quantity = req.body.quantity;
      //console.log(buyPrice);
    let totalPrice = (buyPrice * quantity).toFixed(2);
      //console.log(totalPrice);

    // First, fetch the trader ID for the given username
    connection.query('SELECT `trade_id` FROM `Investor` WHERE `Username` = ?', [username], function(err, results, fields)  {
      if (err) {
        console.error('Error fetching trader ID:', err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
        return;
      }

      if (results.length === 0) {
        // Handle the case where no trader with the given Username is found
        res.status(404).json({ error: 'Trader not found' });
        return;
      }

      const traderID = results[0]['traderID'];

      // Insert the trade data into the database
      connection.query(
        'INSERT INTO `TRADE` (`Username`, `Stock_id`, `Quantity`, `Type`, `Date`, `Time`) VALUES (?, ?, ?, ?, ?, ?)',
        [traderID, Stock_id, Quantity, 'buy', new Date(), new Date()],
        function (err, results, fields) {
          if (insertError) {
            console.error('Error inserting buy transaction:', insertError);
            res.status(500).json({ success: false, error: 'An error occurred.' });
            return;
          }

          // Insert a record into the Portfolio table to update the user's stock holdings
          const tradeRecord = {
            Username: username,
            equityName: equityName,
            equitySymbol: equitySymbol,
            buyPrice: buyPrice,
            Quantity: quantity,
            totalBuyPrice: totalPrice,
            sellPrice: null, // You may add the sellPrice when selling
          };

          connection.query('INSERT INTO Portfolio SET ?', portfolioRecord, (portfolioError, portfolioResult) => {
            if (portfolioError) {
              console.error('Error updating Portfolio table:', portfolioError);
              res.status(500).json({ success: false, error: 'An error occurred.' });
              return;
            }

            res.json({ success: true, message: 'Buy transaction completed successfully.' });
          });
        }
      );
    });
  } else {
    res.status(401).json({ error: 'Please login to view this page!' });
  }
});

// Endpoint for handling sell transactions
app.post('/sell', (req, res) => {
  if (req.session.loggedin) {
    let username = req.session.username;
    let equityName = req.body.equityName;
    let equitySymbol = req.body.equitySymbol;
    let sellPrice = req.body.sellPrice;
    let squantity = req.body.quantity;
    let totalPrice = (sellPrice * squantity).toFixed(2);
    let tradeID = -1;

    // First, fetch the trader ID for the given username
    connection.query('SELECT `Trade_id` FROM `trader` WHERE `Username` = ?', [username], function(err, results, fields) {
      if (err) {
        console.error('Error fetching trader ID:', err);
        res.status(500).json({ error: 'An error occurred while processing your request' });
        return;
      }

       //tradeID = results[0]['traderID'];

      // Next, check if the user has shares of the given equity
      connection.query(
        'SELECT `Trade_id`, `Quantity` FROM `Trade` WHERE `trade_id` = ? AND `equityName` = ?',
        [tradeID, equityName],function(selectError, selectResults, selectFields)  {
          if (selectError) {
            console.error('Error checking user shares:', selectError);
            res.status(500).json({ error: 'An error occurred while processing your request' });
            return;
          }

          if (results.length > 0) {
            // User has shares of the equity; check if they match the selling quantity
            const bquantity = results[0]['quantity'];

            if (bquantity === squantity) {
                let totalPrice = (sellPrice * squantity).toFixed(2);
              // Quantity matches; insert the sell trade data into the database
              connection.query(
                'INSERT INTO `TRADE` (`User_id`, `Stock_id`, `Quantity`, `Type`, `Date`, `Time`) VALUES (?, ?, ?, ?, ?, ?)',
                [traderID, Stock_id, Quantity, 'sell', new Date(), new Date()], function
                (err, results, fields)  {
                  if (err) {
                    console.error('Error inserting sell transaction:', err);
                    res.status(500).json({ success: false, err: 'An error occurred.' });
                    return;
                  }

                  // Update the Portfolio table to reduce the quantity of the sold stock
                  connection.query(
                    'UPDATE Portfolio SET Quantity = Quantity - ? WHERE User_id = ? AND Stock_id = ?',
                    [squantity, tradeID, Stock_id],function
                    (err, result)  {
          
                        if (err) {
                          console.error('Error updating Portfolio table:', err);
                          res.status(500).json({ success: false, error: 'An error occurred.' });
                          return;
                        }
                      
                        res.json({ success: true, message: 'Sell transaction completed successfully.' });
                      }
                    );
                  }
                );
              } else {
                res.status(400).json({ error: 'Quantity mismatch between holdings and sell order' });
              }
            } else {
              res.status(400).json({ error: `You do not have any shares of ${equityName}` });
            }
          }
        );
      });
    } else {
      res.status(401).json({ error: 'Please login to view this page!' });
    }
  });*/

// Endpoint for handling buy transactions
app.post("/buy", (req, res) => {
  if (req.session.loggedin) {
    let username = req.session.username;
    let equityName = req.body.equityName;
    let equitySymbol = req.body.equitySymbol;
    let buyPrice = req.body.buyPrice;
    let quantity = req.body.quantity;
    let totalPrice = (buyPrice * quantity).toFixed(2);

    // First, fetch the trader ID for the given username
    connection.query(
      "SELECT `Trade_id` FROM `Investor` WHERE `Username` = ?",
      [username],
      function (err, results, fields) {
        if (err) {
          console.error("Error fetching trader Trade_id:", err);
          res
            .status(500)
            .json({ error: "An error occurred while processing your request" });
          return;
        }

        if (results.length === 0) {
          // Handle the case where no trader with the given Username is found
          res.status(404).json({ error: "Trader not found" });
          return;
        }

        const traderID = results[0]["Trade_id"];

  
        const tradeRecord = {
          Username: username,
          equityName: equityName, // Use equityName to match your table structure
          equitySymbol: equitySymbol, // Use equitySymbol to match your table structure
          buyPrice: buyPrice,
          Quantity: quantity,
          totalBuyPrice: totalPrice,
          sellPrice: null, // You may add the sellPrice when selling
        };

        connection.query(
          "INSERT INTO `TRADE` SET ?",
          tradeRecord,
          function (insertError, insertResults, insertFields) {
            if (insertError) {
              console.error("Error inserting buy transaction:", insertError);
              res
                .status(500)
                .json({ success: false, error: "An error occurred." });
              return;
            }

            // Insert a record into the Portfolio table to update the user's stock holdings
            const portfolioRecord = {
              Username: username,
              equityName: equityName,
              Quantity: quantity,
              Purchase_price: buyPrice,
              Purchase_date: new Date(),
            };

            connection.query(
              "INSERT INTO `Portfolio` SET ?",
              portfolioRecord,
              function (portfolioError, portfolioResults, portfolioFields) {
                if (portfolioError) {
                  console.error(
                    "Error updating Portfolio table:",
                    portfolioError
                  );
                  res
                    .status(500)
                    .json({ success: false, error: "An error occurred." });
                  return;
                }

                res.json({
                  success: true,
                  message: "Buy transaction completed successfully.",
                });
              }
            );
          }
        );
      }
    );
  } else {
    res.status(401).json({ error: "Please login to view this page!" });
  }
});

// Endpoint for handling sell transactions
app.post("/sell", (req, res) => {
  if (req.session.loggedin) {
    let username = req.session.username;
    let equityName = req.body.equityName;
    let equitySymbol = req.body.equitySymbol;
    let sellPrice = req.body.sellPrice;
    let totalPrice = (sellPrice * squantity).toFixed(2);
    let squantity = req.body.quantity;

    // First, fetch the trader ID for the given username
    connection.query(
      "SELECT `Trade_id` FROM `Investor` WHERE `Username` = ?",
      [username],
      function (err, results, fields) {
        if (err) {
          console.error("Error fetching trader Trade_id:", err);
          res
            .status(500)
            .json({ error: "An error occurred while processing your request" });
          return;
        }

        if (results.length === 0) {
          // Handle the case where no trader with the given Username is found
          res.status(404).json({ error: "Trader not found" });
          return;
        }

        const traderID = results[0]["Trade_id"];

        // Next, check if the user has shares of the given equity
        connection.query(
          "SELECT `Quantity` FROM `Portfolio` WHERE `Username` = ? AND `equityName` = ?",
          [username, equityName],
          function (selectError, selectResults, selectFields) {
            if (selectError) {
              console.error("Error checking user shares:", selectError);
              res.status(500).json({
                error: "An error occurred while processing your request",
              });
              return;
            }

            if (selectResults.length > 0) {
              // User has shares of the equity; check if they match the selling quantity
              const bquantity = selectResults[0]["Quantity"];

              if (bquantity >= squantity) {
                // Quantity matches or exceeds; insert the sell trade data into the TRADE table
                const tradeRecord = {
                  Username: username,
                  equityName: equityName,
                  equitySymbol: equitySymbol,
                  buyPrice: null, // You may add the buyPrice when buying
                  Quantity: squantity,
                  totalBuyPrice: null, // You may calculate this based on buy transactions
                  sellPrice: sellPrice,
                };

                connection.query(
                  "INSERT INTO `TRADE` SET ?",
                  tradeRecord,
                  function (insertError, insertResults, insertFields) {
                    if (insertError) {
                      console.error(
                        "Error inserting sell transaction:",
                        insertError
                      );
                      res
                        .status(500)
                        .json({ success: false, error: "An error occurred." });
                      return;
                    }

                    // Update the Portfolio table to reduce the quantity of the sold stock
                    connection.query(
                      "UPDATE `Portfolio` SET `Quantity` = `Quantity` - ? WHERE `Username` = ? AND `equityName` = ?",
                      [squantity, username, equityName],
                      function (updateError, updateResults, updateFields) {
                        if (updateError) {
                          console.error(
                            "Error updating Portfolio table:",
                            updateError
                          );
                          res.status(500).json({
                            success: false,
                            error: "An error occurred.",
                          });
                          return;
                        }

                        res.json({
                          success: true,
                          message: "Sell transaction completed successfully.",
                        });
                      }
                    );
                  }
                );
              } else {
                res.status(400).json({
                  error: "Quantity mismatch between holdings and sell order",
                });
              }
            } else {
              res
                .status(400)
                .json({ error: `You do not have any shares of ${equityName}` });
            }
          }
        );
      }
    );
  } else {
    res.status(401).json({ error: "Please login to view this page!" });
  }
});

/* Code for watchlisted stocks */

app.post('/watchlist', (req, res) => {
  // Extract the necessary information from the request body
  const Username = req.body.Username; // Replace with the actual property name in your request
  const Stock_id = req.body.Stock_id; // Replace with the actual property name in your request
  const Watch_list_name = req.body.Watch_list_name; // Replace with the actual property name in your request

  // Insert the watchlist data into the database
  const sqlQuery = 'INSERT INTO Watchlist (Username, Stock_id, Watch_list_name) VALUES (?, ?, ?)';
  
  connection.query(sqlQuery, [Username, Stock_id, Watch_list_name], (error, results, fields) => {
    if (error) {
      console.error('Error creating watchlist:', error);
      return res.status(500).send('An error occurred');
    }

    console.log('Watchlist created successfully');
    return res.status(201).json({ message: 'Watchlist created successfully' });
  });
});

app.get('/watchlist/:username/:stockid', (req, res) => {
  const username = req.params.username; // Extract user ID from the URL
  const stockid = req.params.stockid; // Extract stock ID from the URL
  const sql = `SELECT * FROM Watchlist WHERE Username = ? AND Stock_id = ?`;
  
  connection.query(sql, [username, stockid], (err, results) => {
    if (err) {
      console.error('Error fetching watchlist:', err);
      return res.status(500).json({ message: 'Error fetching watchlist' });
    } else {
      if (results.length === 0) {
        return res.status(404).json({ message: 'No watchlist found for the given user and stock' });
      } else {
        console.log('Fetched watchlist for user with ID:', username, 'and stock ID:', stockid);
        return res.status(200).json(results);
      }
    }
  });
});


app.put('/watchlist/:username/:stockid', (req, res) => {
 const { Watchlist_name } = req.body;
 const username = req.params.username; // Extract user ID from the URL
 const stockid = req.params.stockid; // Extract stock ID from the URL
 
  const sql = `UPDATE Watchlist SET Watch_list_name = ? WHERE Username = ? AND Stock_id = ?`;
  connection.query(sql, [Watchlist_name, username, stockid ], (err, results) => {
    if(err) {
      console.error('Error updating watchlist:', err);
      res.status(500).json({ message: 'Error updating watchlist' });
    } else {
      if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Error updating watchlist' });
      } else {
        console.log('Updated watchlist successfully:');
        res.status(200).json({ message: 'Watchlist updated successfully' });
      }
    }
  });
});

app.delete('/watchlist/:username/:stockid', (req, res) => {
  const username = req.params.username;
  const stockId = req.params.stockid;
  const sql = `DELETE FROM Watchlist WHERE Username = ? AND Stock_id = ?`;
  connection.query(sql, [username, stockId], (err, results) => {
    if(err) {
      console.error('Error deleting watchlist:', err);
      res.status(500).json({ message: 'Error processing the request' });
    } else {
      if (results.affectedRows === 0) {
        res.status(404).json({ message: 'No watchlist found for the given user' });
      } else {
        console.log('Deleted watchlist for user with ID:');
        res.status(200).json({ message: 'Watchlist deleted successfully' });
      }
    }
  });
});

app.get("/portfolio/:username", (req, res) => {
  const username = req.params.username;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to the database: ", err);
      res.status(500).json({ error: "Database connection error" });
      return;
    }

    const query = `
      SELECT
        p.Portfolio_id,
        p.Username AS Investor_Username,
        s.Stock_id,
        c.Company_name,
        s.Symbol AS Stock_Symbol,
        s.Stock_type,
        p.Quantity,
        p.Purchase_price,
        p.Purchase_date,
        s.Current_price,
        (s.Current_price * p.Quantity) AS Current_Value
      FROM Portfolio p
      JOIN Stocks s ON p.Stock_id = s.Stock_id
      JOIN Company c ON s.Company_name = c.Company_name
      WHERE p.Username = ?;
    `;

    connection.query(query, [username], (queryErr, results) => {
      connection.release(); // Release the connection

      if (queryErr) {
        console.error("Error executing SQL query: ", queryErr);
        res.status(500).json({ error: "Database query error" });
        return;
      }

      res.json(results); // Send the query results as JSON
    });
  });
});

app.get("/trades", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to the database: ", err);
      res.status(500).json({ error: "Database connection error" });
      return;
    }

    const query = `
      SELECT
        t.Trade_id,
        t.Username AS Trader_Username,
        t.equityName AS Company_name,
        t.equitySymbol AS Stock_Symbol,
        t.buyPrice AS Purchase_Price,
        t.Quantity AS Purchase_Quantity,
        t.sellPrice AS Sell_Price,
        (t.sellPrice - t.buyPrice) * t.Quantity AS Profit_Loss
      FROM TRADE t
      WHERE t.sellPrice IS NOT NULL
      ORDER BY t.Trade_id;
    `;

    connection.query(query, (queryErr, results) => {
      connection.release(); // Release the connection

      if (queryErr) {
        console.error("Error executing SQL query: ", queryErr);
        res.status(500).json({ error: "Database query error" });
        return;
      }

      res.json(results); // Send the query results as JSON
    });
  });
});

app.get("/top-investors", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to the database: ", err);
      res.status(500).json({ error: "Database connection error" });
      return;
    }

    const query = `
      SELECT
        i.Username AS Investor_Username,
        i.Name AS Investor_Name,
        SUM(p.Quantity * s.Current_price) AS Total_Portfolio_Value
      FROM Investor i
      JOIN Portfolio p ON i.Username = p.Username
      JOIN Stocks s ON p.Stock_id = s.Stock_id
      GROUP BY i.Username, i.Name
      ORDER BY Total_Portfolio_Value DESC
      LIMIT 5;
    `;

    connection.query(query, (queryErr, results) => {
      connection.release(); // Release the connection

      if (queryErr) {
        console.error("Error executing SQL query: ", queryErr);
        res.status(500).json({ error: "Database query error" });
        return;
      }

      res.json(results); // Send the query results as JSON
    });
  });
});

app.listen(5001, () => {
  console.log(`Server is running on port 5001`);
});
