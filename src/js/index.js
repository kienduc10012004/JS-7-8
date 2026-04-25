
const el = {
    // Input
    inputArr : document.getElementById('input-mang'),
    outputArr : document.getElementById('output-mang'),
    btnAdd : document.querySelector('.btn-add'),
    btnRemove : document.querySelector('.btn-remove'),
    errInputArr : document.querySelector('.err-input-mang'),
    
    // bài 1
    deBai1 : document.getElementById('bai1'),
    showBai1 : document.getElementById('show-bai1'),
    errShowBai1 : document.querySelector('.err-show-bai1'),
    btnBai1 : document.querySelector('.btn-bai1'),
    showResultBai1 : document.querySelector('.show-result-bai1'),

    // Bài 2
    deBai2 : document.getElementById('bai2'),
    showBai2 : document.getElementById('show-bai2'),
    errShowBai2 : document.querySelector('.err-show-bai2'),
    btnBai2 : document.querySelector('.btn-bai2'),
    showResultBai2 : document.querySelector('.show-result-bai2'),

    // Bài 3
    deBai3 : document.getElementById('bai3'),
    showBai3 : document.getElementById('show-bai3'),
    errShowBai3 : document.querySelector('.err-show-bai3'),
    btnBai3 : document.querySelector('.btn-bai3'),
    showResultBai3 : document.querySelector('.show-result-bai3'),

    // Bài 4
    deBai4 : document.getElementById('bai4'),
    showBai4 : document.getElementById('show-bai4'),
    errShowBai4 : document.querySelector('.err-show-bai4'),
    btnBai4 : document.querySelector('.btn-bai4'),
    showResultBai4 : document.querySelector('.show-result-bai4'),

    // Bài 5:
    deBai5 : document.getElementById('bai5'),
    showBai5 : document.getElementById('show-bai5'),
    errShowBai5 : document.querySelector('.err-show-bai5'),
    btnBai5 : document.querySelector('.btn-bai5'),
    showResultBai5 : document.querySelector('.show-result-bai5'),

    // Bài 6
    deBai6 : document.getElementById('bai6'),
    showBai6 : document.getElementById('show-bai6'),
    errShowBai6 : document.querySelector('.err-show-bai6'),
    showResultBai6 : document.getElementById('show-result-bai6'),
    btnDoiBai6 : document.querySelector('.btn-doi'),

    // Bài 7
    deBai7 : document.getElementById('bai7'),
    showBai7 : document.getElementById('show-bai7'),
    errShowBai7 : document.querySelector('.err-show-bai7'),
    btnBai7 : document.querySelector('.btn-bai7'),
    showResultBai7 : document.querySelector('.show-result-bai7'),

    // Bài 8
    deBai8 : document.getElementById('bai8'),
    showBai8 : document.getElementById('show-bai8'),
    errShowBai8 : document.querySelector('.err-show-bai8'),
    btnBai8 : document.querySelector('.btn-bai8'),
    showResultBai8 : document.querySelector('.show-result-bai8'),

    // Bài 9
    deBai9 : document.getElementById('bai9'),
    showBai9 : document.getElementById('show-bai9'),
    errShowBai9 : document.querySelector('.err-show-bai9'),
    btnBai9 : document.querySelector('.btn-bai9'),
    showResultBai9 : document.querySelector('.show-result-bai9'),

    // Bài 10
    deBai10 : document.getElementById('bai10'),
    showBai10 : document.getElementById('show-bai10'),
    errShowBai10 : document.querySelector('.err-show-bai10'),
    btnBai10 : document.querySelector('.btn-bai10'),
    showResultBai10 : document.querySelector('.show-result-bai10'),
}

let arr = [];

// Sự kiên bấm nút thêm:
const handleAdd = () => {
    let inputArrValue = el.inputArr.value;

    if (!el.inputArr.validity.valid) {
        el.errInputArr.classList.remove("hidden");
        el.errInputArr.textContent = `*Hãy nhập giá trị hợp lệ (là số)`;
        return;
    }
    
    if (inputArrValue === "") {
        el.errInputArr.classList.remove("hidden");
        el.errInputArr.textContent = `*Hãy nhập giá trị`;
        return;
    } 

    arr.push(Number(inputArrValue));
    el.outputArr.innerHTML = `Mảng đã nhập: ${arr}`;
    
    el.errInputArr.classList.add("hidden");
    el.inputArr.value = ""; 
    el.inputArr.focus();
}

el.btnAdd.addEventListener('click', handleAdd);

el.inputArr.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleAdd();
    }
});

// Sự kiện bấm nút xóa:
el.btnRemove.addEventListener('click', () => {
    let inputArrValue = el.inputArr.value;

    if(arr.length === 0) {
        el.errInputArr.classList.remove("hidden");
        return;
    } else {
        arr.pop(Number(inputArrValue))
        el.outputArr.innerHTML = `Mảng đã nhập: ${arr}`
        el.errInputArr.classList.add("hidden");
    }
})

// 1 - Tổng số dương:
el.deBai1.addEventListener('click', () => {
    
    el.showBai1.classList.toggle("hidden");
    el.showBai2.classList.add('hidden');
    el.showBai3.classList.add('hidden');
    el.showBai4.classList.add('hidden');
    el.showBai5.classList.add('hidden');
    el.showBai6.classList.add('hidden');
    el.showBai7.classList.add('hidden');
    el.showBai8.classList.add('hidden');
    el.showBai9.classList.add('hidden');
    el.showBai10.classList.add('hidden');

    el.deBai2.classList.remove('bg-green-100');
    el.deBai3.classList.remove('bg-green-100');
    el.deBai4.classList.remove('bg-green-100');
    el.deBai5.classList.remove('bg-green-100');
    el.deBai6.classList.remove('bg-green-100');
    el.deBai7.classList.remove('bg-green-100');
    el.deBai8.classList.remove('bg-green-100');
    el.deBai9.classList.remove('bg-green-100');
    el.deBai10.classList.remove('bg-green-100');

    el.deBai2.classList.add('bg-white', 'rounded-lg');
    el.deBai3.classList.add('bg-white', 'rounded-lg');
    el.deBai4.classList.add('bg-white', 'rounded-lg');
    el.deBai5.classList.add('bg-white', 'rounded-lg');
    el.deBai6.classList.add('bg-white', 'rounded-lg');
    el.deBai7.classList.add('bg-white', 'rounded-lg');
    el.deBai8.classList.add('bg-white', 'rounded-lg');
    el.deBai9.classList.add('bg-white', 'rounded-lg');
    el.deBai10.classList.add('bg-white', 'rounded-lg');
    
    if (!el.showBai1.classList.contains("hidden")) {
        el.showBai1.classList.remove("slide-down");
        el.showBai1.offsetWidth;
        el.showBai1.classList.add("slide-down");
        el.deBai1.classList.remove('rounded-lg', 'bg-white');
        el.deBai1.classList.add('rounded-t-lg', 'bg-green-100');
    } else {
        el.deBai1.classList.remove('bg-green-300');
        el.deBai1.classList.add('rounded-lg', 'bg-white');
    }

    el.btnBai1.addEventListener('click', () => {
        let count = 0;
    
        if(arr.length === 0) {
            el.errShowBai1.classList.remove("hidden");
            el.showResultBai1.innerHTML = `Mảng chưa có giá trị`
            return;
        }   

        el.errShowBai1.classList.add("hidden");

        arr.forEach((n) => {
            if(n > 0)
                count += Number(n);
        })
        
        el.showResultBai1.innerHTML = `Tổng các số dương trong mảng là: ${count}</p>`    
    })
})    

//  2 - Đếm số dương: 
el.deBai2.addEventListener('click', () => {
    el.showBai2.classList.toggle("hidden");

    el.showBai1.classList.add('hidden');
    el.showBai3.classList.add('hidden');
    el.showBai4.classList.add('hidden');
    el.showBai5.classList.add('hidden');
    el.showBai6.classList.add('hidden');
    el.showBai7.classList.add('hidden');
    el.showBai8.classList.add('hidden');
    el.showBai9.classList.add('hidden');
    el.showBai10.classList.add('hidden');

    el.deBai1.classList.remove('bg-green-100');
    el.deBai3.classList.remove('bg-green-100');
    el.deBai4.classList.remove('bg-green-100');
    el.deBai5.classList.remove('bg-green-100');
    el.deBai6.classList.remove('bg-green-100');
    el.deBai7.classList.remove('bg-green-100');
    el.deBai8.classList.remove('bg-green-100');
    el.deBai9.classList.remove('bg-green-100');
    el.deBai10.classList.remove('bg-green-100');

    el.deBai1.classList.add('bg-white', 'rounded-lg');
    el.deBai3.classList.add('bg-white', 'rounded-lg');
    el.deBai4.classList.add('bg-white', 'rounded-lg');
    el.deBai5.classList.add('bg-white', 'rounded-lg');
    el.deBai6.classList.add('bg-white', 'rounded-lg');
    el.deBai7.classList.add('bg-white', 'rounded-lg');
    el.deBai8.classList.add('bg-white', 'rounded-lg');
    el.deBai9.classList.add('bg-white', 'rounded-lg');
    el.deBai10.classList.add('bg-white', 'rounded-lg');

    if (!el.showBai2.classList.contains("hidden")) {
        el.showBai2.classList.remove("slide-down");
        el.showBai2.offsetWidth;
        el.showBai2.classList.add("slide-down");
        el.deBai2.classList.remove('rounded-lg', 'bg-white');
        el.deBai2.classList.add('rounded-t-lg', 'bg-green-100');
    } else {
        el.deBai2.classList.remove('bg-green-300');
        el.deBai2.classList.add('rounded-lg', 'bg-white');
    }

    el.btnBai2.addEventListener('click', () => {
        let count = 0;

        if(arr.length === 0) {
            el.errShowBai2.classList.remove("hidden");
            el.showResultBai2.innerHTML = `Mảng chưa có giá trị`;
            return;
        }

        el.errShowBai2.classList.add("hidden");
        arr.forEach((n) => {
            if(n > 0)
                count++;
        })
        el.showResultBai2.innerHTML = `Có ${count} số dương trong mảng`  
    })  
})

//  3 - Tìm số nhỏ nhất:
el.deBai3.addEventListener('click', () => {
    el.showBai3.classList.toggle("hidden");

    el.showBai2.classList.add('hidden');
    el.showBai1.classList.add('hidden');
    el.showBai4.classList.add('hidden');
    el.showBai5.classList.add('hidden');
    el.showBai6.classList.add('hidden');
    el.showBai7.classList.add('hidden');
    el.showBai8.classList.add('hidden');
    el.showBai9.classList.add('hidden');
    el.showBai10.classList.add('hidden');

    el.deBai2.classList.remove('bg-green-100');
    el.deBai1.classList.remove('bg-green-100');
    el.deBai4.classList.remove('bg-green-100');
    el.deBai5.classList.remove('bg-green-100');
    el.deBai6.classList.remove('bg-green-100');
    el.deBai7.classList.remove('bg-green-100');
    el.deBai8.classList.remove('bg-green-100');
    el.deBai9.classList.remove('bg-green-100');
    el.deBai10.classList.remove('bg-green-100');

    el.deBai2.classList.add('bg-white', 'rounded-lg');
    el.deBai1.classList.add('bg-white', 'rounded-lg');
    el.deBai4.classList.add('bg-white', 'rounded-lg');
    el.deBai5.classList.add('bg-white', 'rounded-lg');
    el.deBai6.classList.add('bg-white', 'rounded-lg');
    el.deBai7.classList.add('bg-white', 'rounded-lg');
    el.deBai8.classList.add('bg-white', 'rounded-lg');
    el.deBai9.classList.add('bg-white', 'rounded-lg');
    el.deBai10.classList.add('bg-white', 'rounded-lg');

    if (!el.showBai3.classList.contains("hidden")) {
        el.showBai3.classList.remove("slide-down");
        el.showBai3.offsetWidth;
        el.showBai3.classList.add("slide-down");
        el.deBai3.classList.remove('rounded-lg', 'bg-white');
        el.deBai3.classList.add('rounded-t-lg', 'bg-green-100');
    } else {
        el.deBai3.classList.remove('bg-green-300');
        el.deBai3.classList.add('rounded-lg', 'bg-white');
    }

    el.btnBai3.addEventListener('click', () => {
        let min = arr[0];
    
        if(arr.length === 0) {
            el.errShowBai3.classList.remove("hidden");
            el.showResultBai3.innerHTML = `Mảng chưa có giá trị`
            return;
        }
    
        el.errShowBai3.classList.add("hidden");
        arr.forEach((n) => {
            if(n < min)
                min = Number(n);
        })
        
        el.showResultBai3.innerHTML = `Số nhỏ nhất trong mảng là: ${min}`    
    })
})

// 4 - Tìm số dương nhỏ nhất:
el.deBai4.addEventListener('click', () => {
    el.showBai4.classList.toggle("hidden");

    el.showBai2.classList.add('hidden');
    el.showBai3.classList.add('hidden');
    el.showBai1.classList.add('hidden');
    el.showBai5.classList.add('hidden');
    el.showBai6.classList.add('hidden');
    el.showBai7.classList.add('hidden');
    el.showBai8.classList.add('hidden');
    el.showBai9.classList.add('hidden');
    el.showBai10.classList.add('hidden');

    el.deBai2.classList.remove('bg-green-100');
    el.deBai3.classList.remove('bg-green-100');
    el.deBai1.classList.remove('bg-green-100');
    el.deBai5.classList.remove('bg-green-100');
    el.deBai6.classList.remove('bg-green-100');
    el.deBai7.classList.remove('bg-green-100');
    el.deBai8.classList.remove('bg-green-100');
    el.deBai9.classList.remove('bg-green-100');
    el.deBai10.classList.remove('bg-green-100');

    el.deBai2.classList.add('bg-white', 'rounded-lg');
    el.deBai3.classList.add('bg-white', 'rounded-lg');
    el.deBai1.classList.add('bg-white', 'rounded-lg');
    el.deBai5.classList.add('bg-white', 'rounded-lg');
    el.deBai6.classList.add('bg-white', 'rounded-lg');
    el.deBai7.classList.add('bg-white', 'rounded-lg');
    el.deBai8.classList.add('bg-white', 'rounded-lg');
    el.deBai9.classList.add('bg-white', 'rounded-lg');
    el.deBai10.classList.add('bg-white', 'rounded-lg');

    if (!el.showBai4.classList.contains("hidden")) {
        el.showBai4.classList.remove("slide-down");
        el.showBai4.offsetWidth;
        el.showBai4.classList.add("slide-down");
        el.deBai4.classList.remove('rounded-lg', 'bg-white');
        el.deBai4.classList.add('rounded-t-lg', 'bg-green-100');
    } else {
        el.deBai4.classList.remove('bg-green-300');
        el.deBai4.classList.add('rounded-lg', 'bg-white');
    }

    el.btnBai4.addEventListener('click', () => {
        let min = arr[0];
    
        if(arr.length === 0) {
            el.errShowBai4.classList.remove("hidden");
            el.showResultBai4.innerHTML = `Mảng chưa có giá trị`
            return;
        }
    
        el.errShowBai4.classList.add("hidden");
        arr.forEach((n) => {
            if(n > 0 && n < min)
                min = Number(n);
        })
    
        el.showResultBai4.innerHTML = `Số dương nhỏ nhất trong mảng là: ${min}`    
    })
})

// 5 - Tìm số chẵn cuối cùng:
el.deBai5.addEventListener('click', () => {
    el.showBai5.classList.toggle("hidden");

    el.showBai2.classList.add('hidden');
    el.showBai3.classList.add('hidden');
    el.showBai4.classList.add('hidden');
    el.showBai1.classList.add('hidden');
    el.showBai6.classList.add('hidden');
    el.showBai7.classList.add('hidden');
    el.showBai8.classList.add('hidden');
    el.showBai9.classList.add('hidden');
    el.showBai10.classList.add('hidden');

    el.deBai2.classList.remove('bg-green-100');
    el.deBai3.classList.remove('bg-green-100');
    el.deBai4.classList.remove('bg-green-100');
    el.deBai1.classList.remove('bg-green-100');
    el.deBai6.classList.remove('bg-green-100');
    el.deBai7.classList.remove('bg-green-100');
    el.deBai8.classList.remove('bg-green-100');
    el.deBai9.classList.remove('bg-green-100');
    el.deBai10.classList.remove('bg-green-100');

    el.deBai2.classList.add('bg-white', 'rounded-lg');
    el.deBai3.classList.add('bg-white', 'rounded-lg');
    el.deBai4.classList.add('bg-white', 'rounded-lg');
    el.deBai1.classList.add('bg-white', 'rounded-lg');
    el.deBai6.classList.add('bg-white', 'rounded-lg');
    el.deBai7.classList.add('bg-white', 'rounded-lg');
    el.deBai8.classList.add('bg-white', 'rounded-lg');
    el.deBai9.classList.add('bg-white', 'rounded-lg');
    el.deBai10.classList.add('bg-white', 'rounded-lg');

    if (!el.showBai5.classList.contains("hidden")) {
        el.showBai5.classList.remove("slide-down");
        el.showBai5.offsetWidth;
        el.showBai5.classList.add("slide-down");
        el.deBai5.classList.remove('rounded-lg', 'bg-white');
        el.deBai5.classList.add('rounded-t-lg', 'bg-green-100');
    } else {
        el.deBai5.classList.remove('bg-green-300');
        el.deBai5.classList.add('rounded-lg', 'bg-white');
    }

    el.btnBai5.addEventListener('click', () => {
        let even = 0;
    
        if(arr.length === 0) {
            el.errShowBai5.classList.remove("hidden");
            el.showResultBai5.innerHTML = `Mảng chưa có giá trị`;
            return;
        }
    
        el.errShowBai5.classList.add("hidden");
        arr.forEach((n) => {
            if(n % 2 === 0)
                even = Number(n);
        })
    
        if(even === 0)
            el.showResultBai5.innerHTML = `Mảng không có số chẵn`;
        else 
            el.showResultBai5.innerHTML = `Số chẵn cuối cùng trong mảng là: ${even}`;   
    })
    
})

// 6 - Đổi chỗ:

el.deBai6.addEventListener('click', () => {
    el.showBai6.classList.toggle("hidden");

    el.showBai2.classList.add('hidden');
    el.showBai3.classList.add('hidden');
    el.showBai4.classList.add('hidden');
    el.showBai5.classList.add('hidden');
    el.showBai1.classList.add('hidden');
    el.showBai7.classList.add('hidden');
    el.showBai8.classList.add('hidden');
    el.showBai9.classList.add('hidden');
    el.showBai10.classList.add('hidden');

    el.deBai2.classList.remove('bg-green-100');
    el.deBai3.classList.remove('bg-green-100');
    el.deBai4.classList.remove('bg-green-100');
    el.deBai5.classList.remove('bg-green-100');
    el.deBai1.classList.remove('bg-green-100');
    el.deBai7.classList.remove('bg-green-100');
    el.deBai8.classList.remove('bg-green-100');
    el.deBai9.classList.remove('bg-green-100');
    el.deBai10.classList.remove('bg-green-100');

    el.deBai2.classList.add('bg-white', 'rounded-lg');
    el.deBai3.classList.add('bg-white', 'rounded-lg');
    el.deBai4.classList.add('bg-white', 'rounded-lg');
    el.deBai5.classList.add('bg-white', 'rounded-lg');
    el.deBai1.classList.add('bg-white', 'rounded-lg');
    el.deBai7.classList.add('bg-white', 'rounded-lg');
    el.deBai8.classList.add('bg-white', 'rounded-lg');
    el.deBai9.classList.add('bg-white', 'rounded-lg');
    el.deBai10.classList.add('bg-white', 'rounded-lg');

    if (!el.showBai6.classList.contains("hidden")) {
        el.showBai6.classList.remove("slide-down");
        el.showBai6.offsetWidth;
        el.showBai6.classList.add("slide-down");
        el.deBai6.classList.remove('rounded-lg', 'bg-white');
        el.deBai6.classList.add('rounded-t-lg', 'bg-green-100');
    } else {
        el.deBai6.classList.remove('bg-green-300');
        el.deBai6.classList.add('rounded-lg', 'bg-white');
    }

    el.btnDoiBai6.addEventListener('click', () => {
        let arrnew = [...arr];
        let indexBai6_1 = document.getElementById('vitri1').value
        let indexBai6_2 = document.getElementById('vitri2').value
        let errIndex1 = document.querySelector('.err-vitri1-bai6')
        let errIndex2 = document.querySelector('.err-vitri2-bai6')
        
        if(indexBai6_1 === "") {
            errIndex1.classList.remove("hidden");
        } else {
            errIndex1.classList.add("hidden");
        }

        if(indexBai6_2 === "") {
            errIndex2.classList.remove("hidden");
        } else {
            errIndex2.classList.add("hidden");
        }
        
        if(arr.length === 0) {
            el.errShowBai6.classList.remove("hidden");
            return;
        }
        
        el.errShowBai6.classList.add("hidden");
        
        if(indexBai6_1 === "" || indexBai6_2 === "")
            el.showResultBai6.innerHTML = `Chưa cập nhật vị trí đầy đủ`
        else {
            if((indexBai6_1 < 0 || indexBai6_1 >= arrnew.length) || (indexBai6_2 < 0 || indexBai6_2 >= arrnew.length)){
                el.showResultBai6.innerHTML = `Vị trí không tồn tại trong mảng!`
                return
            } else {
                let temp = arrnew[indexBai6_1];
                arrnew[indexBai6_1] = arrnew[indexBai6_2];
                arrnew[indexBai6_2] = temp;
                el.showResultBai6.innerHTML = `Mảng sau khi đổi: ${arrnew}`    
            }
        }
    })
})

// 7 - Sắp xếp tăng dần:
el.deBai7.addEventListener('click', () => {
    el.showBai7.classList.toggle("hidden");

    el.showBai2.classList.add('hidden');
    el.showBai3.classList.add('hidden');
    el.showBai4.classList.add('hidden');
    el.showBai5.classList.add('hidden');
    el.showBai6.classList.add('hidden');
    el.showBai1.classList.add('hidden');
    el.showBai8.classList.add('hidden');
    el.showBai9.classList.add('hidden');
    el.showBai10.classList.add('hidden');

    el.deBai2.classList.remove('bg-green-100');
    el.deBai3.classList.remove('bg-green-100');
    el.deBai4.classList.remove('bg-green-100');
    el.deBai5.classList.remove('bg-green-100');
    el.deBai6.classList.remove('bg-green-100');
    el.deBai1.classList.remove('bg-green-100');
    el.deBai8.classList.remove('bg-green-100');
    el.deBai9.classList.remove('bg-green-100');
    el.deBai10.classList.remove('bg-green-100');

    el.deBai2.classList.add('bg-white', 'rounded-lg');
    el.deBai3.classList.add('bg-white', 'rounded-lg');
    el.deBai4.classList.add('bg-white', 'rounded-lg');
    el.deBai5.classList.add('bg-white', 'rounded-lg');
    el.deBai6.classList.add('bg-white', 'rounded-lg');
    el.deBai1.classList.add('bg-white', 'rounded-lg');
    el.deBai8.classList.add('bg-white', 'rounded-lg');
    el.deBai9.classList.add('bg-white', 'rounded-lg');
    el.deBai10.classList.add('bg-white', 'rounded-lg');

    if (!el.showBai7.classList.contains("hidden")) {
        el.showBai7.classList.remove("slide-down");
        el.showBai7.offsetWidth;
        el.showBai7.classList.add("slide-down");
        el.deBai7.classList.remove('rounded-lg', 'bg-white');
        el.deBai7.classList.add('rounded-t-lg', 'bg-green-100');
    } else {
        el.deBai7.classList.remove('bg-green-300');
        el.deBai7.classList.add('rounded-lg', 'bg-white');
    }

    el.btnBai7.addEventListener('click', () => {
        let arrnew = [...arr];
    
        if(arr.length === 0) {
            el.errShowBai7.classList.remove("hidden");
            el.showResultBai7.innerHTML = `Mảng chưa có giá trị` 
            return;
        }

        el.errShowBai7.classList.add("hidden");
         
        for(let i = 0; i < arrnew.length; i++) {
            for(let j = i + 1; j < arrnew.length; j++){
                if(arrnew[i] > arrnew[j]) {
                    let temp = arrnew[i];
                    arrnew[i] = arrnew[j];
                    arrnew[j] = temp;
                }
            }
        }
           
        el.showResultBai7.innerHTML = `Mảng sau khi sắp xếp tăng dần: ${arrnew}`   
    })
})

// 8 - Tìm số nguyên đầu tiên:
el.deBai8.addEventListener('click', () => {
    el.showBai8.classList.toggle("hidden");

    el.showBai2.classList.add('hidden');
    el.showBai3.classList.add('hidden');
    el.showBai4.classList.add('hidden');
    el.showBai5.classList.add('hidden');
    el.showBai6.classList.add('hidden');
    el.showBai7.classList.add('hidden');
    el.showBai1.classList.add('hidden');
    el.showBai9.classList.add('hidden');
    el.showBai10.classList.add('hidden');

    el.deBai2.classList.remove('bg-green-100');
    el.deBai3.classList.remove('bg-green-100');
    el.deBai4.classList.remove('bg-green-100');
    el.deBai5.classList.remove('bg-green-100');
    el.deBai6.classList.remove('bg-green-100');
    el.deBai7.classList.remove('bg-green-100');
    el.deBai1.classList.remove('bg-green-100');
    el.deBai9.classList.remove('bg-green-100');
    el.deBai10.classList.remove('bg-green-100');

    el.deBai2.classList.add('bg-white', 'rounded-lg');
    el.deBai3.classList.add('bg-white', 'rounded-lg');
    el.deBai4.classList.add('bg-white', 'rounded-lg');
    el.deBai5.classList.add('bg-white', 'rounded-lg');
    el.deBai6.classList.add('bg-white', 'rounded-lg');
    el.deBai7.classList.add('bg-white', 'rounded-lg');
    el.deBai1.classList.add('bg-white', 'rounded-lg');
    el.deBai9.classList.add('bg-white', 'rounded-lg');
    el.deBai10.classList.add('bg-white', 'rounded-lg');

    if (!el.showBai8.classList.contains("hidden")) {
        el.showBai8.classList.remove("slide-down");
        el.showBai8.offsetWidth;
        el.showBai8.classList.add("slide-down");
        el.deBai8.classList.remove('rounded-lg', 'bg-white');
        el.deBai8.classList.add('rounded-t-lg', 'bg-green-100');
    } else {
        el.deBai8.classList.remove('bg-green-300');
        el.deBai8.classList.add('rounded-lg', 'bg-white');
    }

    el.btnBai8.addEventListener('click', () => {
        let check = 0;
        let count = 0;
        let soNguyenToDauTien = 0;

        if(arr.length === 0) {
            el.errShowBai8.classList.remove("hidden");
            el.showResultBai8.innerHTML = `Mảng chưa có giá trị` 
            return;
        }

        el.errShowBai8.classList.add("hidden");
        for(let n of arr) {
        if(n > 1)
            for(let i = 1; i <= n; i++) 
                if(n % i === 0)
                    check++; 

            if(check === 2) {
                soNguyenToDauTien = n;
                break;
            }
            check = 0;
            count++;
        } 
        
        if(count === arr.length) {
            el.showResultBai8.innerHTML = `Mảng không có số nguyên tố` 
            return
        }
        
        el.showResultBai8.innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${soNguyenToDauTien}`
    })
})

// 9 - Đếm số nguyên:
el.deBai9.addEventListener('click', () => {
    el.showBai9.classList.toggle("hidden");

    el.showBai2.classList.add('hidden');
    el.showBai3.classList.add('hidden');
    el.showBai4.classList.add('hidden');
    el.showBai5.classList.add('hidden');
    el.showBai6.classList.add('hidden');
    el.showBai7.classList.add('hidden');
    el.showBai8.classList.add('hidden');
    el.showBai1.classList.add('hidden');
    el.showBai10.classList.add('hidden');

    el.deBai2.classList.remove('bg-green-100');
    el.deBai3.classList.remove('bg-green-100');
    el.deBai4.classList.remove('bg-green-100');
    el.deBai5.classList.remove('bg-green-100');
    el.deBai6.classList.remove('bg-green-100');
    el.deBai7.classList.remove('bg-green-100');
    el.deBai8.classList.remove('bg-green-100');
    el.deBai1.classList.remove('bg-green-100');
    el.deBai10.classList.remove('bg-green-100');

    el.deBai2.classList.add('bg-white', 'rounded-lg');
    el.deBai3.classList.add('bg-white', 'rounded-lg');
    el.deBai4.classList.add('bg-white', 'rounded-lg');
    el.deBai5.classList.add('bg-white', 'rounded-lg');
    el.deBai6.classList.add('bg-white', 'rounded-lg');
    el.deBai7.classList.add('bg-white', 'rounded-lg');
    el.deBai8.classList.add('bg-white', 'rounded-lg');
    el.deBai1.classList.add('bg-white', 'rounded-lg');
    el.deBai10.classList.add('bg-white', 'rounded-lg');

    if (!el.showBai9.classList.contains("hidden")) {
        el.showBai9.classList.remove("slide-down");
        el.showBai9.offsetWidth;
        el.showBai9.classList.add("slide-down");
        el.deBai9.classList.remove('rounded-lg', 'bg-white');
        el.deBai9.classList.add('rounded-t-lg', 'bg-green-100');
    } else {
        el.deBai9.classList.remove('bg-green-300');
        el.deBai9.classList.add('rounded-lg', 'bg-white');
    }

    el.btnBai9.addEventListener('click', () => {
        let count = 0;

        if(arr.length === 0) {
            el.errShowBai9.classList.remove("hidden");
            el.showResultBai9.innerHTML = `Mảng chưa có giá trị` 
            return;
        }

        el.errShowBai9.classList.add("hidden");
       
        arr.forEach((n) => {
            if(Number.isInteger(n))
                count++;
        })

        if(count != 0)
            el.showResultBai9.innerHTML = `Mảng có ${count} số nguyên`
        else
            el.showResultBai9.innerHTML = `Mảng không có số nguyên`
    })
})

// 10 - So sánh số lượng số âm và dương
el.deBai10.addEventListener('click', () => {
    el.showBai10.classList.toggle("hidden");

    el.showBai2.classList.add('hidden');
    el.showBai3.classList.add('hidden');
    el.showBai4.classList.add('hidden');
    el.showBai5.classList.add('hidden');
    el.showBai6.classList.add('hidden');
    el.showBai7.classList.add('hidden');
    el.showBai8.classList.add('hidden');
    el.showBai9.classList.add('hidden');
    el.showBai1.classList.add('hidden');

    el.deBai2.classList.remove('bg-green-100');
    el.deBai3.classList.remove('bg-green-100');
    el.deBai4.classList.remove('bg-green-100');
    el.deBai5.classList.remove('bg-green-100');
    el.deBai6.classList.remove('bg-green-100');
    el.deBai7.classList.remove('bg-green-100');
    el.deBai8.classList.remove('bg-green-100');
    el.deBai9.classList.remove('bg-green-100');
    el.deBai1.classList.remove('bg-green-100');

    el.deBai2.classList.add('bg-white', 'rounded-lg');
    el.deBai3.classList.add('bg-white', 'rounded-lg');
    el.deBai4.classList.add('bg-white', 'rounded-lg');
    el.deBai5.classList.add('bg-white', 'rounded-lg');
    el.deBai6.classList.add('bg-white', 'rounded-lg');
    el.deBai7.classList.add('bg-white', 'rounded-lg');
    el.deBai8.classList.add('bg-white', 'rounded-lg');
    el.deBai9.classList.add('bg-white', 'rounded-lg');
    el.deBai1.classList.add('bg-white', 'rounded-lg');

    if (!el.showBai10.classList.contains("hidden")) {
        el.showBai10.classList.remove("slide-down");
        el.showBai10.offsetWidth;
        el.showBai10.classList.add("slide-down");
        el.deBai10.classList.remove('rounded-lg', 'bg-white');
        el.deBai10.classList.add('rounded-t-lg', 'bg-green-100');
    } else {
        el.deBai10.classList.remove('bg-green-300');
        el.deBai10.classList.add('rounded-lg', 'bg-white');
    }

    el.btnBai10.addEventListener('click', () => {
        let am = 0, duong = 0;

        if(arr.length === 0) {
            el.errShowBai10.classList.remove("hidden");
            el.showResultBai10.innerHTML = `Mảng chưa có giá trị` 
            return;
        }

        el.errShowBai10.classList.add("hidden");
       
        arr.forEach((n) => {
            if(n > 0)
                duong++;
            else if(n < 0) am++;
        })

        if(am === 0 && duong === 0)
            el.showResultBai10.innerHTML = `- Mảng không có số âm và số dương (chỉ có 0)`
        else if(am === 0 && duong > 0) {
            el.showResultBai10.innerHTML = `- Mảng không có số âm <br> - Số lượng số dương trong mảng là: ${duong}`
        } else if(duong === 0 && am > 0) {
            el.showResultBai10.innerHTML = `- Mảng không có số dương <br> - Số lượng số âm trong mảng là: ${duong}`
        } else if(am > duong) {
            el.showResultBai10.innerHTML = `- Mảng có số lượng số âm lớn hơn số lượng số dương <br> - Số âm: ${am}  |  Số dương: ${duong}`
        } else if(am < duong){
            el.showResultBai10.innerHTML = `- Mảng có số lượng số âm nhỏ hơn số lượng số dương <br> - Số âm: ${am}  |  Số dương: ${duong}`
        } else el.showResultBai10.innerHTML = `- Mảng có số lượng số âm bằng số lượng số dương <br> - Số âm: ${am}  |  Số dương: ${duong}`
        am = 0; duong = 0;
    })
})
