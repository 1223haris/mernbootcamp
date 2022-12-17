var express = require('express');
var router = express.Router();
const {clientControllers} = require('../controllers/clientControllers');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const query = req.query;
  console.log(query)
  try{
const results = await clientControllers.getAllClient(query)
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
        const results = await clientControllers.addClient(body)
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
    const results = await clientControllers.updateClient(body);
    res.status(200).send(results);


  }
  catch (error){
    res.status(500).send(error);
  }
});
router.delete('/:id' , async function (req, res, next){
  const id = req.params.id;
  const filter = {_id: id};
  try{s
    const result = await clientControllers.deleteClient(filter);
    res.status(200).send('Deleted Successfully');
    
  }
  catch (error){
    console.log(error);
    res.status(500).send (error);
  }
});
module.exports = router;
