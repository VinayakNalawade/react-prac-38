import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="mainContainer">
      <h1 className="firstheading">
        MY JOURNEY OF <br />
        <br />
        <span className="secondheading">CCBP 4.0</span>
        <br />
      </h1>

      <Chrono
        theme={{
          primary: '#0967d2',
          secondary: 'white',
          cardBgColor: 'white',
          titleColor: '#0967d2',
          titleColorActive: '1e293b',
        }}
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
      >
        {timelineItemsList.map(each =>
          each.categoryId === 'COURSE' ? (
            <CourseTimelineCard item={each} key={each.id} />
          ) : (
            <ProjectTimelineCard item={each} key={each.id} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
