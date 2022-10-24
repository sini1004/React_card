import React from 'react';

function Avata({image, isNew}){
  return(
    <div className='avata'>
      <div className='photo'>
          <img src={image} alt='avata' />
      </div>
      {isNew && <span className='new'>new</span>}
      {/*</div>{{isNew ? <span className='new'>new</span> : null}*/}
    </div>
  )
}

Avata.defaultProps = {image: 'https://images.unsplash.com/photo-1659256955443-503d420eeaf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'}
export default Avata;