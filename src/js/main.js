import './slider';

import changeModalState from './modules/changeModalState';
import forms from './modules/forms';
import images from './modules/images';
import { closeModal, openModal } from './modules/modals';
import tabs from './modules/tabs';
import timer from './modules/timer';


window.addEventListener('DOMContentLoaded', () => {
  const deadline = '2024-06-01';
  const modalState = {};
  changeModalState(modalState);
  // MODALS

  openModal('.header_btn','.popup_engineer');
  openModal('.phone_link','.popup');
  openModal('.popup_calc_btn','.popup_calc');
  openModal('.popup_calc_content .popup_calc_button', '.popup_calc_profile');
  openModal('.popup_calc_profile_button','.popup_calc_end');

  closeModal('.popup_engineer .popup_close strong','.popup_engineer');
  closeModal('.popup .popup_close strong','.popup');
  closeModal('.popup_calc_close strong','.popup_calc');
  closeModal('.popup_dialog strong','.popup_calc_profile');
  closeModal('.popup_calc_end strong', '.popup_calc_end');

  // TABS

  tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabs('.balcon_icons','.balcon_icons_img','.big_img > img','do_image_more');
  

  // FORMS
  forms(modalState);

  // TIMER
  timer(deadline);

  // IMAGES
  images();

});

