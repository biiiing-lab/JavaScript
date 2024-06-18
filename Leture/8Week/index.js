class UserStorage {
    setTimeout(() => {
      if (id === "uhs" && password === "1234") {
        onSuccess(id); 
      } else {
        onError(new Error("ID 또는 패스워드가 일치하지 않습니다."));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "uhs") {
        onSuccess({ name: "uhs", role: "admin" });
      } else {
        onError(new Error("권한이 없습니다"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("ID를 입력하세요");
const password = prompt("패스워드를 입력하세요");

userStorage.loginUser(
  id,
  password,
  (user) => {   
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Welcome ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

function getData(callbackFunc) {
    $.get('url 주소/products/1', function(response) {
      callbackFunc(response);// 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌});
  }
}
  
  getData(function(tableData) {
    console.log(tableData);// $.get()의 response 값이 tableData에 전달됨});

  }

  function logName() {
    // 아래의 user 변수는 위의 코드와 비교하기 위해 일부러 남겨놓았습니다.
    var user = fetchUser('domain.com/users/1', function(user) {
        if (user.id === 1) {
          console.log(user.name);
        }
      });
    }

    // async & await 적용 후
async function logName() {
    var user = await fetchUser('domain.com/users/1');
    if (user.id === 1) {
      console.log(user.name);
    }
  }

  function fetchItems() {
    return new Promise(function(resolve, reject) {
      var items = [1,2,3];
      resolve(items)
    });
  }
  
  async function logItems() {
    var resultItems = await fetchItems();
    console.log(resultItems);// [1,2,3]
  }