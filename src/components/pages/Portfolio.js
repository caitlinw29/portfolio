import React from 'react';

export default function Portfolio() {
  return (
    <div className='px-5 py-4'>
      <h1>My Work</h1>
      <section id="work" class="box column tablet-row">
            <div class="tablet-w80 border column">
                <div class="row">
                    <a href="https://secret-falls-29125.herokuapp.com/" target="_blank" rel='noreferrer'>
                        <figure class="work-container">
                            <div id="monkey" class="card-image"> 
                                <div class="layer"></div>
                            </div>
                            <div class="card-title">
                                <h3>MentorMonkey </h3>
                                <p class="small-text">Full-Stack Application</p>
                            </div>
                        </figure>
                    </a>
                </div>
                <div class="row">
                    <a href="https://caitlinw29.github.io/practiceProjects/ACNH_randomVillager/index.html" target="_blank" rel='noreferrer'>
                        <figure class="work-container">
                            <div id="random-generator" class="card-image small-card"> 
                                <div class="layer"></div>
                            </div>
                            <div class="card-title">
                                <h3>ACNH Random <br />Villager Generator </h3>
                                <p>HTML/CSS/JS</p>
                            </div>
                        </figure>
                    </a>

                    <a href="https://caitlinw29.github.io/AntsGoMarching/" target="_blank" rel='noreferrer'>
                        <figure class="work-container">
                            <div id="antsGoMarching" class="card-image small-card">
                                <div class="layer"></div> 
                            </div>
                            <div class="card-title">
                                <h3>Ants Go Marching</h3> 
                                <p>HTML/CSS/JS</p>
                            </div>
                        </figure>
                    </a>
                </div>
                <div class="row">
                    <a href="https://caitlinw29.github.io/pokeBattle/" target="_blank" rel='noreferrer'>
                        <figure class="work-container">
                            <div id="pokeBattle" class="card-image small-card"> 
                                <div class="layer"></div>
                            </div>
                            <div class="card-title">
                                <h3>PokeBattle</h3>
                                <p>HTML/CSS/JS/API</p>
                            </div>
                        </figure>
                    </a>

                    <a href="https://caitlinw29.github.io/PlayMe/" target="_blank" rel='noreferrer'>
                        <figure class="work-container">
                            <div id="playMe" class="card-image small-card"> 
                                <div class="layer"></div>
                            </div>
                            <div class="card-title">
                                <h3>Play Me</h3>
                                <p>HTML/CSS/JS/API</p>
                            </div>
                        </figure>
                    </a>
                </div>
            </div>

        </section>
    </div>
  );
}