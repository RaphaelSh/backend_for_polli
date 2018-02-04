import express from 'express';
import config from '../config';
import jwt from 'jsonwebtoken';

import { User } from '../models/user';

let router = express.Router();

router.post('/', (req, res) => {

    const { identifier, password } = req.body;

    User.findUser(identifier, identifier).then(users => {
        if (!users.length) return res.status(401).json({ errors: { form: 'Invalid Credentials' } });

        const user = users[0];
        user.comparePasswords(password, match => {

            if (!match) return res.status(401).json({ errors: 'Invalid Credentials' });

            const token = jwt.sign({
                id: user._id,
                username: user.username
            }, config.jwtSecret);

            res.json(token);
        }, err => res.status(500).json({ errors: 'internal problem with saving the user: ', err }));
    });
});

export default router;