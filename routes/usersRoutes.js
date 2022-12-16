var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/usersController.js');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const query = req.query;
  console.log(query)
  try{
const results = await userControllers.getAlluser(query)
res.status(200).send(results);

  } catch (error) {
    console.log(error);
    res.status(500).send(error);


  }

  
});
router.post('/', async function(req, res, next) {
  const body = req.body;
  console.log(body);
  try{
        const results = await userControllers.addUser(body)
        res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);


  }

  
});
router.put('/' , async function (req, res, next){
   
  const body = req.body;
  // console.log(body);
  if(!body._id){
    return res.status(400).send({message : "_id is required"});

  }
  try {
    const results = await userControllers.updateUser(body);
    res.status(200).send(results);


  }
  catch (error){
    res.status(500).send(error);
  }
});
router.delete('/:id' , async function (req, res, next){
  const id = req.params.id;
  const filter = {_id: id};
  try{
    const result = await userControllers.deleteUser(filter);
    res.status(200).send('Deleted Successfully');
    
  }
  catch (error){
    console.log(error);
    res.status(500).send (error);
  }
});
module.exports = router;
