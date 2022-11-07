const{ Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hola Mundo usando rutas!"
        }
    );
})
module.exports = router;