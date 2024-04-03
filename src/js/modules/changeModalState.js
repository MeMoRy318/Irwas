import checkNumberImput from './checkNumberImput';

const changeModalState = (state) => {
  const balconIcons = document.querySelector('.balcon_icons');
  const inputWidth = document.querySelector('#width');
  const inputHeight = document.querySelector('#height');
  const viewType = document.querySelector('#view_type');
  const checkbox = document.querySelectorAll('[name = "checkbox-test"]');

  const handleInputChange = ( event, state, property ) => {
    const target = event.target;
    checkNumberImput(target);
    state[property] = target.value;
  };

  balconIcons.addEventListener('click', ( event )=>{
    const target = event.target;
    if(target && target.getAttribute('alt')){
      state.design = target.getAttribute('alt');
    }
  });

  viewType.addEventListener('change',( event )=>{
    state.type = event.target.value;
  });

  inputWidth.addEventListener('input', ( event )=> handleInputChange( event, state, 'width' ));
  inputHeight.addEventListener('input', ( event )=> handleInputChange( event, state, 'height' ));

  checkbox.forEach((item,index) => {
    item.addEventListener('change', () => {
      state.poriRoku = index === 0 ? 'cold' : 'warm';
      checkbox.forEach(value => {
        if(value !== item){
          value.checked = false;
        }
      });
      
    });
  });
 
};

export default changeModalState;