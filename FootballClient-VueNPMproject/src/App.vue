<template>
   <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3">
            <div class="container-fluid">
                
                <a class="navbar-brand"><img src="https://www.pngmart.com/files/22/NFL-PNG-File.png" height="40" width="40" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-end">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/home"><b>Home</b></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/team"><b>Team</b></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/player"><b>Player</b></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
