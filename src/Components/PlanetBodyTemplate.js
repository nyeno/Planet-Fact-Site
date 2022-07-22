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

  let myData = `colors.${templateData.name.toLowerCase()}`;
  console.log(myData)

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
      //console.log(isActive)
  }
  return (
    <div>
     <section>
      <BodyLeft>
        <img src= {templateData.images.planet} />
      </BodyLeft>
      <BodyRight>
          <H1> {templateData.name} </H1>
          <P> {templateData.overview.content} </P>
          <Button activeColor={`${templateData.name.toLowerCase()}`} setActive = {handleClick} active={isActive} hoverColor={colors.darkGrey}>
            <H3>
              <Span>01</Span>Overview
            </H3>
          </Button>
          <Button activeColor={`${templateData.name.toLowerCase()}`} setActive = {handleClick} active={isActive} hoverColor={colors.darkGrey}>
            <H3>
              <Span>02</Span>Internal structure
            </H3>
          </Button>
          <Button activeColor={`${templateData.name.toLowerCase()}`} setActive = {handleClick} active={isActive} hoverColor={colors.darkGrey}>
            <H3>
              <Span>03</Span>Surface Geology
            </H3>
          </Button>
      </BodyRight>
     </section>
     <section>
      <Button activeColor={`dark`}  active={true}>
        <H4>Rotation Time</H4>
        <H2>{templateData.rotation}</H2>  
      </Button>
      <Button activeColor={`dark`}  active={true}>
        <H4>Revolution Time</H4>
        <H2>{templateData.revolution}</H2>  
      </Button>
      <Button activeColor={`dark`}  active={true}>
        <H4>Radius</H4>
        <H2>{templateData.radius}</H2>  
      </Button>
      <Button activeColor={`dark`}  active={true}>
        <H4>Average Temperature</H4>
        <H2>{templateData.temperature}</H2>  
      </Button>
     </section> 

    </div>
  )
}
const BodyLeft = styled.div`
   
`
const BodyRight = styled.div`
 
`
const Span = styled.span`
  margin-right: 1em;
`


export default PlanetBodyTemplate