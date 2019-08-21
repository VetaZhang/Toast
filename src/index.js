import styles from './style.less';

const toastContainerId = 'activity-toast-container';
let containerDom = null;
let itemId = 0;

const createToastContainer = () => {
  if (!containerDom) {
    containerDom = document.createElement('div');
    containerDom.id = toastContainerId;
    containerDom.className = `${styles.container}`;
    document.body.appendChild(containerDom);
  }
};

const toastItemId = () => `toast-${itemId++}`;

const createToastItem = (msg, type) => {
  const toastItem = document.createElement('div');
  toastItem.className = styles.toastItem;
  toastItem.id = toastItemId();

  const toastContent = document.createElement('div');
  toastContent.className = `${styles.toastContent} ${styles[type]}`;
  toastContent.innerText = msg;

  toastItem.appendChild(toastContent);

  return toastItem;
};

const hideToast = (toastItem) => {
  if (containerDom) {
    setTimeout(() => {
      containerDom.removeChild(toastItem);
    }, 3000);
  }
};

const showToast = (msg, type) => {
  createToastContainer();

  if (containerDom) {
    const toastItem = createToastItem(msg, type);
    containerDom.appendChild(toastItem);
    toastItem.className += ` ${styles.show}`;
    hideToast(toastItem);
  }
};

const toast = {
  msg: msg => showToast(msg, 'msg'),
};

export default toast;
