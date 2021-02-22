import React from 'react';
import apiurl from '../../api/apiurl';
import { Link } from 'react-router-dom'
import Teams from './Teams';

class CreateTeam extends React.Component{
  
    state = {
        name : '',
        description : '',
        assign_users : '',
        assignteams : [],
        errors: ''
    }
    
    componentDidMount(){
        apiurl.get('/teams/')
        .then(posRes =>{
                this.setState({
                assignteams : posRes.data.users
            })
           
        }).catch(errRes =>{
            this.setState({
                errors : errRes
            })
           
        })
    }

    onHandleChange = e =>{
        this.setState({ [e.target.name] : e.target.value})
    };

    onSubmitButton = e =>{
        e.preventDefault()
        apiurl.post('/teams/', this.state)
        this.props.history.push('/teams')
    }
   
    render(){
        const {assignteams} = this.state
    return(
        <div className="container mt-5 py-5">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <b>CREATE TEAM</b>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmitButton}>
                                <div className="form-group">
                                    <label><b>Name</b></label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.onHandleChange} className="form-control"  required />

                                </div>
                                <div className="form-group">
                                    <label><b>Description</b></label>
                                    <textarea name="description" value={this.state.description} onChange={this.onHandleChange} className="form-control" />
                                    
                                </div>
                                <div className="form-group">
                                    <label><b>Assign Users</b></label>
                                    {/* <input type="text" name="assign_users" value={this.state.assign_users} onChange={this.onHandleChange} className="form-control" required /> */}
                                    <select name="assign_users" className="form-control select2-hidden-accessible" tabIndex="-1" aria-hidden="true">

                                    { assignteams.map(user => (
                                        <option value={user.email}>{user.email}</option>
                                       
                                    ))}
                                       </select>

                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-success">Save</button>
                                    <Link to='/teams' className="btn btn-light">Cancel</Link>
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
export default CreateTeam;