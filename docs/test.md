# Course Schedule Overview

<table id="course-table">
    <thead>
        <tr>
            <th>Week</th>
            <th>Date</th>
            <th>Topic</th>
            <th>Course Notes</th>
            <th>Slides</th>
            <th>Assignments/Labs</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>

# Week-by-Week Breakdown

<div id="week-details"></div>

<script>
    const schedule = [
        {
            week: 1,
            date: "May 6 + May 9",
            topic: "Syllabus + Introduction",
            courseNotes: "",
            slides: "Slides",
            assignments: "Assignment 1 Due: May 13"
        },
        {
            week: 2,
            date: "May 13 + May 16",
            topic: "Intro to WWW + HTML",
            courseNotes: "Part 1: Intro to WWW; Part 2: Intro to HTML",
            slides: "Slides",
            assignments: "Lab 1 Due: May 20"
        },
        {
            week: 3,
            date: "May 20 + May 23",
            topic: "No Class",
            courseNotes: "",
            slides: "",
            assignments: "Assignment 2 Due: May 27"
        },
        {
            week: 4,
            date: "May 27 + May 30",
            topic: "HTML Basics",
            courseNotes: "",
            slides: "",
            assignments: "Lab 2 Due: Jun 3"
        },
        {
            week: 5,
            date: "Jun 3 + Jun 6",
            topic: "More HTML",
            courseNotes: "",
            slides: "",
            assignments: "Assignment 3 Due: Jun 10"
        },
        {
            week: 6,
            date: "Jun 10 + Jun 13",
            topic: "Quiz #1 (In-class, no lecture)",
            courseNotes: "",
            slides: "",
            assignments: "Lab 3 Due: Jun 17"
        },
        {
            week: 7,
            date: "Jun 17 + Jun 20",
            topic: "CSS Basics",
            courseNotes: "",
            slides: "",
            assignments: "Assignment 4 Due: Jun 24"
        },
        {
            week: 8,
            date: "Jun 24 + Jun 27",
            topic: "Advanced CSS + Box Layout",
            courseNotes: "",
            slides: "",
            assignments: "Lab 4 Due: Jul 1"
        },
        {
            week: 9,
            date: "Jul 1 + Jul 4",
            topic: "No Class",
            courseNotes: "",
            slides: "",
            assignments: "Assignment 5 Due: Jul 8"
        },
        {
            week: 10,
            date: "Jul 8 + Jul 11",
            topic: "Quiz #2 (In-class, no lecture)",
            courseNotes: "",
            slides: "",
            assignments: "Lab 5 Due: Jul 15"
        },
        {
            week: 11,
            date: "Jul 15 + Jul 18",
            topic: "CSS Page Layout + HTML Tables",
            courseNotes: "",
            slides: "",
            assignments: "Assignment 6 Due: Jul 22"
        }
    ];

    document.addEventListener('DOMContentLoaded', function() {
        const tableBody = document.getElementById('course-table').getElementsByTagName('tbody')[0];
        const weekDetailsDiv = document.getElementById('week-details');

        schedule.forEach(week => {
            // Add row to the table
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${week.week}</td>
                <td>${week.date}</td>
                <td>${week.topic}</td>
                <td>${week.courseNotes ? week.courseNotes.replace(/;/g, ', ') : ''}</td>
                <td>${week.slides ? `<a href="#">${week.slides}</a>` : ''}</td>
                <td>${week.assignments}</td>
            `;

            // Add week detail section
            const weekDetail = document.createElement('div');
            weekDetail.classList.add('week-detail');
            weekDetail.innerHTML = `
                <h3>Week ${week.week}: ${week.date}</h3>
                <p><strong>Topic:</strong> ${week.topic}</p>
                ${week.slides ? `<p><strong>Slides:</strong> <a href="#">${week.slides}</a></p>` : ''}
                ${week.courseNotes ? `<p><strong>Course Notes:</strong> ${week.courseNotes.replace(/;/g, ', ')}</p>` : ''}
                <p><strong>${week.assignments}</strong></p>
            `;
            weekDetailsDiv.appendChild(weekDetail);
        });
    });
</script>
