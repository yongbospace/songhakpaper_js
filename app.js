const navHome = document.getElementById("navHome");
const navProduct = document.getElementById("navProduct");
const navLocation = document.getElementById("navLocation");
const navContact = document.getElementById("navContact");
const mainTitle = document.getElementById("mainTitle");
const mainContent1 = document.getElementById("mainContent1");
const mainContent2 = document.getElementById("mainContent2");
const mainContent3 = document.getElementById("mainContent3");
const mainContent4 = document.getElementById("mainContent4");
const map = document.getElementById("map");

function handleHome() {
  map.classList.add("hidden");
  mainTitle.innerText = "The Industiral paper,";
  mainContent1.innerText = "Think What is";
  mainContent2.innerText = "the Easy & Fast way";
  mainContent3.innerText = "to find the 100 % Customized";
  mainContent4.innerText = "Sack kraft paper & Fluting Paper?";
}

handleHome();

function handleProduct() {
  map.classList.add("hidden");
  mainTitle.innerText = "Product";
  mainContent1.innerText = "Sack Kraft Paper(60gsm to 100gsm)";
  mainContent2.innerText = "Fluting paper (60gsm to 120gsm)";
  mainContent3.innerText =
    "Mixed Grade(Virgin pulp + Occ) , 100% Recycled Grade";
  mainContent4.innerText =
    "Various products(Strength, properties) are available for your needs";
}

function handleLocation() {
  mainTitle.innerText = "Location";
  mainContent1.innerText = "";
  mainContent2.innerText = "";
  mainContent3.innerText = "";
  mainContent4.innerText = "";
  map.classList.remove("hidden");
}

function handleContact() {
  map.classList.add("hidden");
  mainTitle.innerText = "Contact";
  mainContent1.innerText = "Headquarters :";
  mainContent2.innerText = "50 Junamro Yangsan Gyungnam South Korea";
  mainContent3.innerText = "+82 55 363 6300";
  mainContent4.innerText = "songhakpaper@gmail.com";
}

navHome.addEventListener("click", handleHome);
navProduct.addEventListener("click", handleProduct);
navLocation.addEventListener("click", handleLocation);
navContact.addEventListener("click", handleContact);
