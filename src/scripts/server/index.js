import express from "express";
import path from "path";

import indexRoute from "./routes/index";
import otherRoutes from "./routes/others";

const app = express();
app.use(express.static(path.join(__dirname, "../public")));

const router = express.Router();
// router.get('/', indexRoute);
router.get('*', otherRoutes);

app.use('/', router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});