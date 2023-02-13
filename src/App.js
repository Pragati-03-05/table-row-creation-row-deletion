import React from 'react';
import './style.css';
import Table from './Table.jsx';
import { useEffect, useState } from 'react';

export default function App() {
  const [allDet, setAllDet] = useState([]);
  //const [id, setId] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const a = await fetch('https://reqres.in/api/users?page=1');
        const b = await a.json();
        setAllDet(b.data);
      } catch (error) {}
    };
    getData();
  }, []);
  const getUserId = () => {
    const userId = prompt('EnterId To Be Deleted');
    console.log('KKKKKKKKKKKKK', userId);
    //setId(userId);
    if (userId) {
      let getIndex = allDet.findIndex((x) => {
        return x.id === parseInt(userId);
      });
      allDet.splice(getIndex, 1);
      setAllDet([...allDet]);
    }
  };
  return (
    <div>
      <Table data={allDet} />
      <div id="btn">
        <button onClick={() => getUserId()}>Delete By ID</button>
      </div>
    </div>
  );
}
