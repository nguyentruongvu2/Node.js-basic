document
  .getElementById("createUserForm")
  .addEventListener("submit", function (e) {
    let lastName = document.getElementById("lastName").value.trim();
    let firstName = document.getElementById("firstName").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    // Kiểm tra rỗng
    if (lastName === "" || firstName === "" || email === "" || address === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      e.preventDefault(); // chặn submit
      return;
    }

    // Kiểm tra email đúng định dạng
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email không hợp lệ");
      e.preventDefault();
      return;
    }

    // Kiểm tra tên không chứa số
    let nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
    if (!nameRegex.test(lastName) || !nameRegex.test(firstName)) {
      alert("Tên không được chứa số hoặc ký tự đặc biệt");
      e.preventDefault();
      return;
    }
  });
