const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/abhishek71994/abhishek71994.github.io.git'
  },
  () => {
    console.log('Deploy Complete!')
  }
)
