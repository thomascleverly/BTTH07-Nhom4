// // Câu 01: Đăng kí User ID > 
// // Yêu cầu 01: Required
// // Yêu cầu 02: Độ dài thuộc [5, 12] 
//     // Cách 01: Ko dùng biểu thức chính qui
//     // Cách 02: Có dùng biểu thức chính qui

// // Lưu ý: Kiểu phần tử Submit có hành động mặc định gửi dữ liệu đi

// let userID = document.getElementById('txtUserID');
// let statusOfUserID = document.getElementById('statusOfUserID')
// // let userID = document.querySelector('#txtUserID')

// userID.addEventListener('focus',function(){
//     // userID.style.backgroundColor = 'yellow'
//     this.style.border = '1px solid red'
// })

// userID.addEventListener('focusout', leaveUserId)

// function leaveUserId(){
//     // Cách 01: Ko dùng gì BTCQ
//     // if(userID.value.length >=5 && userID.value.length <=12){
//     //     statusOfUserID.textContent = 'UserID hợp lệ'
//     //     statusOfUserID.style.color = 'blue'
//     // }else{
//     //     statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//     //     statusOfUserID.style.color = 'red'
//     // }

//     // Cách 02: dùng BTCQ: [1, +duongvocung]
//     var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//     if(userIDRegex.test(userID.value)){
//         statusOfUserID.textContent = 'UserID hợp lệ'
//         statusOfUserID.style.color = 'blue'
//     }else{
//         statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//         statusOfUserID.style.color = 'red'
//     }
// }

// // userID.onchange = function(){
// //     alert('Bạn vừa thay đổi UserID và thoát khỏi UserID')
// // }

// Cách làm 02: Chỉ xử lý khi nhấp Submit

// function checkUserId(){
//         // Cách 02: dùng BTCQ: [1, +duongvocung]
//     let userID = document.getElementById('txtUserID');
//     let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//     if(userIDRegex.test(userID.value)){
//         return true
//     }
//     return false
// }

// function checkPassword(){
//     let password = document.getElementById('txtPassword');
//     let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
//     if(passwordRegex.test(password.value)){
//         return true
//     }
//     return false
// }
// // Tương tự sẽ có 9 hàm check khác

// let register = document.getElementById('btnRegister')

// register.addEventListener('click', function(e){
//     e.preventDefault()
//     let statusOfUserID = document.getElementById('statusOfUserID')
//     let statusOfPassword = document.getElementById('statusOfPassword')
//     if(checkUserId() == true){
//         statusOfUserID.textContent = 'UserID hợp lệ'
//         statusOfUserID.style.color = 'blue'
//     }else{
//         statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
//         statusOfUserID.style.color = 'red'
//     }

//     if(checkPassword() == true){
//         statusOfPassword.textContent = 'Password hợp lệ'
//         statusOfPassword.style.color = 'blue'
//     }else{
//         statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
//         statusOfPassword.style.color = 'red'
//     }
// })

// Cách 03: Sử dụng thư viện jQuery
// Cú pháp jQuery: $(SELECTOR).ACTION()
$(document).ready(function(){

    function checkUserId(){
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let userID = $('#txtUserID').val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if(userIDRegex.test(userID)){
            return true
        }
        return false
    }

    function checkPassword(){
        let password = $('#txtPassword').val()
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if(passwordRegex.test(password)){
            return true
        }
        return false
    }

    function checkName(){
        let name = $('#txtName').val()
        let nameRegex = /^[a-zA-Z]+$/;
        if(nameRegex.test(name)){
            return true
        }
        return false
    }

    function checkCountry(){
        let country = $('#countries').val()
        if(country!='select'){
            return true
        }
        return false
    }

    function checkZipCode(){
        let zipCode = $('#zipCode').val()
        let zipCodeRegex = /^[0-9]+$/;
        if(zipCodeRegex.test(zipCode)){
            return true
        }
        return false
    }

    function checkEmail(){
        let email = $('#txtEmail').val()
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(emailRegex.test(email)){
            return true
        }
        return false
    }

    function checkSex(){
        let checkMale = $("#male").prop("checked")
        let checkFemale = $("#female").prop("checked")
        if(checkFemale || checkMale){
            return true
        }
        return false
    }

    function checkLanguage(){
        let checkLanguage1 = $("#english").prop("checked")
        let checkLanguage2 = $("#nonEnglish").prop("checked")
        if(checkLanguage1 || checkLanguage2){
            return true
        }
        return false
    }

    $("#btnSubmit").click(function(e){
        e.preventDefault();
        $("#statusOfAddress").text('Hợp lệ')
        $("#statusOfAddress").css('color','blue')
        $("#statusOfAbout").text('Hợp lệ')
        $("#statusOfAbout").css('color','blue')
        if(checkUserId()){
            $("#statusOfUserID").text('ID hợp lệ')
            $("#statusOfUserID").css('color','blue')
        }else{
            $("#statusOfUserID").text('ID người dùng không hợp lệ. Yêu cầu độ dài từ 5 - 12')
            $("#statusOfUserID").css('color','red')
        }

        if(checkPassword()){
            $("#statusOfPassword").text('Mật khẩu hợp lệ')
            $("#statusOfPassword").css('color','blue')
        }else{
            $("#statusOfPassword").text('Mật khẩu không hợp lệ. Yêu cầu độ dài từ 7 - 12')
            $("#statusOfPassword").css('color','red')
        }

        if(checkName()){
            $("#statusOfName").text('Tên hợp lệ')
            $("#statusOfName").css('color','blue')
        }else{
            $("#statusOfName").text('Tên không hợp lệ. Chỉ được phép dùng chữ cái và không được bỏ trống')
            $("#statusOfName").css('color','red')
        }

        if(checkCountry()){
            $("#statusOfCountry").text('Hợp lệ')
            $("#statusOfCountry").css('color','blue')
        }else{
            $("#statusOfCountry").text('Vui lòng chọn một đất nước')
            $("#statusOfCountry").css('color','red')
        }

        if(checkZipCode()){
            $("#statusOfZipCode").text('Mã ZIP hợp lệ')
            $("#statusOfZipCode").css('color','blue')
        }else{
            $("#statusOfZipCode").text('Mã ZIP không hợp lệ. Chỉ được phép dùng số và không được bỏ trống')
            $("#statusOfZipCode").css('color','red')
        }

        if(checkEmail()){
            $("#statusOfEmail").text('Email hợp lệ')
            $("#statusOfEmail").css('color','blue')
        }else{
            $("#statusOfEmail").text('Email không hợp lệ')
            $("#statusOfEmail").css('color','red')
        }

        if(checkSex()){
            $("#statusOfSex").text('Hợp lệ')
            $("#statusOfSex").css('color','blue')
        }else{
            $("#statusOfSex").text('Vui lòng chọn giới tính')
            $("#statusOfSex").css('color','red')
        }

        if(checkLanguage()){
            $("#statusOfLanguage").text('Hợp lệ')
            $("#statusOfLanguage").css('color','blue')
        }else{
            $("#statusOfLanguage").text('Vui lòng chọn ngôn ngữ')
            $("#statusOfLanguage").css('color','red')
        }

        $(".row").css('justifyContent','left')

    })
})
