const User = {
    firstName: 'Anas',
    lastName: 'Riyaz',
    contactList: {
        number: '(+91) - 8299088679',
        email: 'anasriyaz92@gmail.com',
        github: 'github.com/healer9',
        linkedIn: 'linkedin.com/anas-riyaz',
        portfolio: 'anas-riyaz-portfolio'
    },
    links: {
        mail: 'mailto:anasriyaz92@gmail.com',
        githubLink: 'https://github.com/healer9',
        linkedInLink: 'http://linkedin.com/in/anas-riyaz/',
        portfolioLink: 'https://healer9.github.io/anas-riyaz-portfolio/'
    },
    education: {
        school: {
            name: 'Kendriya Vidyalaya Balrampur',
            highSchoolMarks: '10 CGPA',
            intermediateMarks: '90.80%'
        },
        college: {
            name: 'Jamia Millia Islamia',
            duration: '2018 - present',
            course: 'B.Tech (Computer Engineering)',
            cgpa: '9.54 CGPA (till-now)'
        }
    },
    skills: ['C++', 'Python', 'JavaScript', 'MongoDB',
        'Express Js', 'React Js', 'Node Js', 'RESTfull API', 'GitHub']
    ,
    projects: [
        {
            name: 'Quiz App',
            type: 'Web Application',
            sourceCode: 'https://github.com/healer9/quiz-app',
            liveAt: 'https://healer9.github.io/quiz-app/#',
            buildWith: 'React Js',
            description: 'This app is completely built with React JS. It contains the questions from various topics that are helpful in cracking the technical interviews for SDE.'
        },
        {
            name: 'Sudoku Solver',
            type: 'Web Application',
            sourceCode: 'https://github.com/healer9/sudoku-solver',
            liveAt: 'https://healer9.github.io/sudoku-solver/',
            buildWith: 'React Js',
            description: 'This app uses AXIOS to fetch API data and generate sudoku puzzle. Backtracking and Recursive approach is used to solve the generated sudoku puzzle on a click.'
        },
        {
            name: 'School Website',
            type: 'Web Application',
            sourceCode: 'https://github.com/healer9/gurukul',
            liveAt: 'https://healer9.github.io/gurukul/#',
            buildWith: 'React Js',
            description: `This is a modern school website. Having all the content (e.g School news, Admission Notice, Student/Faculty Login etc)`
        }
    ],
    achievements: [
        {
            description: 'HackerRank Certificate',
            link: 'https://www.hackerrank.com/certificates/38d459dd5662'
        },
        {
            description: '5 Star at HackerRank',
            link: 'https://www.hackerrank.com/anasriyaz92'
        },
        {
            description: '3 Star at CodeChef',
            link: 'https://www.codechef.com/users/almoizzu'
        },
    ],
}

export default User