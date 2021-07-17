Feature('Customer Review');

Scenario('showing customer reviews of the restaurant', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__content a');
  I.click(locate('.restaurant__content a').first());

  I.seeElement('.llist__customer_review li');
});

Scenario('send customer riview for the restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__content a');
  I.click(locate('.restaurant__content a').first());

  I.seeElement('form #reviewer_name');
  I.fillField('name', 'Daku');
  I.seeElement('form #review_content');
  I.fillField('review', 'Ini adalah reviewku, mana review mu');
  I.click('form input[type="submit"]');

  I.see('success', '.notif__message');
});
