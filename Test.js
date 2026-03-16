app.post('/getUserData', async (req, res) => {
    const { username } = req.body;
    const user = await db.collection('users').findOne({ username: username });
    if (!user) {
        return res.status(404).send('User not found');
    }
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).send('Forbidden');
    }
    res.json(user);
});
