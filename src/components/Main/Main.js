import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import LandingPageTitle from '../LandingPageTitle/LandingPageTitle';
import NavTab from '../NavTab/NavTab';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Promo>
        <NavTab />
      </Promo>
      <AboutProject>
        <LandingPageTitle title="О проекте" />
      </AboutProject>
      <Techs>
        <LandingPageTitle title="Технологии" />
      </Techs>
      <AboutMe>
        <LandingPageTitle title="Студент" />
      </AboutMe>
      <Portfolio />
    </main>
  );
}

export default Main;