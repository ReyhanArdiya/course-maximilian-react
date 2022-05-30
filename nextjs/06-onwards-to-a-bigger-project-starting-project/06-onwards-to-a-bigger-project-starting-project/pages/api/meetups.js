export default (req, res) => {
    console.log(req.headers)

    switch (req.method) {
        case 'POST':
            const {title, image, address, description} = req.body;
    }

    res.status(404).send('Hello World');
}