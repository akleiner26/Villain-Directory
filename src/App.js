import React from 'react';
import Header from "./components/Header/header";
import Wrapper from "./components/Wrapper/wrapper";
import Table from "./components/Table/table";
import Search from "./components/Search/search";

function App() {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <Search>
        </Search>
        <Table>
        </Table>
      </Wrapper>
    </>
  );
}

export default App;
