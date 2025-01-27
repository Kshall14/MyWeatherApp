const weatherBackgroundMapping = {
    'rainy': require('../../Assets/Rainy.jpg'),
    'rain': require('../../Assets/Rainy.jpg'),
    'cloudy': require('../../Assets/Cloudy.jpg'),
    'clouds': require('../../Assets/Cloudy.jpg'),
    'sunny': require('../../Assets/Sunny.jpg'),
    'clear': require('../../Assets/Sunny.jpg'),
    'snowy': require('../../Assets/Snowy.jpg'),
    'snow': require('../../Assets/Snowy.jpg'),
    // Add more mappings as needed
  };
  
  const getBackgroundImage = (weatherDescription) => {
    const tokens = weatherDescription.toLowerCase().split(' ');
    let background;
    for (const token of tokens) {
      if (weatherBackgroundMapping[token]) {
        background = weatherBackgroundMapping[token];
        break;
      }
    }
    return background || require('../../Assets/MainMenuBackGround.jpg');
  };
  
  export default getBackgroundImage;