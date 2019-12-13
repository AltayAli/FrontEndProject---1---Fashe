$('tbody').html('');
for (let f in product) {
    if (localStorage[`card-${f}`] != undefined && localStorage[`card-${f}`] != null) {
        let element = JSON.parse(localStorage.getItem(`card-${f}`));

        $('tbody').append(`<tr class="card-${f}">
                    <td >
                        <div class="p-4 d-flex justify-content-center  align-items-center">
                            <div class="item m-auto product" style="width: 70%;position: relative;">
                                <img src="${element["img"]}" alt="">
                                <div class="content-img">

                                    <div class="cover"> <i class="mdi mdi-close"> </i></div>
                                    </div>
                            </div>
                        </div>
                    </td>
                    <td>Men Tshirt</td>
                    <td class="priduct-price">$${element['new price']}</td>
                    <td>
                        <div class="row product-count">
                            <div><button id='minus${f}'>-</button></div>
                            <div><input id="input${f}" type="text" value="1" class="text-center"></div>
                            <div><button id='pilus${f}''>+</button></div>
                        </div>
                    </td>
                    <td id="result${f}" class="result">${element['new price']}$</td>
                </tr>`);
        // 
        // 



    }
}