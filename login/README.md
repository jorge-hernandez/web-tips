
This is a token based register user / login / logout and endpoint access protection.

Is implemented with: 

- passport passport-local
- passport-local-mongoose
- jsonwebtoken

It also requires adding express-session.  The autentication control functionality es added to the res object.  Passport keeps track of logged users in the req object and stores it in the session in order to be retrieved when an independent http request is executed.

Sessions are implemented as files in the server side.
 
