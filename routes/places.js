const router = require('express').Router();
const axios = require('axios');

router.get('/:placeId', function(request, response) {
    axios
        .get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
        .then(function(result){
            response.json(result)
        })
})

module.exports = router;