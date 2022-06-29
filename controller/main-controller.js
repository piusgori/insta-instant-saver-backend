const MainError = require('../models/main-error');
const instagramGetUrl = require("instagram-url-direct");

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
        links = await instagramGetUrl(url);
        res.json({message: 'Links generated successfully', links: links.url_list});
    } catch (err) {
        return next(new MainError('We are sorry for the inconvenience', 500));
    }

}

module.exports = mainController;