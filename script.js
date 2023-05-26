let ruClientsList = [];

let defaultRuClientsList = [
  {
    id: 1,
    MyID: 1,
    fname:"Павлов Михаил Михайлович" ,
    DateB: "1986-12-15",
    Broker: "БКС",
    deposit: 59000,
    mail:"pavlove9@yandex.ru"  , 

   },
   {
    id: 2,
    MyID: 2,
    fname:"Лавочкин Семен Петрович" ,
    DateB: "2000-11-23",
    Broker: "Финам",
    deposit: 320000,
    mail:"Lavo4kin@gmail.com"  , 
   },
   {
    id: 3,
    MyID: 3,
    fname:"Панкратов Николай Максимович" ,
    DateB: "2002-08-18",
    Broker: "Тинькофф",
    deposit: 72123,
    mail:"NicolPank123@yandex.ru"  ,
   },
   {
    id: 4,
    MyID: 4,
    fname:"Виноградов Константин Александрович" ,
    DateB: "2001-06-29",
    Broker: "Финам",
    deposit:91801 ,
    mail:"Grapeman88@gmail.com"  ,
   },
   {
    id: 5,
    MyID: 5,
    fname:"Грушев Олег Павлович" ,
    DateB: "1989-05-15",
    Broker: "БКС",
    deposit: 700500,
    mail:"SharkOfWS@gmail.com"  ,
   },
   {
    id: 6,
    MyID: 6,
    fname:"Цветкова Ольга Васильевна" ,
    DateB: "1981-01-08",
    Broker: "Тинькофф",
    deposit: 520194,
    mail:"Tsventkova_Ol@yandex.ru"  ,
   },
   {
    id: 7,
    MyID: 7,
    fname:"Николаева Екатерина Сергеевна" ,
    DateB: "1997-02-12",
    Broker: "Альфа банк",
    deposit: 45670,
    mail:"KateNicol97@mail.ru"  ,
   },
   {
    id: 8,
    MyID: 8,
    fname:"Сергеев Иван Иванович" ,
    DateB: "1999-03-29",
    Broker: "Финам",
    deposit:182453 ,
    mail:"SergeevIvIv99@yandex.ru"  ,
   },
   {
    id: 9,
    MyID: 9,
    fname:"Беседина Элина Семёновна" ,
    DateB: "1995-03-12",
    Broker: "БКС",
    deposit: 421390,
    mail:"BesedinaElInvest@gmail.com"  ,
   },];

   let selectedRowId;

   function saveUsersListToLocalStorage(array) {
     const arrayString = JSON.stringify(array);
     window.localStorage.setItem("ruClients", arrayString);
   }

   function getUsersListFromLocalStorage() {
    const value = window.localStorage.getItem("ruClients");
    let result = JSON.parse(value);
    if (result === null) {
        result = defaultRuClientsList;
      }
      return result;
    }

    

    function addRows() {
        ruClientsList.forEach((item) => {
          addRow(item);
        });
      }
      
      function addRow(ruClientData) {

        const MyID = document.createElement("td");
        MyID.innerText = ruClientData?.MyID;
      
        const fname = document.createElement("td");
        fname.innerText = ruClientData?.fname;
      
        const DateB = document.createElement("td");
        DateB.innerText = ruClientData?.DateB;
      
        const Broker = document.createElement("td");
        Broker.innerText = ruClientData?.Broker;
      
        const deposit = document.createElement("td");
        deposit.innerText = ruClientData?.deposit;
        deposit.classList.add("client-deposit");

        const mail = document.createElement("td");
        mail.innerText = ruClientData?.mail;
      
        const actionEl = document.createElement("td");
        const editEl = document.createElement("div");
        editEl.innerText = "Редактировать";
        editEl.classList.add("table-btn", "edit-btn");
        editEl.onclick = function () {
          updateForm(ruClientData);
        };
      
        const removeEl = document.createElement("div");
        removeEl.innerText = "Удалить";
        removeEl.classList.add("table-btn", "remove-btn");
        removeEl.onclick = function () {
          removeRowFromTable(ruClientData);
        };
        actionEl.append(editEl, removeEl);
      
        const row = document.createElement("tr");
        row.setAttribute("id", ruClientData?.id + "-row");
        row.classList.add("data-row");
        row.append(MyID, fname, DateB, Broker, deposit, mail);
        $(".table").append(row);
        
      }
      
      function removeRowFromTable(ruClientData) {
        result = confirm("Вы действительно хотите удалить запись?");
        if (result) {
          ruClientsList = ruClientsList.filter((item) => item.id !== ruClientData.id);
          saveUsersListToLocalStorage(ruClientsList);
          removeRow(ruClientData);
        }
      }
      
      function removeRow(ruClientData) {
        $("#" + ruClientData?.id + "-row").remove();
      }
      
      function addUser(data) {
        data.id = getRandomIntInclusive(0, 1000);
        ruClientsList.push(data);
        saveUsersListToLocalStorage(ruClientsList);
        addRow(data);
      }
      
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      function clearForm() {
        $("#MyID").val(function () {
          return "";
        });
        $("#fname").val(function () {
          return "";
        });
        $("#DateB").val(function () {
          return "";
        });
        $("#Broker").val(function () {
          return "";
        });
        $("#deposit").val(function () {
          return "";
        });
        $("#mail").val(function () {
            return "";
          });
      }





      function updateForm(ruClientData) {
        returnAddBtn();
        selectedRowId = ruClientData?.id;
        // с помощью метода children мы получаем дочерние элемента (ячейки таблицы) строки с id '{n}-row'
        const cells = $("#" + selectedRowId + "-row").children();
        $("#MyID").val(function () {
          return cells[1].innerText;
        });
        $("#fname").val(function () {
          return cells[2].innerText;
        });
        $("#DateB").val(function () {
          return cells[3].innerText;
        });
        $("#Broker").val(function () {
          return cells[4].innerText;
        });
        $("#deposit").val(function () {
          return cells[5].innerText;
        });
        $("#mail").val(function () {
            return cells[6].innerText;
          });
      
        // изменение текста кнопки "Добавить" на "Изменить"
        $(".submit-btn").val(function () {
          return "Изменить";
        });
      
        // добавление новой кнопки для отмены
        const cancelEl = document.createElement("input");
        cancelEl.classList.add("submit-btn", "submit-btn-red");
        cancelEl.setAttribute("type", "button");
        cancelEl.setAttribute("value", "Отменить");
        cancelEl.onclick = function () {
          returnAddBtn();
        };
        $(".submit-btn-wrapper").append(cancelEl);
      }
      
      // изменение записи в массиве
      function updateUser(data) {
        data.id = selectedRowId;
        ruClientsList = ruClientsList.map((item) => {
          if (item.id === data.id) {
            return data;
          }
          return item;
        });
        saveUsersListToLocalStorage(ruClientsList);
        updateRow(ruClientData);
        returnAddBtn();
      }
      
      // изменение данных в строке
      function updateRow(ruClientData) {
        const cells = $("#" + selectedRowId + "-row").children();
        cells[1].innerText = ruClientData.MyID;
        cells[2].innerText = ruClientData.fname;
        cells[3].innerText = ruClientData.DateB;
        cells[4].innerText = ruClientData.Broker;
        cells[5].innerText = ruClientData.deposit;
        cells[6].innerText = ruClientData.mail;
      }
      
      // удаление кнопки "Отмена" и изменение кнопки "Изменить" на кнопку "Добавить"
      function returnAddBtn() {
        clearForm();
        $(".submit-btn-red").remove();
        $(".submit-btn").val(function () {
          return "Добавить";
        });
        selectedRowId = null;
      }
      
      $(document).ready(function () {
        ruClientsList = getUsersListFromLocalStorage();
        addRows();
      
        $("#addUserForm").submit(function (event) {
          event.preventDefault();
          const formData = new FormData(event.target);
          const data = Object.fromEntries(formData);
          const value = $("#submitBtn").val();
          console.log('data', data);
          
            data.id = getRandomIntInclusive(0, 1000);
            addUser(data);
        
          //   if (value === "Изменить") {
          //   updateUser(data);
          // }
          // clearForm();
          // return false;
        });
      });