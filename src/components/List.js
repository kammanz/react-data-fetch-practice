import React, { useState, useEffect } from 'react';

const List = () => {
  const [users, setUsers] = useState([]);

  const compareFunction = (a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  };

  const handleSort = (e) => {
    const sortedUsers = [...users].sort(compareFunction);
    setUsers(sortedUsers);
  };

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      console.log('data', data);
      setUsers(data);
    };

    dataFetch();
  }, []);

  const renderList = () => {
    return users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  return (
    <div>
      <button type="button" onClick={() => handleSort()}>
        Sort Alphabetically
      </button>
      {/* <select onChange={(e) => handleSort(e)}>
        <option value="Ascending">By Ascending</option>
        <option value="Descending">By Descending</option>
      </select> */}
      <ul>{users ? renderList() : 'Loading'}</ul>
    </div>
  );
};

export default List;
