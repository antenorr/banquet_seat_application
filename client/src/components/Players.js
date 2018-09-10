import React from 'react';
import './players.css';


const Players = props => {
    const { seatedStatus, deleteGuest, status } = props;
 
    return (
 
            <div className="row">
                <ul >
                    {seatedStatus.map((seat, index) =>
                        <li key={index} >
                            <div >
                                <div className="col s12 m3">
                                    <div className="card">
                                        <div className="card-image image">
                                            <span className="card-title">Guest: {seat.id}</span>
                                        <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => deleteGuest(seat.id, status)  }><i className="material-icons">clear</i></a>
                                        </div>
                                        <div className="card-content">
                                           
                                            <p>{seat.name}</p>
                                            <p>{seat.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>



    )
}













export default Players;