/* global IIIdage */
function runLibrary () {
  var libr1 = IIIdage._.library({
    sounds: {
      'hits': {
        src: ['../resources/uu.mp3'],
        preload: true // I will have to force preload on those
      // 'load' event needs to be used to track preloading stuff to the library
      // but before plugging into an event, check instance's .state() to see if it's not loaded
      },
      'stuff': {
        src: ['../resources/uu.mp3'],
        preload: true // I will have to force preload on those
      // 'load' event needs to be used to track preloading stuff to the library
      // but before plugging into an event, check instance's .state() to see if it's not loaded
      }
    }
  })

  // assert libr1.progress stream emits and ends
  libr1.progress.observe(function (progressFraction) {
    console.log('progress', progressFraction)
    console.log('assert', progressFraction >= 0 && progressFraction <= 1)
  }, function (err) {
    throw err
  }, function () {
    console.log('done', arguments)
    libr1.getPlayingSound('hits')

  // it ends, try playing a sound
  })
}
