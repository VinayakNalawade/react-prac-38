import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props

  return (
    <div className="project-card">
      <img className="project-img" src={item.imageUrl} alt="project" />
      <div className="title-container">
        <h1 className="title">{item.projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="duration-img" />
          <p className="duration">{item.duration}</p>
        </div>
      </div>
      <p className="description">{item.description}</p>
      <a className="visit-button" href={item.projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
