export class Particles {
  public particle: any;
  constructor() {
    this.particle = {
      particles: {
        number: {
          value: 300,
          density: {
            enable: false,
            value_area: 500
          }
        },
        color: {
          value: '#f75e50'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0.6,
            color: '#f75e50'
          },
          polygon: {
            nb_sides: 6
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.7,
          random: false,
          anim: {
            enable: false,
            speed: 500,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            size_min: 0.2,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 130,
          color: '#f75e50',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 0.4
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 100
          },
          push: {
            particles_nb: 5
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: '#020202',
        background_image: '',
        background_position: '50% 50%',
        background_repeat: 'no-repeat',
        background_size: 'cover'
      }
    }
  }
}
