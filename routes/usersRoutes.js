var express = require('express');
var router = express.Router();
const {userControllers} = require('../controllers');

/* GET users listing. */
router.get('/get', async function(req, res, next) {
  const query = req.query;
  console.log(query)
  try{
const results = await userControllers.getAllUser(query)
res.status(200).send(result);

  } catch (error) {
    res.status(500).send(error);


  }

  
});
router.post('/addUser', async function(req, res, next) {
  const body = req.body;
  console.log(body)
  try{
        const results = await userControllers.addUser(body)
        res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);


  }

  
});

module.exports = router;
