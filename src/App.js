import React, { useState } from 'react';
import Header from "./components/Header/header";
import Wrapper from "./components/Wrapper/wrapper";
import Table from "./components/Table/table";
import Search from "./components/Search/search";
import villainsJSON from "./villains.json"




function App() {

    const [villains, setVillains] = useState({
      all: villainsJSON,
      filtered: villainsJSON})
    const [sortName, setName] = useState("");
    const [sortYear, setYear] = useState("");
    
    const findVillain = event => {
      
        const filtered = villains.all.filter( ({name}) => name.toLowerCase().includes(event.target.value.toLowerCase()))
        setVillains({
          ...villains,
          filtered
        })
    }

    const sortByName = () => {
      
      let sortedNames = villains.filtered.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;


      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB){
        comparison = -1;
      } return comparison
    })

    if(sortName === "DESC"){
      sortedNames.reverse();
      setName("ASC");
      document.getElementById("up").style.display="block";
      document.getElementById("down").style.display="none";
    } else {
      setName("DESC");
      document.getElementById("down").style.display="block";
      document.getElementById("up").style.display="none";
    }
    setVillains({ ...villains, sortedNames });
  }

  const sortByYear = () => {
      
    let sortedYears = villains.filtered.sort((a, b) => {
    const yearA = a.year;
    const yearB = b.year;


    let comparison = 0;
    if (yearA > yearB) {
      comparison = 1;
    } else if (yearA < yearB){
      comparison = -1;
    } return comparison
  })

  if(sortYear === "DESC"){
    sortedYears.reverse();
    setYear("ASC"); 
  } else {
    setYear("DESC");
  }
  setVillains({ ...villains, sortedYears });
}

  return (
    <>
      <Header></Header>
        <Search handleSearch={findVillain}>
        </Search>
        <Wrapper>
        <Table villains={villains.filtered} sortByName={sortByName} sortByYear={sortByYear}>
        </Table>
      </Wrapper>
    </>
  );
}

export default App;
