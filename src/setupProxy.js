module.exports = function(app) {
    app.post('/', (req, res) => {
        res.redirect('/');
    });
};
