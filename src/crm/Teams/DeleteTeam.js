import React from 'react';
import apiUrl from '../../api/apiurl'
import { Link } from 'react-router-dom'

class DeleteTeam extends React.Component{

    state = {
        team : [],
        errors : ''
    }

    componentDidMount(){
        const id = this.props.match.params.id
        apiUrl.get(`/items/${id}/`)
        .then(posRes => {
            this.setState({
                team : posRes.data
            })
          
        }).catch(errRes =>
            {
              this.setState({errors :errRes})
            })
    }

    deleteTeam = () => {
        const id = this.props.match.params.id
        apiUrl.delete(`/teams/${id}/`)
        this.props.history.push('/teams')
    }

  

    render(){
    return(
        <div className = "container mt-5 py-5">
            <div className = "row"></div>
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-header text-cente">
                        <b>DELETE TEAM</b>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Are You Sure You Want To Delete This Team?</p>
                        <button onClick = {this.deleteTeam} className = "btn btn-primary">Delete</button>
                        <Link to ="/teams" className = "btn btn-light">Cancel</Link>
                    </div>
                </div>
            </div>


        </div>
    )

}
}
export default DeleteTeam;