const indexRoute = (req, res) => {

    console.log(req.params);

    res.send(req.params);

};

export default indexRoute;