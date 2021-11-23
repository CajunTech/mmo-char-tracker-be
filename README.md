# mmo-char-tracker-be
Backend for New World Character Tracker
<br>
Frontend Repo - https://github.com/CajunTech/mmo-char-tracker-fe
<br>
Frontend Readme (primary for project)- https://github.com/CajunTech/mmo-char-tracker-fe/edit/main/README.md
<br>
<br>
![nwcharmain](https://user-images.githubusercontent.com/89054252/143054465-233b2f08-0aed-4c14-a41c-681a44ef7310.png)


Link to application - https://nw-char.surge.sh/
<br>

# Technologies used:</br>
React, Node.js, PostgreSQL, JavaScript, CSS (Bootstrap), Sequelize ORM, bcrypt, Amazon S3, Surge and Heroku for hosting
<br>

# Backend approach:
I leveraged Heorku for hosting with Postgresql add-on and have 4 node.js route/controller pairs acting as APIs for the application frontend. Full CRUD was integrated for all items.
<br>

# Controllers:
- auth
- users
- characters
- images

#Code snippets:
bcrypt utilization
'''js
const signup = (req, res) => {
	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
		}
		bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
			if (err) {
				res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
			}
			req.body.password = hashedPwd;
			User.create(req.body);
			res
				.status(constants.SUCCESS)
				.json({
					user: req.body.username,
				})
		});
	});
};
'''
<br>

# Known issues:
- None at this time

<br>

# What's left:
- Possible implementation of JSOn Web Tokens
- Realignment of functions to appropriate controllers

<br>
<br>
<br>
This website may contain copyrighted material, the use of which may not have been specifically authorized by the copyright owner. The material contained in this website is distributed without profit for research and educational purposes.
This should constitute a ‘fair use’ of any such copyrighted material (referenced and provided for in section 107 of the US Copyright Law).
If you wish to use any copyrighted material from this site for purposes of your own that go beyond ‘fair use’, you must obtain expressed permission from the copyright owner.




