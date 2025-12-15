// LOGIN
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user && pass){
        sessionStorage.setItem("isLogin", "true");
        window.location.href = "main.html";
    } else {
        alert("Isi username dan password dulu!");
    }
}

// CEK LOGIN HALAMAN PRODUK
function checkLogin(){
    if(sessionStorage.getItem("isLogin") !== "true"){
        alert("Silakan login terlebih dahulu");
        window.location.href = "index.html";
    }
}

// LOGOUT
function logout(){
    sessionStorage.removeItem("isLogin");
    window.location.href = "index.html";
}

// GANTI GAMBAR PRODUK
function changeImage(event){
    const img = document.getElementById("productImg");
    img.src = URL.createObjectURL(event.target.files[0]);
}
