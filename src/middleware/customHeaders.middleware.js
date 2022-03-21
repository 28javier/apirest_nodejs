
const customHeader = (req, res, next)=> {

    try {
        const api_key = req.headers.api_key;
        if (api_key === 'javier123') {
            next();
        } else {
            res.status(403).json({
                ok:false,
                msg:'api_key no es correcta por favor revisar'
            });    
            // console.log(req.headers);
        }
    } catch (e) {
        res.status(500).json({
            ok:false,
            msg:'Algo ocurrio en el CustomHeaders revisar'
        });
    }
};


module.exports = {customHeader}