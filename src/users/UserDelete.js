import React from 'react';
import apiurl from '../api/apiurl'
import { Link } from 'react-router-dom'


class UserDelete extends React.Component{

  state= {
    users : [],
    errors : ''
  }

  componentDidMount(){
    const id = this.props.match.params.id
            apiurl.get(`/users/${id}/`)
            .then((posRes) => {
              this.setState({  
                users :  posRes.data.data.user_obj
               
              })
              
                        
                       
            }).catch(errRes=> {
                        this.setState({
                          errors : errRes
                        })
                         });
                        }

    deleteUser= ()=>{
      const id= this.props.match.params.id;
        apiurl.delete(`/users/${id}/`)
        this.props.history.push('/user')
    }

  
render() {
    return (
<div className="container mt-5 py-5">
  <div className="row">
    <div className="col-6 offset-3">
<div className="card">
  <div className="card-header text-center">
   <b><i>Delete User</i></b> 
  </div>
  <div className="card-body">
    
    <p className="card-text"> Are You sure you want to delete this user ?</p>
    <button onClick={this.deleteUser} className="btn btn-primary">Delete</button>
         <Link to='/user' className="btn btn-secondary">Cancel</Link>
  </div>
</div>
</div>
</div>
</div>

      
  
  )
}
}
export default UserDelete;
 





