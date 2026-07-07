import React, { useEffect, useState } from "react";

const TableFetch = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

// console.log(data)

  return (
    <div>
      <ul>
        {data.map((user) => 
            <li>{user.name}</li>
        )}
      </ul>
    </div>
  );
};

export default TableFetch;
