import express from "express";

import homeRoutes from "./homeRoute.js";
import aboutRoutes from "./aboutRoutes.js";
import projectsRoutes from "./projectsRoutes.js";
import skillsRoutes from "./skillsRoutes.js";
import contactRoutes from "./contactRoutes.js";

const router = express.Router();

// Home Route
router.use("/", homeRoutes);

// About Route
router.use("/about", aboutRoutes);

// Projects Route
router.use("/projects", projectsRoutes);

// Skills Route
router.use("/skills", skillsRoutes);

// Contact Route
router.use("/contact", contactRoutes);

export default router;