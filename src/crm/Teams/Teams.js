import React from 'react';
import apiUrl from '../../api/apiurl'
import {Link}  from 'react-router-dom'
import Filter from './Filter'

class Teams extends React.Component{

    state = {
        teams : [],
        show : false,
        term : '',
        errors : ''
    }

    componentDidMount(){
        apiUrl.get('/teams/')
        .then(posRes =>{
            this.setState({
                teams : posRes.data.teams
            })
            console.log(posRes.data)
        }).catch(errRes =>{
            this.setState({
                errors : errRes
            })
            console.log(errRes)
        })
    }
        
    actions = () => {
        this.setState({
            show : !this.state.show
        })
    }

    onChange = (e)=>{
        this.setState({
            term : e.target.value
        })
     }

    filterData = (e) => {
        const updatedTeamList = this.state.teams.filter( item =>{
            return item.name.toLowerCase().includes(this.state.term.toLowerCase())
        })
        this.setState({teams : updatedTeamList})
        e.preventDefault()
    }

    render(){
     const {teams} = this.state

        return (
            <div className="container-fluid mt-5">
              <div className = "text-right py-2">
                  <Link to ="/teams/create" className="btn btn-danger"><i class="fas fa-plus"></i> Add New Team</Link>
              </div>
                
                {this.state.show ? <Filter onChange={this.onChange}
                                           value={this.state.term}
                                           onClick={this.filterData} /> : null}

              <div className="card">
                <div className="card-header text-right bg-dark text-white"> <span className="float-left "><h6><b>Teams - {teams.length}</b></h6></span>
                <button className="btn btn-warning btn-md" onClick={this.actions} >Filter</button>
                </div>

                <div className="card-body bg-light">
                 <div className="table-responsive">
                  <table className="table table-striped table-light">
                    <thead>
                     <tr>
                        <th>ID</th>
                        <th >Team Name</th>
                        <th >Team Description</th>
                        <th >Assigned To</th>
                        <th >Created By</th>
                        <th> Created On</th>
                        <th>Actions</th>
                    </tr>
                        </thead>
                        <tbody>
                      { teams.map(team => ( 
                        <tr key={team.id}>
                        
                        <td>{team.id}</td>
                        <td>{team.name}</td>
                        <td>{team.description}</td>
                        <td>{team.users[0] ? team.users[0].email : 'None'}</td>
                        <td>{team.created_by.email}</td>
                        <td>{team.created_on_arrow}</td>
                        <td> 
                           
                          <Link to={`/teams/view/${team.id}`} className="btn btn-warning"><i class="fas fa-eye"></i></Link>
                          <Link to ={`/teams/edit/${team.id}`}className="btn btn-primary"><i class="fas fa-edit"></i> </Link> 
                          <Link to={`/teams/delete/${team.id}`} className="btn btn-danger"><i class="fas fa-trash-alt"></i> </Link> 

                            </td>
                       </tr> 
                        ))} 
                        </tbody>
                        </table>
                        </div>
                        
                        </div>
                        </div>
            </div>
          
          
        )
    }
}
export default Teams;