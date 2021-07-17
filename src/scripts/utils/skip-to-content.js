const skipToContent = () => {
  const skipLink = document.querySelector('.skip-link');
  skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#mainContent').focus();
  });
};

export default skipToContent;
