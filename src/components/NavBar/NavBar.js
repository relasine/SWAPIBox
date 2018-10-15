import React from 'react'

const NavBar = ({currentSelection, handleSelection}) => {
  return(
    <section className='button-section'>
      <Button 
        currentSelection={currentSelection}
        handleSelection={handleSelection} 
        buttonName='people' 
      />
      <Button 
        currentSelection={currentSelection}
        handleSelection={handleSelection} 
        buttonName='planets' 
      />              
      <Button 
        currentSelection={currentSelection}
        handleSelection={handleSelection} 
        buttonName='vehicles' 
      />
      <Button 
        currentSelection={currentSelection}
        handleSelection={handleSelection} 
        buttonName='favorites' 
      />
    </section>

  )
}

export default NavBar