const handleOptions = (req, res, next ) =>{
res.setHeaders('Access-Control-Allow-Origion','*');
res.setHeaders('Access-Control-Allow-Methods','GET,POST,PUT,DLETE,OPTIONS');
if (req.Methods==='OPTIONS') {
    return res.sendStatus(200);

}

}
module.exports = {
    handleOptions
}