import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser, listUsers } from "../async/user.async";
import { UPDATE_DATA_BASE } from "../constants/path";

const Dashboard = () => {
  const [dataList, setDataList] = useState([]);
  const [tableHeads] = useState(["First name", "Last name", "Email", "Action"]);
  const navigate = useNavigate();
  useEffect(() => {
    listUsers(setDataList);
  }, []);

  const updateHandler = (id) => {
    navigate(UPDATE_DATA_BASE + "/" + id);
  };

  const deleteHandler = (id) => {
    deleteUser(id, setDataList);
  };

  return (
    <div className={"flex"}>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            {tableHeads.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataList.map((item) => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => updateHandler(item.id)}>Update</button>
                <button onClick={() => deleteHandler(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
