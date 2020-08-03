import React, { useState } from 'react';
import Header from "./components/Header/header";
import Wrapper from "./components/Wrapper/wrapper";
import Table from "./components/Table/table";
import Search from "./components/Search/search";
import villainsJSON from "./villains.json"




function App() {

    const [villains, setVillains] = useState({
      all: villainsJSON,
      filtered: villainsJSON
    })
    
    const findVillain = event => {
      
        const filtered = villains.all.filter( ({name}) => name.toLowerCase().includes(event.target.value))
        setVillains({
          ...villains,
          filtered
        })
    }

  return (
    <>
      <Header></Header>
      <Wrapper>
        <Search handleSearch={findVillain}>
        </Search>
        <Table villains={villains.filtered}>
        </Table>
      </Wrapper>
    </>
  );
}

export default App;
