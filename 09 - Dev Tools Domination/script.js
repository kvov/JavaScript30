const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string', '😜');

    // Styled
    console.log('%c I am some great text', 'font-size:30px; background: yellow; text-shadow: 10px 10px 0 green')

    // warning!
    console.warn('Oh noooo');

    // Error :|
    console.error('Shit!');

    // Info
    console.info('All clocks in Pulp Fiction are set to 4:20');

    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    // clearing
    //console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);  


    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    })

    // counting
    console.count('Kate');
    console.count('Kate');
    console.count('Kate');
    console.count('Kate');
    console.count('Kate');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/kvov')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

   console.table(dogs); 