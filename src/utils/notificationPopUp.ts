(async() => {
    Notification.requestPermission();
    const showNotification = () => {
      const notification = new Notification('FreeGames.io', {
        body: 'New games are available! Check them out now!',
        icon: './img/js.png'
      });
      setTimeout(notification.close.bind(notification), 5000);
      notification.addEventListener('click', () => {
        window.open('https://www.javascripttutorial.net/web-apis/javascript-notification/', '_blank');
      });
    }
})();