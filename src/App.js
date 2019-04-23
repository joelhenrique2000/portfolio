import React, { Component } from 'react';

import Header from './components/Header'
import Presentation from './components/Presentation'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import SocialNetworks from './components/SocialNetworks'

import Foto from './perfil.jpg'
import backgroundCard from './backgroundCard.jpg'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header 
          firstName={"Joel"}
          secondName={"Henrique"}
        />
        <Presentation 
          title={'Fullstack Developer'}
          description={`
          Transform your best idea into reality with the best technologies of the moment.
          `}
        />
        <About
          photo={Foto}
          name={'Hello, my name\'s Joel Henrique.'}
          description={`
            I am Fullstack Developer Jr., studying in IFPE - Campus Garanhuns. 
            I focus on the user experience and how projects will influe them in their lives.
            Recently studied and am developing projects on the MERN stack.
          `}
        />
        <Skills
          skills={[
            {name: 'Java', points: '4'},
            {name: 'Android', points: '2'},
            {name: 'JSF', points: '3'},
            {name: 'JavaFx', points: '7'},
            {name: 'ReactJs', points: '3'},
            {name: 'NodeJs', points: '3'},
            {name: 'MongoDB', points: '2'},
            {name: 'OracleDB', points: '4'},
          ]}
        />
        <Services
          servicesList={[
              'Website Design',
              'Site Development',
              'Responsive Website Design',
              'Backend developer',
              'pwa',
            ]}
        />
        <Portfolio
          portfolioList={[
            {title: 'Lorem ipsum dolor', photo: {backgroundCard}, link: '#Portfolio'},
            {title: 'Lorem ipsum dolor', photo: {backgroundCard}, link: '#Portfolio'},
            {title: 'Lorem ipsum dolor', photo: {backgroundCard}, link: '#Portfolio'},
            {title: 'Lorem ipsum dolor', photo: {backgroundCard}, link: '#Portfolio'},
          ]}
        />
        <Contact>

        </Contact>
        <SocialNetworks
          urlFacebook={'https://www.facebook.com/joelhenrique2000'}
          urlGithub={'https://github.com/joelhenrique2000'}
        />
      </React.Fragment>
    );
  }
}

export default App;
