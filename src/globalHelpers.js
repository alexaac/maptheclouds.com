const fs = require("fs");
const mongoose = require("mongoose");
require("./models/Project");

const { nest } = require("d3-collection");
const { data } = require("./data");

// Create a d3 Object with a subset of functions
const d3 = Object.assign(
  {},
  {
    nest,
  }
);

const getNestedCategories = (projects) => {
  let nestedData = d3
    .nest()
    .key((d) => {
      return d.parent_project || "ungrouped";
    })
    .entries(projects);

  return nestedData.sort((a, b) => ("" + a.created).localeCompare(b.created));
};

const arrayToObject = (array) =>
  array.reduce((obj, item) => {
    obj[item.key] = item;
    return obj;
  }, {});

const getProjectsBySlug = (projects) => {
  const convert = (arr, keyName) =>
    arr.reduce((a, item) => {
      a[item[keyName]] = item;
      return a;
    }, {});

  let individualData = convert(projects, "slug");

  return individualData;
};

const helpers = {
  dump: (obj) => JSON.stringify(obj, null, 2),
  globals: {
    siteName: `MapTheClouds`,
    icon: (name) => fs.readFileSync(`src/icons/${name}.svg`),
    menu: data.menu,
    myTitle: data.title,
    myLogoTitle: data["logo-title"],
    fontsList: data.fontsList,
    radioList1: data.radioList1,
    radioList2: data.radioList2,
    hero: data.hero,
  },
};

// Connect to our Database and handle any bad connections
mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.error(`🚫 → ${err.message}`);
  }
);

const Project = mongoose.model("project");

const getProjects = async function (query) {
  return Project.find()
    .sort({ created: "desc" })
    .exec()
    .then((returnedProjects) => {
      let visibleProjects = returnedProjects.filter(
        (item) => item.hide === "false"
      );

      helpers.globals.nestedArticles = arrayToObject(
        getNestedCategories(visibleProjects)
      );
      helpers.globals.projectsBySlug = getProjectsBySlug(visibleProjects);
      helpers.globals.projects = visibleProjects;

      return helpers;
    })
    .catch((err) => {
      console.log(err);

      helpers.globals.nestedArticles = getNestedCategories(data.projectsBackup);
      helpers.globals.projectsBySlug = getProjectsBySlug(data.projectsBackup);
      helpers.globals.projects = data.projectsBackup;

      return helpers;
    });
};

exports.getHelpers = () => getProjects();
