import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(`
        <h1>Projects</h1>
        <p>This is the Projects Route.</p>
    `);
});

export default router;