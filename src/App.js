import React, { useState, useEffect } from 'react';
import './global.css'
import './App.js'
import './Sidebar.css'
import './Main.css'

function App() {
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    )
  }, []);

  return (
    <div id="app">
       <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input
               name="github_username"
               id="github_username"
               required
               value={githubUsername}
               onChange={e => setGithubUsername(e.target.value)}
              />              
            </div>
            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input
               name="techs"
               id="techs"
               required
               value={techs}
               onChange={e => setTechs(e.target.value)}
              />
            </div>
            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input
                 type="number"
                 name="latitude"
                 id="latitude"
                 required
                 value={latitude}
                 onChange={e => setLatitude(e.target.value)}
                />
              </div>
              <div className="input-block">
                <label htmlFor="longitude">Latitude</label>
                <input
                 type="number"
                 name="longitude"
                 id="longitude"
                 required
                 value={longitude}
                 onChange={e => setLongitude(e.target.value)}
                />
              </div>
            </div>
            <button type="submit">Salvar</button>
          </form>
       </aside>
       <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/42212100?s=460&v=4" alt="imagem github"/>
                <div className="user-info">
                  <strong>Diogo Agra Alexandria</strong>
                  <span>Lorem Ipsum</span>
                </div>
              </header>
              <p>Etiam a ultrices arcu. Donec molestie lobortis urna, non cursus tellus accumsan a. Nam varius sodales arcu nec sagittis. Suspendisse dignissim elit dapibus tincidunt laoreet. Maecenas ac turpis mauris. Morbi in volutpat lacus. Nam porttitor quam eu nunc lobortis, vel laoreet leo molestie. </p>              
              <a href="https://github.com/diogoalexandria">Acessar perfil do github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/42212100?s=460&v=4" alt="imagem github"/>
                <div className="user-info">
                  <strong>Diogo Agra Alexandria</strong>
                  <span>Lorem Ipsum</span>
                </div>
              </header>
              <p>Etiam a ultrices arcu. Donec molestie lobortis urna, non cursus tellus accumsan a. Nam varius sodales arcu nec sagittis. Suspendisse dignissim elit dapibus tincidunt laoreet. Maecenas ac turpis mauris. Morbi in volutpat lacus. Nam porttitor quam eu nunc lobortis, vel laoreet leo molestie. </p>              
              <a href="https://github.com/diogoalexandria">Acessar perfil do github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/42212100?s=460&v=4" alt="imagem github"/>
                <div className="user-info">
                  <strong>Diogo Agra Alexandria</strong>
                  <span>Lorem Ipsum</span>
                </div>
              </header>
              <p>Etiam a ultrices arcu. Donec molestie lobortis urna, non cursus tellus accumsan a. Nam varius sodales arcu nec sagittis. Suspendisse dignissim elit dapibus tincidunt laoreet. Maecenas ac turpis mauris. Morbi in volutpat lacus. Nam porttitor quam eu nunc lobortis, vel laoreet leo molestie. </p>              
              <a href="https://github.com/diogoalexandria">Acessar perfil do github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/42212100?s=460&v=4" alt="imagem github"/>
                <div className="user-info">
                  <strong>Diogo Agra Alexandria</strong>
                  <span>Lorem Ipsum</span>
                </div>
              </header>
              <p>Etiam a ultrices arcu. Donec molestie lobortis urna, non cursus tellus accumsan a. Nam varius sodales arcu nec sagittis. Suspendisse dignissim elit dapibus tincidunt laoreet. Maecenas ac turpis mauris. Morbi in volutpat lacus. Nam porttitor quam eu nunc lobortis, vel laoreet leo molestie. </p>              
              <a href="https://github.com/diogoalexandria">Acessar perfil do github</a>
            </li>
          </ul>
       </main>
    </div>
  );
}

export default App;
