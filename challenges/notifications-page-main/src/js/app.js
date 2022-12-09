const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


const headerCounter = $('.header__counter');
const readBtn = $('.header__all-read');
const unreadNotifications = $$('.notification--unread');


window.onload = () => {
  countNotification();

  readBtn.addEventListener('click', () => {
    unreadNotifications.forEach(notification => markAsRead(notification));
  });

  unreadNotifications.forEach(notification => {
    notification.addEventListener('click', () => markAsRead(notification));
  });
}

const countNotification = () => {
  const notifications = $$('.notification--unread');
  headerCounter.textContent = notifications.length;
}

const markAsRead = (notification) => {
  notification.classList.remove('notification--unread');
  countNotification();
}