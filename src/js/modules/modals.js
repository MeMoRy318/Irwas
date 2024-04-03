const calckScroll = () => {
  const div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
};

const openModal = (triggerSelector, modalSelector) => {
  const triggers = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);
  const modals = document.querySelectorAll('[data-modal]');

  triggers.forEach(item => {
    item.addEventListener('click', (e)=>{
      if(e.target){
        e.preventDefault();
      }

      modals.forEach(item => {
        document.body.style.marginRight = `${calckScroll()}px`;
        item.style.display = 'none';
      });
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
};

const closeModal = ( closeSelector, modalSelector ) =>{
  const close = document.querySelector(closeSelector);
  const modal = document.querySelector(modalSelector);

  modal.addEventListener('click',(e) => {
    const target = e.target;
    if(target === modal || target === close){
      document.body.style.marginRight = '0px';
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
};

export { openModal, closeModal, calckScroll };