exports.verifyToken = function(req, res, next) {
    const token = req.headers['authorization'];
    if (!token || token != process.env.TOKEN) {
        return res.status(400).send("Method not allowed.")
    }
    next();
}