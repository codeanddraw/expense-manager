import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    description: null,
    value: null,
    isSettled: false,
    date: null
  })
  let [ list, setList ]  = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    let newObj = {
      description: state.description,
      value: state.value,
      isSettled: state.isSettled,
      date: new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
    }
    setList([...list, newObj])
  }

  const handleEdit = (description, value, isSettled, date) => {
    setState({description, value, isSettled, date})
  }

  return (
    <div className="ExpenseManagerApp container">
      <div className="row">
        <div className="col-md-6">
          <h3 style={{ padding: "1rem 0" }}>Expense Manager</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="formGroupExampleInput">Description</label>
            <input type="text" 
                   value={state.description}
                   onChange={(e) => {
                    setState({
                        ...state,
                        description: e.target.value
                      })
                    }} 
                    className="form-control form-control-sm" 
                    id="formGroupInput1" 
                    placeholder="Expense Description" />
            <span className="form-text text-muted">Please enter a description!</span>

            <label htmlFor="formGroupExampleInput2">Value</label>
            <input type="text"
                   value={state.value}
                   onChange={(e) => {
                      setState({
                        ...state,
                        value: e.target.value
                      })
                    }}  
                   className="form-control form-control-sm" 
                   id="formGroupInput2" 
                   placeholder="Value in dolla dolla money" />

            <div className="form-check">
              <input className="form-check-input" 
                     value={state.isSettled}
                     onChange={() => {
                        setState({
                          ...state,
                          isSettled: !state.isSettled
                        })
                      }}  
                     type="checkbox" 
                     id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck"> Settled? </label>
            </div>
            
            <button className="btn btn-primary" 
                    type="submit"> Record Transaction </button>
          </form>
        </div>
        {/* Filter */}
        <div className="col-6">
        <h3 style={{ padding: "1rem 0" }}> Expense List </h3>
        <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Value</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            { list && list.length > 0 && list.map((item, key) =>{
               return <tbody>
                <tr onClick={() => handleEdit(item.description, item.value, item.isSettled, item.date )}>
                  <th scope="row">{key + 1}</th>
                  <td>{item.description}</td>
                  <td>{item.value}</td>
                  <td className={item.isSettled?'paid':'not-paid'}>{item.isSettled?'Paid':'Not Paid'}</td>
                  <td>{item.date}</td>
                </tr>
              </tbody>
            }) }
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
