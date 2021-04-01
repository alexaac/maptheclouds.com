const mongoose = require("mongoose");
const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

mongoose.Promise = global.Promise;

const slug = require("slugs");

const projectsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Please enter the project name",
    },
    slug: String,
    description: {
      type: String,
      trim: true,
    },
    tags: [String],
    created: {
      type: Date,
      default: Date.now,
    },
    location: {
      type: {
        type: String,
        default: "Point",
      },
      coordinates: [
        {
          type: Number,
          required: "You must supply coordinates!",
        },
      ],
      address: {
        type: String,
        default: "Paris",
        required: "You must supply an address!",
      },
    },
    photo: String,
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: "You must supply an author",
    },
    type: {
      type: String,
      default: "personal",
      required: "You must supply a type: personal or work",
    },
    parent_project: {
      type: String,
      default: "ungrouped",
    },
    hide: {
      type: String,
      default: false,
    },
    project_solution: {
      type: String,
      required: "You must supply a solution",
    },
    project_goal: {
      type: String,
      required: "You must supply a goal",
    },
    more_details: {
      type: String,
      required: "You must supply details",
    },
    video_link: {
      type: String,
    },
    weblink: {
      type: String,
      // required: "You must supply a web link",
    },
    github: {
      type: String,
    },
    blog: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Define our indexes
projectsSchema.index({
  name: "text",
  description: "text",
});

projectsSchema.index({ location: "2dsphere" });

projectsSchema.pre("save", async function (next) {
  if (!this.isModified("name")) {
    next(); // skip it
    return; // stop this function from running
  }
  this.slug = slug(this.name);
  // find other projects that have a slug of brew, brew-1, brew-2
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, "i");
  const projectsWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (projectsWithSlug.length) {
    this.slug = `${this.slug}-${projectsWithSlug.length + 1}`;
  }

  next();

  // TODO make more resiliant so slugs are unique
});

projectsSchema.pre("save", function (next) {
  // clean HTML on create
  this.name = DOMPurify.sanitize(this.name);
  this.description = DOMPurify.sanitize(this.description);

  next();
});

projectsSchema.pre("findOneAndUpdate", async function (next) {
  // clean HTML on update
  const data = this.getUpdate();
  data.name = DOMPurify.sanitize(data.name);
  data.description = DOMPurify.sanitize(data.description);
  await this.update({}, data).exec();

  next();
});

projectsSchema.statics.getTagsList = function () {
  return this.aggregate([
    { $unwind: "$tags" },
    { $group: { _id: "$tags", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);
};

module.exports = mongoose.model("project", projectsSchema);
