import {calckScroll} from './modals';

const images = () => {
  const works = document.querySelector('.works');
  const modal = document.createElement('div');
  const bigImg = document.createElement('img');
  
  works.addEventListener('click',(event)=> {
    const target = event.target;
    event.preventDefault();

    if(target && target.classList.contains('preview')){      
      
      const path = target.parentElement.getAttribute('href');

      bigImg.setAttribute('src',path);
      bigImg.style.width = '40vw';
      bigImg.style.height = '60vh';

      modal.classList.add('popup');
      modal.style.display = 'block';
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
      
      modal.appendChild(bigImg);
      works.appendChild(modal);

      document.body.style.marginRight = `${calckScroll()}px`;
      document.body.style.overflow = 'hidden';
      
    }
  });

  modal.addEventListener('click',(event) => {
    const target = event.target;
    if(target && target.classList.contains('popup')){
      document.body.style.overflow = '';
      document.body.style.marginRight = '0px';
      modal.remove();
    }
  });
};

export default images;