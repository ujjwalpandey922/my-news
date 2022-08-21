

let API_KEY='e428204e2f1340e3ade5e7c139ab1259';
let newscoll = document.getElementById('newscoll');
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`, true);


xhr.onload = function () {
    if(this.status===200){
    let Json =JSON.parse(this.responseText);
    let sources=Json.articles;    
    console.log(sources);
    let newshtml="";
    sources.forEach((element,index) => {
        let news =      `
                                <p>
                                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                      <b> NEWS ${index +1} </b>:${element['title']}
                                    </button>
                                </p>
                                <div style="min-height: 120px;">
                                    <div class="collapse collapse-horizontal" id="collapse${index}">
                                        <div class="card card-body" style="width: 300px;">
                                            ${element['description']}.
                                            <a href="${element['url']}" target="_blank">Read more HERE!!!.</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>`;
            newshtml += news;
    }
);
    newscoll.innerHTML=newshtml;
    }
    else{
        console.log('Some Error!!!!!!!')
    }
}
xhr.send();

