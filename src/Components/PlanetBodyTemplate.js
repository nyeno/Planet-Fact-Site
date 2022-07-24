import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import { useParams } from "react-router-dom";

import data from '../data.json'
import { H1, H2, H3, H4, P } from '../Shared/typography';
import Button from '../Shared/Buttons';
import { colors } from '../Shared/colors';
import Image from '../Shared/image';

const PlanetBodyTemplate = ({}) => {
  const [currentPage, setCurrentPage] =useState(null)
  const [templateData, setTemplateData]=useState(data[0])

  const [isActive, onSetActive] = useState(true);
  const [internalActive, onSetInternal] = useState(false);
  const [surfaceActive, onSetSurface] = useState(false);

  const [imgSrc, setImgSrc] = useState(templateData.images.planet)
  const [imgDisp, setImgDsp] = useState(false)

  const [content, setContent] = useState(templateData.overview.content)
  const [source, setSource] = useState(templateData.overview.source)

  const params = useParams();

  //useEffects
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
     setImgSrc(currentData.images.planet)
     //console.log(currentData)
    }
  },[currentPage])

//event handlers for state Change
  const handleOverview = (e) =>{
    onSetActive(true)
    onSetInternal(false)
    onSetSurface(false)
    setImgSrc(templateData.images.planet)
    setContent(templateData.overview.content)
    setSource(templateData.overview.source)
    setImgDsp(false)
    
      //console.log(isActive)
  }

  const handleStructure = (e) =>{
    setImgSrc(templateData.images.internal)
    setContent(templateData.structure.content)
    setSource(templateData.structure.source)
    onSetActive(false)
    onSetInternal(true)
    onSetSurface(false)
    setImgDsp(false)
    //console.log(isActive)
  }
const handleGeology = (e) =>{
  onSetInternal(false)
  onSetActive(false)
  onSetSurface(true)
  setImgDsp(true)
  setImgSrc(templateData.images.planet)
  setContent(templateData.geology.content)
  setSource(templateData.geology.source)
  //console.log(isActive)
  }


  return (
    <div className='planet-fact'>
     <section className='section1'>
      <BodyLeft>
        <Image src= {imgSrc} display={true} />
        <Image src= {templateData.images.geology} display={imgDisp} zIndex={true}/>
      </BodyLeft>
      <BodyRight>
          <H1> {templateData.name} </H1>
          <P style={{margin: "1.2em 0", height: "11em"}}> {content} </P>
          <P style={{color: `${colors.darkGrey}`, marginBottom: "0.2em"}}>
            Source:  
            <a href={source} target="_blank" rel='noreferrer'> Wikipedia </a>
            <img src='./assets/icon-source.svg' alt='Link to planet facts on wikipedia'/> 
          </P>
          <Button activeColor={`${templateData.name.toLowerCase()}`} setActive = {handleOverview} active={isActive}>
            <H3>
              <Span>01</Span>Overview
            </H3>
          </Button>
          <Button activeColor={`${templateData.name.toLowerCase()}`} setActive = {handleStructure} active={internalActive}>
            <H3>
              <Span>02</Span>Internal structure
            </H3>
          </Button>
          <Button activeColor={`${templateData.name.toLowerCase()}`} setActive = {handleGeology} active={surfaceActive}>
            <H3>
              <Span>03</Span>Surface Geology
            </H3>
          </Button>
      </BodyRight>
     </section>
     <section className='section2'>
      <Info>
        <H4 style={{color:`${colors.lightGrey}`}}>Rotation Time</H4>
        <H2>{templateData.rotation}</H2>  
      </Info>
      <Info>
        <H4 style={{color:`${colors.lightGrey}`}}>Revolution Time</H4>
        <H2>{templateData.revolution}</H2>  
      </Info>
      <Info>
        <H4 style={{color:`${colors.lightGrey}`}}>Radius</H4>
        <H2>{templateData.radius}</H2>  
      </Info>
      <Info>
        <H4 style={{color:`${colors.lightGrey}`}}>Average Temperature</H4>
        <H2>{templateData.temperature}</H2>  
      </Info>
     </section> 

    </div>
  )
}
const BodyLeft = styled.div`
   position: relative; 
   display: flex;
   flex: 2;
`
const BodyRight = styled.div`
   flex: 1;
`
const Span = styled.span`
  margin-right: 1em;
  color: ${colors.lightGrey}
`
const Info = styled.div`
border: 1px solid ${colors['darkGrey']};
padding: 0.625em 1.25em;
margin: 1em 0;
display:flex;
flex-direction: column;
justify-content:left;
`

export default PlanetBodyTemplate