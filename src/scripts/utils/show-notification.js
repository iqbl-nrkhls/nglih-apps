const showNotification = ({ message, color }) => {
  const notif = document.querySelector('notif-panel');
  notif.setAttribute('message', message);
  notif.setAttribute('color', color);
};

export default showNotification;
