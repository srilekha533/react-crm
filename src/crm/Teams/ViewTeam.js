import React from 'react';
import apiurl from '../../api/apiurl';

class ViewTeam extends React.Component{
    
    state = {
        viewteam : [] ,
        error : ""
    }
       
    componentDidMount(){
       const id = this.props.match.params.id 
        apiurl.get(`/teams/${id}/`)
        .then( posRes => {
            this.setState({
                viewteam : posRes.data.team
            })
            console.log(posRes.data.team)
        }).catch(errRes =>{
            this.setState({
                error : errRes
            })
        })
    }
    render(){

      const  {viewteam} = this.state
   
  
    return(
        <div className= "container mt-5">
            <div className="row">
                <div className = "col-6 offset-3">
                    <div className="card">
                        <div className = "card-header text-center">View Team</div>
                        <div className ="card-body">
                            <form>
                                <div className = "form-group row">
                                    <label for="" className="col-sm-3 col-form-label">Name</label>
                                    <div className="col-md-4">
                                        <input type = "text" readonly className="form-control-plaintext" id="" value={viewteam.name} />

                                    </div>
                                </div>
                                <div className = "form-group row">
                                    <label for ="" className="col-sm-3 col-form-label">Description</label>
                                    <div className="col-md-4">
                                        <input type="text" readonly className="form-control-plaintext" id ="" value= {viewteam.description} />

                                    </div>
                                </div>
                                {/* <div className="form-group row">
                                    <label for="" className="col-sm-3 col-form-label">Assigned To</label>
                                    <div className="col-md-4">
                                        <input type="text" readOnly className="form-control-plaintext" id="" value={viewteam.users[0].email} />
                                    </div>
                                </div> */}
                                {/* <div className="form-group row">
                                    <label for="" className="col-sm-3 col-form-label">Created By</label>
                                    <div className="col-md-4">
                                        <input type="text" readonly className="form-control-plaintext" id="" value={viewteam.created_by.email} />
                                    </div>
                                </div> */}
                                <div className="form-group row">
                                    <label for="" className="col-sm-3 col-form-label">Created On</label>
                                    <div className="col-md-4">
                                        <input type="text" readonly className="form-control-plaintext" id="" value={viewteam.created_on_arrow} />
                                    </div>
                                </div>  

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
}
export default ViewTeam;