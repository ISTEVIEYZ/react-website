import { v4 } from "uuid";
const projects = [
  { id: v4(), title: 'AStar Hueristics', url: '/astar-project',  createdAt: "February 20, 2017", updatedAt: "October 3, 2020",
  thumbnail: "", git: "https://github.com/ISTEVIEYZ/a-star-algorithm",
  info: "This is a Todo List made in React with hooks, contexts, and reducers. Click this card to check out my demo, simply type some text into the input field, hit enter to add a new item, and click on an item to delete it.",
  sections: [
    { 
      title: "Summary",
      content: "This is a fairly simple todo list made with hooks that I was able to develop within about an hour. The bulk of my time was spent on actually styling, aligning, and positioning the app perfectly, or perfect enough. I also enjoy going into color theory and seeing which colors work well together. A good color theme can really set applications apart from each other and I can honestly say that this is the best looking todo list that I have styled thus far."
    },
    {
      title: "Notable Technologies",
      content: "Hooks, contexts, and reducers is how I manage my states. I have not learned Redux but I have a playlist on YouTube for when I decide to learn it. For now, I will do my best to get as comfortable with hooks as possible. While the use-cases for Redux seem to be on a decline, I also realize that a lot of the industry still uses it and won't go away for a while."
    },
    {
      title: "Troubleshooting and Debugging",
      content: "I did not have many difficulties with this project. I put in a lot of time into the CSS as I want to keep my main CSS file as small as possible. As of right now, this site's index.css has 602 lines including comments and since this number will grow with more projects to be uploaded in the future, I remain active and vigilant in reducing CSS and using inline CSS whenever possible."
    },
    {
      title: "Future Development",
      content: "This is not my first todo list and it won't be my last. I am already working on a todo list for React Native that I will upload in the near future. Maybe I'll develop a similar todo list using Redux so I can broaden my horizon when it comes to state management."
    }]
  }  
];

export default projects;