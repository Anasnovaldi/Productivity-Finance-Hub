const total_digital = document.getElementById("total-digital")
const total_cash = document.getElementById("total-cash")

const nominal_input = document.getElementById("nominal-input")
const deskripsi_input = document.getElementById("deskripsi-input")
const kategori_input = document.getElementById("kategori")

const button_tabung = document.getElementById("btn-tabung")

const list_deskripsi = document.getElementById("list-desc")

let arr_digital = [];
let arr_cash = [];

button_tabung.addEventListener("click", function(){
    if((nominal_input.value.trim() === "") || (deskripsi_input.value.trim() === "")){
        alert("Silahkan Isi Dengan Lengkap");
    }
    else{
        if(nominal_input.value.trim() <= 0){
            alert("Nominal tidak boleh 0 atau kurang dari 0");
        }
        else{
            if(kategori_input === "cash"){
                const nominal_rupiah = Number(nominal_input.value);
                const objekdata = {
                    Nominal = nominal_rupiah,
                    Deskripsi = deskripsi_input.value,
                    Kategori = kategori_input.value
                }
                arr_cash.push(objekdata);
                total_cash.innerText = arr_cash.reduce(function(total, danasekarang){
                    return total + danasekarang;
                }, 0);

                const itembaru = document.createElement("li");
                itembaru.innerText = `Nominal Rupiah Rp.${objekdata.Nominal} dalam bentuk cash berhasil ditambahkan dengan deskripsi ${objekdata.Deskripsi}`;
                list_deskripsi.append(itembaru);
                nominal_input.value = "";
                deskripsi_input.value = "";
            }

            else{
                const nominal_rupiah = Number(nominal_input.value);
                const objekdata = {
                    Nominal = nominal_rupiah,
                    Deskripsi = deskripsi_input.value,
                    Kategori = kategori_input.value
                }
                arr_digital.push(objekdata);
                total_digital.innerText = arr_digital.reduce(function(total, danasekarang){
                    return total + danasekarang;
                }, 0);

                const itembaru = document.createElement("li");
                itembaru.innerText = `Nominal Rupiah Rp.${objekdata.Nominal} dalam bentuk digital berhasil ditambahkan dengan deskripsi ${objekdata.Deskripsi}`;
                
                list_deskripsi.append(itembaru);
                nominal_input.value = "";
                deskripsi_input.value = "";
            }
        }
    }
})