import React from 'react';
import {useState} from 'react';
import '../index.css';
import {Button} from '@material-ui/core';
import ViewAll from './ViewAll';
import axios from 'axios';
import ViewTransfer from './ViewTransfer';
import Info from './Info';


const Home = () => {
    const [cstate,setCState] = useState(false);
    const [tstate,setTState] = useState(false);
    const [data,setData] = useState([]);
    const [transfer,setTransfer] = useState([]);
    const showCustomer = () => {
        if(cstate === false) {
        axios.get('https://bankingbackend.herokuapp.com/customers').then((response) => {
            const customerData = response.data;
            setData(customerData);
        }).catch((err)=>{console.log(err);});
        setCState(true);
        setTState(false);
    } else {
        setCState(false);
    }
    }

    const showTransfer = () => {
        if(tstate === false) {
        axios.get('https://bankingbackend.herokuapp.com/transfer').then((response) => {
            const customerData = response.data;
            setTransfer(customerData);
        }).catch((err)=>{console.log(err);});
        setTState(true);
        setCState(false);
    } else {
        setTState(false);
    }
    }


    return(
        <>
            <div className="home">
                <h2>Welcome to online Banking System</h2><br></br>
                <h3>View the Customer name to transfer the amount</h3><br></br>
                <Button variant="outlined" color="primary" onClick={showCustomer}>View Customers</Button><br></br><br></br>
                <Button variant="outlined" color="primary" onClick={showTransfer}>Transfer History</Button>
                { cstate === true ? <ViewAll props={data}/> : tstate === true ? <ViewTransfer props={transfer} /> : <Info /> }
               
            </div>
        </>
    );
}

export default Home;