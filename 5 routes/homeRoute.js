import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to Ardee's XianFire Application</h1>
        <p>This is the Home Route.</p>
    `);
});

export default router;