import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(`
        <h1>About</h1>
        <p>This is the About Route.</p>
    `);
});

export default router;