import React from 'react';
import { Link } from 'react-router-dom';
import apiUrl from '../../api/apiurl'
class EmailFilter extends React.Component  {
    state = {
        blockedEmail : [],
        term : ''
    }

    componentDidMount(){
        apiUrl.get('/settings/block-emails/')
        .then(posRes => {
            this.setState({
            blockedEmail : posRes.data.blocked_emails
        })
       console.log(posRes.data.blocked_emails)
    }).catch(errRes => {
        this.setState({
            error : errRes
        })
    })
}

EmailFilterData=(e)=>{
    e.preventDefault()
    const updatedBlockedEmail= this.state.blockedEmail.filter(item => {
        return item.email.toLowerCase().includes(this.state.term.toLowerCase())
    })
    this.setState({blockedEmail: updatedBlockedEmail})
   
}
onChange = (e)=>{
    this.setState({
        term : e.target.value
    })
 }

render(){
    return(
        <div className="container">
<div className="card">
  <div className="card-header">
    <b>FILTER</b>
  </div>
  <div className="card-body">
              <form >
  <div classNameName="form-row">
      <div className="form-group col-md-10">
          <label><b>Filter Email</b></label>
          <input type="text" onChange={this.onChange} value={this.state.term} className="form-control" placeholder="search email" />
          </div>  
          <div>

          <button className="btn btn-warning btn-md mr-1" onClick={this.EmailFilterData}>Search</button>
          <a href="/settings/contacts" className="btn btn-warning btn-md">Cancel</a>

    
   </div>
    
  </div>
</form> 
  </div>
</div>

</div>
    )
}
}
export default EmailFilter;