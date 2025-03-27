
window.onload = function() {
    document.getElementById("formPersegi").classList.add("hidden");
    document.getElementById("formPersegiPanjang").classList.add("hidden");
};


function tampilkanForm() {
    let pilihan = document.getElementById("pilihan").value;
    document.getElementById("formPersegi").classList.add("hidden");
    document.getElementById("formPersegiPanjang").classList.add("hidden");

    if (pilihan === "persegi") {
        document.getElementById("formPersegi").classList.remove("hidden");
    } else if (pilihan === "persegiPanjang") {
        document.getElementById("formPersegiPanjang").classList.remove("hidden");
    }
}

function hitungLuasPersegi() {
    let sisi = document.getElementById("sisiPersegi").value;
    if (sisi === "" || sisi <= 0) {
        document.getElementById("hasilPersegi").innerHTML = "Masukkan angka yang valid!";
        return;
    }
    let luas = sisi * sisi;
    document.getElementById("hasilPersegi").innerHTML = `L = ${sisi} x ${sisi} = ${luas} cm²`;
}

function hitungKelilingPersegi() {
    let sisi = document.getElementById("sisiPersegi").value;
    if (sisi === "" || sisi <= 0) {
        document.getElementById("hasilPersegi").innerHTML = "Masukkan angka yang valid!";
        return;
    }
    let keliling = 4 * sisi;
    document.getElementById("hasilPersegi").innerHTML = `K = 4 x ${sisi} = ${keliling} cm`;
}

function hitungLuasPersegiPanjang() {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    
    if (panjang === "" || panjang <= 0 || lebar === "" || lebar <= 0) {
        document.getElementById("hasilPersegiPanjang").innerHTML = "Masukkan angka yang valid!";
        return;
    }
    
    let luas = panjang * lebar;
    document.getElementById("hasilPersegiPanjang").innerHTML = `L = ${panjang} x ${lebar} = ${luas} cm²`;
}

function hitungKelilingPersegiPanjang() {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    
    if (panjang === "" || panjang <= 0 || lebar === "" || lebar <= 0) {
        document.getElementById("hasilPersegiPanjang").innerHTML = "Masukkan angka yang valid!";
        return;
    }
    
    let keliling = 2 * (parseInt(panjang) + parseInt(lebar));
    document.getElementById("hasilPersegiPanjang").innerHTML = `K = 2 x (${panjang} + ${lebar}) = ${keliling} cm`;
}

function reset() {
    document.getElementById("pilihan").value = "none";
    document.getElementById("formPersegi").classList.add("hidden");
    document.getElementById("formPersegiPanjang").classList.add("hidden");

    document.getElementById("sisiPersegi").value = "";
    document.getElementById("panjang").value = "";
    document.getElementById("lebar").value = "";

    document.getElementById("hasilPersegi").innerHTML = "";
    document.getElementById("hasilPersegiPanjang").innerHTML = "";
}