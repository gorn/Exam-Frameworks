import React, {Component} from 'react';
import {Link} from "react-router-dom";

class JobPosts extends Component{
        render() {
            let jobs = this.props.jobs;

//             console.log(this.props.category);
//             console.log(this.props.area);
//             console.log(this.props.match.params.area);
            if(jobs <= 0){
                return  <p>Loading...</p>
            } else {
              let jobsFilter = jobs.filter(
                 job => ( !(job.category === null) )  && 
                        (job.category.namePath === this.props.category) && 
                        (job.area.namePath === this.props.area)
              );
              if(jobsFilter.length <= 0){
                  return <p>Sorry there are no jobs</p>
            }
        }
        return(
            <div>
                <Link to ={"/"}> <p>Home</p></Link>
                <h1>Jobs</h1>
                <h3>Job list</h3>
                {jobs.map(el => {
                    return <span><Link to={`/job/${el._id}`}>
                        <p>{el.title}</p>
                    </Link>{el.category === null ? 'category N/A' : el.category.name}, {el.area === null ? 'area N/A' : el.area.name}</span>
                })}
                
            </div>
        )
    }
}
export default JobPosts;
