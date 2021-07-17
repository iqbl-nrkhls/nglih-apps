import ComponentInitiator from '../../src/scripts/utils/component-initiator';

import FavoriteButton from '../../src/scripts/components/favorite-button';
import Notif from '../../src/scripts/components/notif';

const addNotifContainer = async () => {
  document.body.innerHTML += '<notif-panel></notif-panel>';
  await ComponentInitiator.init({
    tagName: 'notif-panel',
    component: Notif,
  });
};

const addFavoriteButton = async (restaurant) => {
  document.body.innerHTML += '<favorite-button></favorite-button>';
  await ComponentInitiator.init({
    tagName: 'favorite-button',
    component: FavoriteButton,
    data: restaurant,
  });
};

const createFavoriteButtonPresenterWithNotification = async (restaurant) => {
  await addNotifContainer();
  await addFavoriteButton(restaurant);
};

export { createFavoriteButtonPresenterWithNotification };
