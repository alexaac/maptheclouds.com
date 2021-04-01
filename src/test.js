const test = require("tape");
const globalHelpers = require("./globalHelpers");

test("Has menu", function (t) {
  t.plan(10);

  const testItem = (item, expected) => {
    t.equal(globalHelpers.helpers.globals[item] !== undefined, true);
  };

  testItem("siteName", 1);
  testItem("icon", 1);
  testItem("menu", 1);
  testItem("myLogoTitle", 1);
  testItem("fontsList", 1);
  testItem("radioList1", 1);
  testItem("radioList2", 1);
  testItem("nestedArticles", 1);
  testItem("projects", 1);

  t.equal(globalHelpers.helpers.globals.myTitle !== undefined, false);
});
