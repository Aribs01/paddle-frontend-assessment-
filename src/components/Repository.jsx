import React from 'react'

const Repository = ({Avatar, RepoName, RepoDesc, RepoStat, RepoIssues}) => {
  return (
    <div className=''>
        <div className="">
            <img className='' src={Avatar} alt="repo author avatar" />
        </div>
        <div className="">
            <h4 className='' >{RepoName}</h4>
            <p className='' >{RepoDesc?.length > 100 ? RepoDesc.slice(0,100)+'...' : RepoDesc}</p>
            <ul className='' >
                <li>Stars: <span className='' >{RepoStat}</span></li>
                <li>Issues: <span className='' >{RepoIssues}</span> </li>
                <li></li>

            </ul>
        </div>
    </div>
  )
}

export default Repository