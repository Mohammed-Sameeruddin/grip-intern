import React from 'react';
import { useState } from 'react';
import {Container,Button} from '@material-ui/core';
import View from '../Components/View'

const ViewAll = (props) => {
    const [state,setState] = useState(false);
    const [prop,setProp] = useState("");
    const data = props.props;
    const showView = (props) => {
        setProp(props);
        setState(true);
    }
    return(
        <>
        <Container fixed>
            <div className="viewAll">
            { state === true ? <View id={prop} /> : 
                <table className="mytable" id="t01">
                    <thead>
                        <tr>
                        <th>Acc.No</th>
                        <th>Name</th>
                        <th>View</th>
                        </tr>
                        </thead>
                        <tbody>
                            
                            {data.map((val,index) => {
                                return(
                                <>
                                
                                <tr key={index}>
                                <td>{val.accno}</td>
                                <td>{val.name}</td>
                                <td><Button variant="contained" color="primary" onClick={ () => { showView(val.accno) }}>View</Button></td>
                                </tr>
                                    </>
                                )
                            })}
                    </tbody>
                </table>
            }
            </div>
            </Container>
        </>
    );
}

export default ViewAll;