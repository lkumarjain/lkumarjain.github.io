import React from "react";
import { Timeline, TimelineItem } from "../../components";

export default function TimelineExample(props) {
    return <Timeline title="Apache Kafka"
        subtitle="AN OPEN-SOURCE DISTRIBUTED EVENT STREAMING PLATFORM"
        avatar="E" action="A"
        footer="https://lkumarjain.blogspot.com/">

        <TimelineItem title="Event" subtitle="Record or Message"
            avatar="E" action="A"
            footer="footer">
            A logical composition of Partition having a logical name
            for producing and consuming records (Events)
            or a fundamental unit for organizing events
        </TimelineItem>

        <TimelineItem title="Event" subtitle="Record or Message"
            avatar="E" action="A" color="Purple">
            A logical composition of Partition having a logical name
            for producing and consuming records (Events)
            or a fundamental unit for organizing events
        </TimelineItem>

        <TimelineItem title="Event" subtitle="Record or Message"
            avatar="E" action="A" color="Grey">
            A logical composition of Partition having a logical name
            for producing and consuming records (Events)
            or a fundamental unit for organizing events
        </TimelineItem>

        <TimelineItem title="Event" subtitle="Record or Message"
            avatar="E" action="A" color="Blue">
            A logical composition of Partition having a logical name
            for producing and consuming records (Events)
            or a fundamental unit for organizing events
        </TimelineItem>

        <TimelineItem title="Event" subtitle="Record or Message" color="Green">
            A logical composition of Partition having a logical name
            for producing and consuming records (Events)
            or a fundamental unit for organizing events
        </TimelineItem>
    </Timeline>;
}

