
import Title from './components/Title.tsx';
import Puratext from "./components/Puratext.tsx"

export default function About() {
  return (
    <>
        <Title
            title="The very looooong About Me!"
        />
        <Puratext
            text="I am currently learning web development to build projects while enjoying the hype of problem-solving in competitive programming and math. I enjoy customizing my Linux operating system, specifically NixOS with Hyprland. I love giving presentations and organizing events like hackathons or even to-do lists. Meeting new people, sharing, and discussing different topics brings me joy. In my free time, I enjoy researching and comparing computer hardware, watching Formula One races on weekends, designing user interfaces, and cooking + eating delicious meals."
        />
    </>
  );
}
