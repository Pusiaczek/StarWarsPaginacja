import { useState, useEffect } from 'react';
import axios from 'axios';
import SWPlanets from './SWPlanets';
import PageSelector from './PageSelector';
import './App.css';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState(null);


  const getData = async () => {
    let response = await axios.get(`https://swapi.dev/api/planets/?page=${currentPage}`);
    // console.log(response.data.results);
    return response;
  }

  useEffect( () => {
    getData().then( (res) => {
      setPageData(res.data)
    })
    .catch((e) => console.log(e));
  }, [currentPage])

  const handlePageChange = (action) => {
    switch (action) {
      case "prev":
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
        break;

      case "next":
        if (currentPage < pageData.count/10) {
          setCurrentPage(currentPage + 1);
        }
        break;

      default:

        setCurrentPage(action);
        break;
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Universum - planets</h1>
      </header>
      {pageData ? <SWPlanets 
                    data={pageData.results} 
                    page={currentPage} /> : "moc będzie! niech Tobą z" }
      {pageData ? <PageSelector 
                    totalPages={pageData.count/10} 
                    changePage={(e) => handlePageChange(e)} 
                    page={currentPage}
                    /> : "moc będzie! niech Tobą z" }
    </div>
  );
}

export default App;
