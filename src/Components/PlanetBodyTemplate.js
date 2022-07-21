import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import data from '../data.json'
import { useParams } from "react-router-dom";
import { H1, H2, H3, H4, P } from '../Shared/typography';
import Button from '../Shared/Buttons';
import { colors } from '../Shared/colors';

const PlanetBodyTemplate = ({}) => {
  const [currentPage, setCurrentPage] =useState(null)
  const [templateData, setTemplateData]=useState(data[0])

  const params = useParams();

  //let myData = data[0];
  //console.log(templateData)

  useEffect(()=>{
    const id =params.id
    setCurrentPage(id)
 },[params])

  useEffect(()=>{
    if(currentPage){
     let currentData=data.filter(
         singledata => singledata.name.toLowerCase() === currentPage.toLowerCase())[0];
         currentData = currentData??data.filter(singledata=>singledata.name==='Mercury')[0];
     setTemplateData(currentData)
     //console.log(currentData)
    }
  },[currentPage])

  const [isActive, onSetActive] = useState(false);

  const handleClick = (e) =>{
      onSetActive(true)
      console.log(isActive)
  }
  return (
    <div>
     <div> 
      <BodyLeft>
        <img src= {templateData.images.planet} />
      </BodyLeft>
      <BodyRight>
          <H1> {templateData.name} </H1>
          <P> {templateData.overview.content} </P>
          <Button activeColor={colors.mercury} setActive = {handleClick} active={false} hoverColor={colors.darkGrey}>overview</Button>
      </BodyRight>
     </div>


    </div>
  )
}
const BodyLeft = styled.div`
   
`
const BodyRight = styled.div`
 
`


export default PlanetBodyTemplate