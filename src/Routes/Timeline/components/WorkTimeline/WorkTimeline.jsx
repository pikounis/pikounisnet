import React from 'react';
import { useTheme } from '@mui/material/styles';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Typography from "@mui/material/Typography";
import './WorkTimeline.css';
import timelineData from './WorkTimeline.json';





function WorkTimeline() {
    const theme = useTheme();

    return (
        <div className="timeline-container">
            <VerticalTimeline>
                {timelineData.map((item) => (
                    <VerticalTimelineElement
                        key={item.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: theme.palette.primary.main, color: theme.palette.text.primary }}
                        contentArrowStyle={{ borderRight: `7px solid ${theme.palette.primary.main}` }}
                        date={item.date}
                        iconStyle={{ background: theme.palette.primary.main, color: theme.palette.text.primary }}
                        icon={<img
                            src={item.icon}
                            alt="Timeline Icon"
                            className="vertical-timeline-element-icon"
                            onClick={() => window.open(item.website, '_blank')}
                        />}
                    >
                        <Typography variant="h4" className="vertical-timeline-element-title">{item.title}</Typography>
                        <Typography variant="h5" className="vertical-timeline-element-subtitle">{item.subtitle}</Typography>
                        <Typography>{item.description}</Typography>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );

}

export default WorkTimeline;
