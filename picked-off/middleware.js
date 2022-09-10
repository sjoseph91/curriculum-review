
function addFlammableProperty(req, res, next){
    req.flammable = false;
    next();
}

module.exports = addFlammableProperty;