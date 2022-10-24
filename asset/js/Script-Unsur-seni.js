const BASE_URL = "https://63547f47e64783fa8285a355.mockapi.io/Unsur-senirupa";

getUnsur(BASE_URL)

function getUnsur(url){
    fetch(url).then(result => result.json())
    .then(data =>  {
        // console.log(data);
        showUnsur(data);
    })
}

function showUnsur(data){
    let main = '';
    data.forEach(unsurSeniRupa => {
        console.log(unsurSeniRupa);
        let {title,img}  = unsurSeniRupa
        main +=`
        <div class="col mb-4">
                <div class="card h-100">
                    <img src="${img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <a href="#"><button type="button" class="btn btn-primary" style="font-size:12px ;">Selengkapnya...</button></a>
                    </div>
                </div>
            </div>
        `
        document.getElementById('list-materi').innerHTML = main
    });
}

let search = document.getElementById('search')

function getSearch(request){
    let url = `${BASE_URL}?title=${request}`
    fetch(url).then(result => result.json())
    .then(data =>  {
        // console.log(data);
        showUnsur(data);   
    })
}

search.addEventListener('change', (e) => {
    if (e.target.value == "") {
        getGitar(BASE_URL);
    } else {
        getSearch(e.target.value)
    }
    // e.target.value == "" ? getMovie(url) : getSearch(e.target.value) 
})
