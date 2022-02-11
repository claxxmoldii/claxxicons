<script>
  export let title;
</script>

<!-- Navigation-->
<nav id="mainNav" class="navbar navbar-expand-lg navbar-dark fixed-top"
>
    <div class="container">
        <a class="navbar-brand maintitle" href="#page-top">
          <!-- <img src="assets/img/navbar-logo.svg" alt="..." /> -->
          {title}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars ms-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

<style>
  #mainNav a.maintitle {
    font-family: 'Kaushan Script';
    font-weight: 100;
    text-transform:  none;
  }
</style>
