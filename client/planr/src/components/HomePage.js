import '../styles/HomePage.css';
import Logo from "../images/Logo.png"

export default function HomePage() {
  return (
    <div className="HomePage">
      <img src={Logo} alt="logo" width={500} height={500} />
      <button className="EnterButton" type="submit">Enter</button>
     
    </div>
  )
}