import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.servker.cc/api',
    headers: {'Authorization': 'Bearer ' + 'd1b66a703a69e9bc9f63d5142bca339d768a7a49629bbbe6402eefa10368e715602d4f508c78329da9c852680616f1f3b2eccdcb9f24ccd2265e5bcd4e18290f4f5888607746600600febfe03382655179b9aeb96a4d77b19deaa12a5a351b1c3027a5e489a961e3a48fc5e340a0adf327166f291ccc26d0cbd3357b31b8a16e'}
});
instance.post('/flashcards', {
    "data": {
        "name": "fortnite-1",
        "record": [
            {
                "term": "test",
                "definition": "test"
            }
        ]
    }
})
    .then(function (response) {
        console.log(response);
    });