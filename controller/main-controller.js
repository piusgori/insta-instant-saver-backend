const MainError = require('../models/main-error');
const instareel = require("insta-reel");

const mainController = async (req, res, next) => {
    const { url } = req.body;
    if(!url || url.length === 0){
        return next(new MainError('Please provide an instagram url', 400));
    }
    if(!url.includes('instagram.com')){
        return next(new MainError('Please provide a valid instagram url', 400));
    }
    let links;
    try {
        links = await instareel(url);
        res.json({message: 'Got Links', links});
    } catch (err) {
        console.log(err);
        res.json({message: 'an error occured'});
    }

}

module.exports = mainController;