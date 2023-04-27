import React from "react";
import  DeleteAllUser  from "./DeleteAllUser";
import styled from "styled-components";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/Slice/UserSlice";
// import {deleteAllUser} from '../store/Slice/UserSlice';
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {

  const Dispatch = useDispatch();

  const AddNewUser = (id) => {
    Dispatch(addUser(id));  

  };
  // const deleteAllUser = (id) =>{
  //   console.log("deleted all user");
  // }

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={() => AddNewUser(fakeUserData())}>Add New Users</button>
        </div>
        <ul>
          <DisplayUsers />
        </ul>
        <hr />
        <DeleteAllUser onclick={()=>{ deleteAllUser(id)}} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1rem 0;
  }

  .admin-subtitle {
    font-size: 2.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;