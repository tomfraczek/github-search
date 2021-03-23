import React from 'react';

import Search from '../search/search.component';
import User from '../user/user.component';

import './homepage.styles.scss';

class Homepage extends React.Component{
    constructor(props){
        super();

        this.state = {
            user: null,
            search: '',
            // isLoaded: null
        }   
     }

     handleChange = (e) => (
        this.setState((state, props) => {
            return {search: e.target.value};
          })
     );

     handleClick = () => (
        fetch(`https://api.github.com/users/${this.state.search}`)
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result)
            this.setState((state, props) => {
                return {
                    user: result,
                    search: ''
                };
              })
          },
          (error) => {
            // setIsLoaded(true);
            console.log(error);
          }
        )
     );

     render(){
         return(
             <div>
                 <Search value={this.state.search} handleClick={this.handleClick} handleChange={this.handleChange}/>
             {this.state.user ? <User user={this.state.user}/> : null}
             </div>
         )
     }
}

export default Homepage;