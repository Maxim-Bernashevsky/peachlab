var lineDraving = anime({
  targets: 'ellipse',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1400,
  fill: ['rgba(255,255,255,0)','rgba(255,255,255,.21)'],
})

anime.timeline()
 .add({
  targets: ['#textP text', '#textL text'],
  opacity: { value: [0, 1], duration: 400, easing: 'linear' },
  delay: (target, index) =>  1000 + index * 160
})
 .add({
  targets: ['#textP text', '#textL text'],
  fill: { value: ['#e5c3c1','#f0ced5'], duration: 400, easing: 'linear' },
  delay: (target, index) =>  500 + index * 150
})
 .add({
  targets: 'text',
  fill: { value: ['#f0ced5', '#dfbebc'], duration: 250, easing: 'linear' },
  delay: 200
})
 .add({
  targets: 'ellipse',
  stroke: { value: ['#f3e0d2','#effffe'], duration: 400, easing: 'linear' },
  delay: 400,
})
