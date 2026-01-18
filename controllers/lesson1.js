const johnathonRoute = (req, res) => {
    res.send('Johnathon Staples');
};

const angelaRoute = (req, res) => {
    res.send('Angela Staples');
};



module.exports = {
    johnathonRoute,
    angelaRoute
};