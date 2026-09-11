import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(`
        <h1>Contact</h1>
        <p>This is the Contact Route.</p>
    `);
});

export default router;