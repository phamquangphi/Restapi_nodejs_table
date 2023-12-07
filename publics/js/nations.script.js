function deleteNation(id_nation) {
  const Delete = confirm("Confirm Delete?");
  if (Delete) {
    //Thực hiện gọi api xóa
    fetch("/nations/" + id_nation, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        alert("delete success");
        window.location.href = "http://localhost:9032/nations";
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
