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
  const [sortName, setName] = useState("");
  const [sortYear, setYear] = useState("");
  const [sortAlias, setAlias] = useState("");
  const [sortAbility, setAbility] = useState("")

  const hideArrows = () => {
    document.getElementById("up").style.display = "none";
    document.getElementById("down").style.display = "none";
    document.getElementById("numUp").style.display = "none";
    document.getElementById("numDown").style.display = "none";
    document.getElementById("aliasUp").style.display = "none";
    document.getElementById("aliasDown").style.display = "none";
    document.getElementById("abilityUp").style.display = "none";
    document.getElementById("abilityDown").style.display = "none";
  }

  const findVillain = event => {

    const filtered = villains.all.filter(({ name }) => name.toLowerCase().includes(event.target.value.toLowerCase()))
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
      } else if (nameA < nameB) {
        comparison = -1;
      } return comparison
    })

    if (sortName === "DESC") {
      sortedNames.reverse();
      setName("ASC");
      hideArrows();
      document.getElementById("up").style.display = "block";
    } else {
      setName("DESC");
      hideArrows();
      document.getElementById("down").style.display = "block";
    }
    setVillains({ ...villains, sortedNames });
  }

  const sortByYear = () => {
    let sortedYears = villains.filtered.sort((a, b) => {
      const yearA = a.firstAppearance;
      const yearB = b.firstAppearance;

      let comparison = 0;
      if (yearA > yearB) {
        comparison = 1;
      } else if (yearA < yearB) {
        comparison = -1;
      } return comparison
    })

    if (sortYear === "DESC") {
      sortedYears.reverse();
      setYear("ASC");
      hideArrows();
      document.getElementById("numUp").style.display = "block";
    } else {
      setYear("DESC");
      hideArrows();
      document.getElementById("numDown").style.display = "block";
    }
    setVillains({ ...villains, sortedYears });
  }

  const sortByAlias = () => {
    let sortedAlias = villains.filtered.sort((a, b) => {
      const aliasA = a.alias;
      const aliasB = b.alias;

      let comparison = 0;
      if (aliasA > aliasB) {
        comparison = 1;
      } else if (aliasA < aliasB) {
        comparison = -1;
      } return comparison
    })

    if (sortAlias === "DESC") {
      sortedAlias.reverse();
      setAlias("ASC");
      hideArrows();
      document.getElementById("aliasUp").style.display = "block";
    } else {
      setAlias("DESC");
      hideArrows();
      document.getElementById("aliasDown").style.display = "block";
    }
    setVillains({ ...villains, sortedAlias });
  }

  const sortByAbility = () => {
    let sortedAbilities = villains.filtered.sort((a, b) => {
      const abilityA = a.ability;
      const abilityB = b.ability;

      let comparison = 0;
      if (abilityA > abilityB) {
        comparison = 1;
      } else if (abilityA < abilityB) {
        comparison = -1;
      } return comparison
    })

    if (sortAbility === "DESC") {
      sortedAbilities.reverse();
      setAbility("ASC");
      hideArrows();
      document.getElementById("abilityUp").style.display = "block";
    } else {
      setAbility("DESC");
      hideArrows();
      document.getElementById("abilityDown").style.display = "block";
    }
    setVillains({ ...villains, sortedAbilities });
  }

  



  return (
    <>
      <Header></Header>
      <Search handleSearch={findVillain}>
      </Search>
      <Wrapper>
        <p className="instructions">Click On Column to Sort</p>
        <Table villains={villains.filtered} sortByName={sortByName} sortByYear={sortByYear} sortByAlias={sortByAlias} sortByAbility={sortByAbility}>
        </Table>
      </Wrapper>
    </>
  );
}

export default App;
