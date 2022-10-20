const router = require('express').Router();
const { logger } = require('../../../lib/logger');
const auth = require('../../../middleware/check-auth');
const readFile = require('../../../lib/reads3File');

router.get('/stateData',auth.authController, async (req, res) => {
    try {
        logger.info('--- diksha Total conten play over years api ---');
        var fileName = `diksha/line/state.json`;
        let jsonData = await readFile.readFileConfig(fileName);
        let fileMetaData = await readFile.getFileMetaData(fileName);
        // var footer = jsonData['footer'];
        let mydata = jsonData;
        logger.info('--- diksha Total conten play over years api response sent ---');
        res.send({ data: mydata, downloadData: jsonData, fileMetaData });
    } catch (e) {
        logger.error(`Error :: ${e}`)
        res.status(500).json({ errMessage: "Internal error. Please try again!!" });
    }
})




module.exports = router;