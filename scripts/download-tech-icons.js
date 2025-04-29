const fs = require('fs');
const https = require('https');
const path = require('path');

const ICONS_DIR = path.join(process.cwd(), 'public/images/tech');

// Create the directory if it doesn't exist
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

const icons = {
  // Programming Languages
  'html5.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'css3.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'javascript.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'python.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'c.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'cpp.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'java.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'sql.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',

  // AI/ML & Data Science
  'tensorflow.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'pytorch.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  'keras.svg': 'https://raw.githubusercontent.com/valohai/ml-logos/master/keras.svg',
  'scikit-learn.svg': 'https://raw.githubusercontent.com/scikit-learn/scikit-learn/main/doc/logos/scikit-learn-logo.svg',
  'opencv.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  'xgboost.svg': 'https://raw.githubusercontent.com/dmlc/dmlc.github.io/master/img/logo-m/xgboost.png',
  'fastai.svg': 'https://raw.githubusercontent.com/fastai/fastai/master/docs/images/favicon.ico',
  'numpy.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'pandas.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'matplotlib.svg': 'https://raw.githubusercontent.com/matplotlib/matplotlib/master/doc/_static/logo2.svg',
  'nltk.svg': 'https://raw.githubusercontent.com/nltk/nltk/develop/web/images/nltk.png',
  'spacy.svg': 'https://raw.githubusercontent.com/explosion/spaCy/master/website/src/images/icon.svg'
};

function downloadFile(url, filename) {
  const filepath = path.join(ICONS_DIR, filename);
  
  https.get(url, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(filepath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
      });
    } else {
      console.error(`Failed to download ${filename}: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
}

console.log('Starting icon downloads...');
Object.entries(icons).forEach(([filename, url]) => {
  downloadFile(url, filename);
}); 