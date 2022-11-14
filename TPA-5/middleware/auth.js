const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.headers["the-pass"];
  
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const verified = jwt.verify(token, process.env.TOKEN_KEY);
      req.user = verified;
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    return next();
  };
  
module.exports = auth;