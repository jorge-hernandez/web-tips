
This login implementantion uses the following packages

npm install passport passport-local passport-local-mongoose --save
npm install jsonwebtoken --save

also install mongo-currency for the /models/dishes.js dependency


Note: that logout is not fully implemented. the token must be destroyed.
restarting node or shuting down mongo does not invalidate the token.:


