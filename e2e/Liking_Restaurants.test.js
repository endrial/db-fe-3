// eslint-disable-next-line no-unused-vars, no-undef
const { I } = inject();

// eslint-disable-next-line no-undef
Feature("Restaurant Favorites");

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage("/");
});

// eslint-disable-next-line no-undef
Scenario("Liking a restaurant", async ({ I }) => {
  I.waitForElement(".resto-item_description", 5);
  I.seeElement(".resto-item_description");
  I.click(".resto-item > a ");

  I.waitForElement("#likeButton", 2);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".resto-item_name", 10);
  I.seeElement(".resto-item_name");
});

// eslint-disable-next-line no-undef
Scenario("Unliking a restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.waitForElement(".resto-item_description", 5);
  I.seeElement(".resto-item_description");
  I.click(".resto-item > a ");

  I.waitForElement("#likeButton", 2);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".resto-item_description", 5);
  I.seeElement(".resto-item_description");

  I.click(".resto-item > a ");
  I.waitForElement("#likeButton", 2);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.saveScreenshot("empty_state_debug.png");

  I.waitForText("You don't have a favourite restaurant.", 10, "body");
  I.see("You don't have a favourite restaurant.", "body");
});
