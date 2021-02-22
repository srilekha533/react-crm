import React from 'react';

const Filter = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-header">
                            <b>FILTER</b>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label><b>Team Name</b></label>
                                        <input type="text" onChange={props.onChange} value={props.value} className="form-control" placeholder="search teamname" />
                                    </div>
                                </div>
                                 <button className="btn btn-warning btn-md mr-1" onClick={props.onClick}>Search</button>
                                 <a href="/teams" className="btn btn-warning btn-md">Cancel</a>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filter;