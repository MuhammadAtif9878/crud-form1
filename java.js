
let arr = []

function addIem() {



    document.addEventListener('submit', handleSubmit)


    function handleSubmit(e) {
        e.preventDefault();

        const Name = document.getElementById('Name')
        const password = document.getElementById('password')

        const UserData = {
            Name: Name.value,
            password: password.value
        }

        arr.push(UserData)
   
        viewItems(arr)
    }


    function viewItems(arr) {
        let data = ''

        arr.forEach((item, index) => {
            console.log("🚀 ~ file: java.js:32 ~ arr.forEach ~ item:", item)
            data =data +
                `
      <tr id='row_${index}'>
         <td>${item.Name}</td>
        <td>${item.password}</td>
        <td><button class="btn-primary">Update</button>|<button class="btn-secondary">Delete</button></td>  
      </tr>
      
      `
        });
        let table = document.getElementById('table')
        table.innerHTML = data
    }

}