/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const axiosPromise = axios.get("https://api.github.com/users/JoshSchuster")
                          //.then((r) => console.log("success!", r.data.html_url))

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    -complete

    Skip to STEP 3.
*/

console.log(axiosPromise)

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const gitHubCard = (object) => {
  //create elements
  const card = document.createElement('div')
  const img = document.createElement('img')
  const divCardInfo = document.createElement('div')
  const h3 = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const a = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  //add class names
  card.classList.add('card')
  divCardInfo.classList.add('card-info')
  h3.classList.add('name')
  username.classList.add('username')

  //assign image src 
  img.src = object.data.avatar_url

  //assign text content
  h3.textContent = object.data.name
  username.textContent = object.data.login
  location.textContent = 'Location: ' + object.data.location
  profile.textContent = 'Profile: '
  a.textContent = object.data.html_url
  followers.textContent = 'Followers: ' + object.data.followers
  following.textContent = 'Following: ' + object.data.following
  bio.textContent = object.data.bio

  //assign href for a
  a.href = object.data.html_url

  //append elements
  card.appendChild(img)
  card.appendChild(divCardInfo)

  divCardInfo.appendChild(h3)
  divCardInfo.appendChild(username)
  divCardInfo.appendChild(location)
  divCardInfo.appendChild(profile)
  divCardInfo.appendChild(followers)
  divCardInfo.appendChild(following)
  divCardInfo.appendChild(bio)

  profile.appendChild(a)

  return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
