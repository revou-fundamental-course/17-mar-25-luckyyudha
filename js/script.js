//ini javascript ekternal
function hitungLuas() {
    let sisi = document.getElementById("sisi").value;
    
    if (sisi === "" || sisi <= 0) {
        document.getElementById("hasil").innerHTML = "Masukkan angka yang valid!";
        return;
    }
    
    let luas = sisi * sisi;
    document.getElementById("hasil").innerHTML = "Luas persegi: " + luas + " cm²";
}

function hitungKeliling() {
    let sisi = document.getElementById("sisi").value;
    
    if (sisi === "" || sisi <= 0) {
        document.getElementById("hasil").innerHTML = "Masukkan angka yang valid!";
        return;
    }
    
    let keliling = 4 * sisi;
    document.getElementById("hasil").innerHTML = "Keliling persegi: " + keliling + " cm";
}