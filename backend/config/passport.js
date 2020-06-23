const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const PORT = process.env.PORT || 4769;

passport.serializeUser(function (user, cb) {
	console.log("serialize", " => ", user);

	cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
	console.log("deserialize", " => ", obj);

	cb(null, obj);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: `http://localhost:${PORT}/auth/google/callback`,
		},
		(accessToken, refreshToken, profile, cb) => {
			/*User.findOrCreate({ googleId: profile.id }, function (err, user) {
				return cb(err, user);
            });*/

			console.log("accessToken => ", accessToken);
			console.log("refreshToken => ", refreshToken);

			return cb(null, profile);
		}
	)
);
