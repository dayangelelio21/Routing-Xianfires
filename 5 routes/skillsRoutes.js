import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(`
        <h1>Skills</h1>
        <p>This is the Skills Route.</p>
    `);
});

export default router;