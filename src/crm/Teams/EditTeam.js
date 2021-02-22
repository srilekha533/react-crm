import React from 'react';
import apiUrl from '../../api/apiurl'
import { Link } from 'react-router-dom'
import apiurl from '../../api/apiurl';

class EditTeam extends React.Component{

    state = {
        name : '',
        description : '',
        assign_users : '',
        errors : ''
    }

    componentDidMount(){
        const id = this.props.match.params.id
        apiUrl.get(`/teams/${id}/`)
        .then( posRes => {
            this.setState({
                name : posRes.data.team.name,
                description:posRes.data.team.description,
                assign_users:posRes.data.team.users[0].email
            })
            console.log(posRes.data.team)
        }).catch(errRes => {
            this.setState({
                errors : errRes
            })
        })
    }

    onHandleChange = e => {
      this.setState({ ...this.state , [e.target.name] : e.target.value})
    }

    onSubmit = e => {
        const id = this.props.match.params.id
        e.preventDefault()
        apiurl.put(`/items/${id}/`, this.state)
        this.props.history.push('/teams')
    }
  

    render(){
        if(this.state.errors){
            return <div className="container text-center mt-5 py-5"><h1>404 Error bad Request</h1></div>
           }
        
    return (
        <div className = "container mt-5 py-5">
            <div className = "row">
                <div className = "col-6 offset-3">
                    <div className = "card">
                        <div className ="card-header text-center">
                            <b>EDIT TEAM</b>
                        </div>
                        <div className = "card-body">
                            <form onSubmit = {this.onSubmit}>
                                <div className = "form-group">
                                    <label><b>Name</b></label>
                                    <input type= "text" name = "name" value = {this.state.name} onChange= {this.onHandleChange} className="form-control" required />
                                    </div>
                                    <div className = "form-group">
                                    <label><b>Description</b></label>
                                    <textarea name = "description" value = {this.state.description} onChange= {this.onHandleChange} className="form-control"/>
                                    </div>
                                    <div className = "form-group">
                                    <label><b>Assign Users</b></label>
                                    <select name="assign_users" className="form-control" aria-hidden="true">
                                        <option value ={this.state.assign_users}>{this.state.assign_users}</option>
                                    </select>
                                    </div>
                                    <div className = "text-center">
                                        <button type = "submit" className="btn btn-success">Save</button>
                                        <Link to ="/teams" className = "btn btn-light">Cancel</Link>
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
export default EditTeam;