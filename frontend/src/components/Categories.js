import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Categories extends Component{

        render() {
            console.log(localStorage.getItem('loggedin'))
            return(
            <div>
                {(localStorage.getItem('loggedin')==='yes') ? '' : <Link to ={"/login"}> <p>Login</p></Link>}
                <Link to={"/post"}><p>Post new job</p></Link>
                <h1>Categories.</h1>

                {this.props.categories.map(el => {
                    return <Link key={el._id} to={`/jobs/${el.namePath}`}><p>{el.name} <br></br>
                    </p></Link>
                })}
            </div>

        )
    }
}
export default Categories;