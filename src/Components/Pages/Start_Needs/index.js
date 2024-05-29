import React from 'react';
import './index.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link, useNavigate } from 'react-router-dom';


const BasicNeeds = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className='container-basicneeds'>
      <div className='main-context'>
     
        <div className='first-div-top'>
          <div>
          <DropdownButton id="dropdown-item-button" title="Logo Design" style={{backgroundColor:"transparent"}}>
            <Dropdown.Item href='https://www.canva.com/'>Canva</Dropdown.Item>
            <Dropdown.Item href='https://www.freelogodesign.org/'>FreeLogoDesign</Dropdown.Item>
            <Dropdown.Item href='https://logomakr.com/'>LogoMakr</Dropdown.Item>
            <Dropdown.Item href='https://openlogos.org/'>Openlogos</Dropdown.Item>
          </DropdownButton>
          </div>
          <div>
          <DropdownButton id="dropdown-item-button" title="Icons" style={{backgroundColor:"transparent"}}>
            <Dropdown.Item href='https://simpleicons.org/'>simpleicons</Dropdown.Item>
            <Dropdown.Item href='https://www.flaticon.com/'>Flaticon</Dropdown.Item>
            <Dropdown.Item href='https://fontawesome.com/'>FontAwesome</Dropdown.Item>
            <Dropdown.Item href='https://ionic.io/ionicons'>ionIcons</Dropdown.Item>
            <Dropdown.Item href='https://material.io/resources/icons/'>Material Design Icons</Dropdown.Item>
          </DropdownButton>
          </div>
        </div>

        <div className='first-div-bottom'>
        <DropdownButton id="dropdown-item-button" title="Layout Templates" style={{backgroundColor:"transparent"}}>
          <Dropdown.Item href='https://getbootstrap.com/'>Bootstrap</Dropdown.Item>
          <Dropdown.Item href='https://get.foundation/'>Foundation</Dropdown.Item>
          <Dropdown.Item href='https://tailwindcss.com/'>Tailwind CSS</Dropdown.Item>
          <Dropdown.Item href='https://semantic-ui.com/'>Semantic UI</Dropdown.Item>
        </DropdownButton>
        </div>

      
        <div className='second-div-top'>
          <div>
        <DropdownButton id="dropdown-item-button" title="Fonts" style={{backgroundColor:"transparent"}} >
          <Dropdown.Item href='https://fonts.google.com/'>Google Fonts</Dropdown.Item>
          <Dropdown.Item href='https://www.fontsquirrel.com/'>Font Squirrel</Dropdown.Item>
          <Dropdown.Item href='https://fonts.adobe.com/'>Adobe Fonts</Dropdown.Item>
        </DropdownButton>
          </div>
          <div>
        <DropdownButton id="dropdown-item-button" title="color" style={{backgroundColor:"transparent"}}>
          <Dropdown.Item href='https://coolors.co/'>Colors</Dropdown.Item>
          <Dropdown.Item href='https://color.adobe.com/create'>Adobe Color</Dropdown.Item>
          <Dropdown.Item href='https://colorhunt.co/'>Color Hunt</Dropdown.Item>
          <Dropdown.Item href='https://www.materialpalette.com/'>Material Palette</Dropdown.Item>
        </DropdownButton>
          </div>

          
        </div>
        <div className='second-div-bottom'>
        <DropdownButton id="dropdown-item-button" title="images" style={{backgroundColor:"transparent"}}>
          <Dropdown.Item href='https://unsplash.com/'>Unsplash</Dropdown.Item>
          <Dropdown.Item href='https://www.pexels.com/'>Pexels</Dropdown.Item>
          <Dropdown.Item href='https://pixabay.com/'>Pixabay</Dropdown.Item>
          <Dropdown.Item href='https://www.freepik.com/'>Freepik</Dropdown.Item>
        </DropdownButton>
        </div>


        <div className='third-div-top'>
          <div>
          <DropdownButton id="dropdown-item-button" title="navigation" style={{backgroundColor:"transparent"}}>
          <Dropdown.Item href='https://getbootstrap.com/docs/5.0/components/navbar/'>Bootstrap Navigation</Dropdown.Item>
          <Dropdown.Item href='https://semantic-ui.com/collections/menu.html'>Semantic UI Menu</Dropdown.Item>
          <Dropdown.Item href='https://get.foundation/sites/docs/navigation.html'>Foundation Navigation</Dropdown.Item>
        </DropdownButton>
          </div>

          <div>
          <DropdownButton id="dropdown-item-button" title="Button Action" style={{backgroundColor:"transparent"}}>
            <Dropdown.Item href='https://buttondown.email/'>Buttondown</Dropdown.Item>
            <Dropdown.Item href='https://www.bestcssbuttongenerator.com/'>Button Generator</Dropdown.Item>
            <Dropdown.Item href='https://getbootstrap.com/docs/5.0/components/buttons/'>Bootstrap Buttons</Dropdown.Item>
          </DropdownButton>
          </div>
        </div>
        <div className='third-div-bottom'>
        <DropdownButton id="dropdown-item-button" title="search" style={{backgroundColor:"transparent"}}>
          <Dropdown.Item href='https://developers.google.com/custom-search'>Google Custom Search Engine</Dropdown.Item>
          <Dropdown.Item href='https://www.algolia.com/'>Algolia</Dropdown.Item>
          
        </DropdownButton>
        </div>
        <button id='button-needs'  onClick={handleBack} className='btn btn-secondary'> Back</button>
      </div>
    </div>
  );
};

export default BasicNeeds;
