const input_task = document.getElementById("task-input");
const button_tambah = document.getElementById("btn-tambah");
const task_list = document.getElementById("task-list");

button_tambah.addEventListener("click", function(){
    if(input_task.value.trim() === ""){
        alert("tolong dilengkapi");
    }
    else{
        const inputtask = input_task.value.trim();

        const newtask = document.createElement("li");

        const textbungkus = document.createElement("span");
        textbungkus.innerText = `Tugas baru bernama "${inputtask}" berhasil ditambahkan...`;
        newtask.append(textbungkus);

        const containerbutton = document.createElement("div");
        containerbutton.style.display = "flex";
        containerbutton.style.gap = "5px";

        const buttonedit = document.createElement("button");
        buttonedit.innerText = "Edit";
        buttonedit.style.backgroundColor = "orange";
        buttonedit.style.color = "white";
        buttonedit.style.padding = "10px";
        buttonedit.style.boxShadow = "2px 2px 1.5px black";
        buttonedit.style.border = "0.2px black solid";
        containerbutton.append(buttonedit);

        const buttonhapus = document.createElement("button");
        buttonhapus.innerText = "Hapus";
        buttonhapus.style.backgroundColor = "rgb(255, 8, 8)";
        buttonhapus.style.color = "white";
        buttonhapus.style.padding = "10px";
        buttonhapus.style.boxShadow = "2px 2px 1.5px black";
        buttonhapus.style.border = "0.2px black solid";
        containerbutton.append(buttonhapus);

        newtask.append(containerbutton);

        buttonedit.addEventListener("click",function(){
            if(textbungkus.contentEditable !== "true"){
                textbungkus.contentEditable = "true";
                textbungkus.focus();
                textbungkus.style.backgroundColor = "#f0f0f0";
                buttonedit.innerText = "Simpan";
                buttonedit.style.backgroundColor = "rgb(16, 185, 129)";
            } 
            else {
                textbungkus.contentEditable = "false";
                textbungkus.style.backgroundColor = "transparent";
                buttonedit.innerText = "Edit";
                buttonedit.style.backgroundColor = "orange";
            }
        })

        buttonhapus.addEventListener("click", function(){
            newtask.remove();
        })

        task_list.append(newtask);
        input_task.value = "";
    }
})