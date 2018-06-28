const data = {
  get: _ => fetch('https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json')
}

export default data;