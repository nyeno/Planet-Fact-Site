import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import data from '../data.json'
import { useParams } from "react-router-dom";

const PlanetBodyTemplate = ({}) => {
  const [currentPage, setCurrentPage]=useState(null)
  const [templateData, setTemplateData]=useState('')

  const params = useParams();

  useEffect(()=>{
    const id =params.id
    setCurrentPage(id)
 },[params])
 
  useEffect(()=>{
    if(currentPage){
     let currentData=data.filter(
         singledata=>singledata.name.toLowerCase()===currentPage.toLowerCase())[0];
         currentData=currentData??data.filter(singledata=>singledata.name==='Mercury')[0];
     setTemplateData(currentData)
     console.log(currentData)
    }
  },[currentPage])

  return (
    <div>
     <div> 
      <BodyLeft>
       
      </BodyLeft>
      <BodyRight>

      </BodyRight>
     </div>


    </div>
  )
}
const BodyLeft = styled.div`
    flex: 1;
`
const BodyRight = styled.div`
    flex: 1;
`


export default PlanetBodyTemplate