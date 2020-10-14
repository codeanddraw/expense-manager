import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    id: 0,
    description: '',
    value: '',
    isSettled: false,
    date: ''
  })
  const [latest, setLatest] = useState(0)
  let [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let id = latest + 1

    let obj = {
      id: id,
      description: state.description,
      value: state.value,
      isSettled: state.isSettled,
      date: new Date().toLocaleDateString()
    }
    setState({ ...state, id: id })
    setList([...list, obj])
    setLatest(id)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    let index = list.findIndex(item => {
      return item.id === state.id
    })

    if (index !== -1) {
      let obj = {
        id: state.id,
        description: state.description,
        value: state.value,
        isSettled: state.isSettled,
        date: new Date().toLocaleDateString()
      }
      console.log(index)

      let newList = [...list]
      newList.splice(index, 1, obj)
      setList([...newList])
    }
  }

  const handleEdit = (id, description, value, isSettled) => {
    let index = list.findIndex(item => {
      return item.id === id
    })
    let newDate = new Date().toLocaleDateString()
    setState({ id: index + 1, description, value, isSettled, newDate })
  }

  return (
    <div className="ExpenseManagerApp container">
      <div className="row">
        <div className="col-md-6">
          <h3 style={{ padding: "1rem 0" }}>Expense Manager</h3>
          <form className="needs-validation" onSubmit={handleSubmit}>
            <label htmlFor="formGroupExampleInput" id="formGroupExampleInput">Description</label>
            <input type="text"
              value={state.description}
              onChange={(e) => {
                setState({
                  ...state,
                  description: e.target.value
                })
              }}
              id="validationCustom01"
              className="form-control form-control-sm"
              placeholder="Expense Description"
              required />

            <label htmlFor="formGroupExampleInput2" id="formGroupExampleInput2">Value</label>
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
              placeholder="Value in dolla dolla money"
              required />

            <div className="form-check">
              <input className="form-check-input"
                checked={state.isSettled}
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
            <span className="form-text text-muted"> Settle your bills on time. Maintain a good credit score! </span>
            <button className="btn btn-primary"
              type="submit"> Record Transaction </button>
            <button className="btn btn-primary"
              onClick={handleUpdate} type="submit"> Update Transaction </button>
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
            <tbody>
              {list && list.length > 0 && list.map((item, key) => {
                return <tr key={key + 1} onClick={() => handleEdit(item.id, item.description, item.value, item.isSettled)}>
                  <th scope="row">{key + 1}</th>
                  <td className="row-item">{item.description}</td>
                  <td className="row-item">{item.value}</td>
                  <td className={item.isSettled ? 'paid' : 'not-paid'}>{item.isSettled ? 'Paid' : 'Not Paid'}</td>
                  <td className="row-item">{item.date}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
