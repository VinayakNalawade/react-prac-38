import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {item} = props

  return (
    <div className="course-card">
      <div className="title-container">
        <h1 className="title">{item.courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="duration-img" />
          <p className="duration">{item.duration}</p>
        </div>
      </div>
      <p className="description">{item.description}</p>
      <ul className="tags-container">
        {item.tagsList.map(each => (
          <p className="tag">{each.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
