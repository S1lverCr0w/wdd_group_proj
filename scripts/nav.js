// fetch('nav.html')
// .then(res => res.text())
// .then(text => {
// 	let oldelem = document.querySelector("script#replace_with_navbar");
// 	let newelem = document.createElement("div");
// 	newelem.innerHTML = text;
// 	oldelem.parentNode.replaceChild(newelem,oldelem);
// })

var navbar = `
		<nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
			<div class="container-fluid">
				<a class="navbar-brand"  href="index.html">Logo: Company</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<a class="nav-link active navBtn" aria-current="page" href="index.html">Home</a>
					<a class="nav-link navBtn"  href="news.html">News</a>
					<a class="nav-link navBtn"  href="uisceire.html">UisceIRE</a>
					<a class="nav-link navBtn"  href="sources.html">Sources</a>
					<a class="nav-link navBtn"  href="conserv.html">Conservation</a>
					<a class="nav-link navBtn"  href="findus.html">Find Us</a>
					<a class="nav-link navBtn"  href="contactus.html">Contact Us</a>
					<a class="nav-link navBtn"  href="info.html">Info</a>
				</div>
			</div>
		</nav>`;

		// insert navbar at the beginning of body tag
		document.body.insertAdjacentHTML("afterbegin", navbar);
