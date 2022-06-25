require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const Image = require("./models/image");
const middleware = require("./middlewares");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/images", async (req, res, next) => {
  try {
    const {
      per_page = 10,
      page = 1,
      sort_field = "created_at",
      sort_direction = "desc",
      search = "",
    } = req.query;
    const limit = parseInt(per_page);
    const sort = { [sort_field]: sort_direction };
    const skip = (parseInt(page) - 1) * limit;
    const query = search ? { name: { $regex: search, $options: "i" } } : {};

    const images = await Image.find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .exec();
    res.json(images);
  } catch (error) {
    next(error);
  }
});

app.get("/api/images/:id", async (req, res, next) => {
  try {
    const image = await Image.findById(req.params.id).exec();

    if (!image) return res.status(404).end();

    res.json(image);
  } catch (error) {
    next(error);
  }
});

app.post("/api/images", async (req, res, next) => {
  try {
    const { name, url } = req.body;
    const image = await Image.create({ name, url });

    res.status(201).json(image);
  } catch (error) {
    next(error);
  }
});

app.delete("/api/images/:id", async (req, res, next) => {
  try {
    if (req.headers.authorization !== process.env.DELETE_PASSWORD) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const image = await Image.findByIdAndRemove(req.params.id).exec();

    if (!image) return res.status(404).end();

    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

app.put("/api/images/:id", async (req, res, next) => {
  try {
    const { name, url } = req.body;

    const updatedImage = await Image.findByIdAndUpdate(
      req.params.id,
      { name, url },
      { new: true, runValidators: true, context: "query" }
    ).exec();

    res.json(updatedImage);
  } catch (error) {
    next(error);
  }
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Server is running on port " + PORT));
