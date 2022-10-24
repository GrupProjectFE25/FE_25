const BASE_URL = "https://63547f47e64783fa8285a355.mockapi.io/Bidang-senirupa";

getBidang(BASE_URL)

function getBidang(url){
    fetch(url).then(result => result.json())
    .then(data =>  {
        // console.log(data);
        showBidang(data);
    })
}

function showBidang(data){
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
