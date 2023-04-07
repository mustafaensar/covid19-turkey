import './App.css';
import React from 'react';
import axios from 'axios';
import dateFormat from 'dateformat';


function App() {

  const[data, setData] = React.useState();
  const[date, setDate] = React.useState("");

  React.useEffect(() => {
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=> setData(res.data[dateFormat(date,"dd/mm/yyyy")]))
    .catch(err=> console.log(err)) 
  },[data,date])

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 mx-auto mt-4'>
            <h2 className='text-center text-white display-3'>COVID-19 TURKEY</h2>
            <p className='text-white'>The data are between March 11, 2020 and May 31, 2022.</p>
            <input
              type='date'
              className='form-control'
              onChange={(e) => setDate(e.target.value)}
              required
              min="2020-03-11"
              max="2022-05-31"
            />
            <table className="table table-dark text-white">
              <thead>
                <tr>
                  <th scope="col">Tests</th>
                  <th scope="col">Cases</th>
                  <th scope="col">Recovered</th>
                  <th scope="col">Deads</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-white">
                  <td>{data === undefined ? "" : data.tests}</td>
                  <td>{data === undefined ? "" : data.cases}</td>
                  <td>{data === undefined ? "" : data.recovered}</td>
                  <td>{data === undefined ? "" : data.deaths}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
