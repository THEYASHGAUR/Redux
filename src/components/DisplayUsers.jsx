import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {MdDeleteForever} from 'react-icons/all.js';
import { removeUser } from "../store/Slice/UserSlice";


const DisplayUsers = () =>{
    const Dispatch = useDispatch();
    
    const data = useSelector((state)=>{
        return state.users;
    });
    const deleteUser = (id) =>{
        Dispatch(removeUser(id));

    }
    console.log(data);
    return <Wrapper>
        {
            data.map((user,id)=>{
                return <li key={id}>
                    {user}
                    <button className="btn-delete" onClick={deleteUser(id)}>
                        <MdDeleteForever className="delete-icon" />

                    </button>

                </li>
            })
        }
    </Wrapper>
}
const Wrapper = styled.section`
    li{
        border-bottom:2px solid black;
        margin:2px;
        padding:1.2px;
        font-size:16px;
        display:flex;
        justify-content:space-between;
    }

`
export default DisplayUsers;