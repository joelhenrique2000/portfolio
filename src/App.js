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
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Aliquam in nisl suscipit, 
            rhoncus velit molestie, cursus 
            sapien.`}
        />
        <About
          photo={Foto}
          name={'Olá, eu sou Joel Henrique.'}
          description={`
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Aliquam in nisl suscipit, 
            rhoncus velit molestie, cursus 
            sapien. Sed aliquet, nulla ut 
            dapibus accumsan, nisi lectus 
            consectetur dui, a aliquet lacus 
            purus vitae tortor.
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
              'Lorem ipsum dolor sit amet',
              'Lorem ipsum dolor sit amet',
              'Lorem ipsum dolor sit amet',
              'Lorem ipsum dolor sit amet',
              'Lorem ipsum dolor sit amet',
              'Lorem ipsum dolor sit amet'
            ]}
        />
        <Portfolio
          portfolioList={[
            {title: 'Lorem ipsum dolor', photo: {Foto}, link: 'https://www.google.com/'},
            {title: 'Lorem ipsum dolor', photo: {Foto}, link: 'https://www.google.com/'},
            {title: 'Lorem ipsum dolor', photo: {Foto}, link: 'https://www.google.com/'},
            {title: 'Lorem ipsum dolor', photo: {Foto}, link: 'https://www.google.com/'},
          ]}
        />
        <Contact>

        </Contact>
        <SocialNetworks/>
      </React.Fragment>
    );
  }
}

export default App;
